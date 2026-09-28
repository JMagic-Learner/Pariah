import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const Overview = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">4.0 — Missions Overview</h2>

      <p className={classNames("lh-copy mb3", { f7: isMobile })}>
        Chapter 4 contains all playable missions for Flashpoint. Each mission
        defines a Field of Operations (map size and setup), Deployment Zones,
        Victory Conditions, and any Mission-Specific Rules. Players agree on the
        mission before building their Fireteams.
      </p>

      <h3 className="f4 fw7 mt3 mb2">Force Restrictions</h3>
      <p className={classNames("lh-copy mb2", { f7: isMobile })}>
        Unless a mission states otherwise, all Fireteams follow these
        restrictions:
      </p>
      <ul className={classNames("lh-copy pl3", { f7: isMobile })}>
        <li className={classNames("pv1", { f7: isMobile })}>
          Minimum of 2 MSUs per <span className="fw6 red"> [FIRETEAM] </span>{" "}
          regardless of budget.
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Field of Operations</h3>
      <div className="overflow-auto mv2">
        <table className="f9 w-100 mh2" cellSpacing="0">
          <thead>
            <tr>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>Game Size</th>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>
                Table Size
              </th>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>
                Deployment Zone
              </th>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>
                Recommended Terrain
              </th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {[
              ["Duel (250 MCU)", '48"×48"', '6" deep edges', "4–6 pieces"],
              ["Skirmish (500 MCU)", '48"×72"', '6" deep edges', "6–10 pieces"],
              [
                "Firefight (750 MCU)",
                '48"×72"',
                '8" deep edges',
                "10–16 pieces",
              ],
              [
                "Flashpoint (1000 MCU)",
                "Go wild",
                '8" deep edges',
                "12–16 pieces",
              ],
            ].map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                {row.map((cell, j) => (
                  <td key={j} className={classNames("pv3 pr3 bb b--black-20", { f7: isMobile })}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Capturing Objectives</h3>
      <p className={classNames("lh-copy mb2 tj", { f7: isMobile })}>
        Many missions use Objective Markers. Unless stated otherwise, capturing
        rules are:
      </p>
      <ol className="lh-copy pl3 tj">
        <li className={classNames("pv1", { f7: isMobile })}>Move within 3" of the objective marker.</li>
        <li className={classNames("pv1", { f7: isMobile })}>
          Spend one full action to begin capturing (CAPTURE action).
        </li>
        <li className={classNames("pv1", { f7: isMobile })}>
          At the end of the round, if no there is no enemy unit of type MSU,
          Vehicle, or Infantry is within 3" of the marker, it is captured.
        </li>
        <li className={classNames("pv1", { f7: isMobile })}>
          A player having more eligible friendly units (MSU, Vehicle, or
          Infantry) within 3" of the marker gives capture priority to that
          player.
        </li>
        <li className={classNames("pv1", { f7: isMobile })}>
          Captured markers score VP as defined by the mission rules.
        </li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2 tc">Mission Types at a Glance</h3>
      <div className="overflow-auto mv2">
        <table className="f9 w-100 mh2" cellSpacing="0">
          <thead>
            <tr>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>Mission</th>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white", { f7: isMobile })}>
                Primary Win Condition
              </th>
              <th className={classNames("fw6 bb b--black-20 pb3 pr3 bg-white tc", { f7: isMobile })}>Rounds</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {[
              ["Torrington Base", "Hold the center bunker", "5"],
              ["Recon", "Control 3 of 5 Recon Points", "5"],
              ["Assault", "Breach and hold the objective building", "6"],
              ["Sector Control", "Control more sectors at game end", "6"],
              ["Extraction", "Extract a VIP unit off the board", "5"],
              ["Colony Drop", "Destroy the Colony Drop Core or defend it", "8"],
              [
                "Civilian Evacuation",
                "Save Civilians in the midst of battle",
                "6",
              ],
              [
                "Final Stand",
                "A one man army against the world. Survive 5 rounds.",
                "5",
              ],
            ].map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className={classNames("pv3 pr3 bb b--black-20 fw6", { f7: isMobile })}>{row[0]}</td>
                <td className={classNames("pv3 pr3 bb b--black-20", { f7: isMobile })}>{row[1]}</td>
                <td className={classNames("pv3 pr3 bb b--black-20 tc", { f7: isMobile })}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
