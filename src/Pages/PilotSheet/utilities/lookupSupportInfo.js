import { SUPPORT } from "../../../Data/SupportEquipmentArray";

const norm = (s) => s.toLowerCase().trim();

// Looks up a support equipment item by exact (case-insensitive) name match.
export const lookupSupportInfo = (name) => {
  if (!name) return null;
  const normName = norm(name);
  return SUPPORT.find((item) => norm(item.name) === normName) || null;
};
