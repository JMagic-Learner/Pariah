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
  equipment: Array(equipCount).fill(""),
});
