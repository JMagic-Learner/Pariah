export const MUNITIONS = [
  { name: "[MUNITIONS]: AP", dam: 8, effect: "AP(4)" },
  {
    name: "[MUNITIONS]: Flash",
    dam: "–",
    effect:
      "AOE[3], hit MSU's suffer -2 penalty to all GS,BR, PS,and EVA rolls",
  },
  { name: "[MUNITIONS]: Frag", dam: 6, effect: "AOE[6]" },
  {
    name: "[MUNITIONS]: Napalm",
    dam: 2,
    effect:
      "AOE[3], ignites terrain, critical damage to Infantry and Civilians, MSU hit by Incendiary expend 3 FRO immediately.",
  },
  {
    name: "[MUNITIONS]: Tagging Smoke",
    dam: "-",
    effect:
      "hit MSU's grant +1 GS mod to all incoming ranged attacks for 1 round",
  },
  {
    name: "[MUNITIONS]: Smoke",
    dam: "–",
    effect: "AOE[3], Template provides obscuring cover for 1 round",
  },
];
