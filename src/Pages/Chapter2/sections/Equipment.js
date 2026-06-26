import { Table } from '../../../Components/Table';

const RANGED_COLUMNS = [
  { header: 'Name', key: 'name', bold: true },
  { header: 'Type', key: 'type' },
  { header: 'ROF', key: 'rof', tc: true },
  { header: 'Range Bands', key: 'range' },
  { header: 'MOD', key: 'mod' },
  { header: 'DAM', key: 'dam', tc: true },
  { header: 'Ton', key: 'ton', tc: true },
  { header: 'Active FRO', key: 'fro', tc: true, accent: true },
  { header: 'MCU', key: 'mcu', tc: true },
  { header: 'Faction', key: 'faction', tc: true },
  { header: 'Keywords', key: 'keywords', lh: true },
];

const RANGED = [
  { name: 'Atomic Bazooka', type: 'Cannon', rof: 1, range: '18|36|90|180', mod: '-3|-2|-1|+0', dam: 100, ton: 12, fro: 8, mcu: 150, faction: '–', keywords: 'AOE(25), Limited Use[2]' },
  { name: 'Arm Cannon', type: 'Cannon', rof: 3, range: '12|24|–|–', mod: '+1|+0|–|–', dam: 10, ton: 2, fro: '–', mcu: 25, faction: '–', keywords: 'AOE(6) or AP(5), Inbuilt, Quick Swap, Limited Use[1]' },
  { name: 'Arm Rotary Cannon', type: 'Cannon', rof: 5, range: '15|25|35|–', mod: '+1|+0|-1|–', dam: 6, ton: 2, fro: '–', mcu: 25, faction: '–', keywords: 'Inbuilt, Quick Swap' },
  { name: 'Bazooka', type: 'Cannon', rof: 2, range: '12|24|36|48', mod: '-1|+0|+1|-2', dam: 15, ton: 8, fro: '–', mcu: 50, faction: '–', keywords: 'AOE(6), Brace' },
  { name: 'Bazooka (Hyper)', type: 'Cannon', rof: 2, range: '12|24|36|48', mod: '-1|+1|+0|-2', dam: 10, ton: 8, fro: '–', mcu: 75, faction: '–', keywords: 'AP(5), Brace' },
  { name: 'Beam Cannon', type: 'Cannon', rof: 1, range: '12|24|36|48', mod: '-2|+0|+1|+0', dam: 19, ton: 4, fro: 3, mcu: 75, faction: '–', keywords: 'Mountable' },
  { name: 'Beam Magnum', type: 'Rifle', rof: 1, range: '15|30|45|60', mod: '-1|+2|+1|+0', dam: 20, ton: 4, fro: 4, mcu: 55, faction: 'EF', keywords: 'Scope' },
  { name: 'Cannon', type: 'Cannon', rof: 2, range: '12|24|36|48', mod: '-2|+1|+1|+0', dam: 18, ton: 8, fro: '–', mcu: 70, faction: '–', keywords: 'AP(5), Mountable' },
  { name: 'Gatling (Beam)', type: 'MG', rof: 6, range: '18|36|54|72', mod: '-2|+1|+2|-1', dam: 8, ton: 4, fro: 4, mcu: 85, faction: '–', keywords: 'Full Auto, Suppressive, Grip' },
  { name: 'Gatling (Kinetic)', type: 'MG', rof: 8, range: '18|36|54|72', mod: '-2|+2|+1|-2', dam: 6, ton: 6, fro: '–', mcu: 65, faction: '–', keywords: 'Full Auto, Suppressive, Grip' },
  { name: 'Grenade Launcher', type: 'Grenade', rof: '2d3', range: '18|36|54|–', mod: '+2|+1|+0|–', dam: 'Munitions', ton: 2, fro: '–', mcu: 20, faction: '–', keywords: 'Indirect, Limited Use[3]' },
  { name: 'Grenades', type: 'Grenade', rof: '2d3', range: '(18)|(36)|–|–', mod: '+2|+0|–|–', dam: 'Munitions', ton: 1, fro: '–', mcu: 15, faction: '–', keywords: 'Indirect, Quick Swap, Limited Use[1], Thrown' },
  { name: 'Homing Missiles', type: 'Missile', rof: 2, range: 'Min Band 16"', mod: '–', dam: 'Munitions', ton: 5, fro: '–', mcu: '–', faction: '–', keywords: 'MISSILE[12], Guided, Mountable' },
  { name: 'Hypersonic Missiles', type: 'Missile', rof: 1, range: 'Min Band 24"', mod: '–', dam: 20, ton: 6, fro: '–', mcu: 55, faction: '–', keywords: 'MISSILE[24], Mountable, Indirect' },
  { name: 'MG', type: 'MG', rof: 5, range: '15|30|45|60', mod: '+0|+1|+1|-1', dam: 6, ton: 3, fro: '–', mcu: 40, faction: '–', keywords: 'Full Auto' },
  { name: 'MG (Heavy)', type: 'MG', rof: 5, range: '15|30|45|60', mod: '-2|+2|+1|+0', dam: 8, ton: 6, fro: '–', mcu: 65, faction: '–', keywords: 'Full Auto' },
  { name: 'Missile Pods ×2', type: 'Missile', rof: 2, range: 'Min Band 16"', mod: '–', dam: 'Munitions', ton: 1, fro: '–', mcu: 15, faction: '–', keywords: 'MISSILE[16], Mountable, Limited Use[1]' },
  { name: 'Missile Pods ×3', type: 'Missile', rof: 3, range: 'Min Band 16"', mod: '–', dam: 'Munitions', ton: 2, fro: '–', mcu: 25, faction: '–', keywords: 'MISSILE[16], Mountable, Limited Use[1]' },
  { name: 'Missile Pods ×8', type: 'Missile', rof: 8, range: 'Min Band 16"', mod: '–', dam: 'Munitions', ton: 4, fro: '–', mcu: 40, faction: '–', keywords: 'MISSILE[16], Mountable, Limited Use[1]' },
  { name: 'Missile Pods ×10', type: 'Missile', rof: 10, range: 'Min Band 16"', mod: '–', dam: 'Munitions', ton: 5, fro: '–', mcu: 50, faction: '–', keywords: 'MISSILE[16], Mountable, Limited Use[1]' },
  { name: 'PanzerFaust', type: 'Missile', rof: 1, range: 'Min Band 9"', mod: '–', dam: 12, ton: 1, fro: 1, mcu: 10, faction: 'ZEON', keywords: 'MISSILE[18], AP(5), Mountable, Limited Use[1]' },
  { name: 'Pistol (Ballistic)', type: 'Pistol', rof: 2, range: '12|24|36|–', mod: '+2|+1|-1|–', dam: 5, ton: 1, fro: '–', mcu: 10, faction: '–', keywords: 'Akimbo, Quick Draw' },
  { name: 'Pistol (Beam)', type: 'Pistol', rof: 1, range: '18|36|54|–', mod: '+1|+2|-1|–', dam: 6, ton: 1, fro: 1, mcu: 25, faction: '–', keywords: 'Akimbo, Quick Draw' },
  { name: 'Psychommu Hands', type: 'Newtype', rof: 5, range: '32|64|96|–', mod: '+0|+2|+0|–', dam: 12, ton: 5, fro: 4, mcu: 65, faction: 'ZEON', keywords: 'Psycommu System, AP(5)' },
  { name: 'Rail Gun', type: 'Cannon', rof: 1, range: '18|36|90|180', mod: '-1|+0|+1|+2', dam: 30, ton: 10, fro: 2, mcu: 100, faction: '–', keywords: 'AP(10), Brace' },
  { name: 'Rifle (Anti-Mat)', type: 'Rifle', rof: 1, range: '12|24|36|48', mod: '+0|+2|+1|+0', dam: 15, ton: 6, fro: '–', mcu: 50, faction: '–', keywords: 'Grip, AP(5) OR AOE(6)' },
  { name: 'Rifle (Beam)', type: 'Rifle', rof: 1, range: '15|45|60|90', mod: '-1|+2|+0|-1', dam: 16, ton: 3, fro: 3, mcu: 25, faction: '–', keywords: '–' },
  { name: 'Rifle (Kinetic)', type: 'Rifle', rof: 3, range: '15|30|45|60', mod: '+0|+2|+1|+0', dam: 8, ton: 4, fro: '–', mcu: 15, faction: '–', keywords: '–' },
  { name: 'Rifle (Marksman)', type: 'Rifle', rof: 2, range: '12|30|60|90', mod: '-2|+0|+2|+1', dam: 12, ton: 4, fro: '–', mcu: 25, faction: '–', keywords: 'Scope, Grip' },
  { name: 'Shotgun (Ballistic)', type: 'Shotgun', rof: '2d3', range: '12|24|36|–', mod: '+3|+0|-2|–', dam: 7, ton: 2, fro: '–', mcu: 15, faction: '–', keywords: 'Grip, Akimbo, Cluster' },
  { name: 'Shotgun (Beam)', type: 'Shotgun', rof: '2d3', range: '15|30|45|–', mod: '+3|+1|-1|–', dam: 7, ton: 1, fro: 2, mcu: 35, faction: '–', keywords: 'Grip, Akimbo, Cluster' },
  { name: 'SMG (Beam)', type: 'SMG', rof: 4, range: '16|32|48|–', mod: '+2|+0|-2|–', dam: 5, ton: 1, fro: 2, mcu: 35, faction: '–', keywords: 'Full Auto, Akimbo, Burst[2]' },
  { name: 'SMG (Kinetic)', type: 'SMG', rof: 6, range: '14|28|42|–', mod: '+2|+0|-2|–', dam: 4, ton: 2, fro: '–', mcu: 15, faction: '–', keywords: 'Full Auto, Akimbo, Burst[2]' },
  { name: 'Sniper Rifle (Anti-Ship)', type: 'Sniper', rof: 1, range: '18|36|90|180', mod: '-2|+1|+2|+2', dam: 25, ton: 8, fro: '–', mcu: 125, faction: '–', keywords: 'AP(5), Slow Reload, Scope, Mountable' },
  { name: 'Sniper Rifle (Beam)', type: 'Sniper', rof: 1, range: '15|45|90|180', mod: '-2|+2|+2|+0', dam: 25, ton: 6, fro: 4, mcu: 100, faction: '–', keywords: 'Scope, Grip, Precise' },
  { name: 'Sniper Rifle (Kinetic)', type: 'Sniper', rof: 2, range: '15|45|90|180', mod: '-1|+1|+2|+0', dam: 18, ton: 7, fro: '–', mcu: 70, faction: '–', keywords: 'AP(5), Scope, Grip, Precise' },
  { name: 'Vulcan Cannons', type: 'MG', rof: 3, range: '6|24|36|–', mod: '+2|+1|-1|–', dam: 3, ton: 0, fro: 0, mcu: 'FREE', faction: 'EF', keywords: 'Full Auto, Inbuilt' },
];

const MELEE = [
  { name: 'CQC Weapon', type: 'Any', rof: 2, range: '0–4"', mod: '+1', dam: 10, ton: 2, fro: '–', mcu: 10, keywords: 'Cleave' },
  { name: 'Heavy Weapon', type: 'Any', rof: 1, range: '0–4"', mod: '+1', dam: 20, ton: 3, fro: '–', mcu: 35, keywords: 'Impact[2]' },
  { name: 'Pile Bunker', type: 'Any', rof: 1, range: '0–4"', mod: '+0', dam: 30, ton: 4, fro: '–', mcu: 45, keywords: 'AP(10)' },
  { name: 'Heat Hawk', type: 'Axe', rof: 2, range: '0–3"(12)', mod: '+0', dam: 10, ton: 1, fro: 1, mcu: 10, keywords: 'Akimbo, Quick Draw, Cleave, Throw [ZEON]' },
  { name: 'Heat Blade', type: 'Sword', rof: 2, range: '0–4"', mod: '+1', dam: 12, ton: 3, fro: 1, mcu: 20, keywords: 'Cleave, Lethal [ZEON]' },
  { name: 'Beam Hawk', type: 'Axe', rof: 2, range: '0–3"', mod: '+0', dam: 15, ton: 1, fro: 1, mcu: 25, keywords: 'Akimbo, Quick Draw, Cleave [ZEON]' },
  { name: 'Hand(s)', type: 'Hands', rof: 2, range: '0–2"', mod: '+0', dam: 5, ton: 0, fro: 0, mcu: 0, keywords: 'Quick Draw, Akimbo' },
  { name: 'Gauntlets', type: 'Hands', rof: 2, range: '0–2"', mod: '+1', dam: 10, ton: 1, fro: '–', mcu: 15, keywords: 'Akimbo, AP(5)' },
  { name: 'Combat Knife', type: 'Knife', rof: 3, range: '0–2"(12)', mod: '+2', dam: 7, ton: 0, fro: '–', mcu: 10, keywords: 'Akimbo, Quick Draw, Throw, Precise, Counterstrike' },
  { name: 'Beam Knife', type: 'Knife', rof: 3, range: '0–2"', mod: '+2', dam: 8, ton: 0, fro: 1, mcu: 15, keywords: 'Akimbo, Quick Draw, Precise, Lethal, Counterstrike' },
  { name: 'Lance', type: 'Lance', rof: 1, range: '0–8"', mod: '+2', dam: 13, ton: 3, fro: '–', mcu: 15, keywords: 'AP(5), Precise, Lethal' },
  { name: 'Beam Sabre', type: 'Sword', rof: 1, range: '0–4"', mod: '+1', dam: 15, ton: 1, fro: 1, mcu: 20, keywords: 'Cleave' },
  { name: 'Beam Whip', type: 'Whip', rof: 2, range: '0–8"', mod: '+0', dam: 10, ton: 1, fro: 2, mcu: 35, keywords: '–' },
  { name: 'Chain Mines', type: 'Whip', rof: 1, range: '0–8"', mod: '+0', dam: 15, ton: 1, fro: '–', mcu: 40, keywords: 'AP(5), Limited Use[3] [ZEON]' },
  { name: 'Mace', type: 'Mace', rof: 2, range: '0–3"', mod: '+2', dam: 10, ton: 2, fro: '–', mcu: 15, keywords: 'Impact[2]' },
  { name: 'Restraint Cables', type: 'Whip', rof: 1, range: '0–15"', mod: '+1', dam: 'N/A', ton: 1, fro: '–', mcu: 10, keywords: 'Inbuilt; MSU pulled 6" closer' },
];

const SUPPORT = [
  { name: 'Advanced Fire Solutions', loc: 'Head/Torso', ton: 3, pfro: 1, qty: 1, mcu: 50, effect: 'When moving <8", +1 to Gunnery.' },
  { name: 'Aim Assist', loc: 'Head/Torso', ton: 2, pfro: 1, qty: 1, mcu: 55, effect: 'Aim is a free action but costs 1 additional FRO.' },
  { name: 'ALICE System', loc: 'Torso', ton: 2, pfro: 1, qty: 1, mcu: 75, effect: '+1 Gunnery and Brawl if Pilot lacks Brawl/Gunnery/Newtype traits.' },
  { name: 'AMS', loc: 'Arm/Torso', ton: 2, pfro: '–', qty: 1, mcu: 25, effect: 'At Step 1.1, roll PS 7 for each enemy MISSILE token within 18"; remove on success.' },
  { name: 'Anti-Beam Coating Kit', loc: 'Any', ton: '–', pfro: '–', qty: 5, mcu: 10, effect: 'First time hit by a Beam attack, reduce damage by 10.' },
  { name: 'Arms (Extra)', loc: 'Shoulder/Torso', ton: 2, pfro: '–', qty: 1, mcu: 30, effect: 'Add a pair of arms; each can hold one weapon.' },
  { name: 'Beam Shields', loc: 'Arm', ton: 2, pfro: 2, qty: 1, mcu: 50, effect: 'Reduce Beam damage by 10. Regenerate 10 Shield Armor at Step 0 of Status Phase.' },
  { name: 'Brutal', loc: 'Melee Weapon', ton: '–', pfro: '–', qty: 2, mcu: 15, effect: 'Add AP(2) to one non-beam melee weapon.' },
  { name: 'Beam Focus', loc: 'Melee Weapon', ton: '–', pfro: '–', qty: 2, mcu: 15, effect: 'Spend FRO to increase melee range by 3" and damage.' },
  { name: 'Command Interface', loc: 'Head/Torso', ton: 4, pfro: 1, qty: 1, mcu: 50, effect: 'All friendly MSUs within 8" gain +1 PS.' },
  { name: 'Command Protocol', loc: 'Torso', ton: 3, pfro: '–', qty: 1, mcu: 50, effect: 'Commander can RALLY for free at Step 1.1.' },
  { name: 'Cyclic', loc: 'Weapon', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: '+1 ROF to Rifle/MG/SMG/Pistol/Grenade Launcher.' },
  { name: 'CounterStrike', loc: 'Weapon', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: 'Add CounterStrike keyword to one melee weapon.' },
  { name: 'ECM/ECCM', loc: 'Torso', ton: 3, pfro: 1, qty: 1, mcu: 25, effect: 'End of Status Phase: roll PS 6; all friendly within 8" gain +1 EVA vs ranged this round.' },
  { name: 'Emergency Proximity System', loc: 'Legs (Both)', ton: 3, pfro: 1, qty: 1, mcu: 45, effect: 'Once per round when an enemy enters within 12", BOOST[6].' },
  { name: 'Enhanced Visors', loc: 'Head', ton: 2, pfro: 1, qty: 1, mcu: 50, effect: 'All ranged weapons are treated as having Scope.' },
  { name: 'Enhanced Ejection', loc: 'Torso', ton: 1, pfro: '–', qty: 1, mcu: 30, effect: 'When destroyed, nearby friendly MSUs do not roll Fear/Shaken.' },
  { name: 'Enhanced Fusion Reactors', loc: 'Torso', ton: 2, pfro: '–', qty: 1, mcu: 35, effect: 'Increase FRO by 2.' },
  { name: 'Extra Armor [10]', loc: 'Any', ton: 2, pfro: '–', qty: 5, mcu: 10, effect: 'Add 10 Armor to one hit location.' },
  { name: 'EXAM System', loc: 'Torso', ton: 3, pfro: 1, qty: 1, mcu: 35, effect: 'When targeting a Newtype/CyberNewtype, +1 GS, BR, and Piloting.' },
  { name: 'Firing Drills', loc: 'Any', ton: 1, pfro: '–', qty: 1, mcu: 50, effect: 'If target is already declared as an attack target this round, +1 GS.' },
  { name: 'Flares', loc: 'Any', ton: 1, pfro: '–', qty: 2, mcu: 25, effect: 'Deploy Flare token within 8"; enemy missiles move toward it. LIMITED USE[1].' },
  { name: 'Forward Observer', loc: 'Torso', ton: 3, pfro: 1, qty: 1, mcu: 35, effect: 'See Forward Observe Action (Section 3.7).' },
  { name: 'Grip Upgrade', loc: 'N/A', ton: 0, pfro: '–', qty: '–', mcu: 25, effect: 'Add Grip keyword to one ranged weapon.' },
  { name: 'Hardpoints', loc: 'Any', ton: 0, pfro: '–', qty: 6, mcu: 30, effect: 'Add one hardpoint slot for a MOUNTABLE weapon.' },
  { name: 'Heavy Boosters', loc: 'Legs/Torso', ton: 2, pfro: '–', qty: 1, mcu: 25, effect: 'BOOST[1] becomes BOOST[2].' },
  { name: 'High Velocity/Missile', loc: 'N/A', ton: 1, pfro: '–', qty: 1, mcu: 30, effect: 'MISSILE[X] becomes MISSILE[X+6].' },
  { name: 'Hover Platform', loc: 'Legs (Both)', ton: 3, pfro: 2, qty: 1, mcu: 45, effect: 'Omnidirectional movement; prevents CROUCHED state.' },
  { name: 'I Field', loc: 'Shoulder/Torso', ton: 2, pfro: 3, qty: 1, mcu: 75, effect: 'Deploy I Field: nullifies all beam attacks for one round. LIMITED USE[1].' },
  { name: 'Impact', loc: 'Melee Weapon', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: 'Increase tonnage by 3; weapon gains IMPACT[3].' },
  { name: 'Inertia Redirection System', loc: 'Legs (Both)', ton: 3, pfro: '–', qty: 1, mcu: 25, effect: 'Turn base facing costs 1" instead of 2" during Move.' },
  { name: 'Lethal Upgrade', loc: 'Weapons', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: 'Add Lethal keyword to one melee weapon.' },
  { name: 'Missile Arming Upgrade', loc: 'Weapon', ton: 2, pfro: '–', qty: 1, mcu: 50, effect: 'Missiles reduce minimum range by 5".' },
  { name: 'Missile Proximity', loc: 'Weapon', ton: 2, pfro: '–', qty: 1, mcu: 65, effect: 'Missiles detonate within AOE range of target.' },
  { name: 'Munitions Racks', loc: 'Weapon', ton: 2, pfro: '–', qty: 2, mcu: 25, effect: 'Increase Limited Use[X] of two weapons by 1.' },
  { name: 'Nanolaminate Chaff', loc: 'Torso', ton: 2, pfro: '–', qty: 2, mcu: 15, effect: 'Deploy 8" chaff cloud blocking LOS and detonating missiles. LIMITED USE[1].' },
  { name: 'Panoptic Canopy', loc: 'Torso', ton: 2, pfro: 0, qty: 1, mcu: 50, effect: '360° LOS but still fires from front arc only.' },
  { name: 'Pistol Caliber', loc: 'Weapons', ton: '–', pfro: '–', qty: 4, mcu: 15, effect: 'Pistols gain Precise and Lethal, +4 damage.' },
  { name: 'Precise Upgrade', loc: 'Weapon', ton: '–', pfro: '–', qty: 2, mcu: 15, effect: 'Add Precise to one weapon that has Scope.' },
  { name: 'Predictive Fire Control', loc: 'Torso', ton: 2, pfro: 1, qty: 1, mcu: 45, effect: '+1 Circumstance mod to Reactive Attacks with Ranged.' },
  { name: 'Proximity Mines', loc: '–', ton: 2, pfro: '–', qty: 3, mcu: 20, effect: 'MSU moving within 4" takes 15 damage to both LEG locations. LIMITED USE[1], AOE[4].' },
  { name: 'Psycommu Funnel/Bit', loc: 'Torso', ton: 3, pfro: 2, qty: 1, mcu: 75, effect: 'Requires NEWTYPE/CYBER-NEWTYPE trait; deploy 2 bits as weapons.' },
  { name: 'Quasi Psycommu System', loc: 'Torso', ton: 3, pfro: 3, qty: 1, mcu: 120, effect: 'Access to INCOMS Beam/Shield Bits without Newtype trait.' },
  { name: 'Quick Draw Upgrade', loc: 'Weapon', ton: '–', pfro: '–', qty: '–', mcu: 15, effect: 'Add Quick Draw to one LIGHT or MEDIUM weapon.' },
  { name: 'Recoil Counterbalance', loc: 'Arms (Both)', ton: 1, pfro: 1, qty: 1, mcu: 35, effect: 'FULL AUTO weapons do not incur the -2 hit modifier.' },
  { name: 'Reinforced Hydraulics', loc: 'Legs (Both)', ton: 1, pfro: '–', qty: 1, mcu: 15, effect: 'No fall damage from heights up to 24".' },
  { name: 'Scope Upgrade', loc: 'Weapon', ton: '–', pfro: '–', qty: '–', mcu: 15, effect: 'Add Scope to one ranged weapon.' },
  { name: 'Shields [20]', loc: 'Arm', ton: 2, pfro: '–', qty: 2, mcu: 15, effect: 'Assign all damage to shield (20 Armor) on Torso or adjacent arm.' },
  { name: 'Shields [20, Deployable]', loc: 'Arms', ton: 2, pfro: '–', qty: 2, mcu: 20, effect: 'Same as above; additionally provides BRACE and HARD COVER.' },
  { name: 'Side Verniers', loc: 'Arms/Legs/Torso', ton: 2, pfro: 1, qty: 1, mcu: 40, effect: 'No movement penalty sideways; can BOOST sideways.' },
  { name: 'Spiky Shoulders', loc: 'Arm', ton: 1, pfro: '–', qty: 1, mcu: 25, effect: 'BLITZ collision: 15 damage + 1 per 3 inches traveled.' },
  { name: 'Stealth System', loc: 'Head/Torso', ton: 3, pfro: 1, qty: 1, mcu: 55, effect: 'Gain STEALTH state when moving <8".' },
  { name: 'Suppressive Upgrade', loc: 'Weapon', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: 'One FULL AUTO weapon gains SUPPRESSIVE keyword.' },
  { name: 'Slugger', loc: 'Weapons', ton: '–', pfro: '–', qty: 2, mcu: 25, effect: 'Shotguns lose Cluster, gain ROF 2; Arm Cannons/Shotguns gain AP 10.' },
  { name: 'Tactical Data Uplink', loc: 'Torso', ton: 2, pfro: 1, qty: 1, mcu: 50, effect: 'Determine rangebands from any friendly MSU with LOS.' },
  { name: 'Target Designator', loc: 'Head', ton: 2, pfro: '–', qty: 1, mcu: 40, effect: 'Allows Airstrike action. LIMITED USE[1].' },
];

const MUNITIONS = [
  { name: 'Frag', dam: 8, keywords: 'AOE[6]' },
  { name: 'High Explosive', dam: 15, keywords: 'AOE[9]' },
  { name: 'Incendiary', dam: 6, keywords: 'AOE[6], ignites terrain' },
  { name: 'Smoke', dam: '–', keywords: 'AOE[9], blocks LOS' },
  { name: 'EMP', dam: '–', keywords: 'AOE[6], disables 1d3 FRO for 1 round' },
  { name: 'Shaped Charge', dam: 12, keywords: 'AP(10), no AOE' },
];

export const Equipment = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.3 — Equipment</h2>

      <h3 className="f4 fw7 mt3 mb2">Stowed vs. Mounted</h3>
      <p className="lh-copy">
        Weapons are either <strong>Stowed</strong> (held in hand or slung) or{' '}
        <strong>Mounted</strong> (attached to the MSU's frame). Stowed weapons must occupy a hand
        slot. Mounted weapons require a Hardpoint (purchased via Support Systems) and do not
        occupy hand slots. Switching between Stowed weapons costs a Quick Swap or SWAP action;
        Mounted weapons are always active.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Weapon Characteristics</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Stat</th>
              <th className="pa2 fw6">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ROF', 'Rate of Fire — number of attack dice rolled per action.'],
              ['Range Bands', 'Four bands: Close | Short | Medium | Long. Ranges in inches.'],
              ['MOD', 'Hit modifier added to Gunnery/Brawl roll at each range band.'],
              ['DAM', 'Damage dealt per hit after armor reduction.'],
              ['Tonnage', 'Equipment weight; counts against MSU tonnage limit.'],
              ['Active FRO', 'FRO consumed when this weapon is fired (Beam weapons only).'],
              ['MCU', 'Credit cost when building the MSU.'],
            ].map(([stat, meaning], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red w-20">{stat}</td>
                <td className="pa2 lh-copy">{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Ranged Weapons</h3>
      <Table columns={RANGED_COLUMNS} dataArray={RANGED} />

      <h3 className="f4 fw7 mt4 mb2">Melee Weapons</h3>
      <div className="overflow-auto mv2">
        <table className="f6 collapse ba b--black-10" style={{ minWidth: '800px', width: '100%' }}>
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Name</th>
              <th className="pa2 fw6">Type</th>
              <th className="pa2 fw6 tc">ROF</th>
              <th className="pa2 fw6">Range</th>
              <th className="pa2 fw6 tc">MOD</th>
              <th className="pa2 fw6 tc">DAM</th>
              <th className="pa2 fw6 tc">Ton</th>
              <th className="pa2 fw6 tc">FRO</th>
              <th className="pa2 fw6 tc">MCU</th>
              <th className="pa2 fw6">Keywords</th>
            </tr>
          </thead>
          <tbody>
            {MELEE.map((w, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7">{w.name}</td>
                <td className="pa2">{w.type}</td>
                <td className="pa2 tc">{w.rof}</td>
                <td className="pa2">{w.range}</td>
                <td className="pa2 tc">{w.mod}</td>
                <td className="pa2 tc">{w.dam}</td>
                <td className="pa2 tc">{w.ton}</td>
                <td className="pa2 tc dark-red">{w.fro}</td>
                <td className="pa2 tc">{w.mcu}</td>
                <td className="pa2">{w.keywords}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Munitions</h3>
      <p className="lh-copy mb2">
        Grenades and Grenade Launchers use Munitions for their damage. Choose the munition type
        before firing. Munition type applies to all shots fired in that action.
      </p>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Munition</th>
              <th className="pa2 fw6 tc">DAM</th>
              <th className="pa2 fw6">Keywords</th>
            </tr>
          </thead>
          <tbody>
            {MUNITIONS.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7">{m.name}</td>
                <td className="pa2 tc">{m.dam}</td>
                <td className="pa2">{m.keywords}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Support Systems</h3>
      <div className="overflow-auto mv2">
        <table className="f6 collapse ba b--black-10" style={{ minWidth: '950px', width: '100%' }}>
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Name</th>
              <th className="pa2 fw6">Location</th>
              <th className="pa2 fw6 tc">Ton</th>
              <th className="pa2 fw6 tc">PFRO</th>
              <th className="pa2 fw6 tc">Max</th>
              <th className="pa2 fw6 tc">MCU</th>
              <th className="pa2 fw6">Effect</th>
            </tr>
          </thead>
          <tbody>
            {SUPPORT.map((s, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red">{s.name}</td>
                <td className="pa2">{s.loc}</td>
                <td className="pa2 tc">{s.ton}</td>
                <td className="pa2 tc">{s.pfro}</td>
                <td className="pa2 tc">{s.qty}</td>
                <td className="pa2 tc">{s.mcu}</td>
                <td className="pa2 lh-copy">{s.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
