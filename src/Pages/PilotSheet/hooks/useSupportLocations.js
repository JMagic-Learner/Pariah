import { SUPPORT } from "../../../Data/SupportEquipmentArray";
import {
  parseLocInstructions,
  LOC_LABELS,
} from "../utilities/parseLocInstructions";

// Keeps a support-equipment item's presence in `locations` in sync with the
// Base/Additional Equipment tables — filling the first open matching slot(s)
// when an item is selected, and clearing them again when it's removed.
export const useSupportLocations = ({
  locations,
  setLocations,
  setSlotWarning,
}) => {
  const removeSupportLoc = (itemName) => {
    const supportItem = SUPPORT.find((s) => s.name === itemName);
    if (!supportItem) return;
    const instructions = parseLocInstructions(supportItem.loc);
    if (instructions.length === 0) return;

    const armorMatch = itemName.match(/Extra Armor.*\[(\d+)\]/i);
    const armorDelta = armorMatch ? parseInt(armorMatch[1]) : 0;

    const isShield = /shield/i.test(itemName);
    const ARM_KEYS = new Set(["rightArm", "leftArm"]);

    setLocations((prev) => {
      const next = { ...prev };
      for (const candidates of instructions) {
        for (const key of candidates) {
          const loc = next[key];
          const idx = loc.equipment.indexOf(itemName);
          if (idx !== -1) {
            const eq = [...loc.equipment];
            eq[idx] = "";
            const updated = { ...loc, equipment: eq };
            if (armorDelta > 0) {
              const curNum = parseInt(updated.current) || 0;
              const maxNum = parseInt(updated.max) || 0;
              updated.current = String(Math.max(0, curNum - armorDelta));
              updated.max = String(Math.max(0, maxNum - armorDelta));
            }
            if (isShield && ARM_KEYS.has(key)) {
              updated.shieldCurrent = "";
              updated.shieldMax = "";
            }
            next[key] = updated;
            break;
          }
        }
      }
      return next;
    });
  };

  const autoFillSupportLoc = (itemName) => {
    const supportItem = SUPPORT.find((s) => s.name === itemName);
    if (!supportItem) return;
    const instructions = parseLocInstructions(supportItem.loc);
    if (instructions.length === 0) return;

    const armorMatch = itemName.match(/Extra Armor.*\[(\d+)\]/i);
    const armorDelta = armorMatch ? parseInt(armorMatch[1]) : 0;

    const isShield = /shield/i.test(itemName);
    const shieldHpMatch =
      itemName.match(/\[(\d+)/) || itemName.match(/\((\d+)\s*armor\)/i);
    const shieldHp = isShield && shieldHpMatch ? parseInt(shieldHpMatch[1]) : 0;
    const ARM_KEYS = new Set(["rightArm", "leftArm"]);

    const overflow = [];
    const next = { ...locations };

    for (const candidates of instructions) {
      let filled = false;
      for (const key of candidates) {
        const loc = next[key];
        // A stowed weapon occupies the last equipment slot.
        const availableSlots = loc.weaponStowed
          ? loc.equipment.slice(0, loc.equipment.length - 1)
          : loc.equipment;
        const emptyIdx = availableSlots.findIndex((eq) => eq === "");
        if (emptyIdx !== -1) {
          const eq = [...loc.equipment];
          eq[emptyIdx] = itemName;
          const updated = { ...loc, equipment: eq };
          if (armorDelta > 0) {
            const curNum = parseInt(updated.current) || 0;
            const maxNum = parseInt(updated.max) || 0;
            updated.current = String(curNum + armorDelta);
            updated.max = String(maxNum + armorDelta);
          }
          if (shieldHp > 0 && ARM_KEYS.has(key)) {
            updated.shieldCurrent = String(shieldHp);
            updated.shieldMax = String(shieldHp);
          }
          next[key] = updated;
          filled = true;
          break;
        }
      }
      if (!filled) overflow.push(candidates[0]);
    }

    setLocations(next);
    if (overflow.length > 0) {
      setSlotWarning(
        `No available equipment slots in: ${overflow.map((k) => LOC_LABELS[k]).join(", ")}.`,
      );
    }
  };

  return { removeSupportLoc, autoFillSupportLoc };
};
