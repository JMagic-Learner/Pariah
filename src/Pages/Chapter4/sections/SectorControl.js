export const SectorControl = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 4 — Sector Control</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "Control of the region is determined not by who wins the last engagement, but by who
          holds the most ground when the smoke clears. Spread your force. Hold every inch."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 36"×36" recommended</li>
            <li className="pv1"><strong>Deployment:</strong> Both players deploy within 6" of opposite short edges</li>
            <li className="pv1"><strong>Sectors:</strong> Divide the table into 6 equal sectors (2×3 grid, each ~12"×18"). Place a Sector Marker in the center of each.</li>
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
                  ['Control a sector at any round end (per sector)', 1],
                  ['Control majority of sectors at game end', 5],
                  ['Destroy enemy Commander MSU', 2],
                  ['Destroy each enemy non-Commander MSU', 1],
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

      <h3 className="f4 fw7 mb2">Controlling a Sector</h3>
      <p className="lh-copy mb2">
        A sector is controlled by a player if, at the end of a round:
      </p>
      <ul className="lh-copy pl3 mb3">
        <li className="pv1">That player has at least one MSU within the sector boundaries, AND</li>
        <li className="pv1">The opposing player has no MSUs within the same sector.</li>
      </ul>
      <p className="lh-copy mb2">
        A sector is contested if both players have MSUs within it — neither player scores VP for
        it that round.
      </p>

      <h3 className="f4 fw7 mb2">Mission Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          <strong>Sector Denial:</strong> Destroying an enemy MSU that was scoring a sector immediately removes that player's control of the sector for this round.
        </li>
        <li className="pv1">
          <strong>Attrition:</strong> If one player loses all MSUs before round 6, the game ends immediately. The surviving player controls all uncontested sectors.
        </li>
        <li className="pv1">
          <strong>Flanking:</strong> MSUs that begin a round inside the opponent's deployment zone (the back 6" edge) automatically contest any sector adjacent to that zone, regardless of position within it.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Balanced terrain across all sectors is critical. Each sector should have at least one
        terrain feature (Hard or Obscuring). This forces both players to fight for control across
        the full table width rather than focusing on a single corridor.
      </p>
    </div>
  );
};
