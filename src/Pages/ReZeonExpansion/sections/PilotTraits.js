import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { REZEON_TRAITS } from "../../../Data/ReZeonTraitsArray";

export const ReZeonPilotTraits = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">ReZeon Pilot Traits</h2>
      <p className="lh-copy mb4">
        ReZeon pilots may take any of these traits in addition to those found in
        the Core Rules. You may not stack multiple of the same trait per pilot
        unless specified otherwise.
      </p>

      {!isMobile && (
        <div className="overflow-auto">
          <table className="f6 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Name</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Cost</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {REZEON_TRAITS.map((trait, i) => (
                <tr key={i}>
                  <td className="pv3 pr3 bb b--black-20 fw6">{trait.name}</td>
                  <td className="pv3 pr3 bb b--black-20 tc">{trait.cost}</td>
                  <td className="pv3 pr3 bb b--black-20">{trait.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isMobile && (
        <div className="w-100">
          {REZEON_TRAITS.map((trait, i) => (
            <div key={i} className="ba b--black-20 mb3 pa3">
              <p className="fw7 ma0 mb1 orange">{trait.name}</p>
              <p className="f7 ma0 mb1 gray">Cost: {trait.cost}</p>
              <p className="f6 lh-copy ma0">{trait.effect}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
