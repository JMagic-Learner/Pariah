export const INFANTRY_UNITS = [
  {
    name: "Generalist Squad",
    type: "Infantry",
    armor: "1",
    move: '4"',
    unitSize: "3 × 5 Infantry",
    maxQty: "6",
    mcuCost: "10",
    equipment: "Infantry Rifles, Anti-Personel Grenades, Rocket Launchers",
  },
];

export const INFANTRY_WEAPONS = [
  {
    name: "Infantry Rifle",
    type: "Rifle",
    rof: "2",
    range: "15 | NA | NA | NA",
    mod: "+1 | NA | NA | NA",
    dam: "1",
    keywords: "—",
  },
  {
    name: "Grenades (A.Per)",
    type: "Grenade",
    rof: "1",
    range: "6 | NA | NA | NA",
    mod: "+1 | NA | NA | NA",
    dam: "2",
    keywords: "[AOE(2)]",
  },
  {
    name: "Rocket Launcher",
    type: "Missile",
    rof: "1",
    range: "Min Band 8",
    mod: "—",
    dam: "5",
    keywords: "[MISSILE(16)], [Limited Use (2)]",
  },
  {
    name: "CQC Weapons",
    type: "Hands etc",
    rof: "1",
    range: "1 | NA | NA | NA",
    mod: "+1 | NA | NA | NA",
    dam: "1",
    keywords: "—",
  },
];

export const VEHICLE_UNITS = [
  {
    name: "Tanks",
    type: "Vehicle",
    armor: "15",
    move: '7"',
    unitSize: "2 × Tanks",
    maxQty: "6",
    mcuCost: "25",
    equipment: "Tank Cannon, Flares",
  },
  {
    name: "APC Transport",
    type: "Vehicle",
    armor: "8",
    move: '10"',
    unitSize: "1 Transport",
    maxQty: "6",
    mcuCost: "15",
    equipment: "Flares, LMG",
  },
];

export const TANK_WEAPONS = [
  {
    name: "Tank Cannon",
    type: "Cannon",
    rof: "2",
    range: "20 | 40 | 60 | 80",
    mod: "+0 | +1 | +0 | -1",
    dam: "8",
    keywords: "[AP(2)]",
  },
];

export const APC_WEAPONS = [
  {
    name: "MG (Light)",
    type: "MG",
    rof: "4",
    range: "15 | 35 | 55 | 75",
    mod: "+1 | +1 | +0 | -1",
    dam: "1",
    keywords: "[FULL AUTO], [GRIP], [MOUNTED]",
  },
];

export const AIR_UNITS = [
  {
    name: "Fighter Jet",
    type: "Vehicle",
    armor: "10",
    move: '15" (mandatory)',
    unitSize: "1 Fighter Jet",
    maxQty: "6",
    mcuCost: "25",
    equipment:
      "Vulcan Cannons ×2, Missile Pod 2 ×2 ([Limited Use (2)]), Flares",
  },
];

export const JET_WEAPONS = [
  {
    name: "Vulcan Cannons",
    type: "MG",
    rof: "3",
    range: "6 | 24 | 36 | NA",
    mod: "+2 | +1 | -1 | NA",
    dam: "3",
    keywords: "[FULL AUTO], [INBUILT]",
  },
  {
    name: "Missile Pod 2",
    type: "Missile",
    rof: "2",
    range: "Min Band 16",
    mod: "—",
    dam: "5",
    keywords: "[MISSILE(16)], [Limited Use (2)]",
  },
];
