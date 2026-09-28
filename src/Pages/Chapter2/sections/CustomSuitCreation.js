import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const CustomSuitCreation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.2.4 — Custom Suit Creation</h2>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        Sometimes players wish to incorporate mobile suits from other Gundam
        timelines and settings. This is perfectly fine with Gundam Flashpoint's
        framework.
      </p>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        Players who wish to port over thier AU suits can use the following
        Custom MSU baseline stats.
      </p>

      <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">
            {" "}
            Custom suits do not cost any baseline MCU
          </span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          FRO (FUSION REACTOR OUTPUT): <span className="fw4 black">6</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Equipment Tonnage (TONNAGE/3):{" "}
          <span className="fw4 black">Equipment Tonnage of 16</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Movement (Inches): <span className="fw4 black">8 inches</span>
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          Armor: <span className="fw4 black">25</span>
        </li>
      </ul>
    </div>
  );
};
