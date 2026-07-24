import { parseMCU } from "../utilities/parseMCU";
import { lookupSupportMCU } from "../utilities/lookupMCU";
import { SUPPORT } from "../../../Data/SupportEquipmentArray";

const NON_HEAD_LOCATION_KEYS = [
  "torso",
  "rightArm",
  "leftArm",
  "rightLeg",
  "leftLeg",
];

// Centralizes every stat/limit that's *derived* from a pilot slot's raw
// state (traits, equipment, choices) rather than stored directly, so the
// panel component only has to read the results.
export const usePilotDerivedStats = ({
  traits,
  baseEquip,
  soldBase,
  addlEquip,
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
  const hasCyberNewtype = traits.some((t) => t === "Cyber-Newtype (TITANS)");
  const hasRambo = traits.some((t) => t === "Rambo");
  const hasRookie = traits.some((t) => t === "Rookie");
  const hasScavenger = traits.some((t) => t === "Scavenger");
  const hasPurgableArmor =
    baseEquip.some((row, i) => row.name === "Purgable Armor" && !soldBase[i]) ||
    addlEquip.some((row) => row.name === "Purgable Armor");
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
  const bsBonus =
    brawlerTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "br" ? 1 : 0) + (newtypeChoice2 === "br" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "bs" ? 1 : 0) +
    (hasRambo && ramboChoice === "bs" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "bs" ? 1 : 0) +
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
    addlEquip.filter((row) => row.name === "Enhanced Fusion Reactors").length;
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

  const totalMCU =
    parseMCU(mcu) +
    baseEquip.reduce((sum, row, i) => {
      if (!soldBase[i]) return sum + parseMCU(row.mcuCost);
      const isFree = String(row.mcuCost).trim().toUpperCase() === "FREE";
      if (!isFree) return sum - parseMCU(row.mcuCost);
      const supportMCU = lookupSupportMCU(row.name);
      const freeWeaponRefund = hasMerchantOfDeath ? 35 : 10;
      return supportMCU !== null ? sum - supportMCU : sum - freeWeaponRefund;
    }, 0) +
    addlEquip.reduce((sum, row, i) => {
      const cost = parseMCU(row.mcuCost);
      const isDiscounted =
        hasScavenger &&
        scavengerChoice === String(i) &&
        SUPPORT.some((s) => s.name === row.name);
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
      addlEquip.reduce((sum, row) => sum + parseMCU(row.tonnage), 0) -
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
    bsBonus,
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
