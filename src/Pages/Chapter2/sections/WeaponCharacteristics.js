import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const WeaponCharacteristics = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.4.1 — Weapon Characteristics</h2>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Weapons in Gundam Flashpoint have the following characteristics.
      </p>

      <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Name
          <span className="fw4 black"> Self Explanatory</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Type
          <span className="fw4 black"> What type of weapon category</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          ROF
          <span className="fw4 black">
            {" "}
            Rate of Fire, or how many attack dice are rolled per{" "}
            <span className="fw6 red"> [ATTACK] </span>
            declaration
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Rangebands
          <span className="fw4 black">
            {" "}
            Divided into four brackets, Short Range | Medium Range | Long Range
            | Extreme Range
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Mods
          <span className="fw4 black">
            {" "}
            Divided into four brackets, Short Range Mods | Medium Range Mods |
            Long Range Mods | Extreme Range Mods. Typically ranges from -2 to +2
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Damage:{" "}
          <span className="fw4 black">
            How much hit points are subtracted from a hit location
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Equipment Tonnage:{" "}
          <span className="fw4 black">How much weight this weapon incurs</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Active FRO:{" "}
          <span className="fw4 black">
            How much FRO a MSU spends to fire this weapon or use this weapon.
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">How much a weapon typically costs.</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Restrictions:{" "}
          <span className="fw4 black">
            What restrictions are there to purchase this weapon.
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Keywords:{" "}
          <span className="fw4 black">
            What special abilities are associated with this weapon
          </span>
        </li>
      </ul>
    </div>
  );
};
