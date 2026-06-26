export const Movement = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.2 — Movement</h2>
      <p className="lh-copy mb3">
        During the Movement Phase, each MSU may perform one of the following
        movement actions when activated. Movement is measured in inches from the
        leading edge of the base. All movement is declared and measured before
        resolution.
      </p>

      <h3 className="f4 fw7 mt3 mb2">Facing</h3>
      <p className="lh-copy mb2">
        All MSUs have a front-facing arc (180°). LOS, ranged attacks, and
        arc-based rules use this facing. Rotating to change facing costs{" "}
        <strong>2 inches of Move</strong> per 90° turned (or 1" with Inertia
        Redirection System). Rotation during BOOST is free.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Movement Types</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-25">Action</th>
              <th className="pa2 fw6">Rules</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "MOVE",
                "Move up to your base Move speed in inches. You may change facing during a Move (at 2\" cost per 90° turn). Moving sideways or backward costs double movement (halved move). Hard Cover terrain reduces movement by the terrain's cost (see Section 3.8).",
              ],
              [
                "BOOST[X]",
                'Spend X FRO to boost. BOOST[1] moves you +6" in any direction with free rotation. BOOST[2] (via Heavy Boosters) moves you +12". You may still Move after a Boost in the same activation. Boost does not trigger Reactive attacks unless the enemy has the Eyes on You trait.',
              ],
              [
                "BLITZ",
                'Spend your entire movement to charge an enemy MSU within your Move range. Move directly toward the target. If you reach them, immediately resolve a free melee attack before the Attack Phase. The target may make a Reactive attack against you as you approach. On contact, if moving 21"+ this round, Kinetic Force trait applies.',
              ],
              [
                "REPOSE",
                "The MSU does not move. Instead, it enters a stabilized stance: gain +1 GS on ranged attacks made this round. Some traits and weapons ([BRACE], Heavy Weapons Specialist) require REPOSE to activate their full effect.",
              ],
            ].map(([action, desc], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2 fw7 dark-red v-top">{action}</td>
                <td className="pa2 lh-copy">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Movement Penalties by Equipment</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Condition</th>
              <th className="pa2 fw6">Penalty</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Each HEAVY weapon equipped", '-1" Move'],
              ["Each SUPER HEAVY weapon equipped", '-2" Move'],
              ["SUPPRESSED state", "Move halved"],
              [
                "CRIPPLED Legs",
                'Move halved (or -2" with Enduring Will trait)',
              ],
              ["Moving sideways or backward", "Move halved for that direction"],
              ["[BRACE] stance", "Cannot move (BOOST allowed)"],
            ].map(([cond, pen], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2">{cond}</td>
                <td className="pa2 fw6 dark-red">{pen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Collision & Fall Damage</h3>
      <p className="lh-copy">
        If an MSU is pushed (via Impact keyword) or falls into terrain or
        another MSU, it takes <strong>5 damage per 6 inches</strong> of distance
        collided (applied to the closest facing hit location). MSUs falling from
        heights greater than 12" take <strong>10 damage per 6" fallen</strong>,
        reduced to 0 with Reinforced Hydraulics support system. A fallen MSU
        gains KNOCKDOWN state.
      </p>
    </div>
  );
};
