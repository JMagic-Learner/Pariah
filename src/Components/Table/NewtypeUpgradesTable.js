import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { NEWTYPE_UPGRADES, BITS } from "../../Data/NewtypeUpgrades";

export const NewtypeUpgradesTable = () => {
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
                      Limit
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
                  {NEWTYPE_UPGRADES.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {item.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc">
                        {item.limit}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc dark-red fw6">
                        {item.mcu}
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
              {NEWTYPE_UPGRADES.map((item, i) => (
                <div key={i} className="mb2 pa3 ba b--black-10 bg-near-white">
                  <p className="fw7 ma0 mb1">{item.name}</p>
                  <p className="ma0 f7 dark-red mb1">
                    Limit: {item.limit} · MCU: {item.mcu}
                  </p>
                  <p className="ma0 f7 lh-copy">{item.effect}</p>
                </div>
              ))}
            </div>
          )}

          <h3 className="f4 fw7 mt4 mb2 bb pb2">Psycommu Bits / Funnels</h3>

          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Bit Type
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Category
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Armor
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Range Band
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Range Mods
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      DAM
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Faction
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {BITS.map((bit, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6">{bit.type}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{bit.cat}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{bit.armor}</td>
                      <td className="pv3 pr3 bb b--black-20">{bit.range}</td>
                      <td className="pv3 pr3 bb b--black-20">{bit.mods}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{bit.dam}</td>
                      <td className="pv3 pr3 bb b--black-20 tc dark-red fw6">
                        {bit.mcu}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc">
                        {bit.faction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {isMobile && (
            <div className="w-100">
              {BITS.map((bit, i) => (
                <div key={i} className="mb2 pa3 ba b--black-10 bg-near-white">
                  <p className="fw7 ma0 mb1">{bit.type} Bit</p>
                  <p className="ma0 f7 dark-red mb1">
                    Armor: {bit.armor} · DAM: {bit.dam} · MCU: {bit.mcu} ·
                    Faction: {bit.faction}
                  </p>
                  <p className="ma0 f7 lh-copy">
                    Range: {bit.range} | Mods: {bit.mods}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
