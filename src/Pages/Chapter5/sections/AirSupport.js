import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { AIR_UNITS, AIRCRAFT_WEAPONS } from "../../../Data/SupportUnitsArray";

export const AirSupport = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.3 — Air Support</h2>

      <p className="lh-copy mb4">
        Fighter Jets and Bombers follow the same movement restrictions as MSU
        but must complete their mandatory movement distance each activation.
        Jets excel at harassment and missile strafing runs, but their mandatory
        movement makes them predictable if poorly positioned.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Variable Altitude (High vs Attack)</h3>
        <p className="lh-copy ma0">
          In <span className="fw6 red"> HIGH ALTITUDE </span> mode, Aircraft are
          considered at unlimited height, ignoring terrain elevation, and can
          simply move over any terrain without movement penalty. They cannot
          declare any Attack action against ground units and cannot be declared
          as targets of weapons from ground units without
          <span className="fw6 red"> [ANTI-AIRCRAFT] </span> keyword.In{" "}
          <span className="fw6 red"> ATTACK RUN </span> mode, aircraft no longer
          ignore vertical terrain height, become 6" high, (instead of 36"), and
          increase base movement to 20", and gain +2 evasion.{" "}
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Flexibile Doctrines</h3>
        <p className="lh-copy ma0">
          <strong>Fighter jets and Intercepter Jets </strong> before they
          declare their <span className="fw6 red"> [MOVEMENT] </span> action,
          must choose to be <span className="fw6 red"> HIGH ALTITUDE </span> or
          enter <span className="fw6 red"> ATTACK RUN </span>.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">High Altitude Operations</h3>
        <p className="lh-copy ma0">
          <strong>AWACs and Bomber units </strong> are always in considered to
          be in <span className="fw6 red"> HIGH ALTITUDE </span>.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Helicopter Operations </h3>
        <p className="lh-copy ma0">
          <strong> Helicopters </strong>operate in{" "}
          <span className="fw6 red"> ATTACK RUN </span> mode by default.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Mandatory Movement</h3>
        <p className="lh-copy ma0">
          Jets, Bombers, and AWACs <strong>must</strong> move their full
          mandatory movement distance each time they activate. If terrain or
          board edges would prevent this, the jet is removed from play.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Tailspin Risk</h3>
        <p className="lh-copy ma0">
          All aircraft that have been hit by any attack <strong>must</strong>{" "}
          make a PS 3+ check at risk entering a tailspin. Pilots that fail will
          move their mandatory movement next round in a random direction and
          rotate up 2 hexes doing so. The jet no longer ignores terrain
          elevation and it collides with any{" "}
          <span className="fw6 red"> [HARD COVER] </span> it is immediately
          destroyed.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Carpet Bombing</h3>
        <p className="lh-copy ma0">
          Bombers may to deploy up to three AIRSTRIKE tokens per Limited Use
          during it's mandatory movement. These tokens are deployed directly
          under the flight path of this Bomber Unit.
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

      <h3 className="f4 fw7 mt4 mb2">Aircraft Weapons</h3>
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
                  {AIRCRAFT_WEAPONS.map((w, i) => (
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
