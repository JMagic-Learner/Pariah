import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const WeaponWeightClasses = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.4.3 — Weapon Weight Classes — [LIGHT] vs [MEDIUM] vs [HEAVY]
      </h2>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        The tonnage of certain weapons affect the avaibility of MSU's hands and
        how they perform in{" "}
        <span className="fw6 red"> [SIMULTANEOUS ATTACK] </span> actions
      </p>

      <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          [LIGHT] Weapons
          <span className="fw4 black">
            {" "}
            1 - 2 tons. Can be held in one hand. Ignores movement penalties to
            GS when moving over 3"
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          [MEDIUM] Weapons
          <span className="fw4 black">
            {" "}
            3 - 5 tons. Can be held in one hand
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          [HEAVY] Weapons
          <span className="fw4 black">
            {" "}
            6+ tons. Requires two hands to wield, unless it is mounted on a MSU,
            or has the [BRACE] keyword
          </span>
        </li>
      </ul>
    </div>
  );
};
