import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { SUPPORT } from "../../Data/SupportEquipmentArray";
import { renderKeywords } from "../../utils/renderKeywords";
import { KeywordDialog } from "../KeywordDialog";
import {
  isDynamicTonnageItem,
  computeDynamicTonnage,
} from "../../utils/dynamicTonnage";

export const SupportEquipmentTable = ({ tonnageLimit, fro } = {}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [kwDialog, setKwDialog] = useState(null);
  const tonFor = (item) => {
    const dynamic = computeDynamicTonnage(item.name, { tonnageLimit, fro });
    return dynamic != null ? dynamic : item.ton;
  };
  return (
    <div className={classNames("", { "flex mt5": !isMobile, mt2: isMobile })}>
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />
      {!isMobile && (
        <div className="center w-100">
          <div className="mh3">
            <p className="f8 i mid-gray mb2">
              * Tonnage is calculated dynamically from this suit's own
              stats — Tonnage Limit ÷ 4 (Heavy Boosters, Side Verniers,
              Front Facing Thrusters) or Starting FRO ÷ 2 (Enhanced Fusion
              Reactors), rounded.
            </p>
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Location
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Passive FRO
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Qty
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {SUPPORT.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {item.name}
                        {isDynamicTonnageItem(item.name) ? "*" : ""}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{item.loc}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">
                        {tonFor(item)}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc red fw6">
                        {item.pfro}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.qty}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.mcu}</td>
                      <td className="pv3 pr3 bb b--black-20 lh-copy">
                        {renderKeywords(item.effect, setKwDialog)}
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
          <h1> Ranged equipments </h1>
          <p className="f8 i mid-gray mb2">
            * Tonnage is calculated dynamically from this suit's own stats
            — Tonnage Limit ÷ 4 (Heavy Boosters, Side Verniers, Front
            Facing Thrusters) or Starting FRO ÷ 2 (Enhanced Fusion
            Reactors), rounded.
          </p>
          {SUPPORT.map((equipment, index) => (
            <div
              key={index}
              className={classNames(" bg-light-gray fl mh1 ph1", {
                "w-100 mb3": isMobile,
              })}
            >
              <p className="fw7 ma0 mb1 red f6 tc">
                {" "}
                {equipment.name}
                {isDynamicTonnageItem(equipment.name) ? "*" : ""}
              </p>
              <p className="lh-copy ma0 f7 tj">MCU: {equipment.mcu}</p>
              <p className="lh-copy ma0 f7 tj">
                Tonnage: {tonFor(equipment)}
              </p>
              <p className="lh-copy ma0 f7 tj">Location: {equipment.loc}</p>
              <p className="lh-copy ma0 f7 tj">Passive Fro: {equipment.pfro}</p>
              <p className="lh-copy ma0 f7 tj">Quantity: {equipment.qty}</p>
              <p className="lh-copy ma0 f7 tj">
                Restricted to {equipment?.faction}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
