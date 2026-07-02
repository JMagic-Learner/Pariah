export const Phases = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">3.1 — Phases</h2>
      <p className="lh-copy mb4">
        A game of Flashpoint is played in rounds. Each round proceeds through
        the following phases in order. Phases must be resolved sequentially
        before advancing to the next.
      </p>

      <div className="bg-washed-blue ba b--light-blue br2 pa3 mb4 tj">
        <h3 className="f4 fw7 mt0 mb1">Deployment Phase</h3>
        <p className="lh-copy f6 i mb2">
          Resolved once before the game begins — not part of the recurring round
          cycle.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            Both players nominate one <span className="fw6 red"> [PILOT]</span>{" "}
            on their roster to be <span className="fw6 red"> [COMMANDER] </span>
            .
          </li>
          <li className="pv1">
            The <span className="fw6 red"> [COMMANDER] </span> uses their PS as
            the base value for Initiative Rolls.
          </li>
          <li className="pv1">
            Both players roll off 2d6 + PS to determine who places the first
            MSU.
          </li>
          <li className="pv1">
            Typical deployment is within 6 inches of the board edge.
          </li>
        </ul>
      </div>

      <h3 className="f4 fw7 red mt0 mb2">0. START OF ROUND</h3>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">1. Initiative Phase</h3>
        <p className="lh-copy f6 ma0">
          Both players roll 2d6 + <span className="fw6 red"> [PILOT]</span> PS
          for each MSU. Each MSU is then ranked from highest to lowest to
          determine the activation order for the round. Players activate their
          MSUs according to this order. If initiative is tied, reroll.
        </p>
      </div>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">2. Status Phase</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> All MSU reset their FRO to
            max cap.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> All [MISSILE] tokens must
            immediately move up to [MISSILE(X)] inches in a straight line.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 3:</span> Resolve all missile tokens
            upon contact.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 4:</span> All{" "}
            <span className="fw6 red"> [PILOT]</span>s reset their action count
            to 2. [COMMANDERS] can now spend a command action point for specific
            actions (See Other Actions Section 3.7)
          </li>
        </ul>
      </div>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">3. Movement Phase</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> Players activate
            <span className="fw6 red"> [PILOT]</span>/MSU according to
            initiative order, from highest to lowest.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> Player activates one
            <span className="fw6 red"> [PILOT]</span>/MSU at a time, choosing to
            spend any FRO or actions as necessary. Typically{" "}
            <span className="fw6 red"> [PILOT]</span>/MSU can use
            <span className="fw6 red"> [MOVEMENT] </span>,[BLITZ],[DEPLOY]
            during 3.2
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 3:</span> The enemy MSU may declare
            Reactions (
            <span className="fw6 red">
              {" "}
              <span className="fw6 red"> [REACTIVE ATTACK] </span>
            </span>
            , other Reactions from traits or equipment etc).
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 4:</span> An MSU that has moved
            within its equipped melee weapon range during Step 2 may immediately
            enter the Combat Phase. If there are no eligible Combat Phases,
            proceed to the Shooting Phase.
          </li>
        </ul>
      </div>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">
          4. Combat Phase <span className="f6 fw4 dark-gray">(Immediate)</span>
        </h3>
        <p className="lh-copy f6 mb2 i">
          Triggered when an MSU moves within its equipped melee weapon range
          during the Movement Phase.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> The MSU may declare an
            <span className="fw6 red">
              {" "}
              [ATTACK] or [REACTIVE ATTACK]{" "}
            </span>{" "}
            action using a melee weapon.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> Once resolved, return to
            Movement Phase Step 1.
          </li>
        </ul>
      </div>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">5. Shooting Phase</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> Starting with the MSU with
            the lowest initiative, that MSU may declare an{" "}
            <span className="fw6 red"> [ATTACK] </span> action. An MSU may also
            perform <span className="fw6 red"> [SIMULTANEOUS ATTACK] </span>{" "}
            actions
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> Resolve Shooting Phase
            sequences.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 3:</span> The MSU with the next
            lowest initiative activates. Repeat Steps 1–3 until all MSUs have
            activated in the Shooting Phase.
          </li>
        </ul>
      </div>

      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">6. End of Round</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> Resolve any remaining
            Reactions or Actions.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> Advance to the next round
            and return to the Initiative Phase.
          </li>
        </ul>
      </div>
    </div>
  );
};
