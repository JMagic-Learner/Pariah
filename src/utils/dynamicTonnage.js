// Support equipment whose tonnage cost is computed from the suit's own
// stats rather than being a fixed number. `basis` names the suit stat field
// (as stored on a preset's `data` object / tracked in PilotSheet state) the
// formula divides.
const DYNAMIC_TONNAGE_RULES = [
  { pattern: /heavy booster/i, basis: "tonnageLimit", divisor: 4 },
  { pattern: /side verniers?/i, basis: "tonnageLimit", divisor: 4 },
  { pattern: /front facing thrusters?/i, basis: "tonnageLimit", divisor: 4 },
  { pattern: /enhanced fusion reactors?/i, basis: "fro", divisor: 2 },
];

export const getDynamicTonnageRule = (name) =>
  DYNAMIC_TONNAGE_RULES.find((r) => r.pattern.test(name || "")) || null;

export const isDynamicTonnageItem = (name) => !!getDynamicTonnageRule(name);

// Returns the computed tonnage for a dynamic item given the suit's stats,
// or null when the item isn't dynamic or the relevant stat wasn't supplied
// (e.g. reference tables rendered without suit context).
export const computeDynamicTonnage = (name, stats) => {
  const rule = getDynamicTonnageRule(name);
  if (!rule) return null;
  const raw = stats?.[rule.basis];
  if (raw == null) return null;
  return Math.round(Number(raw) / rule.divisor);
};
