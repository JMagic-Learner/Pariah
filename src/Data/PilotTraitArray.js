export const TRAITS = [
  {
    name: "Aura Farmer",
    cost: 1,
    effect:
      "At Step 1.4 of Status Phase, spend an action to repose this MSU in epic fashion. Enemy MSUs with LOS suffer -1 to GS, BR, and PS. This MSU cannot use a [MOVEMENT] action.",
  },
  {
    name: "Avalanche",
    cost: 1,
    effect: "This [PILOT] may declare [BLITZ] as a reaction.",
  },
  {
    name: "Aggressive",
    cost: 1,
    effect:
      "After declaring an [ATTACK] or [REACTIVE ATTACK] action, the [UNIT] may move 4 inches forward. This movement cannot be used to rotate facing",
  },
  {
    name: "Back Stabber",
    cost: 1,
    effect:
      "Melee attacks against an MSU's rear arc inflict one additional hit location.",
  },
  {
    name: "Battle Group Commander",
    cost: 4,
    effect:
      "Increase total FRO limit of the entire force by 150. This additional FRO can only be spent on Support Units. This [PILOT] gains the [COMMANDER] keyword and one extra [COMMANDER] Action at the start of the game. This [PILOT] may also purchase the Command Interface support equipment for free. If the Battle Group Commander is destroyed, all friendly units are [FEAR/SHAKEN]",
    restrictions: "Limited 1 per [FIRETEAM]",
  },
  {
    name: "Bandit",
    cost: 1,
    effect:
      "After declaring an [ATTACK] or [REACTIVE ATTACK] action, the [UNIT] may move 4 inches backward without penalty. This movement cannot be used to rotate facing",
  },
  {
    name: "Ballistic Afficionado",
    cost: 1,
    effect:
      "All Non-Beam, Non-Grenade ranged type weapons reduce respective weapon tonnage by 1 to a minimum of 1. This [PILOT] may only equip Non-Beam, Non-Grenade type ranged weapons",
  },
  {
    name: "Berzerker",
    cost: 1,
    effect: "All melee attacks suffer a -1 penalty to hit, but gain +1 ROF",
  },
  {
    name: "Beam Specialist",
    cost: 1,
    effect:
      "Reduce the active FRO cost of Beam Weapons by 1, to a mininum of 1.",
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
    name: "Buzz Saw",
    cost: 2,
    effect:
      "Whenver this [PILOT] declares an [FULL AUTO] ranged weapon, if the target enemy MSU is in [OBSCURING COVER], the [OBSCURING COVER] is destroyed after the attack is resolved. [FULL AUTO] attacks do an extra 5 damage to [HARD COVER] terrain.",
  },
  {
    name: "Captain",
    cost: 1,
    effect:
      "The [PILOT] gains the [COMMANDER] keyword. This [PILOT] may perform one [COMMANDER] action for free per round.",
    restrictions: "Limited 1 per [FIRETEAM]",
  },
  {
    name: "Child Soldier",
    cost: 0,
    effect:
      "Base Gunnery, Brawl, Piloting defaulted 0. This [PILOT] takes a -1 penalty to [FEAR/SHAKEN] checks. This [PILOT] cannot use the [COMMANDER] keyword. For each of this [PILOT]'s MSU hit location destroyed, gain +2 to all stats.",
    restrictions: "Limited 1 per [FIRETEAM]",
  },
  {
    name: "CORRUPT GOVERNMENT (EF GENERAL)",
    cost: 0,
    effect: "Represents an unspent Trait point. Gain +50 MCU",
    restrictions: "Earth Federation Only",
  },
  {
    name: "CQ Specialist",
    cost: 2,
    effect:
      'When this [PILOT] targets a [UNIT] within 12", you may reroll 1 attack dice per turn.',
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
    cost: 3,
    effect:
      "Increase one of the [PILOTS] stats by one. This [PILOT] now gains access to [NEWTYPE] traits",
    restrictions: "",
  },
  {
    name: "Cyber-Newtype (TITANS)",
    cost: 2,
    effect:
      "Increase one of the [PILOTS] stats by one. This [PILOT] now gains access to [NEWTYPE] traits",
    restrictions: "TITANS ONLY",
  },
  {
    name: "Duelist",
    cost: 2,
    effect:
      'If no friendly MSU within 8" of this MSU, you may reroll 1 attack dice per turn.',
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
    name: "Evasive",
    cost: 2,
    effect:
      "This [PILOT]'s evasion max bonus is now 5 instead of 4. Moving less than 8 inches no longer incurs a -1 penalty to evasion rolls (see Evasion Tier Table)",
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
    cost: 1,
    effect: "This [PILOT] can never be affected by [FEAR/SHAKEN].",
  },
  {
    name: "Freelancer",
    cost: 1,
    effect:
      "This [PILOT] can purchase a MSU from any [FACTION], but does not receive the any [FACTION] bonuses.",
  },
  {
    name: "Frontliner",
    cost: 2,
    effect:
      "If this [PILOT]'s MSU is within 12 inches of the center of the battlefield, it may automatically choose to fail/succeed [TAKE COVER] reactions. In addition, if this [UNIT] is in base contact with [HARD COVER], once per round it may reassign an incoming hit location to a location covered by [HARD COVER]",
  },
  {
    name: "Formation Specialist",
    cost: 1,
    effect:
      "Whenver this [PILOT] declares an [MOVEMENT] action, all friendly MSU's within 8 inches may perform immediatly perform a [MOVEMENT] action at a -2 penalty to their movement distance.",
    restrictions: "Limited 1 per [FIRETEAM]",
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
    name: "Guardian Angel",
    cost: 2,
    effect:
      "All other friendly [UNIT]s within 8 inches of this [UNIT] can reroll one of their d3 evasion dice.",
  },
  {
    name: "Guerilla Ops",
    cost: 1,
    effect:
      "If this MSU is within OBSCURING COVER, incoming ranged attacks suffer a -1 GS penalty.",
  },
  {
    name: "Guns Blazing",
    cost: 2,
    effect:
      "When declaring [SIMULTANEOUS ATTACK], the [PILOT] may now nominate three ranged weapon to fire instead of two. In addition, [MOUNTED] weapons are now eligible for [REACTIVE ATTACKS]",
  },
  { name: "Gunnery", cost: 2, effect: "Increase Gunnery by 1 (Stackable)." },
  {
    name: "Hawkeye",
    cost: 1,
    effect:
      "This [PILOT] may perform the Forward Observer action once per battle round by spending 2 FRO.",
  },
  {
    name: "Heavy Weapons Specialist",
    cost: 1,
    effect:
      "[HEAVY] weapons gain [AKIMBO]. [HEAVY] ranged weapons gain the [PRECISION] keyword if the MSU stood still and did not rotate.",
  },
  {
    name: "Hipfire Specialist",
    cost: 1,
    effect:
      "This [PILOT] may declare an [ATTACK] action with a ranged weapon during a [MOVEMENT] action at a -2 penalty to hit.",
  },
  {
    name: "Honorable",
    cost: 1,
    effect:
      "This [PILOT] cannot declare attacks in the rear arcs of enemy MSU. This [PILOT] gains +1 GS and +1 BR. This [PILOT] loses this trait whenever he/she or a [FIRETEAM] member destroys [CIVILIANS]",
  },
  {
    name: "Juke",
    cost: 2,
    effect:
      "Once per battle round, this [PILOT] may perform a Juke reaction to reroll one d3 evasion dice if you have LOS to the attack.",
  },
  {
    name: "Kinetic Force",
    cost: 1,
    effect:
      "When this MSU moves over 21 inches, all non-beam melee attacks gain +2 base damage. Enemy MSU's that are hit by this [PILOT]'s [BLITZ] actions now causes [KNOCKDOWN] state",
  },
  {
    name: "Leapfrog",
    cost: 2,
    effect:
      "This [PILOT] may immediately perform an Attack action at a -2 penalty after moving vertically, such as making an Advance action vertically or boosting vertically or using Vertical Jump Jets",
  },
  {
    name: "Lucky Cat",
    cost: 3,
    effect:
      "This [PILOT] has a pet cat. Pet the cat before sortie. Roll 3d3. The result is how many dice this [PILOT] can reroll once per game.",
  },
  {
    name: "Martyr",
    cost: 1,
    effect:
      "This [PILOT] rolls a PS 5+ skill check to summon the courage to sacrifice oneself for his/her nation. If succesfull, the PILOT's MSU immediately enters a [REACTOR CRITICAL] state and suffers an automatic success on the explosion roll.",
  },
  {
    name: "Measured Trigger",
    cost: 1,
    effect: "Replace the [FULL AUTO] weapon keyword with [BURST(3)] keyword.",
  },
  {
    name: "Mechanic",
    cost: 1,
    effect:
      "Increase the total tonnage by 6 (+6 Equipment Tonnage) OR increase FRO by 2.",
  },
  {
    name: "Mechanic Pro (EFGF)",
    cost: 2,
    effect:
      "Reduce the FRO requirement of one weapon by 2 and one weapon gains the [INBUILT] trait.",
    restrictions: "EARTH FEDERATION GROUND FORCES ONLY",
  },
  {
    name: "Mentor",
    cost: 1,
    effect: `At step 1.4 of the Status Phase, all [FIRETEAM] members within 8" of this [PILOT] may substitute their base Gunnery, Brawl, and Piloting skills with this [PILOT]'s respective statistics. (i.e if this [PILOT] has Gunnery, Rambo traits, the total statistic will be shared and replace the original statistics of other friendly [FIRETEAM] members). [FIRETEAM] members that choose to do so must subsitute every stat, they cannot choose to selectively replace only some of their statistics.`,
    restrictions: "",
  },
  {
    name: "Momentum Specialist",
    cost: 1,
    effect:
      "When this MSU consumes 3 FRO to [BOOST(X)], increase melee attack dice from 1d6 to 2d3 + 1 Trait Mod.",
  },
  {
    name: "Mozambique Training",
    cost: 2,
    effect:
      "When firing a ROF 3 or greater ranged weapon, the third hit location rolled automatically hits the Head Location",
  },
  {
    name: "Newtype",
    cost: 4,
    effect:
      "Increase two different base pilot stats by 1. Gain access to [NEWTYPE] upgrade traits.",
  },
  {
    name: "Nemesis",
    cost: 2,
    effect:
      "Once per round, this [PILOT] can perform a free [REACTIVE ATTACK] action at a -3 penalty (instead of the usual -2)",
  },
  {
    name: "Oldtype Ace",
    cost: 2,
    effect:
      "This [PILOT] cannot take the [CYBER NEWTYPE] or [NEWTYPE] pilot traits. Once per turn, this [PILOT] may reroll an Evasion Check",
  },
  {
    name: "Opportunistic",
    cost: 1,
    effect:
      "Attacks made by this [PILOT] against enemy MSUs with lower initiative may reroll 1 attack dice.",
  },
  {
    name: "One Year War Veteran",
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
      "[AOE(x)] weapons gain [INDIRECT] in [REACTIVE ATTACK] actions. When firing via [INDIRECT] in [REACTIVE ATTACK], ignore the [INDIRECT] penalty",
  },
  {
    name: "Prowler",
    cost: 1,
    effect:
      "As long as this [UNIT] is touching the edge of the battlefield, it cannot be declared as a target of ranged REACTIVE ATTACKS at the start of it's movement action",
  },
  {
    name: "Pyromaniac",
    cost: 1,
    effect:
      "All [AOE(X)] ranged weapons now also have [MUNITIONS]: Napalm effect in addition to base damage. Use the greatest [AOE(X)] value for determining area of effect radius.",
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
      "When wielding two weapons (one in each [UNIT]s hands) or using a pair of Psycommu Hands, increase Gunnery or Brawl by 1.",
  },
  {
    name: "Reactive",
    cost: 2,
    effect:
      "During Reactive Attack actions, the [UNIT] may reroll up to 1 + X Attack dice equal to PS mod.",
  },
  {
    name: "Recon Operative",
    cost: 2,
    effect:
      "A [PILOT] may purchase one ECM/ECCM and Forward Observer support equipment for free.",
  },
  {
    name: "Rookie",
    cost: 0,
    effect:
      "Base Gunnery, Brawl, Piloting defaulted 0. Limited Use [1]: Ignore hit location of one enemy attack.",
  },
  {
    name: "Saboteur",
    cost: 1,
    effect:
      "At game start, choose an enemy [PILOT] to roll a PS 5 check. If failed, choose one penalty: Increase all Passive FRO cost by 1; Remove a support equipment with Weapon location; Reduce movespeed by 1 and FRO Limit by 1. A Enemy [PILOT] cannot be targeted by this Saboteur trait more than once",
  },
  {
    name: "Samurai",
    cost: 1,
    effect:
      "When wielding a Sword, Mace, or Axe type weapon or CQC or Heavy Weapon with two hands, that melee weapon gains [GRIP],[PRECISE] and [COUNTERSTRIKE] keywords",
  },
  {
    name: "Scavenger",
    cost: 1,
    effect: "Reduce one Support Equipment's or Weapon's cost by 50% MCU.",
  },
  {
    name: "Serial Killer",
    cost: 1,
    effect:
      "For each enemy unit destroyed by this [PILOT], gain +1 Gunnery or Brawl.",
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
    name: "Shrug it off",
    cost: 1,
    effect:
      "When this [PILOT] is affected by an area affect of an [AOE(X)] attack, this [PILOT] may roll a PS 5+ check to ignore the [AOE] effect.",
  },
  {
    name: "Shotcaller",
    cost: 2,
    effect:
      "When this [PILOT] declares a [REACTIVE] attack with a ranged weapon, choose a hit location. Whenever a ranged attack hits that hit location, this [PILOT] can choose to remove an weapon or an support equipment assigned to that hit location",
  },
  {
    name: "Six Shooter",
    cost: 1,
    effect:
      "Whenever this [PILOT] performs a [SWAP] action, to switch to a pistol, that pistol gains +1 ROF, +1 Base Damage, and +1 hit modifier.",
  },
  {
    name: "Suppressive Tactics",
    cost: 1,
    effect:
      "Enemy MSUs suppressed by this [PILOT] reduce their base movespeed by 2.",
  },

  {
    name: "Theme Song",
    cost: 2,
    effect:
      "All other friendly [UNIT]S within 8 inches may reroll 1 attack dice per round",
  },
  {
    name: "Trash Talker",
    cost: 1,
    effect:
      'At Step 1.4 of Status Phase, the [PILOT] can spend 1 FRO to trash talk. ALL enemy [PILOT]s within 24" must make a PS 5 check or suffer -1 penalty to Gunnery and Brawl.',
  },
  {
    name: "Tricky",
    cost: 1,
    effect:
      "After rolling initiative but before rerolling ties, adjust [PILOT] initiative result by +2 or -2.",
  },
  {
    name: "Unorthodox Training",
    cost: 1,
    effect:
      "Inverse the rangeband mods of all ranged weapons. For example a rangeband spread of -2 | 0 | +1 | +2 would become +2 | 0 | -1 | -2",
  },
  {
    name: "Vindictive",
    cost: 1,
    effect:
      "This [PILOT] gains +1 Brawl and +1 Gunnery against the enemy [UNIT] who last damaged this [PILOT]'s MSU.",
  },
  {
    name: "Wolf Pack",
    cost: 2,
    effect:
      'If 1 friendly MSU within 8": This [PILOT] mayreroll 1 attack dice per round. If 2 friendly MSUs within 8": This [PILOT] may reroll 1 evasion roll per round. If 3+ friendly MSUs within 8": This [PILOT] gain +1 Piloting, +1 Brawl, +1 Gunnery.',
  },
  {
    name: "War Criminal",
    cost: 1,
    effect:
      "This [PILOT] may target [CIVILIANS] without penalty. This [PILOT] does not incur Victory Point penalties for killing [CIVILIANS]",
  },
  {
    name: "Black Ops (REZEON)",
    cost: 2,
    effect:
      "When this [UNIT] moves less than 8 inches, you may reroll [X] hit locations per round equal to this pilot's Piloting.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Body Guard (REZEON)",
    cost: 2,
    effect:
      "When another friendly [UNIT] is targeted within 8 inches, you may spend an action and 1 FRO to move into base contact with the friendly [UNIT]. If base contact is established, any damage inflicted onto the friendly [UNIT] is halved rounding up, with the remainder attributed to a random hit location on this Pilot's MSU.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Gryps War Veteran (REZEON)",
    cost: 1,
    effect:
      "When piloting a TITAN's MSU, you may increase one of the following stats: Gunnery, Brawl or Piloting by 1.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Hardened (REZEON)",
    cost: 1,
    effect:
      "When making a Seek Cover automatic reaction, this pilot may choose to pass or fail without making a PS skill roll.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Martian Engineering (REZEON)",
    cost: 2,
    effect:
      "This Pilot may purchase EXTRA ARMOR [10] upgrades for 5 MCU each instead of 10.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Militant Training (REZEON)",
    cost: 3,
    effect:
      "At step 1.4 of Status Phase, Friendly MSUs within 8 inches may spend 2 FRO to rotate up to 360°.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "Nostalgic (REZEON)",
    cost: 2,
    effect:
      'This Pilot ignores the ZEON restricted MSUs in "DEVELOPMENTAL SPLIT". This Pilot also gains +1 Piloting.',
    restrictions: "REZEON ONLY",
  },
  {
    name: "Predator (REZEON)",
    cost: 3,
    effect:
      "Whenever this Pilot targets an enemy MSU, that MSU suffers a -1 penalty to EVASION skill checks.",
    restrictions: "REZEON ONLY",
  },
  {
    name: "TR Engineer (REZEON)",
    cost: 2,
    effect:
      'If this Pilot is controlling a "TR" named MSU, reduce the MCU cost by 25.',
    restrictions: "REZEON ONLY",
  },
];
