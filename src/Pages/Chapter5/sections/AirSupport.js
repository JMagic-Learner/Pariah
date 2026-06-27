import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const AIR_UNITS = [
  {
    name: "Fighter Jet",
    type: "Vehicle",
    armor: "10",
    move: '15" (mandatory)',
    unitSize: "1 Fighter Jet",
    maxQty: "6",
    mcuCost: "25",
    equipment:
      "Vulcan Cannons ×2, Missile Pod 2 ×2 ([Limited Use (2)]), Flares",
  },
];

const JET_WEAPONS = [
  {
    name: "Vulcan Cannons",
    type: "MG",
    rof: "3",
    range: "6 | 24 | 36 | NA",
    mod: "+2 | +1 | -1 | NA",
    dam: "3",
    keywords: "[FULL AUTO], [INBUILT]",
  },
  {
    name: "Missile Pod 2",
    type: "Missile",
    rof: "2",
    range: "Min Band 16",
    mod: "—",
    dam: "5",
    keywords: "[MISSILE(16)], [Limited Use (2)]",
  },
];

export const AirSupport = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">5.3 — Air Support</h2>

      <p className="lh-copy mb4">
        Fighter Jets follow the same movement restrictions as MSU but must
        complete their mandatory movement distance each activation. Jets excel
        at harassment and missile strafing runs, but their mandatory movement
        makes them predictable if poorly positioned.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Mandatory Movement</h3>
        <p className="lh-copy ma0">
          Fighter Jets <strong>must</strong> move their full mandatory movement
          distance each time they activate. If terrain or board edges would
          prevent this, the jet is removed from play.
        </p>
      </div>

      <h3 className="f4 fw7 mb2">Air Units</h3>
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
                  {AIR_UNITS.map((u, i) => (
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

      <h3 className="f4 fw7 mt4 mb2">Jet Weapons</h3>
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
                  {JET_WEAPONS.map((w, i) => (
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
    </div>
  );
};
