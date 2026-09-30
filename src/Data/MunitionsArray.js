export const MUNITIONS = [
  { name: "[MUNITIONS]: AP", dam: 8, effect: "Damage 8, AP(4)" },
  {
    name: "[MUNITIONS]: Adhesive",
    dam: "-",
    effect:
      "Enemy MSU that are directly hit by [MUNITIONS]:ADHESIVE gain one stack of [ADHESIVE]. This effect stacks with multiple hits.",
  },
  {
    name: "[MUNITIONS]: Buckshot",
    dam: "4",
    effect: "Damage 4,[LETHAL],[CLEAVE]",
  },
  {
    name: "[MUNITIONS]: Flash",
    dam: "–",
    effect:
      "AOE[3], hit MSU's suffer -2 penalty to all GS,BR, PS,and EVA rolls until end of round. This effect does not stack with multiple hits from [MUNITIONS]:Flash.",
  },
  { name: "[MUNITIONS]: Frag", dam: 6, effect: "Damage 6,AOE[6]" },
  {
    name: "[MUNITIONS]: MICLIC",
    dam: 5,
    effect:
      "Damage 5,Missile type weapons only.[LINEAR],Autodetonates immediately after placing Missile Token. Auto destroys any deployed equipment hit.",
  },
  {
    name: "[MUNITIONS]: Napalm",
    dam: 2,
    effect:
      "Damage 2,AOE[3], ignites terrain, critical damage to Infantry and Civilians, MSU hit by Incendiary expend 2 FRO immediately. This effect stacks with multiple hits.",
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
