export const FireteamCreation = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.3 — Fireteam Creation</h2>

      <p className="lh-copy tj">
        Before playing Flashpoint, each player must construct a Fireteam. A
        Fireteam is a group of Mobile Suit Units (MSUs) built within a shared
        Mobile Credit Unit (MCU) budget. The composition of your Fireteam
        defines your playstyle — more MSUs at lower cost give you tactical
        flexibility; fewer, more expensive MSUs give you raw power.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">MCU Budget</h3>
      <p className="lh-copy tj">
        Each player receives a shared MCU budget agreed upon before the game.
        These shared budgets are split between the{" "}
        <span className="fw6 red"> [FIRETEAM] </span> members. For example, each{" "}
        <span className="fw6 red"> [PILOT]</span> in a 2v2 game has a 250 MCU
        limit, but overall team budgets are 500 MCU. Recommended budgets:
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 red fw6">
          DUEL (250 MCU) The classic 1v1 showdown between two opposing{" "}
          <span className="fw6 red"> [PILOT]</span>s.
        </li>
        <li className="pv1 red fw6">
          SKIRMISH (500 MCU) A <span className="fw6 red"> [PILOT]</span>s and a
          trusted partner team up to go 2v2.
        </li>
        <li className="pv1 red fw6">
          FIREFIGHT (750 MCU) A full{" "}
          <span className="fw6 red"> [FIRETEAM] </span> (3v3) engagement.
        </li>
        <li className="pv1 red fw6">
          FLASHPOINT (1000 MCU) Absolute chaos, 4v4
        </li>
      </ul>

      <p className="lh-copy tj">
        3v3 games are considered to be large, full fledge games. Gundam
        Flashpoint recommends 2v2 as a good casual game size.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">
        {" "}
        What constitutes a <span className="fw6 red"> [FIRETEAM] </span>
      </h3>
      <p className="lh-copy tj">
        In order to create a <span className="fw6 red"> [FIRETEAM] </span>, a
        player must build a force of two or more [PILOTS], with one{" "}
        <span className="fw6 red"> [PILOT]</span> having the{" "}
        <span className="fw6 red"> [COMMANDER] </span> keyword.
      </p>
      <p className="lh-copy tj">
        {" "}
        A player may nominate one <span className="fw6 red"> [PILOT]</span> to
        have the <span className="fw6 red"> [COMMANDER] </span> keyword, or give
        the Captain pilot trait to one of their [PILOTS]
      </p>

      <p className="lh-copy tj">
        {" "}
        Each <span className="fw6 red"> [FIRETEAM] </span> can belong to a
        [FACTION], see Section 2.10 for Faction bonuses
      </p>
    </div>
  );
};
