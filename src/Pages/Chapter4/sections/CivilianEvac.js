export const CivilianEvac = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">Mission 7 — Civilian Evacuation</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className="i lh-copy ma0">
          "Between thousands of civilians and the enemy, is your squad. The
          enemy is here to enact a blood debt upon your people. Stop them at all
          costs."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className="lh-copy pl3 tj">
            <li className="pv1">
              <strong>Table:</strong> 48"×72" recommended (large engagement)
            </li>
            <li className="pv1">
              <strong>Defender :</strong> Deploys within 12" of one short edge
            </li>
            <li className="pv1">
              <strong>Attacker:</strong> Deploys within 6" of the opposite short
              edge
            </li>
            <li className="pv1">
              <strong>Residential Area:</strong> Roll up to 15 dice and scatter
              them randomly onto the battlefield. Replace the dice with Civilian
              tokens/markers/bases.
            </li>
            <li className="pv1">
              <strong>Rounds:</strong> 6
            </li>
          </ul>
        </div>
        <div className="w-50-ns pl3-ns">
          <h3 className="f4 fw7 mb2">Victory Conditions</h3>
          <ul className="lh-copy pl3 tj">
            <li className="pv1">
              <strong className="red">+1 VP</strong> — Defender: For each
              Civilian inside the Defender's deployment zone at the end of the
              game. Also see "Evac Zone" rule below.
            </li>
            <li className="pv1">
              <strong className="red">+3 VP</strong> — Attacker: Each Defender
              [UNIT] destroyed.
            </li>
            <li className="pv1">
              <strong className="red">+3 VP</strong> — Either: Destroy enemy
              Commander MSU
            </li>
          </ul>
        </div>
      </div>

      <h3 className="f4 fw7 mb2">Civilian Evacuation Rules</h3>
      <ul className="lh-copy pl3 tj">
        <li className="pv1">
          <strong>Remorseless:</strong> All Attacker [PILOTS] gain the{" "}
          <strong> War Criminal </strong>
          trait for free. This free trait is not considered a purchased trait
          for the purposes of [PILOT] creation and does not count toward pilot
          trait limits.
        </li>
        <li className="pv1">
          <strong>Over my dead body:</strong> All Defender [PILOTS] gain the
          <strong> Fearless</strong> trait. This free trait is not considered a
          purchased trait for the purposes of [PILOT] creation and does not
          count toward pilot trait limits.
        </li>
        <li className="pv1">
          <strong>Evac Zone:</strong> The Defender's deployment zone is
          considered the Evacuation Zone. At the start of the battle round, all
          CIVILIANS within the Defender's deployment zone are considered safe
          and are removed from the battlefield. Each CIVILIAN removed in this
          way scores +1 VP for the Defender.
        </li>
        <li className="pv1">
          <strong>Civilians Evacuation:</strong> At the beginning of each round,
          all CIVILIANS move 4" towards the Defender's deployment zone.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Terrain Suggestions</h3>
      <p className="lh-copy">
        Civilian Evacuation can be played on a variety of terrains, but it works
        best when there are multiple obstacles and cover options available.
        Consider using buildings, walls, and other structures to create
        interesting movement paths and defensive positions.
      </p>
    </div>
  );
};
