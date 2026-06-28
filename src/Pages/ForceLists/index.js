import { useState } from "react";
import { FORCE_LIST_FACTIONS } from "../../Data/ForceListData";

const COLS = [
  { key: "msu",       label: "MSU",       width: "18%", align: "left" },
  { key: "mcu",       label: "MCU",       width: "5%",  align: "center" },
  { key: "move",      label: "Move",      width: "5%",  align: "center" },
  { key: "armor",     label: "Armor",     width: "5%",  align: "center" },
  { key: "fro",       label: "FRO",       width: "5%",  align: "center" },
  { key: "tonnage",   label: "Tonnage",   width: "6%",  align: "center" },
  { key: "year",      label: "Year",      width: "5%",  align: "center" },
  { key: "faction",   label: "Faction",   width: "12%", align: "left" },
  { key: "equipment", label: "Equipment", width: "39%", align: "left" },
];

const FactionTable = ({ faction, open, onToggle }) => {
  const { label, year, commentary, theme, units } = faction;

  return (
    <div style={{ marginBottom: "1.25rem", borderRadius: "4px", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }}>
      {/* Accordion header */}
      <button
        onClick={onToggle}
        style={{
          ...theme.header,
          width: "100%",
          border: "none",
          cursor: "pointer",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.03em" }}>{label}</span>
          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>U.C. {year}</span>
          <span style={{ fontSize: "0.8rem", opacity: 0.65 }}>{units.length} units</span>
        </div>
        <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div>
          {/* Commentary */}
          <div style={{ background: theme.rowEven.background, padding: "0.6rem 1rem", borderBottom: `2px solid ${theme.accent}` }}>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.8rem", color: "#333", lineHeight: 1.7 }}>
              {commentary.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.78rem" }}>
              <thead>
                <tr style={{ ...theme.header }}>
                  {COLS.map((col) => (
                    <th
                      key={col.key}
                      style={{
                        width: col.width,
                        textAlign: col.align,
                        padding: "0.4rem 0.5rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        borderBottom: "2px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {units.map((unit, i) => (
                  <tr
                    key={i}
                    style={i % 2 === 0 ? theme.rowEven : theme.rowOdd}
                  >
                    {COLS.map((col) => (
                      <td
                        key={col.key}
                        style={{
                          textAlign: col.align,
                          padding: "0.35rem 0.5rem",
                          verticalAlign: "top",
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                          fontWeight: col.key === "msu" ? 600 : 400,
                          color: col.key === "msu" ? theme.accent : "#111",
                        }}
                      >
                        {unit[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export const ForceLists = () => {
  const [openKeys, setOpenKeys] = useState(new Set(["ef"]));

  const toggle = (key) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const allOpen = openKeys.size === FORCE_LIST_FACTIONS.length;

  return (
    <div className="center w-90 pv4">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.02em" }}>
          Force Lists
        </h1>
        <button
          onClick={() =>
            setOpenKeys(
              allOpen
                ? new Set()
                : new Set(FORCE_LIST_FACTIONS.map((f) => f.key))
            )
          }
          style={{
            background: "none",
            border: "1px solid #999",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "0.25rem 0.6rem",
            fontSize: "0.78rem",
            color: "#444",
          }}
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {FORCE_LIST_FACTIONS.map((faction) => (
        <FactionTable
          key={faction.key}
          faction={faction}
          open={openKeys.has(faction.key)}
          onToggle={() => toggle(faction.key)}
        />
      ))}
    </div>
  );
};
