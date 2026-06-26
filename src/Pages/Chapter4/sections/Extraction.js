export const Extraction = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">Mission 5 — Extraction</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "The VIP is stranded in hostile territory. You have one chance to get them out.
          Get in, grab them, and get out — before the enemy closes the net."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3">
            <li className="pv1"><strong>Table:</strong> 36"×36" recommended</li>
            <li className="pv1"><strong>Extractor (Attacker):</strong> Deploys within 6" of one short edge</li>
            <li className="pv1"><strong>Interceptor (Defender):</strong> Deploys within 6" of the opposite short edge</li>
            <li className="pv1"><strong>VIP Marker:</strong> Placed at the center of the table at game start (not controlled by either player)</li>
            <li className="pv1"><strong>Extraction Zone:</strong> The Extractor's deployment edge</li>
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
                  ['Extractor: VIP reaches Extraction Zone', 8],
                  ['Extractor: Destroy enemy Commander MSU', 2],
                  ['Interceptor: VIP Marker is destroyed', 6],
                  ['Interceptor: VIP Marker reaches round 5 uncaptured', 4],
                  ['Either: Destroy each enemy non-Commander MSU', 1],
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

      <h3 className="f4 fw7 mb2">VIP Rules</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">
          <strong>Picking Up the VIP:</strong> An Extractor MSU must move into base contact with the VIP marker and spend a CAPTURE action. The VIP is then attached to that MSU.
        </li>
        <li className="pv1">
          <strong>Carrying the VIP:</strong> The carrying MSU's Move speed is reduced by 2". The VIP cannot be transferred between MSUs.
        </li>
        <li className="pv1">
          <strong>Dropping the VIP:</strong> If the carrying MSU is destroyed or KNOCKED DOWN, the VIP marker is immediately placed at that MSU's position. Any other MSU (either side) may then pick it up.
        </li>
        <li className="pv1">
          <strong>Interceptor Captures the VIP:</strong> An Interceptor MSU may pick up the VIP using the same CAPTURE action rule. If the Interceptor carries the VIP off their own deployment edge, it counts as VIP destroyed.
        </li>
        <li className="pv1">
          <strong>VIP Marker HP:</strong> The VIP marker has 20 HP and 0 Armor. AOE attacks that include the VIP marker's position deal damage to it. If it reaches 0 HP, the VIP is considered killed — Interceptor wins the 6 VP.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Obscuring Cover near center rewards the Extractor in approaching the VIP undetected. Hard
        Cover flanking routes give the Interceptor ambush positions. A choke point between the
        center and the Extraction Zone creates dramatic last-stand moments.
      </p>
    </div>
  );
};
