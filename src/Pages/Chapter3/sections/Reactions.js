export const Reactions = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.4 — Reactions</h2>

      <p className="lh-copy mb4 tj">
        Reactions are special actions performed outside of a enemy [PILOT]'s
        normal activation. Each [PILOT]/MSU may perform multiple reactions per
        turn as long as they have the resources to do so, unless a trait or
        special ability imposes a limit.
      </p>

      <p className="lh-copy mb4 tj red">
        Reactions interrupt enemy actions, meaning the reaction resolves first
        before resuming normal turn sequence.
      </p>

      <p className="lh-copy mb4 tj red">
        Reactions can be chained in response to a single instance of an enemy
        activation as long as there are no duplicate REACTIONS in the chained
        sequence, meaning a [PILOT] cannot declare SWAP + [REACTIVE ATTACK] +
        [SWAP] or [REACTIVE ATTACK] + [REACTIVE ATTACK]. However, if the [PILOT]
        chooses to conduct a [REACTIVE ATTACK] action in response to one enemy
        [PILOT], it may still react with another [REACTIVE ATTACK] action to
        another enemy [PILOT]
      </p>

      {/* Reactive Attack */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 dark-red mt0 mb1">
          [REACTIVE ATTACK]{" "}
          <span className="fw4 f5">[REACTION] [1 Action]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          When an enemy [PILOT]/MSU within your LOS and within your weapon's
          range band declares or ends a [MOVEMENT] action (including [ADVANCE],
          [BOOST], or [BLITZ] or when an enemy [PILOT]/MSU declares a melee
          attack), you may immediately declare a [REACTIVE ATTACK] before or
          after the enemy resolves their respective action.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1 tj">
            The reacting [PILOT] must have LOS to the enemy MSU at the moment
            the qualifying action is declared.
          </li>
          <li className="pv1 tj">
            The enemy MSU must be within the eligible weapon's range band.
          </li>
        </ul>
      </div>

      {/* Reactive Attack Sequence */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 dark-red mt0 mb2">[REACTIVE ATTACK] Sequence</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1 tj">
            <span className="fw6">Step 1:</span> The reacting [PILOT] declares
            [REACTIVE ATTACK] and nominates a single eligible weapon ([READIED],
            [INBUILT]).
          </li>
          <li className="pv1 tj">
            <span className="fw6">Step 2:</span> The enemy [PILOT]/MSU
            immediately pauses it's action, waiting for the [REACTIVE ATTACK]
            sequence to resolve
          </li>
          <li className="pv1 tj">
            <span className="fw6">Step 3:</span> The reacting [PILOT] rolls
            their attack dice against the enemy MSU using the nominated weapon.
            Apply any relevant modifiers.
          </li>
          <li className="pv1 tj">
            <span className="fw6">Step 4:</span> The enemy [PILOT] rolls Evasion
            dice as normal.
          </li>
          <li className="pv1 tj">
            <span className="fw6">Step 5:</span> Resolve hits — roll 2d6 for
            each hit location and apply damage.
          </li>
        </ul>
      </div>

      <div className="flex w-100">
        {/* Eyes on You */}
        <div className="bg-near-white ba b--black-10 br2 pa3 mb3 w-50 mh2">
          <h3 className="f4 fw7 dark-red mt0 mb1">
            [EYES ON YOU]{" "}
            <span className="fw4 f5">[REACTION] [PILOT TRAIT]</span>
          </h3>
          <p className="lh-copy f6 mb2">
            A [PILOT] with the [EYES ON YOU] trait may, once per Battle Round,
            declare an [EYES ON YOU] Reaction.
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
          <h3 className="f4 fw7 dark-red mt0 mb1">
            [JUKE] <span className="fw4 f5">[REACTION] [PILOT TRAIT]</span>
          </h3>
          <p className="lh-copy f6 mb2">
            A [PILOT] with the [JUKE] trait may, once per Battle Round, declare
            a [JUKE] Reaction when their MSU is targeted by an attack and the
            reacting [PILOT] has LOS to the attacker.
          </p>
          <ul className="lh-copy pl3 f6 ma0">
            <li className="pv1">
              The reacting [PILOT] may reroll one of their Evasion dice.
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
