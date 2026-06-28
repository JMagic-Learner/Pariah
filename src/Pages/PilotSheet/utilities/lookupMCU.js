import { SUPPORT } from "../../../Data/SupportEquipmentArray";

export const lookupSupportMCU = (name) => {
  const norm = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  const stem = (w) => (w.endsWith("s") && w.length > 3 ? w.slice(0, -1) : w);
  const words = (s) =>
    norm(s)
      .split(" ")
      .filter((w) => w.length >= 3)
      .map(stem);
  const nameWords = new Set(words(name));
  for (const item of SUPPORT) {
    const itemWords = words(item.name);
    if (itemWords.length === 0) continue;
    const matches = itemWords.filter((w) => nameWords.has(w)).length;
    if (matches / itemWords.length >= 0.67) return item.mcu;
  }
  return null;
};
