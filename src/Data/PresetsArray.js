import { blankEquip, blankLoc } from "./PresetHelpers";
import { EF_PRESETS } from "./EFPresetsArray";
import { ZEON_PRESETS } from "./ZeonPresetsArray";
import { CROSSBONE_PRESETS } from "./CrossBonePresetsArray";
import { MAFTY_PRESETS } from "./MaftyPresetsArray";
import { REZEON_PRESETS } from "./ReZeonPresetsArray";
import { AltTimelinesPresets as ALT_TIMELINE_BUILT_PRESETS } from "./AltTimelinesPresets";
import { FORCE_LIST_FACTIONS } from "./ForceListData";

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const blankLocations = () => ({
  head: blankLoc(3),
  torso: blankLoc(3),
  rightArm: blankLoc(3),
  leftArm: blankLoc(3),
  rightLeg: blankLoc(3),
  leftLeg: blankLoc(3),
});

// The Alt Timeline roster (msu/mcu/tonnage/fro/movement/armor/faction) is
// sourced from the "alt_timelines" force list — that's the single source of
// truth for which units exist. Fully built loadouts (baseEquip/locations) are
// layered on top from AltTimelinesPresets.js when available; units without a
// hand-built preset yet still show up with a blank loadout at the correct
// base stats, so newly added roster entries never silently disappear here.
const altTimelineUnits =
  FORCE_LIST_FACTIONS.find((f) => f.key === "alt_timelines")?.units || [];

export const ALT_TIMELINE_PRESETS = altTimelineUnits.map((unit) => {
  const built = ALT_TIMELINE_BUILT_PRESETS.find((p) => p.name === unit.msu);
  return {
    id: built?.id || slugify(unit.msu),
    name: unit.msu,
    faction: unit.faction,
    data:
      built?.data ||
      {
        msuName: unit.msu,
        mobileSuit: unit.msu,
        mcu: String(unit.mcu),
        fro: String(unit.fro),
        tonnageLimit: String(unit.tonnage),
        movement: unit.move,
        armorValue: String(unit.armor),
        baseEquip: Array(8).fill(null).map(blankEquip),
        addlEquip: Array(8).fill(null).map(blankEquip),
        locations: (() => {
          const locs = blankLocations();
          Object.keys(locs).forEach((key) => {
            locs[key].current = String(unit.armor);
            locs[key].max = String(unit.armor);
          });
          return locs;
        })(),
      },
  };
});

export {
  blankEquip,
  blankLoc,
  EF_PRESETS,
  ZEON_PRESETS,
  CROSSBONE_PRESETS,
  MAFTY_PRESETS,
  REZEON_PRESETS,
};
export const PRESETS = [
  ...EF_PRESETS,
  ...ZEON_PRESETS,
  ...CROSSBONE_PRESETS,
  ...MAFTY_PRESETS,
  ...REZEON_PRESETS,
  ...ALT_TIMELINE_PRESETS,
];
