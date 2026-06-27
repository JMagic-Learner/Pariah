import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { MUNITIONS } from "../../Data/MunitionsArray";

export const MunitionsTable = () => {
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
                      DAM
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Keywords
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {MUNITIONS.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6">
                        {item.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.dam}</td>
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
              {MUNITIONS.map((item, i) => (
                <div key={i} className="mb2 pa3 ba b--black-10 bg-near-white">
                  <p className="fw7 ma0 mb1">{item.name}</p>
                  <p className="ma0 f7 dark-red mb1">DAM: {item.dam}</p>
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
