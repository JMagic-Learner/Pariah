export const Phases = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.1 — Phases</h2>
      <p className="lh-copy mb3">
        A game of Flashpoint is divided into Battle Rounds. Each Battle Round consists of six
        phases that both players move through simultaneously. Phases must be resolved in order.
      </p>

      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-10">Phase</th>
              <th className="pa2 fw6 w-20">Name</th>
              <th className="pa2 fw6">Steps</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0', 'Status Phase', 'Resolve all ongoing states. Recharge passive systems. Resolve Beam Shield regen. Remove expired tokens.'],
              ['1', 'Command Phase', 'Perform Commander Actions. Spend RALLY tokens. Resolve any pre-movement effects.'],
              ['2', 'Initiative Phase', 'All pilots roll 1d6 + PS. Highest result activates first. Ties rerolled unless a trait modifies the result.'],
              ['3', 'Movement Phase', 'Players alternate activating one MSU at a time in initiative order. Each activated MSU may Move, BOOST, BLITZ, or Repose. Declare actions before measuring.'],
              ['4', 'Attack Phase', 'Players alternate activating one MSU at a time in initiative order. Each activated MSU may perform one Ranged, Melee, or Aim action. Reactive attacks resolve immediately when triggered.'],
              ['5', 'End Phase', 'Check victory conditions. Place any end-of-round tokens or effects. Advance the round counter.'],
            ].map(([phase, name, steps], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 tc fw7 dark-red f4">{phase}</td>
                <td className="pa2 fw7">{name}</td>
                <td className="pa2 lh-copy">{steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Phase 0 — Status Phase Detail</h3>
      <p className="lh-copy mb2">Resolve in this order each round:</p>
      <ol className="lh-copy pl3">
        <li className="pv1"><strong>Step 0.1:</strong> Remove all SUPPRESSED tokens from all MSUs.</li>
        <li className="pv1"><strong>Step 0.2:</strong> Beam Shield regen: all Beam Shields restore 10 Armor.</li>
        <li className="pv1"><strong>Step 0.3:</strong> Remove STEALTH tokens from MSUs that fired last round.</li>
        <li className="pv1"><strong>Step 0.4:</strong> Any MSU in KNOCKDOWN state makes a PS 5 check to stand up; failure extends KNOCKDOWN for one more round.</li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Phase 1 — Command Phase Detail</h3>
      <ol className="lh-copy pl3">
        <li className="pv1"><strong>Step 1.1:</strong> Commander may use Command Protocol (if equipped) to RALLY one friendly MSU for free.</li>
        <li className="pv1"><strong>Step 1.2:</strong> Both players may spend RALLY tokens earned last round.</li>
        <li className="pv1"><strong>Step 1.3:</strong> Resolve AMS checks (PS 7) for each MISSILE token within 18" of an equipped AMS MSU.</li>
        <li className="pv1"><strong>Step 1.4:</strong> Pilot trait actions that occur "At Step 1.4" (Aura Farmer, Trash Talker) are resolved now.</li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Activation Order</h3>
      <p className="lh-copy">
        During the Movement and Attack phases, players alternate activating one MSU at a time,
        starting with the MSU with the highest initiative result. In the event of a tie between
        players, both MSUs are activated simultaneously and resolve effects at the same time.
        If a player has more MSUs than their opponent, they continue activating their remaining
        MSUs after the opponent has activated all of theirs.
      </p>
    </div>
  );
};
