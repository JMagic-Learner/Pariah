export const KEYWORDS = [
  {
    name: "[AP(X)]",
    desc: "Declare Anti-Armor or Anti-Material mode when attacking. Anti-Armor: After rolling hit locations and assigning damage to hit locations, assign X damage to the Torso. If a shield intercepted the direct damage, deal X damage to the assigned arm instead. Direct TORSO hits also remove one randomly chosen equipment (roll 1d3). Anti-Material: enemy MSU cannot nullify hit locations with HARD COVER.",
  },
  {
    name: "[AOE(X)]",
    desc: "On a direct hit or at a targeted [INDIRECT] point, all other MSUs within (X) inches suffer half the weapon's base damage (rounded up) to one hit location.",
  },
  {
    name: "[AKIMBO]",
    desc: "Reduces [SIMULTANEOUS ATTACK] penalties when dual-wielding. MEDIUM or HEAVY with [AKIMBO]: –2 penalty → –1. LIGHT with [AKIMBO]: –2 penalty → 0. Weapons of different weight classes each apply their own reduced penalty.",
  },
  {
    name: "[AMBPHIBIOUS]",
    desc: "No movement penalties in water terrain. Gain [BOOST(X+1)] while moving through water.",
  },
  {
    name: "[BRACE]",
    desc: "HEAVY weapons with [BRACE] do not require two hands to fire, as long as the weapon is supported by a Gunpla feature or limb (shoulder mount, leg [BRACE], deployed shield, etc.).",
  },
  {
    name: "[BURST(X)]",
    desc: "When declaring an attack, reduce the weapon's ROF by 2 to reroll (X) attack dice. Cannot be used simultaneously with [FULL AUTO].",
  },
  {
    name: "[CIVILIANS]",
    desc: "[PILOTS] cannot directly target [CIVILIANS]. [CIVILIANS] are represented by 25mm tokens on the battlefield. [CIVILIANS] have one armor and one hit location. [CIVILANS] deduct 1 victory point per token eliminated. CIVILIANS move 6 inches away from the nearest MSU within 16 inches.",
  },
  {
    name: "[CLEAVE(X)]",
    desc: "On a successful melee attack, roll 1 additional hit locations. That additional hit location does an additional X damage equal to [PILOT] Brawl skill.",
  },
  {
    name: "[CLUSTER]",
    desc: "Automatically hits enemy targets within 6 inches — no evasion roll allowed. Additionally, one attack die (up to ROF) can be assigned per MISSILE TOKEN within 12 inches; those tokens are destroyed immediately without triggering their MUNITIONS effects.",
  },
  {
    name: "[COUNTERSTRIKE]",
    desc: "When an incoming melee attack is declared: rotate the MSU up to two hex facings. Use Brawl instead of Piloting for Evasion checks against melee (formula: 1d6 + Brawl + Weapon Mod vs. incoming attack roll). If the check succeeds, the attacker suffers this weapon's damage to one hit location. Does not interact with CLEAVE — only one location is rolled.",
  },
  {
    name: "[COMMANDER]",
    desc: "If a [PILOT] is a [COMMANDER], the [PILOT] gains one Command Action. These Command Actions are not refreshed on Staus Phase Step 1.4, so they are single use. These Command Actions can only be spent on [COMMANDER ACTION] abilities. A [PILOT] with this keyword gains access to [COMMANDER ACTIONS]",
  },
  {
    name: "[CYCLIC]",
    desc: "+1 ROF. If two [CYCLIC] upgrades exist on a Beam type weapon, increase active FRO by 1",
  },
  {
    name: "[DEPLOYABLE]",
    desc: "This equipment can be physically placed on the battlefield. Usually specifies a base size. Deployed equipment auto-hits when targeted and has 10 HP with one hit location. MSUs spend one action during the MOVEMENT phase to deploy equipment within 8 inches. Equipment can be deployed as a reaction",
  },
  {
    name: "[EXTRA ARMOR(X)]",
    desc: "Increase the designated hit location's hit points by (X). Cannot modify the hit points of Shields or Heavy Shields.",
  },
  {
    name: "[FULL AUTO]",
    desc: "Increase the weapon's ROF by 3 and incur a –2 modifier to all GS checks for that attack. Cannot be used simulatenously with BURST.",
  },
  {
    name: "[FEATHERWEIGHT]",
    desc: "MSU whose total equipment tonnage weighs less than 10 tons gain +2 base movespeed",
  },
  {
    name: "[GRIP]",
    desc: "If the MSU model is holding this weapon with two hands, reroll all hit dice that show a 1.",
  },
  {
    name: "[GUIDED]",
    desc: "Missiles with [GUIDED] can rotate their hex facing by 45° at Status Phase Step 1.2. Missiles with [ENHANCED GUIDED] (a Newtype upgrade) can rotate 90° instead.",
  },
  {
    name: "[HEAVY]",
    desc: "6+ tons in weight. Requires two hands to wield, mounted, or one hand with a [BRACE] weapon",
  },
  {
    name: "[IMPACT(X)]",
    desc: "On a successful hit, push the target directly away from the attacker. LIGHT weapon: (X) inches. MEDIUM: [X+1] inches. HEAVY: [X+2] inches. If the target's base contacts HARD COVER or another MSU, both take 5 damage to one hit location. The push occurs once per attack declaration, after all dice are resolved.",
  },
  {
    name: "[INBUILT]",
    desc: "Integrated into the MSU frame. Can be fired in Reaction and Shooting phases without a SWAP action. Occupies either the WEAPON slot or an Equipment slot at its hit location. Cannot be the target of Swap actions.",
  },
  {
    name: "[INDIRECT]",
    desc: "Can target a point or enemy MSU without line of sight with a -2 [INDIRECT] penalty. Targeting a point: roll 1d6 + STAT MOD + other mods – 2 ([INDIRECT] penalty) against a static value of 3. Targeting an MSU outside LOS: GS check + mods – 2 vs. the target's Evasion Skill check.",
  },
  {
    name: "[LETHAL]",
    desc: "When hit location dice show matching doubles (two 1s, two 2s, two 3s, etc.), double the weapon's base damage for that hit.",
  },
  {
    name: "[LIMITED USE(X)]",
    desc: "This weapon or piece of equipment can only be used up to (X) times per battle. Track usage on the MSU sheet.",
  },
  {
    name: "[LIGHT]",
    desc: "This weapon is 1-2 tons in weight, and can be wielded in either hand",
  },
  {
    name: "[MEDIUM]",
    desc: "This weapon is 3-5 tons in weight, and can be wielded in either hand",
  },
  {
    name: "[MISSILE(X)]",
    desc: "When firing MISSILE weapons, do not roll attack dice. Place MISSILE tokens X inches away in the front arc (one per ROF) each with a d6 countdown of 2. Each Status Phase Step 1.2, move tokens (X) inches straight ahead ([GUIDED] tokens may rotate 45° at the start of Status Phase 1.2 before moving. Rotating 45* does not reduce movement as it would for MSU). The missile detonates on contact with terrain, an MSU, or when the timer expires. The target rolls an Evasion check FOR EACH INCOMING MISSILE vs a static value of 6`+ to negate. Missiles cannot detonate within the minimum range band. Missiles follow the same constraints for hidden or protected hit locations. Missiles that are succesfully evaded or roll a hit location that is hidden/protected by Line of Sight continue traveling their full distance through the MSU",
  },
  {
    name: "[MOMENTUM]",
    desc: "Whenever the wielder declares a [BLITZ], the wielder may also make a ROF 1 Melee attack with a [MOMENTUM] weapon.",
  },
  {
    name: "[MOUNTABLE]",
    desc: "Weapon is attached via pegs or hardpoints. Can be fired in [ATTACK] actions. Cannot be fired in [REACTIVE ATTACK] actions. Ignores HEAVY two-hand restrictions. Cannot be the target of Swap actions.",
  },
  {
    name: "[MUNITIONS]",
    desc: "Weapons with the Munitions type can customize their explosive payload, declared at MSU creation. Munitions do not cost additional tonnage or MCU. Two weapons of the same type may carry different Munitions.",
  },
  {
    name: "[PRECISE]",
    desc: "When comparing hit rolls against Evasion Checks, the attacker now succeeds on tied results (normally a tie is a miss).",
  },
  {
    name: "[PSYCOMMU]",
    desc: "MSU, equipment, or weapons with this keyword require a pilot with the NEWTYPE or CYBER-NEWTYPE trait.",
  },
  {
    name: "[PSYCOFRAME]",
    desc: "Pilots using an MSU with this keyword gain one additional Newtype Pilot trait.",
  },
  {
    name: "[QUICK SWAP]",
    desc: "Swap actions from [STOWAGE] to this weapon are free. Can swap this weapon between hands. Can declare SWAP in the Attack Phase and as a Reaction.",
  },
  {
    name: "[SCOPE]",
    desc: "Ranged attacks using this weapon impose a –1 Evasion modifier on the target. Once per attack declaration, reroll one hit location die.",
  },
  {
    name: "[RELOAD]",
    desc: "See the [RELOAD] action (Section 3.2). The weapon must be reloaded before it can be fired again.",
  },
  {
    name: "[STOWAGE] / [STORED] / [STOWED]",
    desc: "Equipment that is holstered, attached to a rack, or otherwise [STORED]. Weapons in [STOWAGE] cannot be used for [ATTACK] or [REACTIVE ATTACK] until readied by a SWAP action.",
  },
  {
    name: "[SUPPRESSIVE]",
    desc: "When this weapon hits two or more distinct hit locations on the same target in one attack, that MSU enters SUPPRESSED state. Suppressed: must stop all forward movement; can only move sideways or backward; cannot move closer to the wielder. SUPPRESSED is removed when: the target spends an action; the wielder breaks LOS, moves, or moves out of max rangebands.",
  },
  {
    name: "[THROW]",
    desc: "This weapon can be thrown as a ranged attack. Thrown range band is listed in parentheses next to the normal range band. Whenever a [PILOT] declares a throwing [ATTACK], use PS instead of GS.",
  },
];
