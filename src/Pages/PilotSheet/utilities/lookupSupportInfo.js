import { SUPPORT_POOL } from "../../../Data/SupportPool";

const norm = (s) => s.toLowerCase().trim();

// Looks up a support-equipment-shaped item (Support, Upgrades, Frame
// Improvements) by exact (case-insensitive) name match.
export const lookupSupportInfo = (name) => {
  if (!name) return null;
  const normName = norm(name);
  return SUPPORT_POOL.find((item) => norm(item.name) === normName) || null;
};
