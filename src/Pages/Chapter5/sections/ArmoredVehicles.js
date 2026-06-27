import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const VEHICLE_UNITS = [
  {
    name: "Tanks",
    type: "Vehicle",
    armor: "15",
    move: '7"',
    unitSize: "2 × Tanks",
    maxQty: "6",
    mcuCost: "25",
    equipment: "Tank Cannon, Flares",
  },
  {
    name: "APC Transport",
    type: "Vehicle",
    armor: "8",
    move: '10"',
    unitSize: "1 Transport",
    maxQty: "6",
    mcuCost: "15",
    equipment: "Flares, LMG",
  },
];

const TANK_WEAPONS = [
  {
    name: "Tank Cannon",
    type: "Cannon",
    rof: "2",
    range: "20 | 40 | 60 | 80",
    mod: "+0 | +1 | +0 | -1",
    dam: "8",
    keywords: "[AP(2)]",
  },
];

const APC_WEAPONS = [
  {
    name: "MG (Light)",
    type: "MG",
    rof: "4",
    range: "15 | 35 | 55 | 75",
    mod: "+1 | +1 | +0 | -1",
    dam: "1",
    keywords: "[FULL AUTO], [GRIP], [MOUNTED]",
  },
];

const WeaponTable = ({ weapons, isMobile }) => (
  <div className={classNames("", { "flex mt3": !isMobile, mt2: isMobile })}>
    <div className="center w-100">
      <div className="mh3">
        <div className="overflow-auto">
          <table className="f9 w-100 mh2" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white">Weapon</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white">Type</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">ROF</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                  Range Band (in)
                </th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white">Mod</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">DAM</th>
                <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                  Keywords
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {weapons.map((w, i) => (
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
);

export const ArmoredVehicles = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">5.2 — Armored Vehicles</h2>

      <p className="lh-copy mb4">
        Armored vehicles follow the same movement and facing restrictions as
        MSU. Tanks provide heavy firepower and durable armor, while APC
        Transports offer mobility support. Both unit types use hex bases and
        have a single hit location.
      </p>

      <h3 className="f4 fw7 mb2">Vehicle Units</h3>
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
                  {VEHICLE_UNITS.map((u, i) => (
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

      <h3 className="f4 fw7 mt4 mb2">Tank Weapons</h3>
      <WeaponTable weapons={TANK_WEAPONS} isMobile={isMobile} />

      <h3 className="f4 fw7 mt4 mb2">APC Weapons</h3>
      <WeaponTable weapons={APC_WEAPONS} isMobile={isMobile} />
    </div>
  );
};
