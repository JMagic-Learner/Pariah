export const Reactions = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.4 — Reactions</h2>

      <p className="lh-copy mb3">
        Reactions are actions performed outside of your normal activation in response to an
        enemy action. Each MSU may perform a maximum of <strong>one Reaction per Battle Round</strong>{' '}
        unless a trait or special ability increases this limit. Declaring a Reaction uses up the
        MSU's reaction for that round.
      </p>

      <h3 className="f4 fw7 mt3 mb2">Reactive Attack</h3>
      <p className="lh-copy mb2">
        When an enemy MSU within your LOS and within your weapon's range band begins a Move,
        BOOST, or BLITZ action, you may declare a Reactive Attack. Resolve immediately:
      </p>
      <ol className="lh-copy pl3 mb3">
        <li className="pv1">Declare the Reactive Attack before the enemy resolves their movement.</li>
        <li className="pv1">Roll 1d6 + GS (ranged) or BR (melee if in range) against a target number of 4.</li>
        <li className="pv1">The attacker and enemy simultaneously resolve their actions; the Reactive Attack fires mid-movement.</li>
        <li className="pv1">Apply normal hit resolution (hit location, armor, damage).</li>
      </ol>
      <div className="pa3 bg-near-white ba b--black-10 mb3">
        <p className="fw7 mb1">Reactive Attack Modifiers</p>
        <ul className="pl3 lh-copy f6 ma0">
          <li>−1 to hit if enemy is using BOOST (rapid movement penalty)</li>
          <li>+1 to hit with Predictive Fire Control support system</li>
          <li>Reactive trait: reroll up to PS modifier in attack dice</li>
          <li>CQ Specialist: reroll 1 hit roll if target is within 12"</li>
        </ul>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Eyes on You</h3>
      <p className="lh-copy mb2">
        A pilot with the <strong>Eyes on You</strong> trait may, once per battle round, declare a
        free reaction to instantly rotate their MSU 360°. This reaction does not consume the MSU's
        normal Reaction allowance and may be performed even during the enemy's activation.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Juke</h3>
      <p className="lh-copy mb2">
        A pilot with the <strong>Juke</strong> trait may, once per battle round, declare a Juke
        reaction when they are targeted by an attack and have LOS to the attacker. They may reroll
        one of their own Evasion dice. This is resolved before the attacker's hit roll is finalized.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Evasion (EVA)</h3>
      <p className="lh-copy mb2">
        Evasion is not a Reaction — it is always available unless the MSU is in KNOCKDOWN state.
        When an MSU is hit, the player rolls their EVA dice pool (base 2 dice). Each result of{' '}
        <strong>4 or higher</strong> counts as one evasion success, removing one incoming hit.
      </p>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Modifier</th>
              <th className="pa2 fw6 tc">EVA Dice Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Base', '2 dice'],
              ['CROUCHED state', '+1 die'],
              ['In Hard Cover', '+1 die'],
              ['In Obscuring Cover', '+1 die'],
              ['SUPPRESSED state', '−1 die (min 0)'],
              ['CRIPPLED arm', '−1 die'],
              ['KNOCKDOWN state', '0 dice (auto-hit)'],
              ['ECM/ECCM (if activated)', '+1 die vs. ranged only'],
            ].map(([mod, change], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2">{mod}</td>
                <td className="pa2 tc fw6 dark-red">{change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
