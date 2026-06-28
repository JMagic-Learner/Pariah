import { blankEquip, blankLoc } from "./PresetHelpers";
import { EF_PRESETS } from "./EFPresetsArray";
import { ZEON_PRESETS } from "./ZeonPresetsArray";
import { CROSSBONE_PRESETS } from "./CrossBonePresetsArray";
import { MAFTY_PRESETS } from "./MaftyPresetsArray";
import { REZEON_PRESETS } from "./ReZeonPresetsArray";
export { blankEquip, blankLoc, EF_PRESETS, ZEON_PRESETS, CROSSBONE_PRESETS, MAFTY_PRESETS, REZEON_PRESETS };
export const PRESETS = [...EF_PRESETS, ...ZEON_PRESETS, ...CROSSBONE_PRESETS, ...MAFTY_PRESETS, ...REZEON_PRESETS];