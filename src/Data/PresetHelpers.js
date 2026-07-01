export const blankEquip = () => ({
  name: "",
  mcuCost: "",
  fro: "",
  tonnage: "",
  notes: "",
});

export const blankLoc = (equipCount) => ({
  current: "",
  max: "",
  weapon: "",
  weaponStowed: false,
  equipment: Array(equipCount).fill(""),
  shieldCurrent: "",
  shieldMax: "",
});
