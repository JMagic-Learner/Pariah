import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const AddingSupportEquipment = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3 lh-copy tj">
        2.4.5 — How to Add Support Equipment to your MSU / Pilot Sheet
      </h2>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Much like weapons, <span className="fw6 red"> [PILOT]</span>s purchase
        Support Equipment according to MCU, FRO, and Tonnage limits
      </p>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        However, Support Equipment may take up more than one slot in a hit
        location.
      </p>

      <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Hit Location 1
          <span className="fw4 black">
            {" "}
            Designates that this Support equipment only goes into that one
            specifeid hit location
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Hit Location 1/ Hit Location 2
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment goes into all hit locations
            mentioned.
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Both Hit Locations (Legs or Arms)
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment MUST go into both [LEGS] or
            [ARMS] go into Hit Location 1 and/or Hit Location 2. This Hit
            Location assignment allows the Support Equipment to keep functioning
            even if one of the assigned limbs are lost.
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Weapon
          <span className="fw4 black">
            {" "}
            Designates that this support equipment is some sort of weapon
            upgrade or modification. Weapon upgrades do not take a slot, but
            require some notation on the MSU sheet to denote which weapon
            receives the upgrade.
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
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
