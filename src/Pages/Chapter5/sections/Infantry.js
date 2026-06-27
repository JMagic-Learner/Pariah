import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { INFANTRY_UNITS, INFANTRY_WEAPONS } from "../../../Data/SupportUnitsArray";

export const Infantry = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">5.1 — Infantry</h2>

      <p className="lh-copy mb4">
        Infantry squads are represented by individual 28mm hex bases grouped
        into units. Each model in the squad is its own hit location with Armor 1
        — AOE and Napalm Munitions eliminate one hex base per successful hit.
      </p>

      <h3 className="f4 fw7 mb2">Infantry Units</h3>
      <div className={classNames("", { "flex mt3": !isMobile, mt2: isMobile })}>
        <div className="center w-100">
          <div className="mh3">
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Armor
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Move
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Unit Size
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Max Qty
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      MCU Cost
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Equipment
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {INFANTRY_UNITS.map((u, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {u.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{u.type}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{u.armor}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{u.move}</td>
                      <td className="pv3 pr3 bb b--black-20">{u.unitSize}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{u.maxQty}</td>
                      <td className="pv3 pr3 bb b--black-20 tc dark-red fw6">
                        {u.mcuCost}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{u.equipment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Infantry Weapons</h3>
      <div className={classNames("", { "flex mt3": !isMobile, mt2: isMobile })}>
        <div className="center w-100">
          <div className="mh3">
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Weapon
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      ROF
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Range Band (in)
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">Mod</th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      DAM
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Keywords
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {INFANTRY_WEAPONS.map((w, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {w.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{w.type}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{w.rof}</td>
                      <td className="pv3 pr3 bb b--black-20">{w.range}</td>
                      <td className="pv3 pr3 bb b--black-20">{w.mod}</td>
                      <td className="pv3 pr3 bb b--black-20 tc dark-red fw6">
                        {w.dam}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{w.keywords}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mt4">
        <p className="ma0 lh-copy">
          <strong>Note:</strong> AOE and Napalm Munitions wipe out one hex base
          per successful hit. Infantry cannot benefit from Hard Cover unless the
          terrain physically conceals their hex bases.
        </p>
      </div>
    </div>
  );
};
