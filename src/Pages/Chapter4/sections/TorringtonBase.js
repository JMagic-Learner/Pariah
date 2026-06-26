export const TorringtonBase = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 1 — Torrington Base</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "The base at Torrington is a key stronghold — whoever controls it controls the continent.
          One side advances to take it; the other must hold or die trying."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 36"×36" recommended</li>
            <li className="pv1"><strong>Attacker:</strong> Deploys within 6" of one short edge</li>
            <li className="pv1"><strong>Defender:</strong> Deploys within 12" of the opposite short edge</li>
            <li className="pv1"><strong>Objective:</strong> Place a Command Bunker marker at the center of the table</li>
            <li className="pv1"><strong>Rounds:</strong> 5</li>
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
                  ['Destroy enemy Commander MSU', 5],
                  ['Hold Command Bunker at round end', 2],
                  ['Destroy each enemy MSU (non-Commander)', 1],
                  ['Attacker: any MSU reaches Defender\'s deployment zone', 3],
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
          <strong>Defender Fortified:</strong> The Defender may place 2 additional Hard Cover terrain pieces in their half of the table before deployment.
        </li>
        <li className="pv1">
          <strong>Command Bunker:</strong> The center objective marker counts as Hard Cover for any MSU occupying it. Capturing the bunker requires the CAPTURE action (full action). The bunker can be contested.
        </li>
        <li className="pv1">
          <strong>Reinforcement Call:</strong> If the Defender's Commander is still alive at round 3, the Defender may add one destroyed MSU back to the table at their deployment edge at full HP (but no FRO regeneration).
        </li>
        <li className="pv1">
          <strong>Attacker's Last Stand:</strong> If all Attacker MSUs are destroyed before round 4, the game ends immediately — Defender wins.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Place a central fortified structure (Hard Cover, Difficult Terrain to enter) at the
        midpoint. Flank approaches should have Obscuring Cover (smoke, rubble). Open firing
        lanes on one or both sides reward long-range builds.
      </p>
    </div>
  );
};
