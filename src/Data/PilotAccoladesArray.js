export const PILOT_ACCOLADES = [
  {
    name: "Kill Count",
    cost: 1,
    effect:
      "For every 3 enemy MSUs this Pilot has destroyed across the Campaign, gain a permanent +1 bonus to Gunnery or Brawl (player's choice when purchased). Maximum +2 total from this Accolade.",
  },
  {
    name: "Colony Guardian",
    cost: 2,
    effect:
      "For every 3 [CIVLIANS] models/tokens that remains after a Campaign Battle, gain +1 bonus EXP at the end of that battle.",
  },
  {
    name: "Silent Ace",
    cost: 2,
    effect:
      "Once per Campaign Battle, this Pilot's MSU may enter [STEALTH] state (Section 3.6) without needing to first break line of sight from all enemy MSUs.",
  },
  {
    name: "Hardened Veteran",
    cost: 2,
    effect:
      "Whenever this Pilot rolls on the Pilot Fate Table (Section 6.3), they may reroll the result once, keeping the second result.",
  },
  {
    name: "Ace Pilot",
    cost: 2,
    effect:
      "This Pilot's total skill bonus cap increases from +4 to +5 for Attack Rolls only.",
  },
  {
    name: "Unbreakable Will",
    cost: 3,
    effect:
      "This Pilot automatically passes [FEAR/SHAKEN] checks on a roll of 3+ instead of 5+.",
  },
  {
    name: "One Man Army",
    cost: 3,
    effect:
      "If this [PILOT] is the last surviving [FIRETEAM] member, it rerolls all attack dice.",
  },
  {
    name: "Squadron Leader",
    cost: 3,
    effect:
      "Friendly [PILOT]s within 8 inches may use this Pilot's Piloting stat for Initiative Rolls instead of their own.",
    restrictions: "Limited 1 per [FIRETEAM]",
  },
  {
    name: "Living Legend",
    cost: 4,
    effect:
      "While this Pilot's MSU has more than half its hit locations remaining, enemy [PILOT]s targeting it suffer a -1 penalty to hit.",
  },
  {
    name: "Newtype Awakening",
    cost: 5,
    effect:
      "This Pilot immediately gains access to [NEWTYPE] upgrade traits, as though they had purchased the Newtype pilot trait, without spending Trait Points.",
  },
];
