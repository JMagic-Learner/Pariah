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
  if (nameWords.size === 0) return null;
  // Coverage is measured against whichever side has fewer words. Either the
  // catalog name carries extra qualifiers ("CAMO Cloak (ECOA only)") or the
  // sold item's own name does ("External Propellent (Heavy Booster)") — in
  // both cases the shorter name is essentially a full match and shouldn't be
  // diluted by the longer one's extra words. Among matches, prefer the most
  // specific catalog entry (fewest words) so a short name doesn't grab an
  // unrelated item.
  let best = null;
  for (const item of SUPPORT) {
    const itemWords = words(item.name);
    if (itemWords.length === 0) continue;
    const matches = itemWords.filter((w) => nameWords.has(w)).length;
    if (matches === 0) continue;
    // A one-word catalog entry ("Flares", "I-Field") is weak evidence on its
    // own — only accept it if the sold item's name is essentially just that
    // word plus at most one descriptor, not a bundle of other components
    // ("Shield + Missile Pod 2" merely containing the word "Shield").
    if (itemWords.length === 1 && nameWords.size > itemWords.length + 1) continue;
    const coverage = matches / Math.min(nameWords.size, itemWords.length);
    if (coverage >= 0.67 && (!best || itemWords.length < best.itemWords.length)) {
      best = { mcu: item.mcu, itemWords };
    }
  }
  return best ? best.mcu : null;
};
