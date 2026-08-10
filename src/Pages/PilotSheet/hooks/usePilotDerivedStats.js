import { parseMCU } from "../utilities/parseMCU";
import { lookupSupportMCU } from "../utilities/lookupMCU";
import { SUPPORT_POOL } from "../../../Data/SupportPool";
import { RANGED } from "../../../Data/RangedWeaponsArray";
import { MELEE } from "../../../Data/MeleeWeaponsArray";

const NON_HEAD_LOCATION_KEYS = [
  "torso",
  "rightArm",
  "leftArm",
  "rightLeg",
  "leftLeg",
];

// A shield with a weapon fused onto it ("Shield + Missile Pod 2", "Shield
// Binders (Shield + B.Cannon)", "Composite Shields (Beam SMG)", "Shield
// Boosters (Beam Cannon) x2") — anything shield-named that also carries a
// weapon component. A shield fused with a non-weapon system instead (e.g.
// "Shield Booster (Heavy Boosters)", just a shield + thruster unit) doesn't
// match this and falls through to the normal support-equipment lookup.
const WEAPON_HINT_RE =
  /\+|binder|gatling|cannon|rifle|\bsmg\b|bits|gauntlet|missile pod|composite|cqc weapon/i;
const isShieldWeaponCombo = (name) =>
  /\bshields?\b/i.test(name) && WEAPON_HINT_RE.test(name);

// Matches any plain defensive shield ("Shield", "Heavy Shield", "Beam
// Shield", "Shield (Shoulder)", "Shields {Extra Arm Left) [20]", ...) but
// not a shield combo (see above) or a mislabeled booster/binder — those
// keep going through their own refund logic below.
const NON_SHIELD_RE =
  /\+|booster|binder|gatling|cannon|rifle|\bsmg\b|bits|gauntlet|missile pod|composite/i;
const isPureShield = (name) =>
  /\bshields?\b/i.test(name) && !NON_SHIELD_RE.test(name);

// Centralizes every stat/limit that's *derived* from a pilot slot's raw
// state (traits, equipment, choices) rather than stored directly, so the
// panel component only has to read the results.
export const usePilotDerivedStats = ({
  traits,
  baseEquip,
  soldBase,
  addlEquip,
  soldAddl,
  scavengerChoice,
  mcu,
  tonnageLimit,
  locations,
  purgeArmor,
  mechanicChoice,
  newtypeChoice1,
  newtypeChoice2,
  cyberNewtypeChoice,
  ramboChoice,
  grypsVetChoice,
}) => {
  const hasMechanic = traits.some((t) => t === "Mechanic");
  const hasNewtype = traits.some((t) => t === "Newtype");
  const hasCyberNewtype = traits.some(
    (t) => t === "Cyber-Newtype" || t === "Cyber-Newtype (TITANS)",
  );
  const hasRambo = traits.some((t) => t === "Rambo");
  const hasRookie = traits.some((t) => t === "Rookie" || t === "Child Soldier");
  const hasScavenger = traits.some((t) => t === "Scavenger");
  const hasPurgableArmor =
    baseEquip.some((row, i) => row.name === "Purgable Armor" && !soldBase[i]) ||
    addlEquip.some((row, i) => row.name === "Purgable Armor" && !soldAddl[i]);
  const hasGrypsVet = traits.some((t) => t === "Gryps War Veteran (REZEON)");
  const hasHonorable = traits.some((t) => t === "Honorable");
  const gunneryTraitCount = traits.filter((t) => t === "Gunnery").length;
  const brawlerTraitCount = traits.filter((t) => t === "Brawler").length;
  const pilotingTraitCount = traits.filter((t) => t === "Piloting").length;

  const gsBonus =
    gunneryTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "gs" ? 1 : 0) + (newtypeChoice2 === "gs" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "gs" ? 1 : 0) +
    (hasRambo && ramboChoice === "gs" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "gs" ? 1 : 0) +
    (hasHonorable ? 1 : 0);
  const brBonus =
    brawlerTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "br" ? 1 : 0) + (newtypeChoice2 === "br" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "br" ? 1 : 0) +
    (hasRambo && ramboChoice === "br" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "br" ? 1 : 0) +
    (hasHonorable ? 1 : 0);
  const psBonus =
    pilotingTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "ps" ? 1 : 0) + (newtypeChoice2 === "ps" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "ps" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "ps" ? 1 : 0);

  const efrCount =
    baseEquip.filter(
      (row, i) => row.name === "Enhanced Fusion Reactors" && !soldBase[i],
    ).length +
    addlEquip.filter(
      (row, i) => row.name === "Enhanced Fusion Reactors" && !soldAddl[i],
    ).length;
  const froBonus =
    (hasMechanic && mechanicChoice === "fro" ? 2 : 0) + efrCount * 2;
  const effectiveTonnageLimit =
    Number(tonnageLimit) +
    (hasMechanic && mechanicChoice === "tonnage" ? 6 : 0);

  const mcuLimit =
    250 +
    (traits.some((t) => t === "One Year War Veteran") ? 75 : 0) +
    (traits.some((t) => t === "CORRUPT GOVERNMENT (EF GENERAL)") ? 50 : 0);

  const hasMerchantOfDeath = traits.some((t) => t === "Merchant of Death");

  // Selling a stock (FREE) item refunds MCU: plain shields are a flat 5,
  // shield/weapon combos are a flat 15, support equipment refunds its full
  // catalog cost, weapons only refund a flat amount. A non-FREE item
  // (already paid for) refunds its own listed cost.
  const sellRefund = (row) => {
    const isFree = String(row.mcuCost).trim().toUpperCase() === "FREE";
    if (!isFree) return parseMCU(row.mcuCost);
    if (isPureShield(row.name)) return 5;
    if (isShieldWeaponCombo(row.name)) return 15;
    const supportMCU = lookupSupportMCU(row.name);
    const freeWeaponRefund = hasMerchantOfDeath ? 35 : 10;
    return supportMCU !== null ? supportMCU : freeWeaponRefund;
  };

  const totalMCU =
    parseMCU(mcu) +
    baseEquip.reduce((sum, row, i) => {
      if (!soldBase[i]) return sum + parseMCU(row.mcuCost);
      return sum - sellRefund(row);
    }, 0) +
    addlEquip.reduce((sum, row, i) => {
      if (soldAddl[i]) return sum - sellRefund(row);
      const cost = parseMCU(row.mcuCost);
      const isDiscounted =
        hasScavenger &&
        scavengerChoice === String(i) &&
        (SUPPORT_POOL.some((s) => s.name === row.name) ||
          RANGED.some((w) => w.name === row.name) ||
          MELEE.some((w) => w.name === row.name));
      return sum + (isDiscounted ? Math.floor(cost / 2) : cost);
    }, 0);

  const purgeArmorTonnageSavings =
    hasPurgableArmor && purgeArmor
      ? NON_HEAD_LOCATION_KEYS.filter((k) => !locations[k]?.destroyed).length *
        2
      : 0;
  const purgedArmorFor = (key) => {
    if (!hasPurgableArmor || !purgeArmor) return null;
    if (key === "head") return null;
    const loc = locations[key];
    if (!loc || loc.destroyed) return null;
    return {
      current: Math.max(1, Number(loc.current || 0) - 10),
      max: Math.max(1, Number(loc.max || 0) - 10),
    };
  };

  const totalTonnage = Math.max(
    0,
    baseEquip.reduce(
      (sum, row, i) => sum + (soldBase[i] ? 0 : parseMCU(row.tonnage)),
      0,
    ) +
      addlEquip.reduce(
        (sum, row, i) => sum + (soldAddl[i] ? 0 : parseMCU(row.tonnage)),
        0,
      ) -
      purgeArmorTonnageSavings,
  );

  return {
    hasMechanic,
    hasNewtype,
    hasCyberNewtype,
    hasRambo,
    hasRookie,
    hasScavenger,
    hasPurgableArmor,
    hasGrypsVet,
    hasHonorable,
    gunneryTraitCount,
    brawlerTraitCount,
    pilotingTraitCount,
    gsBonus,
    brBonus,
    psBonus,
    froBonus,
    effectiveTonnageLimit,
    mcuLimit,
    totalMCU,
    purgeArmorTonnageSavings,
    purgedArmorFor,
    totalTonnage,
  };
};
