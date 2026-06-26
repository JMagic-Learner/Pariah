export const FireteamCreation = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.3 — Fireteam Creation</h2>

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
        Recommended budgets:
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 dark-red fw6">
          DUEL (250 MCU) The classic 1v1 showdown between two opposing [PILOT]s.
        </li>
        <li className="pv1 dark-red fw6">
          SKIRMISH (500 MCU) A [PILOT]s and a trusted partner team up to go 2v2.
        </li>
        <li className="pv1 dark-red fw6">
          FIREFIGHT (750 MCU) A full [FIRETEAM] (3v3) engagement.
        </li>
        <li className="pv1 dark-red fw6">
          FLASHPOINT (1000 MCU) Absolute chaos, 4v4
        </li>
      </ul>

      <p className="lh-copy tj">
        3v3 games are considered to be large, full fledge games. Gundam
        Flashpoint recommends 2v2 as a good casual game size.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj"> What constitutes a [FIRETEAM]</h3>
      <p className="lh-copy tj">
        In order to create a [FIRETEAM], a player must build a force of two or
        more [PILOTS], with one [PILOT] having the [COMMANDER] keyword.
      </p>
      <p className="lh-copy tj">
        {" "}
        A player may nominate one [PILOT] to have the [COMMANDER] keyword, or
        give the Captain pilot trait to one of their [PILOTS]
      </p>

      <p className="lh-copy tj">
        {" "}
        Each [FIRETEAM] can belong to a [FACTION], see Section 2.9 for Faction
        bonuses
      </p>
    </div>
  );
};
