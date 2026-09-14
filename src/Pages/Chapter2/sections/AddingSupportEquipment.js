export const AddingSupportEquipment = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3 lh-copy tj">
        2.4.5 — How to Add Support Equipment to your MSU / Pilot Sheet
      </h2>

      <p className="lh-copy tj">
        Much like weapons, <span className="fw6 red"> [PILOT]</span>s purchase
        Support Equipment according to MCU, FRO, and Tonnage limits
      </p>

      <p className="lh-copy tj">
        However, Support Equipment may take up more than one slot in a hit
        location.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 red fw6">
          Hit Location 1
          <span className="fw4 black">
            {" "}
            Designates that this Support equipment only goes into that one
            specifeid hit location
          </span>
        </li>
        <li className="pv1 red fw6">
          Hit Location 1/ Hit Location 2
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment goes into all hit locations
            mentioned.
          </span>
        </li>
        <li className="pv1 red fw6">
          Both Hit Locations (Legs or Arms)
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment MUST go into both [LEGS] or
            [ARMS] go into Hit Location 1 and/or Hit Location 2. This Hit
            Location assignment allows the Support Equipment to keep functioning
            even if one of the assigned limbs are lost.
          </span>
        </li>
        <li className="pv1 red fw6">
          Weapon
          <span className="fw4 black">
            {" "}
            Designates that this support equipment is some sort of weapon
            upgrade or modification. Weapon upgrades do not take a slot, but
            require some notation on the MSU sheet to denote which weapon
            receives the upgrade.
          </span>
        </li>
        <li className="pv1 red fw6">
          "-----"
          <span className="fw4 black">
            {" "}
            Some support equipment do not have hit locations specified, meaning
            that they can be assigned anywhere that is legal.
          </span>
        </li>
      </ul>
    </div>
  );
};
