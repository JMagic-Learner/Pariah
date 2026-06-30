export const Movement = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">3.2 — Facing and Movement</h2>

      {/* Measuring Distance and LOS */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb4">
        <h3 className="f4 fw7 orange mt0 mb2">
          Measuring Distance and Line of Sight
        </h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 orange">Distance</span> is measured from any
            part of the base.
          </li>
          <li className="pv1">
            <span className="fw6 orange">Line of Sight</span> is measured from
            any part of the Front Facing arc and to [HEAD] level.
          </li>
          <li className="pv1">
            Firing arcs, [BOOST(X)] paths, and rear arc vulnerability are all
            determined by the MSU's current facing.
          </li>
        </ul>
      </div>

      {/* Evasion Tier Table */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb2">Evasion Tier Table</h3>
        <p className="lh-copy f6 mb3">
          Total movement made during the Movement Phase determines how many
          evasion dice a <span className="fw6 orange"> [PILOT]</span> rolls when
          defending against attacks. Distance moved from all{" "}
          <span className="fw6 orange"> [MOVEMENT] </span> actions (ADVANCE,
          BLITZ, BOOST) and <span className="fw6 orange"> [FALL] </span> counts
          toward this total. (Yes, thats right, you can fall from{" "}
          <span className="fw6 orange"> [HOVER] </span>
          state and count that as movement for Evasion Tier calculations)
        </p>
        <div className="overflow-auto">
          <table className="f6 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                  Evasion Tier
                </th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                  Movement (inches)
                </th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                  Evasion Dice
                </th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                  Gunnery Penalty
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr>
                <td className="pv2 pr3 bb b--black-20 fw6 orange">
                  Tier 1 — Slow
                </td>
                <td className="pv2 pr3 bb b--black-20">0″ – 8″</td>
                <td className="pv2 pr3 bb b--black-20 fw6">2d3 + PS − 1</td>
                <td className="pv2 pr3 bb b--black-20 fw6">+ 1 GS</td>
              </tr>
              <tr>
                <td className="pv2 pr3 bb b--black-20 fw6 orange">
                  Tier 2 — Moving
                </td>
                <td className="pv2 pr3 bb b--black-20">9″ – 20″</td>
                <td className="pv2 pr3 bb b--black-20 fw6">2d3 + PS</td>
                <td className="pv2 pr3 bb b--black-20 fw6"> N/A </td>
              </tr>
              <tr>
                <td className="pv2 pr3 fw6 orange">Tier 3 — Fast</td>
                <td className="pv2 pr3">21″ +</td>
                <td className="pv2 pr3 fw6">2d3 + PS + 1</td>
                <td className="pv2 pr3 bb b--black-20 fw6"> -1 GS </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="lh-copy f7 mt2 mb0">
          1d3 = 1d6 ÷ 2, rounded up. For example, a roll of 3 on 1d6 becomes 2.
        </p>
      </div>

      {/* MOVE Action */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [ADVANCE]
          <span className="fw4 f5">
            <span className="fw6 orange"> [MOVEMENT] </span> [1 FRO] [1 ACTION]
          </span>
        </h3>
        <p className="lh-copy f6 mb2">
          An MSU can move forward up to its{" "}
          <span className="fw6 orange"> [MOVEMENT] </span> value in inches.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 orange">
              Turning one hex facing, moving backwards, or moving sideways each
              cost 2 inches of movement
            </span>
          </li>
          <li className="pv1">
            Moving or flying <span className="fw6 orange">vertically</span>{" "}
            (jumping) costs{" "}
            <span className="fw6 orange">
              2 inches of movement per 1 inch of height
            </span>{" "}
            travelled.
          </li>
          <li className="pv1">
            An MSU may end its movement while airborne (mid-air). An MSU that
            begins its activation in mid-air must choose one of the following:
            <ul className="pl3 mt1">
              <li className="pv1">
                <span className="fw6 orange">
                  <span className="fw6 orange"> [FALL] </span>
                </span>{" "}
                — drop to ground level at no movement cost. The MSU takes fall
                damage (see below).
              </li>
              <li className="pv1">
                <span className="fw6 orange">
                  <span className="fw6 orange"> [HOVER] </span>
                </span>{" "}
                — the MSU expends 1 FRO during Step 1.2 of the Status Phase to
                maintain its current altitude for the round.
              </li>
            </ul>
          </li>
          <li className="pv1">
            An MSU may [REPOSE] for 4 inches of movement. Repositioning allows
            the MSU to adjust its stance to better benefit from [HARD COVER].
          </li>
        </ul>
        <p className="lh-copy f7 orange mt2 mb0">
          Fall damage: If an MSU falls for any reason, the{" "}
          <span className="fw6 orange"> [PILOT]</span> makes a PS 5 Skill Check.
          If the <span className="fw6 orange"> [PILOT]</span> fails, it's MSU
          will suffers 3 damage per 4 inches of distance to one hit location. If
          the <span className="fw6 orange"> [PILOT]</span> succeeds at this PS 5
          Skill Check, the <span className="fw6 orange"> [PILOT]</span>/MSU may
          also make a <span className="fw6 orange"> [ATTACK] </span> action if
          the MSU finishes its <span className="fw6 orange"> [FALL] </span>{" "}
          movement within melee range of enemy{" "}
          <span className="fw6 orange"> [PILOT]</span>s/MSU
        </p>
      </div>

      {/* BOOST Action */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [BOOST(X)]{" "}
          <span className="fw4 f5">
            <span className="fw6 orange"> [MOVEMENT] </span> [Move X inches
            forward or vertically per 1 FRO spent]
          </span>
        </h3>
        <p className="lh-copy f6 mb2">
          An MSU that BOOST9(X) can accelerate directly forward or vertically{" "}
          <span className="fw6 orange">[X] inches</span> by spending{" "}
          <span className="fw6 orange">1 FRO</span>.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            All MSUs have <span className="fw6 orange">[BOOST(1)]</span> by
            default. The Heavy Boosters support equipment upgrades this to
            <span className="fw6 orange"> [BOOST(2)]</span>.
          </li>
          <li className="pv1">
            An MSU may <span className="fw6 orange"> [BOOST] </span> more than
            once per activation, as long as it can pay the [FRO] cost for each{" "}
            <span className="fw6 orange"> [BOOST] </span>.
          </li>
          <li className="pv1">
            An MSU may also use a <span className="fw6 orange"> [BOOST] </span>{" "}
            to <span className="fw6 orange">turn one hex facing</span> instead
            of moving forward or vertically.
          </li>
          <li className="pv1">
            <span className="fw6 orange"> [BOOST] </span> movement is counted
            when calculating Evasion modifiers from the Evasion Tier Table.
          </li>
        </ul>
      </div>

      {/* BLITZ Maneuver */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [BLITZ]{" "}
          <span className="fw4 f5">
            <span className="fw6 orange"> [MOVEMENT] </span> [2 Actions] [1 FRO]
          </span>
        </h3>
        <p className="lh-copy f6 mb2 i">
          Maneuvers are special actions that require two Actions to perform.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 orange">Minimum distance:</span> 6 inches
            between the Blitzing MSU and the target MSU at the start of the
            action.
          </li>
          <li className="pv1">
            This movement must be in a{" "}
            <span className="fw6 orange">straight line</span>.
          </li>
          <li className="pv1">
            Move the Blitzing MSU double its base movement, and increase its
            movement by any additional [FRO] it wishes to spend.
          </li>
          <li className="pv1">
            If the enemy MSU has LOS to the Blitzing MSU, the enemy may spend an
            Action to evade. That MSU rolls a Evasion Check vs a static value of
            6. If successful, the opposing MSU may move its base movement
            sideways without penalty.
          </li>
          <li className="pv1">
            If the Blitzing MSU comes into contact with one or more enemy MSUs,
            those MSUs are pushed along the straight path. A single [BLITZ] can
            push multiple MSUs simultaneously.
          </li>
          <li className="pv1">
            <span className="fw6 orange">Collision damage:</span>
            <ul className="pl3 mt1">
              <li className="pv1">
                Target MSU:{" "}
                <span className="fw6 orange">10 damage + 1 per 3 inches</span>{" "}
                of movement.
              </li>
              <li className="pv1">
                Blitzing MSU:{" "}
                <span className="fw6 orange">5 damage + 1 per 3 inches</span> of
                movement.
              </li>
            </ul>
          </li>
        </ul>
        <p className="lh-copy f7 mt2 mb0">
          Any movement during the Movement Phase appends to the Evasion modifier
          from Section 2.2.
        </p>
      </div>

      {/* REPOSE */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb2">
          [REPOSE]{" "}
          <span className="fw4 f5">
            <span className="fw6 orange"> [MOVEMENT] </span>
          </span>
        </h3>
        <p className="lh-copy f6 ma0">
          Repositioning the MSU may allow a player to adjust its model to better
          benefit from [HARD COVER]. For example, a player may repose the MSU
          into a crouching position, shifting [HARD COVER] protection to also
          cover the Torso. Reposing counts as{" "}
          <span className="fw6 orange">4 inches of movement</span>.
        </p>
      </div>
    </div>
  );
};
