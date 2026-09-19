import classNames from "classnames";
import { TRAITS } from "../../../Data/PilotTraitArray";
import { renderKeywords } from "../../../utils/renderKeywords";

export const TraitPickerModal = ({ onClose, onSelect, onKeywordClick }) => {
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
            Pilot Traits — click a row to select
          </span>
          <button
            onClick={onClose}
            className="bn bg-transparent white fw7 f4 pointer dim lh-solid"
          >
            ✕
          </button>
        </div>

        {/* Scrollable table */}
        <div style={{ flex: 1, overflowY: "auto" }} className="pa1">
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <th
                  className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap"
                  style={{ position: "sticky", top: 0 }}
                >
                  Name
                </th>
                <th
                  className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap"
                  style={{ position: "sticky", top: 0 }}
                >
                  Cost
                </th>
                <th
                  className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap"
                  style={{ position: "sticky", top: 0 }}
                >
                  Restrictions
                </th>
                <th
                  className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap"
                  style={{ position: "sticky", top: 0 }}
                >
                  Effect
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="pointer bg-near-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onSelect("");
                  onClose();
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#d5f5e3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "")
                }
              >
                <td
                  className="pv2 pr2 bb b--black-20 tc i mid-gray"
                  colSpan={4}
                >
                  — Clear Selection —
                </td>
              </tr>
              {TRAITS.map((t, i) => (
                <tr
                  key={t.name}
                  className={classNames("pointer", {
                    "bg-near-white": i % 2 === 0,
                    "bg-white": i % 2 !== 0,
                  })}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onSelect(t.name);
                    onClose();
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#d5f5e3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "")
                  }
                >
                  <td className="pv2 pr2 bb b--black-20 tc fw6 w-20">
                    {t.name}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc fw6 dark-green">
                    {t.cost}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc">
                    {t.restrictions || ""}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 lh-copy tl">
                    {renderKeywords(t.effect, onKeywordClick)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
