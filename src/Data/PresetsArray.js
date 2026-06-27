import { blankEquip, blankLoc } from "./PresetHelpers";
import { EF_PRESETS } from "./EFPresetsArray";
import { ZEON_PRESETS } from "./ZeonPresetsArray";
export { blankEquip, blankLoc, EF_PRESETS, ZEON_PRESETS };
export const PRESETS = [...EF_PRESETS, ...ZEON_PRESETS];