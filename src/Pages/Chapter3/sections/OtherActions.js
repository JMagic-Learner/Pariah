export const OtherActions = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.7 — Other Actions</h2>

      <p className="lh-copy mb3">
        Beyond standard Move and Attack actions, MSUs and Commanders can perform a variety of
        special actions. These are declared during the appropriate phase.
      </p>

      <h3 className="f4 fw7 mt3 mb2">MSU Actions</h3>

      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-25">Action</th>
              <th className="pa2 fw6 w-15">Phase</th>
              <th className="pa2 fw6">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['AIM', 'Attack', 'Spend one full action to Aim. This MSU cannot attack this round. Next round, add +1 GS to one ranged attack. Aim Assist support makes this a free action (costs +1 FRO).'],
              ['SEEK COVER', 'Movement', 'Move up to half your Move speed. At the end of movement, if adjacent to terrain that provides Hard or Obscuring Cover, gain CROUCHED state. You cannot attack while CROUCHED unless using a Mounted weapon.'],
              ['SWAP', 'Attack', 'Switch between stowed weapons. Standard SWAP costs one Minor Action. Quick Swap weapons only cost a free action. Quick Draw weapons are free to draw or holster.'],
              ['RELOAD', 'Attack', 'Spend your full activation reloading a Slow Reload weapon. The weapon can be fired next round. Some Limited Use weapons may recover 1 charge with Munitions Racks or Resupply Protocol.'],
              ['CAPTURE', 'Attack/Movement', 'Move into base contact with an objective marker and spend one full action. The objective is claimed at the end of the next round if no enemy is within 3" of it. See Chapter 4 for mission-specific rules.'],
              ['PUSH', 'Movement', 'If your MSU is base-to-base with a destroyed enemy MSU wreck, spend 2" of Move to push it up to 6" in any direction. Wrecks can be used as terrain.'],
            ].map(([action, phase, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red v-top">{action}</td>
                <td className="pa2 v-top">{phase}</td>
                <td className="pa2 lh-copy">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Commander Actions</h3>
      <p className="lh-copy mb3">
        Commander Actions are performed by the designated Fireteam Commander during Phase 1
        (Command Phase). The Commander may perform <strong>one Commander Action per round</strong>{' '}
        at a standard cost of one action, unless the Captain trait or Command Protocol allows more.
      </p>

      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-25">Commander Action</th>
              <th className="pa2 fw6">Effect</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['RALLY', 'Remove SHAKEN from one friendly MSU within 12".'],
              ['COORDINATE', 'Choose two friendly MSUs within 12". They may each reroll 1 die on their next attack this round.'],
              ['SUPPRESS ORDERS', 'Choose one enemy MSU within 24". That MSU must make a PS 5 check or lose 1 action this round.'],
              ['EMERGENCY ORDERS', 'One friendly MSU within 18" may immediately perform a Move action out of sequence (does not use its normal activation).'],
              ['TACTICAL ADVANCE', 'All friendly MSUs within 8" gain +2" Move this round.'],
            ].map(([action, effect], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red v-top">{action}</td>
                <td className="pa2 lh-copy">{effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Airstrike</h3>
      <p className="lh-copy mb2">
        Requires: <strong>Target Designator</strong> support system (LIMITED USE [1]).
      </p>
      <ol className="lh-copy pl3">
        <li className="pv1">Declare the Airstrike action during your Attack Phase activation.</li>
        <li className="pv1">Place an AIRSTRIKE token anywhere within LOS and within 48". The token takes effect at the start of the next round's Attack Phase.</li>
        <li className="pv1">On arrival: all MSUs within 12" of the token take 20 DAM. Roll Hit Location for each. Armor applies normally. The terrain in the blast radius becomes Difficult Terrain for the remainder of the game.</li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Forward Observe</h3>
      <p className="lh-copy mb2">
        Requires: <strong>Forward Observer</strong> support system.
      </p>
      <p className="lh-copy">
        During your Attack Phase activation, spend your action to MARK one enemy MSU within LOS.
        Place a MARKED token on that MSU. Until the start of your next activation:
      </p>
      <ul className="lh-copy pl3">
        <li className="pv1">All friendly MSUs attacking the MARKED target gain +1 GS.</li>
        <li className="pv1">Weapons with the Guided keyword automatically target the MARKED MSU with no range penalties.</li>
        <li className="pv1">Indirect fire attacks against the MARKED target do not incur the −2 penalty.</li>
      </ul>
    </div>
  );
};
