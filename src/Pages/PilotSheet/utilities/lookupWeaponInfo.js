import { RANGED } from "../../../Data/RangedWeaponsArray";
import { MELEE } from "../../../Data/MeleeWeaponsArray";

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

const findMatch = (name, list) => {
  const normName = norm(name);
  const exact = list.find((item) => norm(item.name) === normName);
  if (exact) return exact;

  const nameWords = new Set(words(name));
  if (nameWords.size === 0) return null;

  // Jaccard similarity (intersection / union) so a short generic name like
  // "Cannon" can't out-rank a fuller, more specific match like "Vulcan
  // Cannons" just because all of its words happen to be a subset.
  let best = null;
  let bestScore = 0;
  for (const item of list) {
    const itemWords = words(item.name);
    if (itemWords.length === 0) continue;
    const itemWordSet = new Set(itemWords);
    const intersection = itemWords.filter((w) => nameWords.has(w)).length;
    const union = new Set([...nameWords, ...itemWordSet]).size;
    const score = intersection / union;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore >= 0.5 ? best : null;
};

// Looks up a weapon by name across the Ranged and Melee reference arrays.
// Returns { kind: "Ranged" | "Melee", ...weapon } or null if no match.
export const lookupWeaponInfo = (name) => {
  if (!name) return null;
  const ranged = findMatch(name, RANGED);
  if (ranged) return { kind: "Ranged", ...ranged };
  const melee = findMatch(name, MELEE);
  if (melee) return { kind: "Melee", ...melee };
  return null;
};
