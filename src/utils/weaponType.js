// Weapon `type` is an array: one or more weapon classes (Rifle, Sword, ...)
// followed by the damage type (Beam | Kinetic). Legacy string values like
// "Rifle / Sword" are still accepted.

export const DAMAGE_TYPES = ["Beam", "Kinetic"];

export const getWeaponTypes = (type) => {
  if (Array.isArray(type)) return type.filter(Boolean);
  if (typeof type === "string" && type.trim()) {
    return type
      .split("/")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
};

// Weapon classes only (everything except Beam/Kinetic).
export const getWeaponClasses = (type) =>
  getWeaponTypes(type).filter((t) => !DAMAGE_TYPES.includes(t));

// "Beam" | "Kinetic" | null
export const getDamageType = (type) =>
  getWeaponTypes(type).find((t) => DAMAGE_TYPES.includes(t)) ?? null;

export const hasWeaponType = (type, wanted) =>
  getWeaponTypes(type).some((t) => t.toLowerCase() === wanted.toLowerCase());

export const formatWeaponType = (type, sep = " / ") =>
  getWeaponTypes(type).join(sep) || "—";
