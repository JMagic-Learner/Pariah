import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { WarcriminalUpgradesTable } from "../../../Components/Table/WarcriminalUpgradesTable";

export const WarcriminalUpgrades = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3 tc">2.11 Warcriminal Upgrades</h2>
      <p className={classNames("lh-copy tj mb2", { f7: isMobile })}>
        Certain characters within the Gundam franchise are essentially
        warcriminals. Warcriminal upgrades are to represent tactics that are
        seen in the Gundam shows, that are quite detestable to protagonists and
        the vast majority of the public. Warcriminal traits are only available
        to pilots with the <strong>Warcriminal</strong>
        pilot traits.
      </p>
      <ul className={classNames("lh-copy mb4 pl4", { f7: isMobile })}>
        <li className={classNames("lh-copy tj", { f7: isMobile })}>
          Only available for pilots who have taken the{" "}
          <strong>Warcriminal</strong>
          pilot trait.
        </li>
        <li className={classNames("lh-copy tj", { f7: isMobile })}>
          Unlike <strong> Newtype </strong> upgrades, Warcriminal upgrades are
          not <strong>unique in Force</strong> — a Force with multiple [PILOT]
          (with Warcriminal trait) can have the same Warcriminal upgrade unless
          specified. For example, a full fireteam of Warcriminals can each have
          the <strong>Saturation Bombardment</strong>, giving the force the
          ability to place three <strong>Airstrike!</strong> marker per [PILOT]
        </li>
        <li className={classNames("lh-copy tj", { f7: isMobile })}>
          A pilot can only have one <strong>Warcriminal</strong> upgrade at a
          time.
        </li>
      </ul>
      <WarcriminalUpgradesTable />
    </div>
  );
};
