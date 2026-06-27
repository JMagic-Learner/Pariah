import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { RANGED } from "../../Data/RangedWeaponsArray";
import { MELEE } from "../../Data/MeleeWeaponsArray";

export const RangedWeaponTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div className="center">
        <div className="mh3">
          <div className="overflow-auto">
            <table className="f9 w-100 mh2" cellspacing="0">
              <thead>
                <tr>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                    Name
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Type</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">ROF</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Rangebands
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Mods</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Dam</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Ton</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Active FRO
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">MCU</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Faction
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Keywords
                  </th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {RANGED.map((weapon) => {
                  return (
                    <>
                      <tr>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.name}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.type}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.rof}</td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.range}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.mod}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.dam}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.ton}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.fro}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.mcu}</td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.faction || "NA"}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.keywords || "NA"}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MeleeWeaponTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div className="center">
        <div className="mh3">
          <div className="overflow-auto">
            <table className="f9 w-100 mh2" cellspacing="0">
              <thead>
                <tr>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                    Name
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Type</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">ROF</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Rangebands
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Mods</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Dam</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">Ton</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Active FRO
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">MCU</th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Faction
                  </th>
                  <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                    Keywords
                  </th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {MELEE.map((weapon) => {
                  return (
                    <>
                      <tr>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.name}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.type}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.rof}</td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.range}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.mod}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.dam}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.ton}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.fro}</td>
                        <td className="pv3 pr3 bb b--black-20">{weapon.mcu}</td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.faction || "NA"}
                        </td>
                        <td className="pv3 pr3 bb b--black-20">
                          {weapon.keywords || "NA"}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
