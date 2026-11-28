import { useState } from "react";
import classNames from "classnames";
import { useMediaQuery } from "@custom-react-hooks/all";
import { PICKER_TABS } from "../../../Data/EquipmentPickerArray";
import {
  isDynamicTonnageItem,
  computeDynamicTonnage,
} from "../../../utils/dynamicTonnage";
import { Z_MODAL } from "../../../utils/zIndex";
import { EquipmentPreviewModal } from "./EquipmentPreviewModal";

export const EquipmentPickerModal = ({
  onClose,
  onSelect,
  tonnageLimit,
  fro,
  restrictTab,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const tabs = restrictTab
    ? PICKER_TABS.filter((t) => t.label === restrictTab)
    : PICKER_TABS.filter((t) => t.label !== "Upgrades");
  const [tab, setTab] = useState(0);
  const [preview, setPreview] = useState(null);
  const current = tabs[tab];
  const tonCol = current.headers.indexOf("Ton");
  const nameCol = current.headers.indexOf("Name");
  const dynamicTonFor = (name) =>
    computeDynamicTonnage(name, { tonnageLimit, fro });
  const buildFields = (item) => {
    const fields = current.getFields(item);
    const dynamicTon =
      current.label === "Support" ? dynamicTonFor(item.name) : null;
    if (dynamicTon != null) {
      fields.tonnage = String(dynamicTon);
    }
    return fields;
  };
  const selectFields = (fields) => {
    onSelect(fields);
    onClose();
  };
  const headers = isMobile ? ["Name", "Type", "MCU"] : current.headers;
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: Z_MODAL,
          background: "rgba(0,0,0,0.55)",
          display: "flex",
          alignItems: isMobile ? "" : "center",
          justifyContent: isMobile ? "" : "center",
        }}
        onClick={onClose}
      >
        <div
          style={{
            width: isMobile ? "100vw" : "92vw",
            height: isMobile ? "100vh" : "86vh",
            display: "flex",
            flexDirection: "column",
            background: "white",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-dark-green white pa2 flex-shrink-0">
            <span className="fw7 f6 ttu tracked">
              {isMobile
                ? "Equipment Browser"
                : "Equipment Browser — click a row to select"}
            </span>
            <button
              onClick={onClose}
              className="bn bg-transparent white fw7 f4 pointer dim lh-solid"
            >
              ✕
            </button>
          </div>

          {/* Category dropdown (mobile) */}
          {isMobile && tabs.length > 1 && (
            <select
              className="w-100 pa2 f7 ba b--black-20 bg-white flex-shrink-0"
              value={tab}
              onChange={(e) => {
                setTab(Number(e.target.value));
                setPreview(null);
              }}
            >
              {tabs.map((t, i) => (
                <option key={t.label} value={i}>
                  {t.label}
                </option>
              ))}
            </select>
          )}

          {/* Tab bar (desktop) */}
          {!isMobile && tabs.length > 1 && (
            <div className="flex bb b--black-20 bg-near-white flex-shrink-0 flex-wrap">
              {tabs.map((t, i) => (
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
          )}

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
                  {headers.map((h, i) => (
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
                      if (isMobile) {
                        setPreview({ item, fields: buildFields(item) });
                      } else {
                        selectFields(buildFields(item));
                      }
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#d5f5e3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "")
                    }
                  >
                    {(isMobile
                      ? current.getMobileCells(item)
                      : current.getCells(item)
                    ).map((cell, j) => {
                      const dynamicTon =
                        current.label === "Support"
                          ? dynamicTonFor(item.name)
                          : null;
                      const rowNameCol = isMobile ? 0 : nameCol;
                      let display = cell;
                      if (!isMobile && dynamicTon != null && j === tonCol) {
                        display = dynamicTon;
                      } else if (
                        current.label === "Support" &&
                        j === rowNameCol &&
                        isDynamicTonnageItem(item.name)
                      ) {
                        display = `${cell}*`;
                      }
                      return (
                        <td
                          key={j}
                          className={classNames("pv2 pr2 bb b--black-20 tc", {
                            "fw6 w-20": !isMobile && j === nameCol,
                            "fw6 tl pl2": isMobile && j === 0,
                          })}
                        >
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

      {preview && (
        <EquipmentPreviewModal
          tab={current}
          item={preview.item}
          fields={preview.fields}
          onSelect={selectFields}
          onClose={() => setPreview(null)}
        />
      )}
    </>
  );
};
