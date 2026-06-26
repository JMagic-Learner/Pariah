export const Recon = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 2 — Recon</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "We don't need to hold the line — we need to know the line. Get your suits out there
          and find out what they're moving and where they're going."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 36"×36" recommended</li>
            <li className="pv1"><strong>Deployment:</strong> Both players deploy within 6" of opposite long edges</li>
            <li className="pv1"><strong>Objectives:</strong> Place 5 Recon Point markers. One at center, one in each quarter at least 10" from the edges.</li>
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
                  ['Control 3 of 5 Recon Points at any round end', 3],
                  ['Hold a Recon Point at end of game', 1],
                  ['Destroy enemy Commander MSU', 2],
                  ['Destroy each enemy MSU (non-Commander)', 1],
                  ['MSU returns to friendly deployment edge from opponent\'s half', 2],
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
          <strong>Recon Points:</strong> To claim a Recon Point, the MSU must move into base contact and spend a CAPTURE action. It is claimed at the end of the round if uncontested.
        </li>
        <li className="pv1">
          <strong>Mobile Warfare:</strong> MSUs may BOOST without triggering Reactive attacks (as per normal rules) to encourage aggressive repositioning.
        </li>
        <li className="pv1">
          <strong>Deep Recon:</strong> If an MSU reaches the enemy's deployment zone and returns to its own deployment zone within the same game, award +2 VP (once per MSU).
        </li>
        <li className="pv1">
          <strong>Early End:</strong> If one player controls all 5 Recon Points simultaneously, the game ends immediately and that player wins regardless of VP total.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Dense, mixed terrain encourages Recon gameplay. At least 4 Obscuring Cover pieces reward
        fast, stealthy MSUs. Recon Points should be scattered to prevent clustering. Elevated
        terrain near center gives fire superiority over the central objective.
      </p>
    </div>
  );
};
