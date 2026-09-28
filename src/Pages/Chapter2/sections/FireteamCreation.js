import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const FireteamCreation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.3 — Fireteam Creation</h2>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Before playing Flashpoint, each player must construct a Fireteam. A
        Fireteam is a group of Mobile Suit Units (MSUs) built within a shared
        Mobile Credit Unit (MCU) budget. The composition of your Fireteam
        defines your playstyle — more MSUs at lower cost give you tactical
        flexibility; fewer, more expensive MSUs give you raw power.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">MCU Budget</h3>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Each player receives a shared MCU budget agreed upon before the game.
        These shared budgets are split between the{" "}
        <span className="fw6 red"> [FIRETEAM] </span> members. For example, each{" "}
        <span className="fw6 red"> [PILOT]</span> in a 2v2 game has a 250 MCU
        limit, but overall team budgets are 500 MCU. Recommended budgets:
      </p>

      <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          DUEL (250 MCU) The classic 1v1 showdown between two opposing{" "}
          <span className="fw6 red"> [PILOT]</span>s.
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          SKIRMISH (500 MCU) A <span className="fw6 red"> [PILOT]</span>s and a
          trusted partner team up to go 2v2.
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          FIREFIGHT (750 MCU) A full{" "}
          <span className="fw6 red"> [FIRETEAM] </span> (3v3) engagement.
        </li>
        <li className={classNames("pv1 red fw6", { f7: isMobile })}>
          FLASHPOINT (1000 MCU) Absolute chaos, 4v4
        </li>
      </ul>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        3v3 games are considered to be large, full fledge games. Gundam
        Flashpoint recommends 2v2 as a good casual game size.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">
        {" "}
        What constitutes a <span className="fw6 red"> [FIRETEAM] </span>
      </h3>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        In order to create a <span className="fw6 red"> [FIRETEAM] </span>, a
        player must build a force of two or more [PILOTS], with one{" "}
        <span className="fw6 red"> [PILOT]</span> having the{" "}
        <span className="fw6 red"> [COMMANDER] </span> keyword.
      </p>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        A player may nominate one <span className="fw6 red"> [PILOT]</span> to
        have the <span className="fw6 red"> [COMMANDER] </span> keyword, or give
        the Captain pilot trait to one of their [PILOTS]
      </p>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        Each <span className="fw6 red"> [FIRETEAM] </span> can belong to a
        [FACTION], see Section 2.12 for Faction bonuses
      </p>
    </div>
  );
};
