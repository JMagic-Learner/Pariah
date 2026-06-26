export const ForceCreation = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.2 — Force Creation</h2>

      <p className="lh-copy tj">
        Before playing Flashpoint, each player must construct a Fireteam. A Fireteam is a group of
        Mobile Suit Units (MSUs) built within a shared Mobile Credit Unit (MCU) budget. The
        composition of your Fireteam defines your playstyle — more MSUs at lower cost give you
        tactical flexibility; fewer, more expensive MSUs give you raw power.
      </p>

      <h3 className="f4 fw7 mt4 mb2">MCU Budget</h3>
      <p className="lh-copy mb2">
        Each player receives a shared MCU budget agreed upon before the game. Recommended starting budgets:
      </p>
      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Game Size</th>
              <th className="pa2 fw6">MCU Budget</th>
              <th className="pa2 fw6">Typical MSUs</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Skirmish', '300 MCU', '2–3 MSUs'],
              ['Standard', '500 MCU', '3–5 MSUs'],
              ['Large Engagement', '750 MCU', '5–8 MSUs'],
            ].map(([size, budget, typical], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7">{size}</td>
                <td className="pa2 dark-red fw6">{budget}</td>
                <td className="pa2">{typical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Quick & Easy Baseline MSUs</h3>
      <p className="lh-copy mb3">
        New players can use these pre-built baselines to start quickly. Each represents a standard
        grunt-tier Mobile Suit without customization.
      </p>
      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">MSU Name</th>
              <th className="pa2 fw6">Armor</th>
              <th className="pa2 fw6">Move</th>
              <th className="pa2 fw6">FRO</th>
              <th className="pa2 fw6">Tonnage</th>
              <th className="pa2 fw6">MCU</th>
              <th className="pa2 fw6">Faction</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['RGM-79 GM', 20, '6"', 5, 42, 100, 'Earth Federation'],
              ['MS-06 Zaku II', 22, '6"', 5, 44, 105, 'ZEON'],
              ['RGM-79SP GM Sniper II', 20, '6"', 5, 38, 110, 'Earth Federation'],
              ['MS-09 Dom', 25, '8"', 6, 46, 125, 'ZEON'],
              ['RX-78-2 Gundam', 30, '8"', 7, 50, 200, 'Earth Federation'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                {row.map((cell, j) => (
                  <td key={j} className={`pa2${j === 0 ? ' fw7' : ''}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">MSU Statistics</h3>
      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Stat</th>
              <th className="pa2 fw6">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Armor', 'Damage absorbed per hit location before damage is applied. Each hit location has its own armor pool.'],
              ['Move Speed', 'Base distance in inches this MSU can travel per Move action.'],
              ['FRO (Fusion Reactor Output)', 'Maximum FRO this MSU can output per round before penalties. Used by Beam weapons and support systems.'],
              ['Tonnage', 'Maximum weight of equipment this MSU can carry. All weapons and support systems have a tonnage cost.'],
              ['MCU (Mobile Credit Unit)', 'Total cost of this MSU including all equipment, pilot traits, and upgrades.'],
            ].map(([stat, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red w-30">{stat}</td>
                <td className="pa2 lh-copy">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Tonnage & Movement</h3>
      <p className="lh-copy mb2">
        Tonnage represents the total load an MSU can carry. There are four equipment weight
        categories: Light (L), Medium (M), Heavy (H), and Super Heavy (SH).
      </p>
      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Weight Class</th>
              <th className="pa2 fw6">Tonnage Range</th>
              <th className="pa2 fw6">Movement Penalty</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Light (L)', '0–2', 'None'],
              ['Medium (M)', '3–5', 'None'],
              ['Heavy (H)', '6–9', '-1" Move per H weapon equipped'],
              ['Super Heavy (SH)', '10+', '-2" Move per SH weapon equipped'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7">{row[0]}</td>
                <td className="pa2">{row[1]}</td>
                <td className="pa2">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lh-copy f6 i mt2">
        Note: Movement penalties apply per weapon equipped, not per tonnage point.
      </p>

      <h3 className="f4 fw7 mt4 mb2">MCU Cost Formula</h3>
      <p className="lh-copy mb2">
        To calculate a custom MSU's MCU cost, use the following formula:
      </p>
      <div className="pa3 bg-near-white ba b--black-20 br2 mv3">
        <code className="f6 db lh-copy">
          MCU = (Armor × 2) + (Move × 2) + (FRO × 3) + (Tonnage ÷ 2) + (10 per distinct weapon type) + Support Equipment MCU total
        </code>
      </div>
      <p className="lh-copy mb2">
        Pilot Trait costs are separate and add to the overall Fireteam budget:
      </p>
      <div className="pa3 bg-near-white ba b--black-20 br2">
        <code className="f6 db lh-copy">
          Pilot MCU = 10 per Trait Point spent
        </code>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Fireteam Commander</h3>
      <p className="lh-copy">
        Each Fireteam must designate one MSU as the Commander. The Commander:
      </p>
      <ul className="lh-copy pl3">
        <li className="pv1">Can use Commander Actions (see Section 3.7)</li>
        <li className="pv1">Is eligible to take the Captain Trait</li>
        <li className="pv1">When destroyed, remaining friendly MSUs must make a PS 5 check or suffer SHAKEN for the round</li>
      </ul>
    </div>
  );
};
