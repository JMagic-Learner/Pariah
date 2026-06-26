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
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
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
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Active FRO
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      MCU
                    </th>
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
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.rof}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.range}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mod}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.dam}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.ton}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.fro}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mcu}
                          </td>
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
          )}

          {isMobile && (
            <div className="w-100">
              {RANGED.map((entry) => {
                return (
                  <div className="bg-dark-gray pv3">
                    <a
                      href="#my-drawer"
                      className="pa3 bg-dark-gray white bn br2 pointer"
                    >
                      {entry.tier}
                    </a>
                    <div id="my-drawer" className="drawer-css-only">
                      <a
                        href="#"
                        className="close-btn absolute top-1 right-2 f1 blue"
                      >
                        ×
                      </a>
                      <div className="pa3 mt5">
                        <h2 className="f4 bg-near-black white mv0 pv2 ph3">
                          Name: {entry?.name}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost / Sanding: {entry?.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Effects (3+): {entry?.effect}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Restrictions: {entry?.restriction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
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
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Active FRO
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      MCU
                    </th>
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
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.rof}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.range}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mod}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.dam}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.ton}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.fro}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mcu}
                          </td>
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
          )}

          {isMobile && (
            <div className="w-100">
              {MELEE.map((entry) => {
                return (
                  <div className="bg-dark-gray pv3">
                    <a
                      href="#my-drawer"
                      className="pa3 bg-dark-gray white bn br2 pointer"
                    >
                      {entry.tier}
                    </a>
                    <div id="my-drawer" className="drawer-css-only">
                      <a
                        href="#"
                        className="close-btn absolute top-1 right-2 f1 blue"
                      >
                        ×
                      </a>
                      <div className="pa3 mt5">
                        <h2 className="f4 bg-near-black white mv0 pv2 ph3">
                          Name: {entry?.name}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost / Sanding: {entry?.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Effects (3+): {entry?.effect}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Restrictions: {entry?.restriction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
