export const NEWTYPE_UPGRADES = [
  {
    name: "Sixth Sense",
    limit: "–",
    mcu: "–",
    effect: "This [PILOT] may reroll both evasion dice once per round.",
  },
  {
    name: "Adaptable",
    limit: 1,
    mcu: "–",
    effect:
      "Once per round after initiative has been rolled, this [PILOT] can add +1 GS or +1 BR.",
  },
  {
    name: "Beam Bits",
    limit: 5,
    mcu: 10,
    effect: "Deploy up to 5 Beam Bits (see Psycommu Bits section).",
  },
  {
    name: "Inhibitor Bits",
    limit: 5,
    mcu: 10,
    effect:
      "Requires CYBER-NEWTYPE trait. Deploy up to 5 Inhibitor Bits (see Psycommu Bits section).",
  },
  {
    name: "Psychosis",
    limit: 2,
    mcu: "–",
    effect:
      "Roll 1d6 at Step 0 of the Status Phase. If CYBER-NEWTYPE, the roll can be rerolled. On 5–6: gain Fearless and immediately move base MOVEMENT, then shoot one weapon at a –2 circumstance penalty.",
  },
  {
    name: "Predictive Foresight",
    limit: 1,
    mcu: "–",
    effect:
      "This [PILOT] may declare [REACTIVE ATTACK] at any point of the enemy's movement phase",
  },
  {
    name: "Projected Animosity",
    limit: 1,
    mcu: 20,
    effect:
      'Spend one action in Step 1.4. One enemy [PILOT] within 24" makes a PS 7 check; on failure, suffers FEAR/SHAKEN.',
  },
  {
    name: "Psycommu Guidance",
    limit: 1,
    mcu: 10,
    effect: "Add the [GUIDED] trait to one [MISSILE(X)] weapon.",
  },
  {
    name: "Enhanced Guidance",
    limit: 1,
    mcu: 25,
    effect:
      "Requires Psycommu Guidance. Upgrade [GUIDED] [MISSILE(X)] to [ENHANCED GUIDED] (90° rotation per Status Phase Step 1.2).",
  },
  {
    name: "Shield Bits",
    limit: 5,
    mcu: 10,
    effect: "Deploy up to 5 Shield Bits (see Psycommu Bits section).",
  },
];

export const BITS = [
  {
    type: "Beam",
    cat: "NEWTYPE",
    armor: 0,
    range: "0–5 | 6–10 | 11–15 | NA",
    mods: "+1 | +0 | –1 | NA",
    dam: 5,
    mcu: 10,
    faction: "Any",
  },
  {
    type: "Shield",
    cat: "NEWTYPE",
    armor: 15,
    range: "–",
    mods: "–",
    dam: "–",
    mcu: 10,
    faction: "Any",
  },
  {
    type: "Inhibitor",
    cat: "NEWTYPE",
    armor: 10,
    range: "–",
    mods: "–",
    dam: "–",
    mcu: 10,
    faction: "TITAN",
  },
];
