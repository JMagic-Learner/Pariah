import classNames from "classnames";

const equipmentList = (data) =>
  [...(data.baseEquip || []), ...(data.addlEquip || [])]
    .map((e) => e?.name)
    .filter(Boolean)
    .join(", ");

export const MsuPresetPickerModal = ({ label, presets, onSelect, onClose }) => {
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
            {label} Presets — click a row to select
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
                {[
                  "Name",
                  "MCU Cost",
                  "Tonnage",
                  "FRO",
                  "Movement",
                  "Armor",
                  "Equipment",
                ].map(
                  (h) => (
                    <th
                      key={h}
                      className="fw6 bb b--black-20 pb2 pr2 bg-white tc nowrap"
                      style={{ position: "sticky", top: 0 }}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {presets.map((p, i) => (
                <tr
                  key={p.id}
                  className={classNames("pointer", {
                    "bg-near-white": i % 2 === 0,
                    "bg-white": i % 2 !== 0,
                  })}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onSelect(p.id);
                    onClose();
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#d5f5e3")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td className="pv2 pr2 bb b--black-20 tc fw6 w-20">
                    {p.name}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc fw6 dark-green">
                    {p.data.mcu}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc">
                    {p.data.tonnageLimit}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc">{p.data.fro}</td>
                  <td className="pv2 pr2 bb b--black-20 tc nowrap">
                    {p.data.movement}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 tc">
                    {p.data.armorValue}
                  </td>
                  <td className="pv2 pr2 bb b--black-20 lh-copy tl">
                    {equipmentList(p.data)}
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
