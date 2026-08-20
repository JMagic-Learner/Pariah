import { useMediaQuery } from "@custom-react-hooks/all";
import { PILOT_ACCOLADES } from "../../../Data/PilotAccoladesArray";

export const PilotAccolades = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.4 — Pilot Accolades</h2>

      <p className="lh-copy tj mb4">
        Accolades are upgrades attributed to Ace{" "}
        <span className="fw6 red"> [PILOT]</span>s who distinguish themselves
        across a Campaign. A <span className="fw6 red"> [PILOT]</span> must
        have survived at least 3 Campaign Battles before purchasing any
        Accolade below, representing the seasoning required to earn Ace
        status. Accolades are purchased with accumulated EXP between Campaign
        Battles, similar to how pilot traits are purchased with Trait Points. A{" "}
        <span className="fw6 red"> [PILOT]</span> cannot purchase the same
        Accolade twice unless otherwise stated.
      </p>

      {!isMobile && (
        <div className="overflow-auto">
          <table className="f6 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Name</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">
                  EXP Cost
                </th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {PILOT_ACCOLADES.map((accolade, i) => (
                <tr key={i}>
                  <td className="pv3 pr3 bb b--black-20 fw6">
                    {accolade.name}
                  </td>
                  <td className="pv3 pr3 bb b--black-20 tc">
                    {accolade.cost}
                  </td>
                  <td className="pv3 pr3 bb b--black-20">
                    {accolade.effect}
                    {accolade.restrictions && (
                      <span className="db f7 gray mt1">
                        Restriction: {accolade.restrictions}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isMobile && (
        <div className="w-100">
          {PILOT_ACCOLADES.map((accolade, i) => (
            <div key={i} className="ba b--black-20 mb3 pa3">
              <p className="fw7 ma0 mb1 red">{accolade.name}</p>
              <p className="f7 ma0 mb1 gray">EXP Cost: {accolade.cost}</p>
              <p className="f6 lh-copy ma0">{accolade.effect}</p>
              {accolade.restrictions && (
                <p className="f7 lh-copy mt1 mb0 gray">
                  Restriction: {accolade.restrictions}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
