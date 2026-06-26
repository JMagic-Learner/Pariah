export const ColonyDrop = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 6 — Colony Drop</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "They've detached the colony. It's on a collision course. Someone has to stop it —
          or finish the job. Eight rounds. One destiny."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 48"×48" recommended (large engagement)</li>
            <li className="pv1"><strong>Defender (ZEON or Neutral):</strong> Deploys within 8" of one short edge</li>
            <li className="pv1"><strong>Attacker (Earth Federation or Neutral):</strong> Deploys within 8" of the opposite short edge</li>
            <li className="pv1"><strong>Colony Drop Core:</strong> A large marker placed at the center of the table. Has 80 HP and 10 Armor.</li>
            <li className="pv1"><strong>Rounds:</strong> 8</li>
          </ul>
        </div>
        <div className="w-50-ns pl3-ns">
          <h3 className="f4 fw7 mb2">Victory Conditions</h3>
          <div className="overflow-auto">
            <table className="f6 w-100 collapse ba b--black-10">
              <thead>
                <tr className="bg-near-black white tl">
                  <th className="pa2 fw6">VP Source</th>
                  <th className="pa2 fw6 tc">VP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Attacker: Reduce Colony Drop Core to 0 HP', 10],
                  ['Defender: Colony Drop Core survives all 8 rounds', 10],
                  ['Attacker: Destroy enemy Commander MSU', 3],
                  ['Defender: Destroy enemy Commander MSU', 3],
                  ['Either: Destroy each enemy non-Commander MSU', 1],
                  ['Attacker: Deal 40+ damage to Colony Drop Core', 3],
                ].map(([src, vp], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                    <td className="pa2">{src}</td>
                    <td className="pa2 tc fw7 dark-red">{vp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="f4 fw7 mb2">Colony Drop Core Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          <strong>Targeting the Core:</strong> Any Attacker MSU may target the Colony Drop Core as if it were an enemy MSU (it does not evade). It has no hit location table — all damage is applied directly to its HP pool after Armor reduction.
        </li>
        <li className="pv1">
          <strong>Defender Interference:</strong> Defender MSUs within 6" of the Core may intercept one attack per round that targets the Core (reactive mechanic, costs their Reaction).
        </li>
        <li className="pv1">
          <strong>Colony Impact:</strong> At the end of Round 4, if the Core still has HP, it crashes into one corner of the table (decided by a d4 roll). All MSUs within 12" of that corner take 30 damage distributed across two random hit locations. That corner becomes Difficult Terrain for the rest of the game.
        </li>
        <li className="pv1">
          <strong>Structural Collapse:</strong> At the end of Round 6, if the Core still has HP, the impact worsens. All MSUs within 18" of the crash corner take 20 damage to the Torso (no Armor reduction). The crash zone expands to 18" Difficult Terrain.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Special Mission Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          <strong>No Retreat:</strong> Neither side may voluntarily move MSUs off the table. MSUs pushed off via Impact must be placed at the nearest table edge within 1" instead.
        </li>
        <li className="pv1">
          <strong>Newtype Awakening:</strong> If either side has a Newtype pilot still active at Round 5+, that pilot gains +1 to all stats for the remainder of the game (the weight of the moment).
        </li>
        <li className="pv1">
          <strong>ZEON Axis Doctrine:</strong> If playing as ZEON Defender with the Neo Zeon subfaction, the Colony Drop Core gains +10 HP (total 90 HP).
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Colony Drop is best played on a densely-built table representing a colony interior or
        a devastated city. Debris fields (Difficult Terrain) should dominate the middle thirds.
        The Colony Drop Core should sit on elevated or fortified terrain to give both sides an
        interesting approach vector. Hard Cover near the core rewards defenders.
      </p>
    </div>
  );
};
