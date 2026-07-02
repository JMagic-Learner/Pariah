export const FACTIONS = [
  {
    name: "Earth Federation",
    color: "bg-dark-blue",
    lore: "The Earth Federation Space Force fields mass-produced mobile suits in large numbers, backed by superior logistics and coordination. Their [PILOT]s emphasize combined-arms tactics and precision fire.",
    generalBonuses: [
      {
        title: "CORRUPT GOVERNMENT",
        text: "For each unspent pilot Trait, gain +50 MCU.",
      },
      {
        title: "HEAD MOUNTED VULCANS",
        text: "All EFF MSUS may come equipped with Vulcan Cannons. These Vulcan Cannons occupy the weapon slot in the Head hit location. In addition, these Vulcan Cannons do not incur tonnage and do not cost MCU. Furthermore, these head mounted weapons do not factor into base cost calcualtions of the MSU",
      },
    ],
    subfactions: [
      {
        name: "TITANS",
        bonuses: [
          {
            title: "ZEONIC TECHNOLOGY",
            text: "Pilots may purchase MSU from the ZEON force list",
          },
          {
            title: "CYBER NEWTYPE EXPERIMENTATION",
            text: "You may purchase the [CYBER-NEWTYPE] pilot trait.",
          },
        ],
      },
      {
        name: "LONDO BELL",
        bonuses: [
          {
            title: "Covert Insertion",
            text: "Pilots may purchase the [CAMO-CLOAK] support equipment",
          },
          {
            title: "ECOA SPEC OPS",
            text: "Pilots may obtain the first [GUNNERY] trait or [PILOTING] trait for 0 trait cost. Any subsequent purchases of either pilot trait will have normal trait costs",
          },
        ],
      },
      {
        name: "E.F GROUND FORCES",
        bonuses: [
          {
            title: "LOCKED AND LOADED",
            text: "All [HEAVY] ranged weapons come with the [MOUNTABLE trait. Pilots may reroll X D6 attack dice equal to their PS when declaring an attack with a [FULL AUTO] weapon ",
          },
          {
            title: "IMPROMPTU MECHANICS",
            text: "Pilots may purchase the [MECHANIC PRO] trait",
          },
        ],
      },
      {
        name: "E.F SPACE FORCES",
        bonuses: [
          {
            title: "NAVAL WARFARE SPECIALIST",
            text: "Pilots may purchase Anti-Ship Rifles for 75 MCU each. Pilots may also perform the [RELOAD] action by spending 2 FRO",
          },
          {
            title: "NAVAL BOMBARDMENT",
            text: "After the deployment phase, the [COMMANDER] signals for NAVAL BOMBARDMENT. The [COMMANDER] immediately nominates a point on the battlefield and places a 25mm AIRSTRIKE! marker outside 16 inches of the enemy deployment zone.",
          },
        ],
      },
      {
        name: "STRATEGIC NAVAL RESEARCH INSTITUTE",
        bonuses: [
          {
            title: "ADVANCED FUSION REACTORS",
            text: "Increase base MCU cost of MSU by 10%. All MCU gain +1 FRO",
          },
          {
            title: "BLACK BOX RESEARCH",
            text: "All passive FRO cost of Support Equipment is reduced by 1, to a mininum of 1. All active FRO costs of Ranged Weapons are reduced by 1 to a mininum of 1",
          },
        ],
      },
    ],
  },
  {
    name: "Principality of ZEON",
    color: "bg-dark-red",
    lore: "ZEON mobile suits are built for speed, shock, and overwhelming close-quarters violence. ZEON [PILOT]s are aggressive, relying on superior mobility and powerful weapons to break enemy lines before they can react.",
    generalBonuses: [
      {
        title: "SIEG ZEON!",
        text: "After conducting a [BLITZ] manuever, the [PILOT] may choose to autodenotate any number of grenades or panzerfausts. Grenades fired in this manner are assumed to denotate in base contact with the MSU. All ZEON MSUs may come equipped with Spiky Shoulders. These Spiky Shoulders occupy one equipment slot in either arm location. In addition, these Spiky Shoulders do not incur tonnage and do not cost MCU. Furthermore, this equipment do not factor into base cost calcualtions of the MSU",
      },
      {
        title: "MILITANT INNOVATION",
        text: "Reduce the MCU cost of MG type weapons and grenade launchers by 15 MCU. Reduce the tonnage of MG type weapons and grenade launchers by 1 ",
      },
    ],
    subfactions: [
      {
        name: "NEO ZEON AXIS",
        bonuses: [
          {
            title: "NEWTYPE IDEALOGY",
            text: "Pilots who purchase the [NEWTYPE] upgrade trait now gain access two NEWTYPE traits instead of one",
          },
          {
            title: "PSYCOMMU PIONEERS",
            text: "Pilots may purchase Quasi Psycommu Systems for 75 MCU.",
          },
        ],
      },
      {
        name: "ZEON REMNANTS",
        bonuses: [
          {
            title: "SCAVENGERS",
            text: "All ZEON MSU dated 0080 or earlier receive a 25% discount in base MCU cost.",
          },
          {
            title: "GUERILLA FIGHTERS",
            text: "When building a Zeon Remnants [FIRETEAM], one MSU can be nominated to be `In Ambush`. This MSU is not deployed alongside the rest of their squadron during deployment, but is instead held in reserve. At the beginning of any Status Phase, the ambushing MSU can be deployed along any board edge, and cannot conduct a [MOVEMENT] action, counting as having moved up to its full base movement value. If the other MSU's in the Zeon Remnants list have been destroyed, and the ambushing MSU has not yet been deployed in the manner described above, then the ambushing MSU also counts as having been destroyed. If at any point the Zeon Remnants player has no MSU's on the board, then they have been defeated.",
          },
        ],
      },
      {
        name: "NEO ZEON SLEEVES",
        bonuses: [
          {
            title: "INDUSTRY OF WAR",
            text: "Geara Doga and Geara Zulu (and it's associated MSU variants) receive a 10% discount in base MCU cost",
          },
          {
            title: "AXIS DROP ASSAULT TACTICS",
            text: "Instead of deploying normally, NEO ZEON SLEEVES Fireteams may move thier base movement and up to three FRO expenditures in [BOOST(X)]. The movement done during the deployment phase counts toward the Evasion Tier Table",
          },
        ],
      },
      {
        name: "AU BAU QU ROYAL GUARD",
        bonuses: [
          {
            title: "ROYAL GUARD",
            text: "Pilots may purchase [HEAVY SHIELDS]",
          },
          {
            title: "AVALANCE OF AGGRESSION",
            text: "Whenever a MSU in this force is targeted by a ranged weapon, and the attacker is in LOS, this MSU may immediately [BOOST(6)]",
          },
        ],
      },
      {
        name: "CIMA'S FLEET",
        bonuses: [
          {
            title: "SPACE RAIDERS",
            text: "Pilots may purchase one of the following equipment for 0 MCU cost: Nanolaminate Chaff, High Velocity Missiles, or Heavy Boosters",
          },
          {
            title: "EVASIVE",
            text: "Pilots with the Juke or Eyes on You! pilot traits may perform their respective reactions twice per round",
          },
        ],
      },
    ],
  },
  {
    name: "Neutral",
    color: "bg-dark-gray",
    lore: "Not all mobile suits fight for a unified cause. Mercenaries, rogue units, and independent operators occupy the battlefield with flexibility as their greatest weapon — no allegiance, no restrictions.",
    generalBonuses: [],
    subfactions: [
      {
        name: "CROSSBONE VANGUARD",
        bonuses: [
          {
            title: "SPACE PIRACY",
            text: "Pilots may purchase MSU from either EFF or ZEON force lists.",
          },
          {
            title: "VANGUARD AMBUSH",
            text: "You may select three terrain pieces 24 inches outside the enemy deployment edge. These terrain pieces are considered to be trapped with explosives. Whenever an enemy MSU moves or enters within 6 inches of a trapped terrain piece, that MSU must make a PS 6 skill check. If failed, that MSU receives 10 points of damage to one hit location",
          },
          {
            title: "CAPTAIN'S ORDERS",
            text: "Whenever a [COMMANDER] performs a REPOSITION action, all friendly MSU may move an additional 4 inches without penalty. (To a max total of 10 inches of movement during REPOSITION)",
          },
        ],
      },
      {
        name: "CIVILIAN MILITIA",
        bonuses: [
          {
            title: "ENTRENCHED POSITIONS",
            text: "MSU gain +1 Evasion mod while inside [OBSCURING] terrain",
          },
          {
            title: "JURY RIGGED",
            text: "Militia MSUs may reduce the MCU cost of one Support System by 25 points (minimum 10 MCU).",
          },
          {
            title: "CIVILIAN CASUALTIES",
            text: "Enemy [PILOT]s who destroy an Infantry unit for the first time, must make a [FEAR/SHAKEN] state test at a -1 penalty",
          },
        ],
      },
      {
        name: "AEUG",
        bonuses: [
          {
            title: "ANAHEIM SUPPLIER",
            text: "Pilots may purchase MSU from either EFF or ZEON force lists.",
          },
          {
            title: "NEMO ORIGINS",
            text: "Pilots may purchase the MSA-003 NEMO for 100 MCU",
          },
          {
            title: "COALITION FORCE",
            text: "Pilots may purchase the Cross Discipline trait for 0 trait cost, and obtain faction bonuses from any EFF or ZEON subfaction (still subject to the Cross Discipline free trait restriction)",
          },
        ],
      },
      {
        name: "MAFTY",
        bonuses: [
          {
            title: "COORDINATED INSURGENCY",
            text: "Once per round, after two MAFTY units hit the same enemy target, both MAFTY units may [BOOST(6)] immediately after hit locations have been rolled.",
          },
          {
            title: "PREPARED CELLS",
            text: "Once per game, MAFTY forces may redeploy one MSU after Round 1 Initiative phase. Redeployed units come in on Round 2, Step 1.4 of the Status Phase. That MSU comes in on either side of the board edge, outside 6 inches of the enemy deployment zone",
          },
          {
            title: "HIGH EFFICIENCY LOGISTICS",
            text: "MAFTY MSUS may ignore the first FRO overload increment",
          },
        ],
      },
      {
        name: "MERCENARIES",
        bonuses: [
          {
            title: "BY THE BUCK",
            text: "All MSU dated 0080 or earlier reduce base MCU costs by 20%. MERCENARY Pilots must reduce one of thier base pilot traits (Gunnery, Brawl, Piloting) to 0",
          },
          {
            title: "CONTRACT KILLERS",
            text: "Nominate one enemy [PILOT]/MSU. All MERCENARY Pilots gain +1 Gunnery and +1 Brawl when declaring ATTACK actions against that nominated [PILOT]/MSU",
          },
          {
            title: "AFTERMARKET EQUIPMENT",
            text: "Pilots can only purchase weapons and support equipment that cost 70 MCU or less ",
          },
        ],
      },
    ],
  },
];
