import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import {
  INFANTRY_UNITS,
  INFANTRY_WEAPONS,
  VEHICLE_UNITS,
  TANK_WEAPONS,
  AIR_UNITS,
  AIRCRAFT_WEAPONS,
} from "../../Data/SupportUnitsArray";
import { renderKeywords } from "../../utils/renderKeywords";
import { KeywordDialog } from "../KeywordDialog";

const UnitTable = ({ units, mobileTitle }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      {!isMobile && (
        <div className="center">
          <div className="mh3">
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Armor
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Move
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Unit Size
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Max Quantity
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Equipment
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {units.map((unit, i) => (
                    <tr key={i}>
                      <td className="pv3 pr3 bb b--black-20">{unit.name}</td>
                      <td className="pv3 pr3 bb b--black-20">{unit.type}</td>
                      <td className="pv3 pr3 bb b--black-20">{unit.armor}</td>
                      <td className="pv3 pr3 bb b--black-20">{unit.move}</td>
                      <td className="pv3 pr3 bb b--black-20">
                        {unit.unitSize}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{unit.maxQty}</td>
                      <td className="pv3 pr3 bb b--black-20">{unit.mcuCost}</td>
                      <td className="pv3 pr3 bb b--black-20">
                        {unit.equipment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="w-100 h-100">
          {units.map((unit, index) => (
            <div
              key={index}
              className={classNames(" bg-light-gray fl mh1 ph1", {
                "w-100 mb3": isMobile,
              })}
            >
              <p className="fw7 ma0 mb1 red f6 tc"> {unit.name}</p>
              <p className="lh-copy ma0 f7 tj">Type: {unit.type}</p>
              <p className="lh-copy ma0 f7 tj">Armor: {unit.armor}</p>
              <p className="lh-copy ma0 f7 tj">Move: {unit.move}</p>
              <p className="lh-copy ma0 f7 tj">Unit Size: {unit.unitSize}</p>
              <p className="lh-copy ma0 f7 tj">Max Quantity: {unit.maxQty}</p>
              <p className="lh-copy ma0 f7 tj">
                mcuCost: {unit?.mcuCost || "-"}{" "}
              </p>
              <p className="lh-copy ma0 f7 tj">
                Equipment: {unit.equipment ? unit.equipment : "-"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const WeaponTable = ({ weapons, mobileTitle }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [kwDialog, setKwDialog] = useState(null);
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />
      {!isMobile && (
        <div className="center">
          <div className="mh3">
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      ROF
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Rangebands
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Mods
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Dam
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Keywords
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {weapons.map((weapon, i) => (
                    <tr key={i}>
                      <td className="pv3 pr3 bb b--black-20">{weapon.name}</td>
                      <td className="pv3 pr3 bb b--black-20">{weapon.type}</td>
                      <td className="pv3 pr3 bb b--black-20">{weapon.rof}</td>
                      <td className="pv3 pr3 bb b--black-20">{weapon.range}</td>
                      <td className="pv3 pr3 bb b--black-20">{weapon.mod}</td>
                      <td className="pv3 pr3 bb b--black-20">{weapon.dam}</td>
                      <td className="pv3 pr3 bb b--black-20">
                        {weapon.keywords
                          ? renderKeywords(weapon.keywords, setKwDialog)
                          : "NA"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="w-100 h-100">
          {weapons.map((weapon, index) => (
            <div
              key={index}
              className={classNames(" bg-light-gray fl mh1 ph1", {
                "w-100 mb3": isMobile,
              })}
            >
              <p className="fw7 ma0 mb1 red f6 tc"> {weapon.name}</p>
              <p className="lh-copy ma0 f7 tj">Type: {weapon.type}</p>
              <p className="lh-copy ma0 f7 tj">ROF: {weapon.rof}</p>
              <p className="lh-copy ma0 f7 tj">
                Range: {weapon?.range || "-"}{" "}
              </p>
              <p className="lh-copy ma0 f7 tj">Mods: {weapon?.mod || "-"} </p>
              <p className="lh-copy ma0 f7 tj">Damage: {weapon?.dam || "-"} </p>
              <p className="lh-copy ma0 f7 tj">
                Keywords:{" "}
                {weapon.keywords
                  ? renderKeywords(weapon.keywords, setKwDialog)
                  : "NA"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const InfantryTable = () => <UnitTable units={INFANTRY_UNITS} />;

export const InfantryWeaponsTable = () => (
  <WeaponTable weapons={INFANTRY_WEAPONS} />
);

export const GroundVehicleTable = () => <UnitTable units={VEHICLE_UNITS} />;

export const GroundVehicleWeapons = () => (
  <WeaponTable weapons={TANK_WEAPONS} />
);

export const AircraftTable = () => <UnitTable units={AIR_UNITS} />;

export const AircraftWeaponsTable = () => (
  <WeaponTable weapons={AIRCRAFT_WEAPONS} />
);
