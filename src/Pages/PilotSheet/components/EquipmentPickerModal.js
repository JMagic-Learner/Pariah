import { useState } from "react";
import classNames from "classnames";
import { PICKER_TABS } from "../../../Data/EquipmentPickerArray";
import {
  isDynamicTonnageItem,
  computeDynamicTonnage,
} from "../../../utils/dynamicTonnage";

export const EquipmentPickerModal = ({
  onClose,
  onSelect,
  tonnageLimit,
  fro,
}) => {
  const [tab, setTab] = useState(0);
  const current = PICKER_TABS[tab];
  const tonCol = current.headers.indexOf("Ton");
  const nameCol = current.headers.indexOf("Name");
  const dynamicTonFor = (name) =>
    computeDynamicTonnage(name, { tonnageLimit, fro });
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "92vw",
          height: "86vh",
          display: "flex",
          flexDirection: "column",
          background: "white",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-dark-green white pa2 flex-shrink-0">
          <span className="fw7 f6 ttu tracked">
            Equipment Browser — click a row to select
          </span>
          <button
            onClick={onClose}
            className="bn bg-transparent white fw7 f4 pointer dim lh-solid"
          >
            ✕
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex bb b--black-20 bg-near-white flex-shrink-0 flex-wrap">
          {PICKER_TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={classNames(
                "f7 pv2 ph3 pointer bn br b--black-20 lh-solid tc",
                {
                  "bg-dark-green white fw7": tab === i,
                  "bg-near-white dark-gray dim": tab !== i,
                },
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Scrollable table */}
        <div style={{ flex: 1, overflowY: "auto" }} className="pa1">
          {current.label === "Support" && (
            <p className="f8 i mid-gray mv1">
              * Tonnage is calculated dynamically from this suit's own stats —
              Tonnage Limit ÷ 4 (Heavy Boosters, Side Verniers, Front Facing
              Thrusters) or Starting FRO ÷ 2 (Enhanced Fusion Reactors),
              rounded.
            </p>
          )}
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                {current.headers.map((h, i) => (
                  <th
                    key={i}
                    className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap "
                    style={{ position: "sticky", top: 0 }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {current.data.map((item, i) => (
                <tr
                  key={i}
                  className={classNames("pointer", {
                    "bg-near-white": i % 2 === 0,
                    "bg-white": i % 2 !== 0,
                  })}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const fields = current.getFields(item);
                    const dynamicTon =
                      current.label === "Support"
                        ? dynamicTonFor(item.name)
                        : null;
                    if (dynamicTon != null) {
                      fields.tonnage = String(dynamicTon);
                    }
                    onSelect(fields);
                    onClose();
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#d5f5e3")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  {current.getCells(item).map((cell, j) => {
                    const dynamicTon =
                      current.label === "Support"
                        ? dynamicTonFor(item.name)
                        : null;
                    let display = cell;
                    if (dynamicTon != null && j === tonCol) {
                      display = dynamicTon;
                    } else if (
                      current.label === "Support" &&
                      j === nameCol &&
                      isDynamicTonnageItem(item.name)
                    ) {
                      display = `${cell}*`;
                    }
                    return (
                      <td key={j} className="pv2 pr2 bb b--black-20 lh-copy">
                        {display}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
