export const Assault = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 3 — Assault</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "Breach the compound. Secure it. Don't leave anyone standing who shouldn't be.
          The objective building is the prize — hold it or lose everything."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 36"×36" recommended</li>
            <li className="pv1"><strong>Attacker:</strong> Deploys within 8" of one short edge</li>
            <li className="pv1"><strong>Defender:</strong> Deploys within 12" of the opposite short edge, within 8" of the Objective Building</li>
            <li className="pv1"><strong>Objective:</strong> Place a large building structure (Hard Cover) in the Defender's half, 12" from their edge</li>
            <li className="pv1"><strong>Rounds:</strong> 6</li>
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
                  ['Attacker holds Objective Building at round end', 3],
                  ['Attacker holds Objective Building at game end (bonus)', 3],
                  ['Destroy enemy Commander MSU', 3],
                  ['Destroy each enemy non-Commander MSU', 1],
                  ['Defender: Prevent Attacker from entering Objective Building for 3+ rounds', 3],
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

      <h3 className="f4 fw7 mb2">Mission Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          <strong>Breaching:</strong> The Objective Building has reinforced Hard Cover (counts as double armor vs. AOE). To enter it, an MSU must be adjacent and spend a CAPTURE action to "breach" rather than a standard move.
        </li>
        <li className="pv1">
          <strong>Interior Combat:</strong> Inside the Objective Building, all ranged attacks are treated as Close range regardless of weapon range bands. Melee attacks gain +1 ROF.
        </li>
        <li className="pv1">
          <strong>Sustained Defense:</strong> The Defender gains +1 EVA die when attacked from more than 12" away while inside the Objective Building.
        </li>
        <li className="pv1">
          <strong>Demolition:</strong> If an Attacker uses the Airstrike action targeting the Objective Building, the building becomes Difficult Terrain and loses its Hard Cover property. This ends the Sustained Defense bonus for the Defender.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Funneling terrain (walls, wrecked vehicles) guides the Attacker toward the Objective
        Building. Defender benefits from Obscuring Cover at the approaches to slow the advance.
        Open ground at the mid-table rewards the Attacker's long-range shooting to suppress
        defenders before the breach.
      </p>
    </div>
  );
};
