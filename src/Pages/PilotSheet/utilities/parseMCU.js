export const parseMCU = (s) => {
  if (!s) return 0;
  const clean = String(s).trim().toUpperCase();
  if (clean === "FREE") return 0;
  const n = parseFloat(clean);
  return isNaN(n) ? 0 : n;
};
