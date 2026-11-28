import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { WARCRIMINAL_UPGRADES } from "../../Data/WarcriminalTraitsArray";

export const WarcriminalUpgradesTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div className={classNames("", { "flex mt5": !isMobile, mt2: isMobile })}>
      <div className="center w-100">
        <div className="mh3">
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      MCU Cost
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {WARCRIMINAL_UPGRADES.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {item.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc red fw6">
                        {item.cost}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 lh-copy">
                        {item.effect}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {isMobile && (
            <div className="w-100">
              {WARCRIMINAL_UPGRADES.map((item, i) => (
                <div key={i} className="mb2 pa3 ba b--black-10 bg-near-white">
                  <p className="fw7 ma0 mb1">{item.name}</p>
                  <p className="ma0 f7 red mb1">Cost: {item.mcu} MCU</p>
                  <p className="ma0 f7 lh-copy">{item.effect}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
