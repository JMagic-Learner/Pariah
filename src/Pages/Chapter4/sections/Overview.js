export const Overview = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">4.0 — Missions Overview</h2>

      <p className="lh-copy mb3">
        Chapter 4 contains all playable missions for Flashpoint. Each mission defines a Field of
        Operations (map size and setup), Deployment Zones, Victory Conditions, and any
        Mission-Specific Rules. Players agree on the mission before building their Fireteams.
      </p>

      <h3 className="f4 fw7 mt3 mb2">Force Restrictions</h3>
      <p className="lh-copy mb2">
        Unless a mission states otherwise, all Fireteams follow these restrictions:
      </p>
      <ul className="lh-copy pl3">
        <li className="pv1">Maximum 1 MSU may have a base cost exceeding 200 MCU (before equipment).</li>
        <li className="pv1">All MSUs must belong to the same faction (or Neutral).</li>
        <li className="pv1">Minimum of 2 MSUs per Fireteam regardless of budget.</li>
        <li className="pv1">The Fireteam Commander must be the highest-MCU-cost MSU in the Fireteam.</li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Field of Operations</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Game Size</th>
              <th className="pa2 fw6">Table Size</th>
              <th className="pa2 fw6">Deployment Zone</th>
              <th className="pa2 fw6">Recommended Terrain</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Skirmish (≤300 MCU)', '24"×24"', '6" deep edges', '4–6 pieces'],
              ['Standard (≤500 MCU)', '36"×36"', '8" deep edges', '6–10 pieces'],
              ['Large (≤750 MCU)', '48"×48"', '10" deep edges', '10–16 pieces'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                {row.map((cell, j) => <td key={j} className="pa2">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Capturing Objectives</h3>
      <p className="lh-copy mb2">
        Many missions use Objective Markers. Unless stated otherwise, capturing rules are:
      </p>
      <ol className="lh-copy pl3">
        <li className="pv1">Move into base contact with the objective marker.</li>
        <li className="pv1">Spend one full action to begin capturing (CAPTURE action).</li>
        <li className="pv1">At the end of the next round, if no enemy MSU is within 3" of the marker, it is captured.</li>
        <li className="pv1">A captured marker may be contested by an enemy MSU spending a CAPTURE action on it.</li>
        <li className="pv1">Captured markers score VP as defined by the mission rules.</li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Mission Types at a Glance</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Mission</th>
              <th className="pa2 fw6">Primary Win Condition</th>
              <th className="pa2 fw6">Rounds</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Torrington Base', 'Destroy enemy Commander MSU', '5'],
              ['Recon', 'Control 3 of 5 Recon Points', '5'],
              ['Assault', 'Breach and hold the objective building', '6'],
              ['Sector Control', 'Control more sectors at game end', '6'],
              ['Extraction', 'Extract a VIP unit off the board', '5'],
              ['Colony Drop', 'Destroy the Column Drop Core or defend it', '8'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                {row.map((cell, j) => <td key={j} className="pa2">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
