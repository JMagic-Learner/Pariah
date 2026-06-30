export const Reactions = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">3.4 — Reactions</h2>

      <p className="lh-copy mb4 tj">
        Reactions are special actions performed outside of a enemy{" "}
        <span className="fw6 orange"> [PILOT]</span>'s normal activation. Each{" "}
        <span className="fw6 orange"> [PILOT]</span>/MSU may perform multiple
        reactions per turn as long as they have the resources to do so, unless a
        trait or special ability imposes a limit.
      </p>

      <p className="lh-copy mb4 tj orange">
        Reactions interrupt enemy actions, meaning the reaction resolves first
        before resuming normal turn sequence.
      </p>

      <p className="lh-copy mb4 tj orange">
        Reactions can be chained in response to a single instance of an enemy
        activation as long as there are no duplicate REACTIONS in the chained
        sequence, meaning a <span className="fw6 orange"> [PILOT]</span> cannot
        declare SWAP + <span className="fw6 orange"> [REACTIVE ATTACK] </span>+
        <span className="fw6 orange"> [SWAP]</span> or{" "}
        <span className="fw6 orange"> [REACTIVE ATTACK] </span>+
        <span className="fw6 orange">
          {" "}
          <span className="fw6 orange"> [REACTIVE ATTACK] </span>
        </span>
        . However, if the
        <span className="fw6 orange"> [PILOT]</span> chooses to conduct a
        <span className="fw6 orange"> [REACTIVE ATTACK] </span>
        action in response to one enemy{" "}
        <span className="fw6 orange"> [PILOT]</span>, it may still react with
        another <span className="fw6 orange"> [REACTIVE ATTACK] </span>
        action to another enemy <span className="fw6 orange"> [PILOT]</span>
      </p>

      {/* Reactive Attack */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          <span className="fw6 orange"> [REACTIVE ATTACK] </span>

          <span className="fw4 f5">[REACTION] [1 Action]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          When an enemy <span className="fw6 orange"> [PILOT]</span>/MSU within
          your LOS and within your weapon's range band declares or ends a
          <span className="fw6 orange"> [MOVEMENT] </span> action (including{" "}
          <span className="fw6 orange"> [ADVANCE] </span>,
          <span className="fw6 orange"> [BOOST] </span>, or{" "}
          <span className="fw6 orange"> [BLITZ] </span> or when an enemy{" "}
          <span className="fw6 orange"> [PILOT]</span>/MSU declares a melee
          attack), you may immediately declare a{" "}
          <span className="fw6 orange"> [REACTIVE ATTACK] </span>
          before or after the enemy resolves their respective action.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1 tj">
            Only <span className="fw6 orange"> [READIED] </span>,{" "}
            <span className="fw6 orange"> [INBUILT] </span> can be used in{" "}
            <span className="fw6 orange"> [REACTIVE ATTACK] </span> actions .
          </li>
          <li className="pv1 tj">
            The reacting <span className="fw6 orange"> [PILOT] </span> must have
            LOS to the enemy MSU at the moment the qualifying action is
            declared.
          </li>
          <li className="pv1 tj">
            The enemy MSU must be within the eligible weapon's range band.
          </li>
        </ul>
      </div>

      {/* Reactive Attack Sequence */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 orange mt0 mb2">
          <span className="fw6 orange">
            {" "}
            <span className="fw6 orange"> [REACTIVE ATTACK] </span>
          </span>{" "}
          Sequence
        </h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1 tj">
            <span className="fw6 orange">Step 1:</span> The reacting{" "}
            <span className="fw6 orange"> [PILOT]</span>
            declares{" "}
            <span className="fw6 orange">
              {" "}
              <span className="fw6 orange"> [REACTIVE ATTACK] </span>
            </span>{" "}
            and nominates a single eligible weapon (
            <span className="fw6 orange"> [READIED] </span>,{" "}
            <span className="fw6 orange"> [INBUILT] </span>).
          </li>
          <li className="pv1 tj">
            <span className="fw6 orange">Step 2:</span> The enemy{" "}
            <span className="fw6 orange"> [PILOT]</span>/MSU immediately pauses
            it's action, waiting for the{" "}
            <span className="fw6 orange">
              {" "}
              <span className="fw6 orange"> [REACTIVE ATTACK] </span>
            </span>
            sequence to resolve
          </li>
          <li className="pv1 tj">
            <span className="fw6 orange">Step 3:</span> The reacting{" "}
            <span className="fw6 orange"> [PILOT]</span> rolls their attack dice
            against the enemy MSU using the nominated weapon. Apply any relevant
            modifiers.
          </li>
          <li className="pv1 tj">
            <span className="fw6 orange">Step 4:</span> The enemy{" "}
            <span className="fw6 orange"> [PILOT]</span> rolls Evasion dice as
            normal.
          </li>
          <li className="pv1 tj">
            <span className="fw6 orange">Step 5:</span> Resolve hits — roll 2d6
            for each hit location and apply damage.
          </li>
        </ul>
      </div>

      <div className="flex w-100">
        {/* Eyes on You */}
        <div className="bg-near-white ba b--black-10 br2 pa3 mb3 w-50 mh2">
          <h3 className="f4 fw7 orange mt0 mb1">
            [EYES ON YOU]{" "}
            <span className="fw4 f5">[REACTION] [PILOT TRAIT]</span>
          </h3>
          <p className="lh-copy f6 mb2">
            A <span className="fw6 orange"> [PILOT]</span> with the [EYES ON
            YOU] trait may, once per Battle Round, declare an [EYES ON YOU]
            Reaction.
          </p>
          <ul className="lh-copy pl3 f6 ma0">
            <li className="pv1 tj">
              The reacting MSU immediately rotates to face the enemy MSU before
              the enemy finishes their movement.
            </li>
            <li className="pv1 tj">
              This rotation does not cost any movement or FRO.
            </li>
          </ul>
        </div>

        {/* Juke */}
        <div className="bg-near-white ba b--black-10 br2 pa3 mb3 w-50 mh2">
          <h3 className="f4 fw7 orange mt0 mb1">
            [JUKE] <span className="fw4 f5">[REACTION] [PILOT TRAIT]</span>
          </h3>
          <p className="lh-copy f6 mb2">
            A <span className="fw6 orange"> [PILOT]</span> with the [JUKE] trait
            may, once per Battle Round, declare a [JUKE] Reaction when their MSU
            is targeted by an attack and the reacting{" "}
            <span className="fw6 orange"> [PILOT]</span> has LOS to the
            attacker.
          </p>
          <ul className="lh-copy pl3 f6 ma0">
            <li className="pv1">
              The reacting <span className="fw6 orange"> [PILOT]</span> may
              reroll one of their Evasion dice.
            </li>
            <li className="pv1">
              The new result stands — the die cannot be rerolled again.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
