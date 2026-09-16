// Condensed, card-ready summaries of every named State.
// Sourced from Chapter 3 (States.js, section 3.6).
export const STATES = [
  {
    name: "[CRIPPLED]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "Legs have suffered severe damage. Ground Operations: reduce movespeed by 2\". Space Operations: does not fall — reduce movespeed by 50% instead.",
  },
  {
    name: "[CROUCHED]",
    section: "3.6",
    tags: ["STATE"],
    effect: "The MSU has physically reposed into a crouch. Movement is halved.",
  },
  {
    name: "[KNOCKDOWN]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "Crawl at half speed; can still shoot normally but must prop itself up with one hand. −2 penalty to all skill checks. Spend half movement to stand up and remove this state.",
  },
  {
    name: "[FEAR/SHAKEN]",
    section: "3.6",
    tags: ["AUTOMATIC"],
    effect:
      'Whenever a friendly MSU is destroyed, all friendly units within 8" must make a PS 5+ check. Failure: permanent −1 penalty to all skill checks for the rest of the game (does not stack with further instances). While in this state, must use an action to make a mandatory movement toward the nearest board edge if possible.',
  },
  {
    name: "[AIMING]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "Gained from the [AIM] action. Persists until the MSU moves forward, backward, or sideways — rotating in place does not remove it. [REACTIVE ATTACK]s made with a ranged weapon treat the enemy's evasion as if it were standing still, and may be declared at any point during the enemy's Movement Phase.",
  },
  {
    name: "[STEALTH]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "+1 circumstance bonus to Evasion checks. Outside the LOS of all enemy [UNITS], replace the MSU with a 60mm token on the same base position; enemies need a 5+ to \"reveal\" it (swap the token for the model, facing any direction). Once revealed, cannot re-enter [STEALTH] until it breaks LOS with all enemies again. Attacks declared against the token form impose a −2 penalty to the attacker's Evasion checks; enemies cannot declare Reactions or free-reaction abilities against its activation or movement.",
  },
  {
    name: "[SUPPRESSED]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "Triggered when a [SUPPRESSIVE] weapon scores hits on two or more distinct hit locations in one attack. Must immediately stop any forward movement (Boost, Blitz, Support Equipment, base movement); may only move sideways or backward, and cannot move closer to the wielder. Removed when: it spends an action in the Status Phase; the wielder breaks LOS; the wielder moves with [BOOST]/[BLITZ]/[ADVANCE]/[IMPACT]; or the wielder ends up beyond max rangebands.",
  },
  {
    name: "[HOVER]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "Declared when an MSU ends movement airborne, to hold its current altitude for the round. Costs 1 FRO at Status Phase Step 2 — if unpaid, it immediately enters [FALL]. At the start of its next activation it must choose [HOVER] again (pay 1 FRO) or [FALL]. Falling from [HOVER] counts the drop distance as movement for the Evasion Tier Table.",
  },
  {
    name: "[FALL]",
    section: "3.6",
    tags: ["STATE"],
    effect:
      "An airborne MSU that does not (or cannot) [HOVER] drops to ground level at no movement cost. PS 5 check: Failure = 3 damage per 4\" fallen to one hit location. Success = no damage, and if it lands within melee range of an enemy PILOT/MSU it may immediately declare an [ATTACK] action. Fall distance counts toward the Evasion Tier Table.",
  },
];
