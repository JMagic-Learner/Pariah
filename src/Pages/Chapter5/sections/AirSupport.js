import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { AIR_UNITS, JET_WEAPONS } from "../../../Data/SupportUnitsArray";

export const AirSupport = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.3 — Air Support</h2>

      <p className="lh-copy mb4">
        Fighter Jets follow the same movement restrictions as MSU but must
        complete their mandatory movement distance each activation. Jets excel
        at harassment and missile strafing runs, but their mandatory movement
        makes them predictable if poorly positioned.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Variable Altitude</h3>
        <p className="lh-copy ma0">
          Fighter jets before they declare their{" "}
          <span className="fw6 red"> [MOVEMENT] </span> action, must choose to
          be <strong> HIGH ALTITUDE </strong> or enter{" "}
          <strong> ATTACK RUN </strong>. In <strong> HIGH ALTITUDE </strong>{" "}
          mode, Fighter Jets ignore terrain elevation, and can simply move over
          any terrain without movement penalty. In <strong> ATTACK RUN </strong>{" "}
          mode, Fighter Jets no longer ignore vertical terrain height, increase
          base movement to 20", and gain +2 evasion.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Mandatory Movement</h3>
        <p className="lh-copy ma0">
          Fighter Jets <strong>must</strong> move their full mandatory movement
          distance each time they activate. If terrain or board edges would
          prevent this, the jet is removed from play.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Tailspin Risk</h3>
        <p className="lh-copy ma0">
          Fighter Jets that have been hit by any attack <strong>must</strong>{" "}
          make a PS 4+ check or risk entering a tailspin. Pilots that fail will
          move their mandatory movement next round in a random direction and
          rotate up 2 hexes doing so. The jet no longer ignores terrain
          elevation and it collides with any <strong> [HARD COVER] </strong> it
          is immediately destroyed.
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
                      <td className="pv3 pr3 bb b--black-20 tc red fw6">
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
                      <td className="pv3 pr3 bb b--black-20 tc red fw6">
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
