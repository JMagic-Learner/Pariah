import { blankEquip, blankLoc } from "../../../Data/PresetHelpers";
import { lookupWeaponInfo } from "./lookupWeaponInfo";
import { lookupSupportInfo } from "./lookupSupportInfo";

export const LOADOUT_FORMAT = "pariah-msu-loadout";
export const LOADOUT_VERSION = 1;

const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "custom-loadout";

// Strip the empty placeholder rows so the categorized lists only contain
// real gear, and annotate each row with where it came from + sold/used state.
const collectRows = (rows, sold, used, source) =>
  rows
    .map((row, i) => ({ row, i }))
    .filter(({ row }) => row?.name?.trim())
    .map(({ row, i }) => ({
      ...row,
      source,
      slot: i,
      sold: !!sold?.[i],
      used: !!used?.[i],
    }));

const categorize = (rows) => {
  const out = { rangedWeapons: [], meleeWeapons: [], supportEquipment: [], other: [] };
  for (const row of rows) {
    const weapon = lookupWeaponInfo(row.name);
    if (weapon) {
      const entry = {
        ...row,
        reference: weapon.name,
        type: weapon.types,
        damageType: weapon.damageType,
      };
      (weapon.kind === "Ranged" ? out.rangedWeapons : out.meleeWeapons).push(entry);
    } else if (lookupSupportInfo(row.name)) {
      out.supportEquipment.push(row);
    } else {
      out.other.push(row);
    }
  }
  return out;
};

// Builds the exportable loadout for one pilot slot. `data` mirrors the shape
// of an entry in EF_PRESETS / ZEON_PRESETS (so it can be pasted straight into
// a preset array), `pilot` + `summary` + `equipment` are human-readable extras.
export const buildLoadoutExport = (slot, derived) => {
  const name = slot.msuName?.trim() || slot.mobileSuit?.trim() || "Custom Loadout";
  const fro = Number(slot.fro || 0);

  const allRows = [
    ...collectRows(slot.baseEquip, slot.soldBase, slot.usedBase, "base"),
    ...collectRows(slot.addlEquip, slot.soldAddl, slot.usedAddl, "additional"),
  ];

  return {
    format: LOADOUT_FORMAT,
    version: LOADOUT_VERSION,
    exportedAt: new Date().toISOString(),

    id: slugify(name),
    name,
    faction: "",

    pilot: {
      pilotName: slot.pilotName ?? "",
      gunnery: slot.gunnery ?? "",
      brawl: slot.brawl ?? "",
      piloting: slot.piloting ?? "",
      gunneryTotal: Number(slot.gunnery || 0) + derived.gsBonus,
      brawlTotal: Number(slot.brawl || 0) + derived.brBonus,
      pilotingTotal: Number(slot.piloting || 0) + derived.psBonus,
      traits: (slot.traits ?? []).filter(Boolean),
      traitChoices: {
        mechanicChoice: slot.mechanicChoice ?? "",
        scavengerChoice: slot.scavengerChoice ?? "",
        newtypeChoice1: slot.newtypeChoice1 ?? "",
        newtypeChoice2: slot.newtypeChoice2 ?? "",
        cyberNewtypeChoice: slot.cyberNewtypeChoice ?? "",
        rookieChoice: slot.rookieChoice ?? "",
        childSoldierChoice1: slot.childSoldierChoice1 ?? "",
        childSoldierChoice2: slot.childSoldierChoice2 ?? "",
        ramboChoice: slot.ramboChoice ?? "",
        grypsVetChoice: slot.grypsVetChoice ?? "",
      },
    },

    summary: {
      msuName: slot.msuName ?? "",
      mobileSuit: slot.mobileSuit ?? "",
      baseMCU: slot.mcu ?? "",
      totalMCU: derived.totalMCU,
      mcuLimit: derived.mcuLimit,
      fro,
      froBonus: derived.froBonus,
      totalFRO: fro + derived.froBonus,
      tonnage: derived.totalTonnage,
      tonnageLimit: derived.effectiveTonnageLimit || 0,
      movement: slot.movement ?? "",
      armorValue: slot.armorValue ?? "",
      purgeArmor: !!slot.purgeArmor,
    },

    equipment: categorize(allRows),

    // Same shape as a preset's `data` block — this is what a loader restores.
    data: {
      msuName: slot.msuName ?? "",
      mobileSuit: slot.mobileSuit ?? "",
      mcu: slot.mcu ?? "",
      fro: slot.fro ?? "",
      tonnageLimit: slot.tonnageLimit ?? "",
      movement: slot.movement ?? "",
      armorValue: slot.armorValue ?? "",
      baseEquip: slot.baseEquip,
      addlEquip: slot.addlEquip,
      soldBase: slot.soldBase,
      soldAddl: slot.soldAddl,
      usedBase: slot.usedBase,
      usedAddl: slot.usedAddl,
      locations: slot.locations,
    },
  };
};

export const downloadLoadout = (slot, derived) => {
  const payload = buildLoadoutExport(slot, derived);
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const pilot = slot.pilotName?.trim() ? `-${slugify(slot.pilotName)}` : "";
  a.download = `${payload.id}${pilot}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

// ─── Import ────────────────────────────────────────────────────────────────

const LOCATION_KEYS = ["head", "torso", "rightArm", "leftArm", "rightLeg", "leftLeg"];
const EQUIP_SLOTS = 8;

const str = (v) => (v === undefined || v === null ? "" : String(v));

const padEquip = (rows) => {
  const list = Array.isArray(rows) ? rows.slice(0, EQUIP_SLOTS) : [];
  const out = list.map((r) => ({ ...blankEquip(), ...(r || {}) }));
  while (out.length < EQUIP_SLOTS) out.push(blankEquip());
  return out;
};

const padFlags = (flags) =>
  Array.from({ length: EQUIP_SLOTS }, (_, i) => !!(Array.isArray(flags) && flags[i]));

const normLocations = (locs) =>
  Object.fromEntries(
    LOCATION_KEYS.map((k) => {
      const loc = { ...blankLoc(3), ...(locs?.[k] || {}) };
      const equipment = Array.isArray(loc.equipment) ? loc.equipment.slice(0, 3) : [];
      while (equipment.length < 3) equipment.push("");
      return [k, { ...loc, equipment }];
    }),
  );

// Turns a parsed JSON file into a patch for usePilotSlot().setAll.
// Accepts: an exported loadout file, a preset entry ({ id, name, data }) copied
// from EF_PRESETS etc., or a bare `data` block. Throws with a readable message
// if the file doesn't look like any of those.
export const loadoutToSlotState = (json) => {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    throw new Error("File is not a loadout (expected a JSON object).");
  }
  if (json.format && json.format !== LOADOUT_FORMAT) {
    throw new Error(`Unknown file format "${json.format}".`);
  }
  if (json.version && json.version > LOADOUT_VERSION) {
    throw new Error(
      `This loadout was made with a newer version (v${json.version}) of the sheet.`,
    );
  }

  const data = json.data && typeof json.data === "object" ? json.data : json;
  const looksLikeLoadout =
    "baseEquip" in data || "mobileSuit" in data || "msuName" in data;
  if (!looksLikeLoadout) {
    throw new Error("File has no MSU data (msuName / mobileSuit / baseEquip).");
  }

  const patch = {
    msuName: str(data.msuName ?? json.name),
    mobileSuit: str(data.mobileSuit),
    mcu: str(data.mcu),
    fro: str(data.fro),
    tonnageLimit: str(data.tonnageLimit),
    movement: str(data.movement),
    armorValue: str(data.armorValue),
    baseEquip: padEquip(data.baseEquip),
    addlEquip: padEquip(data.addlEquip),
    soldBase: padFlags(data.soldBase),
    soldAddl: padFlags(data.soldAddl),
    usedBase: padFlags(data.usedBase),
    usedAddl: padFlags(data.usedAddl),
    purgeArmor: !!(data.purgeArmor ?? json.summary?.purgeArmor),
    locations: normLocations(data.locations),
  };

  // Pilot block only exists on exported loadouts — presets leave the
  // current pilot untouched.
  const pilot = json.pilot;
  if (pilot && typeof pilot === "object") {
    const traits = Array.isArray(pilot.traits) ? pilot.traits.slice(0, 5) : [];
    while (traits.length < 5) traits.push("");
    Object.assign(patch, {
      pilotName: str(pilot.pilotName),
      gunnery: str(pilot.gunnery),
      brawl: str(pilot.brawl),
      piloting: str(pilot.piloting),
      traits,
    });
    const choices = pilot.traitChoices || {};
    for (const key of [
      "mechanicChoice",
      "scavengerChoice",
      "newtypeChoice1",
      "newtypeChoice2",
      "cyberNewtypeChoice",
      "rookieChoice",
      "childSoldierChoice1",
      "childSoldierChoice2",
      "ramboChoice",
      "grypsVetChoice",
    ]) {
      patch[key] = str(choices[key]);
    }
  }

  return patch;
};

export const readLoadoutFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the file."));
    reader.onload = () => {
      try {
        resolve(loadoutToSlotState(JSON.parse(reader.result)));
      } catch (e) {
        reject(
          e instanceof SyntaxError ? new Error("File is not valid JSON.") : e,
        );
      }
    };
    reader.readAsText(file);
  });
