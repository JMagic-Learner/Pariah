import { SUPPORT } from "./SupportEquipmentArray";
import { UPGRADES } from "./UpgradeArray";
import { FRAME_IMPROVEMENTS } from "./FrameImprovements";

// Combined pool of every support-equipment-shaped item (Support, Upgrades,
// Frame Improvements) for logic that treats them interchangeably — hit
// location placement, MCU refund lookup, and Scavenger discount eligibility.
export const SUPPORT_POOL = [...SUPPORT, ...UPGRADES, ...FRAME_IMPROVEMENTS];
