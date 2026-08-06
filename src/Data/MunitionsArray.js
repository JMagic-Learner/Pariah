export const MUNITIONS = [
  { name: "[MUNITIONS]: AP", dam: 8, effect: "AP(4)" },
  {
    name: "[MUNITIONS]: Adhesive",
    dam: "-",
    effect:
      "Enemy MSU that are directly hit by [MUNITIONS]:ADHESIVE reduce base movement by 1 inch until end of round. This effect stacks with multiple hits.",
  },
  {
    name: "[MUNITIONS]: Buckshot",
    dam: "3",
    effect:
      "[LETHAL],Enemy MSU that are directly hit by [MUNITIONS]:Buckshot suffer 1d6 hit location rolls.",
  },
  {
    name: "[MUNITIONS]: Flash",
    dam: "–",
    effect:
      "AOE[3], hit MSU's suffer -2 penalty to all GS,BR, PS,and EVA rolls until end of round. This effect does not stack with multiple hits from [MUNITIONS]:Flash.",
  },
  { name: "[MUNITIONS]: Frag", dam: 6, effect: "AOE[6]" },
  {
    name: "[MUNITIONS]: Napalm",
    dam: 2,
    effect:
      "AOE[3], ignites terrain, critical damage to Infantry and Civilians, MSU hit by Incendiary expend 1 FRO immediately. This effect stacks with multiple hits.",
  },
  {
    name: "[MUNITIONS]: Tagging Smoke",
    dam: "-",
    effect:
      "Directly hit MSU's grant +1 GS mod to all incoming ranged attacks until end of round. This effect does not stack with multiple hits from [MUNITIONS]:Tagging Smoke.",
  },
  {
    name: "[MUNITIONS]: Smoke",
    dam: "–",
    effect: "AOE[3], Template provides [OBSCURING COVER] until end of round.",
  },
];
