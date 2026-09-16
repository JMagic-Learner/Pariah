// Condensed, card-ready summaries of every named Action/Reaction/Maneuver.
// Sourced from Chapter 3 (Movement.js, AttackSequence.js, Reactions.js, OtherActions.js).
export const ACTIONS = [
  {
    name: "[ADVANCE]",
    section: "3.2",
    tags: ["MOVEMENT", "1 ACTION"],
    effect:
      'Move forward up to your MOVEMENT value. Cannot pass through enemy MSU; crushes enemy ground Support Units passed over (unless you have HOVER PLATFORM); may cross terrain under 3" tall freely. Turning one facing, moving backward, or moving sideways each cost 2" of movement. Vertical movement costs 2" per 1" of height. If you end airborne, choose [FALL] or [HOVER] (1 FRO, Status Phase Step 1.2). May [REPOSE] for 4" instead of a normal move.',
  },
  {
    name: "[BOOST(X)]",
    section: "3.2",
    tags: ["MOVEMENT"],
    effect:
      'Spend 1 FRO to move X" forward or vertically (default [BOOST(1)]; Heavy Boosters upgrade to [BOOST(2)]). May BOOST multiple times per activation if FRO allows, or use a BOOST to turn one facing instead. Counts toward the Evasion Tier Table. Spending 3 FRO on BOOST in one activation grants +1 Evasion mod.',
  },
  {
    name: "[BLITZ]",
    section: "3.2",
    tags: ["MOVEMENT", "2 ACTIONS", "1 FRO"],
    effect:
      'Requires 6" minimum distance to the target MSU; move in a straight line double your base movement (more for extra FRO spent). An enemy with LOS may spend an Action to Evade vs a static 6 to sidestep its base movement. MSUs struck are pushed along the path (one BLITZ can push multiple). Collision damage: target 10 + 1 per 3" moved; you take 5 + 1 per 3" moved (may assign to an equipped Shield first, losing Spiky Shoulder benefit if so).',
  },
  {
    name: "[REPOSE]",
    section: "3.2",
    tags: ["MOVEMENT"],
    effect:
      "Costs 4\" of movement. Adjust the MSU's stance to better benefit from [HARD COVER] — e.g. crouch to extend cover to the Torso.",
  },
  {
    name: "[AIM]",
    section: "3.2",
    tags: ["MOVEMENT", "ACTION"],
    effect: "Gain the [AIMING] state.",
  },
  {
    name: "[ATTACK]",
    section: "3.5",
    tags: ["ACTION", "ATTACK/COMBAT PHASE"],
    effect:
      "Declare one [READIED], [INBUILT], or [MOUNTED] weapon — locked in until the sequence ends. 1) Check LOS & range to the target or [HARD COVER] ([INDIRECT] weapons skip LOS). 2) Roll a number of dice equal to ROF (a BATCH). 3) Add [GS] (ranged) or [BR] (melee) + range mod + situational mods to each die (total mod capped at +4). 4) Defender rolls Evasion dice per the Evasion Tier Table + [PS] + mods. 5) Each attack die exceeding the Evasion total scores a hit — roll 2d6 per hit for location.",
  },
  {
    name: "[SIMULTANEOUS ATTACK]",
    section: "3.5",
    tags: ["ACTION", "ATTACK/COMBAT PHASE"],
    effect:
      "Declare two [READIED]/[INBUILT]/[MOUNTED] weapons ([MOUNTED] weapons are not eligible). −2 penalty to all attack dice unless a keyword (e.g. [AKIMBO]) says otherwise. Each weapon rolls its own BATCH (ROF dice + [GS]/[BR] + mods − 2). Defender rolls one Evasion Check against both batches; resolve hits per batch as normal (2d6 per hit for location).",
  },
  {
    name: "GRAPPLE",
    section: "3.5",
    tags: ["ACTION", "REACTION", "ATTACK/COMBAT PHASE"],
    effect:
      "Requires a [GRAPPLE] weapon, a free hand, or a gauntlet. Both PILOTs roll 1d6 + [BR]. The winner restrains both MSUs — neither can move, [BOOST(X)], or [BLITZ] away, and the grappled MSU may only rotate 2 facings. Break free by declaring a melee attack and successfully hitting any hit location.",
  },
  {
    name: "[REACTIVE ATTACK]",
    section: "3.4",
    tags: ["REACTION", "1 ACTION"],
    effect:
      "Trigger: an enemy [UNIT] moves more than 3\" and ends within your LOS (via a [MOVEMENT] action such as [ADVANCE] or [BLITZ]), or declares a melee attack — declare before the enemy resolves it. You must have LOS to the enemy when the trigger is declared, the enemy must be within the weapon's range band, and only [READIED]/[INBUILT] weapons are eligible. Sequence: 1) Declare the weapon. 2) The enemy action pauses. 3) Roll your attack dice + mods. 4) The enemy rolls Evasion as normal. 5) Resolve hits — 2d6 per hit for location.",
  },
  {
    name: "[EYES ON YOU]",
    section: "3.4",
    tags: ["REACTION", "PILOT TRAIT"],
    effect:
      "Once per Battle Round: immediately rotate to face an enemy MSU before it finishes its movement. Free — costs no movement or FRO.",
  },
  {
    name: "[JUKE]",
    section: "3.4",
    tags: ["REACTION", "PILOT TRAIT"],
    effect:
      "Once per attack declaration, when targeted by an attack you have LOS to: reroll one of your Evasion dice. The new result stands.",
  },
  {
    name: "SEEK COVER!",
    section: "3.7",
    tags: ["AUTOMATIC"],
    effect:
      "After receiving damage to any location: PS 5+ check. Success = MAY move your base movespeed toward cover, by priority: full cover, then partial cover, then nearest friendly unit, then the nearest board edge. Failure = MUST make this move. A [SUPPRESSED] MSU may still move backward/sideways to comply. Counts as movement for the Evasion Tier Table.",
  },
  {
    name: "GET IT TOGETHER!",
    section: "3.7",
    tags: ["COMMANDER ACTION", "ONCE PER GAME"],
    effect:
      'Status Phase Step 1.4: spend a [COMMANDER] Action, PS 5+ check. Success: remove [FEAR/SHAKEN] and [SUPPRESSED] from all [FIRETEAM] members within 18".',
  },
  {
    name: "REPOSITION!",
    section: "3.7",
    tags: ["COMMANDER ACTION", "ONCE PER GAME"],
    effect:
      'Status Phase Step 1.4: spend a [COMMANDER] Action. All [FIRETEAM] members may move up to 6" closer to the [COMMANDER], free of penalty.',
  },
  {
    name: "FOCUS FIRE!",
    section: "3.7",
    tags: ["COMMANDER ACTION", "ONCE PER GAME"],
    effect:
      'Status Phase Step 1.4: spend a [COMMANDER] Action to nominate one enemy PILOT/MSU as a priority target. [FIRETEAM] members within 8" may reroll ALL attack dice when targeting it, for one round.',
  },
  {
    name: "AIRSTRIKE!",
    section: "3.7",
    tags: ["ACTION"],
    effect:
      'Requires a Target Designator. Status Phase Step 4: spend an Action, nominate a Point of Interest, then roll PS 5+ three times — each success places an AIRSTRIKE token there. Next Shooting Phase: MSUs on/touching a marker take 15 damage to one location; all others within 8" take 10 damage. No evasion and no [HARD COVER] benefit against it. Removes [HARD COVER]/[OBSCURING COVER] within 8" that is under 4" tall and under 6"x6".',
  },
  {
    name: "FORWARD OBSERVE",
    section: "3.7",
    tags: ["ACTION"],
    effect:
      "Requires Forward Observer support equipment. Status Phase Step 4: spend an Action, mark an enemy unit in LOS, then roll PS 5+ three times. 1 success: target loses [OBSCURING COVER] benefit until end of round. 2 successes: ranged attacks against it get a +1 mod. 3 successes: ranged attacks against it roll 3d3 instead of 1d6 — all until end of round.",
  },
  {
    name: "SWAP",
    section: "3.7",
    tags: ["ACTION", "REACTION"],
    effect:
      "Move a weapon between [STOWAGE] and [READIED], in either direction.",
  },
  {
    name: "DROP",
    section: "3.7",
    tags: ["FREE", "REACTION"],
    effect: "Drop a [READIED] weapon or shield. Costs no action.",
  },
  {
    name: "RELOAD",
    section: "3.7",
    tags: ["ACTION", "REACTION"],
    effect: "Required to fire a weapon with the [SLOW RELOAD] keyword again.",
  },
];
