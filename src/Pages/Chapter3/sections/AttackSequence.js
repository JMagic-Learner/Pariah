export const AttackSequence = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.5 — Attack Sequence</h2>

      <p className="lh-copy mb4">
        All ranged and melee attacks follow the same nine-step sequence. Resolve
        each step in order before proceeding to the next.
      </p>

      {[
        {
          step: 1,
          title: "Declare Attack",
          body: "The active player declares which of their MSU's weapons is being used, and nominates a target MSU. Confirm the target is valid (in range, in LOS, not STEALTH-hidden).",
        },
        {
          step: 2,
          title: "Check Line of Sight (LOS)",
          body: "Draw an imaginary line from the attacker's base to the target's base. If the line is fully blocked by terrain, the attack is invalid. If partially blocked, the target gains +1 EVA die (Obscuring Cover). STEALTH MSUs cannot be targeted unless the attacker moved within 4\" of them.",
        },
        {
          step: 3,
          title: "Determine Range Band",
          body: "Measure the distance between bases. Compare to the weapon's range band table to identify the applicable band (Close / Short / Medium / Long). Apply the corresponding MOD to the attack roll. If the distance exceeds the Long range band, the attack is invalid.",
        },
        {
          step: 4,
          title: "Check Arc",
          body: "Verify the target falls within the attacker's front-facing arc (180°). Rear-arc attacks suffer −2 to hit. Weapons with Panoptic Canopy support system may fire from 360° with no penalty.",
        },
        {
          step: 5,
          title: "Roll to Hit",
          body: "Roll 1d6. Add the pilot's GS (ranged) or BR (melee) modifier, the weapon's range band MOD, and any circumstance modifiers (traits, states, terrain). Compare the total to the Target Number (default 4). One roll per ROF die.",
        },
        {
          step: 6,
          title: "Roll Evasion",
          body: "The defending player rolls their EVA dice pool. Each die result of 4+ removes one incoming hit. Apply all relevant EVA modifiers before rolling. Hits removed by EVA do not proceed to the next steps.",
        },
        {
          step: 7,
          title: "Roll Hit Locations",
          body: "For each hit that survived the Evasion roll, roll 2d6 on the Hit Location table. Weapons with [PRECISE] keyword allow the attacker to choose the location instead. AOE hits distribute across multiple locations per the AOE rules.",
        },
        {
          step: 8,
          title: "Apply Armor & Damage",
          body: "For each hit location: subtract AP[X] from that location's current Armor (min 0). Then subtract remaining Armor from the weapon's DAM. Any remaining damage is applied to that location's HP. Track HP on the MSU sheet.",
        },
        {
          step: 9,
          title: "Resolve Consequences",
          body: "Check each hit location. If HP reaches 0, apply the consequence: Head → sensor loss; Arm → CRIPPLED; Leg → CRIPPLED (both destroyed → KNOCKDOWN); Torso → MSU destroyed. Apply any keyword effects ([SUPPRESSIVE] → SUPPRESSED token; [IMPACT(X)] → push; Lethal → permanent armor reduction; Cleave → additional hit).",
        },
      ].map(({ step, title, body }) => (
        <div key={step} className="flex mb4 ba b--black-10 pa3">
          <div className="flex-shrink-0 w2 h2 bg-dark-red white fw7 f4 br-100 flex items-center justify-center mr3">
            {step}
          </div>
          <div>
            <h3 className="f5 fw7 ma0 mb1">{title}</h3>
            <p className="lh-copy ma0 f6">{body}</p>
          </div>
        </div>
      ))}

      <h3 className="f4 fw7 mt4 mb2">Melee-Specific Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          Melee attacks require the attacking MSU to be within the weapon's
          range (measured from base to base).
        </li>
        <li className="pv1">
          Melee attacks use BR instead of GS for the hit roll.
        </li>
        <li className="pv1">
          Opponents in base contact may use Counterstrike weapons as a free
          reaction.
        </li>
        <li className="pv1">
          Melee attacks against the rear arc of an MSU add +1 hit location roll
          (roll 2d6, use the higher result).
        </li>
        <li className="pv1">
          BLITZ attacks add base melee weapon damage as normal; if the attacker
          moved 21"+ this round, Kinetic Force applies.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Common Attack Modifiers Summary</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Situation</th>
              <th className="pa2 fw6 tc">Modifier</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["REPOSE this round (ranged)", "+1 GS"],
              ["Target in Obscuring Cover (ranged)", "+1 EVA die to defender"],
              ["Target in Hard Cover (ranged)", "+1 EVA die to defender"],
              ["Full Auto keyword used", "−2 to all hit rolls"],
              ["Scope at Long range", "−1 penalty (negated)"],
              ["Target in rear arc", "+2 hit mod (attacker advantage)"],
              [
                "Attacking SUPPRESSED target",
                "Normal (Titans faction: +1 DAM)",
              ],
              ["Attacking KNOCKED DOWN target", "Auto-hit, no EVA"],
            ].map(([sit, mod], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2">{sit}</td>
                <td className="pa2 tc fw6 dark-red">{mod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
