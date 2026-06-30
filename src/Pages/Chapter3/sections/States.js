export const States = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">3.6 — States</h2>

      <p className="lh-copy mb4 tj">
        States are condition tokens placed on an MSU to track ongoing effects.
        An MSU may have multiple states simultaneously unless noted otherwise.
      </p>

      {/* Crippled */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [CRIPPLED] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb2 fw6">
          When a MSU receives severe damage to its legs, the model experiences
          Crippled state.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6 orange">Ground Operations:</span> The MSU
            reduces its movespeed by 2 inches.
          </li>
          <li className="pv1">
            <span className="fw6 orange">Space Operations:</span> The MSU does
            not fall down. The MSU reduces its movespeed by 50%.
          </li>
        </ul>
      </div>

      {/* Crouched */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [CROUCHED] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb0">
          An MSU that has physically reposed into a crouching state. Reduce
          movement by half.
        </p>
      </div>

      {/* Knockdown */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [KNOCKDOWN] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb0">
          MSUs that are in [KNOCKDOWN] state crawl at half speed. MSU can still
          shoot normally, but must use one hand to prop itself up. [KNOCKDOWN]
          state also applies a{" "}
          <span className="fw6 orange">−2 penalty to all skill checks</span>.
        </p>
      </div>

      {/* Fear / Shaken */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [FEAR / SHAKEN] <span className="fw4 f5">[AUTOMATIC]</span>
        </h3>
        <p className="lh-copy f6 mb2 fw6">
          When a friendly MSU is destroyed nearby, Pilots may experience fear.
        </p>
        <p className="lh-copy f6 mb0">
          Whenever a friendly MSU is destroyed, all surrounding friendly units
          within <span className="fw6 orange">8 inches</span> must make a{" "}
          <span className="fw6 orange">PS Skill Check of 5+</span>. Pilots who
          fail this PS check suffer a{" "}
          <span className="fw6 orange">
            permanent −1 penalty to all skill checks
          </span>{" "}
          for the rest of the game. This penalty is not stackable with multiple
          instances of Fear / Shaken.
        </p>
      </div>

      {/* Aiming */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [AIMING] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb0">
          The MSU receives a{" "}
          <span className="fw6 orange">
            +1 circumstance bonus to all GS checks
          </span>
          .
        </p>
      </div>

      {/* Stealth */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [STEALTH] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          The MSU receives a{" "}
          <span className="fw6 orange">
            +1 circumstance bonus to all Evasion Skill Checks
          </span>
          .
        </p>
        <p className="lh-copy f6 mb2">
          When this MSU is outside line of sight of all enemy MSUs, replace this
          MSU with a <span className="fw6 orange">60mm token</span> centered on
          the original base. Enemy units that later come into Line of Sight with
          this unit "reveal" it — replace the 60mm token with the MSU's base,
          centered on the token. This MSU can face in any direction once
          revealed.
        </p>
        <p className="lh-copy f6 mb0">
          If attacks are declared while in Token form, the enemy MSU suffers a{" "}
          <span className="fw6 orange">−2 penalty to Evasion checks</span>.
          Enemy MSUs cannot declare Reactions against, or use abilities with
          Free reactions against, the activation or movement of a Stealthed MSU.
        </p>
      </div>

      {/* Suppressed */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          [SUPPRESSED] <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          When a [SUPPRESSIVE] weapon hits an enemy more than twice — rolling
          two hit locations and dealing damage to both — that enemy enters the
          Suppressed state.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            Suppressed MSUs must immediately stop any ongoing forward movement
            (Boosts, Blitz, Support Equipment, Base Movement Actions, etc.).
          </li>
          <li className="pv1">
            Suppressed MSUs can only move sideways or backwards.
          </li>
          <li className="pv1">
            Suppressed MSUs cannot move closer to the wielder of the
            [SUPPRESSIVE] weapon.
          </li>
          <li className="pv1">
            [SUPPRESSED] state is removed when: the Suppressed MSU spends an
            action in the Status Phase; the wielder breaks LOS with the target;
            the wielder moves (Boost / Blitz / Move Action / Pushed); or the
            wielder is beyond max rangebands.
          </li>
        </ul>
      </div>

      {/* Hover */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          <span className="fw6 orange"> [HOVER] </span>{" "}
          <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          An MSU that ends its movement airborne may declare{" "}
          <span className="fw6 orange"> [HOVER] </span> to maintain its current
          altitude for the round.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            The MSU expends{" "}
            <span className="fw6 orange">
              1 FRO during [Status Phase] Step 2
            </span>{" "}
            to maintain altitude. If it cannot pay this cost, it immediately
            enters <span className="fw6 orange"> [FALL] </span> state.
          </li>
          <li className="pv1">
            At the start of its next activation, a{" "}
            <span className="fw6 orange"> [HOVER] </span>ing MSU must again
            choose <span className="fw6 orange"> [HOVER] </span> (paying 1 FRO)
            or <span className="fw6 orange"> [FALL] </span>.
          </li>
          <li className="pv1">
            Falling from <span className="fw6 orange"> [HOVER] </span> state
            counts the drop distance as movement for Evasion Tier Table
            calculations.
          </li>
        </ul>
      </div>

      {/* Fall */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 orange mt0 mb1">
          <span className="fw6 orange"> [FALL] </span>{" "}
          <span className="fw4 f5">[STATE]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          An MSU that is airborne and does not (or cannot){" "}
          <span className="fw6 orange"> [HOVER] </span> drops to ground level at
          no movement cost. Fall damage is then resolved.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            The falling <span className="fw6 orange"> [PILOT]</span> makes a{" "}
            <span className="fw6 orange">PS 5 Skill Check</span>.
          </li>
          <li className="pv1">
            <span className="fw6 orange">Failure:</span> The MSU suffers{" "}
            <span className="fw6 orange">3 damage per 4 inches</span> of
            distance fallen to one hit location.
          </li>
          <li className="pv1">
            <span className="fw6 orange">Success:</span> No fall damage is
            taken. If the MSU finishes its{" "}
            <span className="fw6 orange"> [FALL] </span> movement within melee
            range of an enemy <span className="fw6 orange"> [PILOT]</span>/MSU,
            it may immediately declare an{" "}
            <span className="fw6 orange"> [ATTACK] </span> action.
          </li>
          <li className="pv1">
            Fall distance counts toward the Evasion Tier Table total for the
            round.
          </li>
        </ul>
      </div>
    </div>
  );
};
