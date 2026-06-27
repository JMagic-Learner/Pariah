export const OtherActions = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.7 — Other Actions</h2>

      {/* Seek Cover */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">SEEK COVER! [AUTOMATIC]</p>
        <p className="lh-copy f6 mb2 i">
          When a Mobile Suit receives damage, its Pilot isn't going to stand
          still. It will actively seek a safer location.
        </p>
        <p className="lh-copy f6 mb2 tj">
          The Pilot makes a <span className="fw6">PS Skill Check of 5+</span>{" "}
          after receiving damage in any location. If successful, the Pilot
          immediately recognizes he / she is in grave danger, and{" "}
          <span className="fw6">CAN</span> move the MSU its base movement speed
          to one of the following targets in terms of priority; if the Pilot
          fails, he / she <span className="fw6">MUST</span> make this Seek Cover
          move. (A [SUPPRESSED] MSU can still move backward / sideways to one of
          the following priorities.)
        </p>
        <ol className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            Toward the nearest full cover, obscuring as much of the MSU as it
            can.
          </li>
          <li className="pv1">
            Toward the nearest partial cover, obscuring as much of the MSU as it
            can.
          </li>
          <li className="pv1">Toward the nearest friendly unit.</li>
          <li className="pv1">To the nearest board edge.</li>
        </ol>
        <p className="lh-copy f7 mt2 mb0 tj">
          This movement is also counted in the Evasion Table. This mechanic aims
          to soften focus fire from multiple sources.
        </p>
      </div>

      {/* Get it together — Commander */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">
          GET IT TOGETHER! [ACTION] [COMMANDER]
        </p>
        <p className="lh-copy f6 mb2 i">A [COMMANDER] can rally the squad.</p>
        <p className="lh-copy f6 mb0 tj">
          A [COMMANDER] can spend an action to RALLY squadmates at{" "}
          <span className="fw6">Step 1.4 of the Status Phase</span>. This is a{" "}
          <span className="fw6">PS Skill Check of 5+</span>. If successful,
          remove any <span className="fw6">[FEAR / SHAKEN]</span> and{" "}
          <span className="fw6">[SUPPRESSED]</span> status on all squadmates
          within <span className="fw6">18 inches</span>.
        </p>
      </div>

      {/* Reposition — Commander */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">
          REPOSITION! [ACTION] [COMMANDER]
        </p>
        <p className="lh-copy f6 mb2 i">
          Sometimes a [COMMANDER] realizes that his / her squad is completely
          out of position.
        </p>
        <p className="lh-copy f6 mb0 tj">
          A [COMMANDER] can spend an action to reposition squadmates at{" "}
          <span className="fw6">Step 1.4 of the Status Phase</span>. All
          squadmates can move up to{" "}
          <span className="fw6">6 inches closer without penalty</span> to the
          [COMMANDER].
        </p>
      </div>

      {/* Airstrike */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">AIRSTRIKE! [ACTION]</p>
        <p className="lh-copy f6 mb2 i">
          MSUs equipped with a Target Designator can call in AIRSTRIKE!
        </p>
        <p className="lh-copy f6 mb2 tj">
          A MSU with a Target Designator spends an Action in{" "}
          <span className="fw6">Step 4 of the Status Phase</span>, nominates a
          Point of Interest (on the ground, cover, or terrain). Roll a{" "}
          <span className="fw6">PS 5+ Check three times</span>. For each
          success, place an AIRSTRIKE token on that exact point. At the start of
          the next Shooting Phase, that POI is hit by an AIRSTRIKE!
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            MSUs standing directly on an AIRSTRIKE marker, or with their bases
            in contact with one, take{" "}
            <span className="fw6 dark-red">15 damage</span> to one hit location.
          </li>
          <li className="pv1">
            All other MSUs within <span className="fw6">8 inches</span> of the
            AIRSTRIKE marker are hit with{" "}
            <span className="fw6 dark-red">10 damage</span>.
          </li>
          <li className="pv1">
            MSUs affected by an AIRSTRIKE!{" "}
            <span className="fw6">cannot evade</span> and{" "}
            <span className="fw6">cannot benefit from [HARD COVER]</span>.
          </li>
          <li className="pv1">
            All [HARD COVER] and [OBSCURING COVER] within 8 inches that are less
            than <span className="fw6">4 inches in height</span> and less than{" "}
            <span className="fw6">6 inches in length and width</span> are
            removed from the battlefield.
          </li>
        </ul>
      </div>

      {/* Forward Observe */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">FORWARD OBSERVE [ACTION]</p>
        <p className="lh-copy f6 mb2 i">
          MSU pinpoints an MSU for target tracing and pinpoint attacks.
        </p>
        <p className="lh-copy f6 mb2 tj">
          A MSU with the Forward Observer Support Equipment spends an Action in{" "}
          <span className="fw6">Step 4 of the Status Phase</span>, nominates an
          enemy MSU within LOS. Mark that MSU with a Forward Observe token /
          marker. Roll a{" "}
          <span className="fw6">PS 5+ skill check three times</span>.
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            <span className="fw6">One Success:</span> Enemy MSU no longer
            benefits from [OBSCURING COVER] until end of round.
          </li>
          <li className="pv1">
            <span className="fw6">Two Successes:</span> Enemy MSU grants a{" "}
            <span className="fw6">+1 modifier</span> to ranged attacks made
            against it until end of round.
          </li>
          <li className="pv1">
            <span className="fw6">Three Successes:</span> All ranged attacks
            made against the enemy MSU now roll{" "}
            <span className="fw6">2d3 instead of 1d6</span> until end of round.
          </li>
        </ul>
      </div>

      {/* Swap */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">SWAP [ACTION][REACTION]</p>
        <p className="lh-copy f6 mb2 i">
          An MSU can retrieve a weapon from [STOWAGE] into [READIED] position.
          Mark which weapon has been [READIED] and which has been [STOWED]
        </p>
        <p className="lh-copy f6 mb2 i">
          An MSU can stow a weapon from [READIED] position into [STOWAGE]. Mark
          which weapon has been [READIED] and which has been [STOWED]
        </p>
      </div>

      {/* Drop Weapon / Shield */}
      <div className="bg-light-gray pa3 mb3 br2">
        <p className="fw7 dark-red f5 ma0 mb1">DROP [FREE][REACTION]</p>
        <p className="lh-copy f6 mb2 i">
          An MSU can drop a weapon or shield from [READIED] position without
          costing an action.
        </p>
      </div>
    </div>
  );
};
