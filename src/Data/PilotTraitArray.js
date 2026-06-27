export const TRAITS = [
  {
    name: "Aura Farmer",
    cost: 1,
    effect:
      "At Step 1.4 of Status Phase, spend an action to repose MSU in epic fashion. Enemy MSUs with LOS suffer -1 to GS, BR, and PS. This MSU cannot use a [MOVEMENT] action.",
  },
  {
    name: "Avalanche",
    cost: 1,
    effect: "This [PILOT] may declare [BLITZ] as a reaction.",
  },
  {
    name: "Back Stabber",
    cost: 1,
    effect:
      "Melee attacks against an MSU's rear arc inflict one additional hit location.",
  },
  {
    name: "Boost Assault",
    cost: 2,
    effect:
      "When this MSU consumes 3 FRO to [BOOST(X)], this [PILOT] gains +1 Brawl and Piloting.",
  },
  {
    name: "Boost Junkie",
    cost: 2,
    effect:
      "When this MSU consumes 3 FRO to [BOOST(X)], this [PILOT] gains +1 Gunnery and Piloting.",
  },
  { name: "Brawler", cost: 2, effect: "Gain +1 to Brawl (Stackable)." },
  {
    name: "Captain",
    cost: 1,
    effect:
      "The [PILOT] gains the [COMMANDER] keyword. This [PILOT] may perform one [COMMANDER] action for free per round.",
    restrictions: "Limited 1 per [FIRETEAM]",
  },
  {
    name: "CQ Specialist",
    cost: 2,
    effect:
      'When this [PILOT] targets a MSU within 12", you may reroll 1 attack dice per turn.',
  },
  {
    name: "Cross Discipline",
    cost: 1,
    effect:
      "When obtaining faction bonuses, this [PILOT] may exchange one subfaction bonus for another subfaction's.",
    restrictions:
      "THe [PILOT] may not exchange for a faction bonus that gives a free trait.",
  },
  {
    name: "Cyber-Newtype",
    cost: 1,
    effect:
      "Increase one of the [PILOTS] stats by one. This [PILOT] now gains access to [NEWTYPE] traits",
    restrictions: "TITANS ONLY",
  },
  {
    name: "Duelist",
    cost: 2,
    effect:
      'If no friendly MSU within 12" of this MSU, you may reroll 1 attack dice per turn.',
  },
  {
    name: "Efficiency Engineer",
    cost: 1,
    effect: "All passive FRO costs are reduced to a minimum of 1.",
  },
  {
    name: "Enduring Will",
    cost: 1,
    effect:
      "[PILOT] ignores the [KNOCKDOWN] state when the first leg location is destroyed. [CRIPPLED] state reduces base movespeed by 2 instead of half.",
  },
  {
    name: "Executioner",
    cost: 2,
    effect:
      "Make a single ROF 1 melee attack at -2 penalty. If successful, hit location is treated as a double 1 (Torso Hit).",
  },
  {
    name: "Explosive Pro",
    cost: 2,
    effect:
      "Direct hits with the [AOE] keyword now do [AOE(X)] damage to three hit locations.",
  },
  {
    name: "Eyes on You",
    cost: 1,
    effect:
      "Once per battle round, the [PILOT] may use a free reaction to immediately rotate it's MSU 360°.",
  },
  {
    name: "Fearless",
    cost: 2,
    effect: "This [PILOT] can never be affected by [FEAR/SHAKEN].",
  },
  {
    name: "Generous",
    cost: 1,
    effect:
      "Any base equipment of this MSU may be given for free to another friendly MSU within the same [FIRETEAM].",
  },
  {
    name: "Grenadier God",
    cost: 1,
    effect:
      "[MUNITIONS] for grenades and grenade launchers gain AOE[6]. Frag Munitions are now [AOE(9)].",
  },
  {
    name: "Guerilla Ops",
    cost: 1,
    effect:
      "If this MSU is within OBSCURING COVER, incoming ranged attacks suffer a -1 GS penalty.",
  },
  { name: "Gunnery", cost: 2, effect: "Increase Gunnery by 1 (Stackable)." },
  {
    name: "Heavy Weapons Specialist",
    cost: 1,
    effect:
      "[HEAVY] weapons gain [AKIMBO]. [HEAVY] ranged weapons gain the [PRECISION] keyword if the MSU stood still and did not rotate.",
  },
  {
    name: "Juke",
    cost: 2,
    effect:
      "Once per battle round, this [PILOT] may perform a Juke reaction to reroll one EVASION dice if you have LOS to the attack.",
  },
  {
    name: "Kinetic Force",
    cost: 1,
    effect:
      "When this MSU moves over 21 inches, all non-beam melee attacks gain +2 base damage.",
  },
  {
    name: "Lucky Cat",
    cost: 3,
    effect:
      "This [PILOT] has a pet cat. Pet the cat before sortie. Roll 3d3. The result is how many dice this [PILOT] can reroll once per game.",
  },
  {
    name: "Measured Trigger",
    cost: 1,
    effect: "Replace the [FULL AUTO] weapon keyword with [[BURST(3)] keyword.",
  },
  {
    name: "Mechanic",
    cost: 1,
    effect:
      "Increase the total tonnage by 12 (+4 Equipment Tonnage) OR increase FRO by 2.",
  },
  {
    name: "Mechanic Pro",
    cost: 2,
    effect:
      "Reduce the FRO requirement of one weapon by 2 and obtain one Hardpoint equipment slot. The [PILOT]'s MSU may purchase Extra Armor at 5 MCU per.",
    restrictions: "EARTH FEDERATION GROUND FORCES ONLY",
  },
  {
    name: "Merchant",
    cost: 1,
    effect:
      "All base equipment can be sold for 25 MCU each instead of 10 MCU each",
    restrictions: "",
  },
  {
    name: "Momentum Specialist",
    cost: 1,
    effect:
      "When this MSU consumes 3 FRO to [BOOST(X)], increase melee attack dice from 1d6 to 2d3 + 1 Trait Mod.",
  },
  {
    name: "Newtype",
    cost: 4,
    effect:
      "Increase two different base pilot stats by 1. Gain access to [NEWTYPE] upgrade traits.",
  },
  {
    name: "Opportunistic",
    cost: 1,
    effect:
      "Attacks made by this [PILOT] against enemy MSUs with lower initiative may reroll 1 attack dice.",
  },
  {
    name: "OYW Veteran",
    cost: 1,
    effect:
      "Increase this [PILOT]'s starting MCU allotment by 75 points. (250 MCU limit to 325 MCU Limit",
  },
  {
    name: "Patient",
    cost: 1,
    effect:
      "This [PILOT] can reduce its own initiative result to 0 at end of the initiative phase.",
  },
  { name: "Piloting", cost: 2, effect: "Increase Piloting by 1 (Stackable)." },
  {
    name: "Pugilist",
    cost: 1,
    effect:
      "Melee attacks made with Hands or Gauntlets gain +1 Trait Bonus to hit, and +1 ROF.",
  },
  {
    name: "Predictive Fire",
    cost: 1,
    effect:
      "[AOE(x)] weapons gain [INDIRECT] in [REACTIVE FIRE] actions. [INDIRECT] weapons no longer receive the -2 penalty for targeting a point on the battlefield.",
  },
  {
    name: "Quick Hands",
    cost: 1,
    effect: "All [LIGHT] or [MEDIUM] weapons gain [QUICK SWAP] trait.",
  },
  {
    name: "Rambo",
    cost: 1,
    effect:
      "When wielding two weapons (one in each MSU hand), increase Gunnery or Brawl by 1.",
  },
  {
    name: "Reactive",
    cost: 2,
    effect:
      "During Reactive Attack actions, the [PILOT] may reroll up to X Attack dice equal to PS mod.",
  },
  {
    name: "Rookie",
    cost: 1,
    effect:
      "Base Gunnery, Brawl, Piloting defaulted 0. Limited Use [1]: Ignore hit location of one enemy attack.",
  },
  {
    name: "Saboteur",
    cost: 1,
    effect:
      "At game start, choose an enemy [PILOT] to roll a PS 5 check. If failed, choose one penalty: Increase all Passive FRO cost by 1; Remove a support equipment with Weapon location; Reduce movespeed by 1 and FRO Limit by 1.",
  },
  {
    name: "Scavenger",
    cost: 1,
    effect: "Reduce one Support Equipment's cost by 50% MSU Credits.",
  },
  {
    name: "Serial Killer",
    cost: 1,
    effect: "For each MSU destroyed by this [PILOT], gain +1 Gunnery or Brawl.",
  },
  {
    name: "Sharpshooter",
    cost: 2,
    effect: "You may reduce negative range mod penalties to a minimum of 0.",
  },
  {
    name: "Shield Specialist",
    cost: 1,
    effect:
      "Shields gain +5 Armor. Shields reduce tonnage by 1. Shields gain: ROF 1, Range 0–4(12), MOD +2, DAM 10, Keywords: [IMPACT(2)].",
  },
  {
    name: "Six Shooter",
    cost: 1,
    effect:
      "Whenever this [PILOT] performs a [SWAP] action, to switch to a pistol, that pistol gains +1 ROF and +1 trait mod.",
  },
  {
    name: "Suppressive Tactics",
    cost: 1,
    effect:
      "Enemy MSUs suppressed by this [PILOT] reduce their base movespeed by 2.",
  },
  {
    name: "Trash Talker",
    cost: 1,
    effect:
      'At Step 1.4 of Status Phase, the [PILOT] can spend an action to trash talk. ALL enemy [PILOT]s within 24" must make a PS 5 check or suffer -1 penalty to Gunnery and Brawl.',
  },
  {
    name: "Tricky",
    cost: 1,
    effect:
      "After rolling initiative but before rerolling ties, adjust [PILOT] initiative result by +2 or -2.",
  },
  {
    name: "Vindictive",
    cost: 1,
    effect:
      "This [PILOT] gains +1 Brawl and +1 Gunnery against the enemy MSU who last damaged this [PILOT]'s MSU.",
  },
  {
    name: "Wolf Pack",
    cost: 2,
    effect:
      'If 1 friendly MSU within 8": reroll 1 attack dice per round. If 2 friendly MSUs within 8": reroll 1 evasion roll per round. If 3+ friendly MSUs within 8": gain +1 Piloting, +1 Brawl, +1 Gunnery.',
  },
  {
    name: "War Criminal",
    cost: 1,
    effect:
      "This [PILOT] may target [CIVILIANS] without penalty. This [PILOT] does not incur Victory Point penalties for killing [CIVILIANS]",
  },
];
