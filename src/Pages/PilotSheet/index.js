import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { TRAITS } from "../../Data/PilotTraitArray";
import { RANGED } from "../../Data/RangedWeaponsArray";
import { MELEE } from "../../Data/MeleeWeaponsArray";
import { MUNITIONS } from "../../Data/MunitionsArray";
import { SUPPORT } from "../../Data/SupportEquipmentArray";
import { NEWTYPE_UPGRADES, BITS } from "../../Data/NewtypeUpgrades";
import {
  RangedWeaponTable,
  MeleeWeaponTable,
} from "../../Components/Table/WeaponTable";
import { SupportEquipmentTable } from "../../Components/Table/SupportEquipmentTable";
import {
  PRESETS,
  blankEquip,
  blankLoc,
  EF_PRESETS,
  ZEON_PRESETS,
} from "../../Data/PresetsArray";

// ─── MCU helpers ─────────────────────────────────────────────────────────────

const parseMCU = (s) => {
  if (!s) return 0;
  const clean = String(s).trim().toUpperCase();
  if (clean === "FREE") return 0;
  const n = parseFloat(clean);
  return isNaN(n) ? 0 : n;
};

// ─── Shared primitives ────────────────────────────────────────────────────────

const SheetHeader = ({ children }) => (
  <div className="bg-dark-green white fw7 f7 pa2 ttu tracked tc">
    {children}
  </div>
);

const TextInput = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  onClick,
}) => (
  <input
    className={classNames(
      "input-reset ba b--black-20 pa1 bg-white f7 w-100",
      className,
    )}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    onClick={onClick}
  />
);

const NumInput = ({ value, onChange, placeholder = "", width = "3rem" }) => (
  <input
    type="number"
    className="input-reset ba b--black-20 pa1 bg-white f7 tc"
    style={{ width }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

const TH = ({ children, className = "" }) => (
  <th
    className={classNames(
      "fw6 bb b--black-20 pb2 pr2 bg-white f7 tl nowrap",
      className,
    )}
  >
    {children}
  </th>
);

const TD = ({ children, className = "", colSpan }) => (
  <td
    className={classNames("pv2 pr2 bb b--black-20 f7", className)}
    colSpan={colSpan}
  >
    {children}
  </td>
);

// ─── Pilot trait row ──────────────────────────────────────────────────────────

const TraitRow = ({ value, onChange }) => {
  const selected = TRAITS.find((t) => t.name === value);
  return (
    <tr>
      <TD className="w-30">
        <select
          className="w-100 f7 ba b--black-20 pa1 bg-white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">— Select Trait —</option>
          {TRAITS.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </TD>
      <TD className="tc w-10 fw6 dark-green">{selected?.cost ?? ""}</TD>
      <TD className="lh-copy">{selected?.effect ?? ""}</TD>
    </tr>
  );
};

// ─── Equipment row ────────────────────────────────────────────────────────────

const EquipmentRow = ({
  row,
  onChange,
  onNameClick,
  lastCellColSpan = 1,
  sold,
  onSell,
}) => (
  <tr className={sold ? "o-40" : ""}>
    <TD>
      <div className={onSell ? "flex items-center" : ""}>
        {onSell && (
          <button
            className={classNames(
              "f8 ph1 pv0 mr1 bn br1 pointer flex-shrink-0 lh-copy",
              sold ? "bg-dark-red white" : "bg-near-white dark-gray",
            )}
            onClick={onSell}
            title={sold ? "Click to reinstate" : "Click to sell"}
          >
            {sold ? "SOLD" : "SELL"}
          </button>
        )}
        <TextInput
          value={row.name}
          onChange={(v) => onChange("name", v)}
          onClick={!sold ? onNameClick : undefined}
          className={sold ? "strike" : ""}
        />
      </div>
    </TD>
    <TD className="tc">
      <TextInput
        value={row.mcuCost}
        onChange={(v) => onChange("mcuCost", v)}
        className={classNames("tc", { strike: sold })}
      />
    </TD>
    <TD className="tc">
      <TextInput
        value={row.fro}
        onChange={(v) => onChange("fro", v)}
        className="tc"
      />
    </TD>
    <TD className="tc">
      <TextInput
        value={row.tonnage}
        onChange={(v) => onChange("tonnage", v)}
        className="tc"
      />
    </TD>
    <TD colSpan={lastCellColSpan}>
      <TextInput value={row.notes} onChange={(v) => onChange("notes", v)} />
    </TD>
  </tr>
);

// ─── Hit location card ────────────────────────────────────────────────────────

const LocationCard = ({ title, data, onChange }) => (
  <div className="ba b--black-20 h-100">
    <SheetHeader>{title}</SheetHeader>
    <div className="pa2">
      <div className="flex items-center mb2">
        <span className="f7 fw6 mr2 nowrap">Armor:</span>
        <NumInput
          value={data.current}
          onChange={(v) => onChange("current", v)}
          placeholder="Cur"
        />
        <span className="f7 mh1">/</span>
        <NumInput
          value={data.max}
          onChange={(v) => onChange("max", v)}
          placeholder="Max"
        />
      </div>
      <div className="mb2">
        <div className="f7 fw6 gray mb1">Weapon</div>
        <TextInput
          value={data.weapon}
          onChange={(v) => onChange("weapon", v)}
        />
      </div>
      {data.equipment.map((eq, i) => (
        <div key={i} className="mb2">
          <div className="f7 fw6 gray mb1">Equipment</div>
          <TextInput
            value={eq}
            onChange={(v) => {
              const next = [...data.equipment];
              next[i] = v;
              onChange("equipment", next);
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// ─── Reference toggle button ──────────────────────────────────────────────────

const RefToggle = ({ open, onToggle, label }) => (
  <button
    className="f7 pa1 ph2 ba b--dark-green dark-green bg-white pointer dim br1 mt2"
    onClick={onToggle}
  >
    {open ? `▲ Hide ${label}` : `▼ View ${label}`}
  </button>
);

// ─── Equipment picker modal ───────────────────────────────────────────────────

const PICKER_TABS = [
  {
    label: "Ranged",
    headers: [
      "Name",
      "Type",
      "ROF",
      "Range",
      "Mod",
      "DAM",
      "Ton",
      "FRO",
      "MCU",
      "Keywords",
    ],
    data: RANGED,
    getCells: (w) => [
      w.name,
      w.type,
      w.rof,
      w.range,
      w.mod,
      w.dam,
      w.ton,
      w.fro,
      w.mcu,
      w.keywords || "—",
    ],
    getFields: (w) => ({
      name: w.name,
      mcuCost: String(w.mcu ?? ""),
      fro: String(w.fro ?? ""),
      tonnage: String(w.ton ?? ""),
      notes: w.keywords || "",
    }),
  },
  {
    label: "Melee",
    headers: [
      "Name",
      "Type",
      "ROF",
      "Range",
      "Mod",
      "DAM",
      "Ton",
      "FRO",
      "MCU",
      "Keywords",
    ],
    data: MELEE,
    getCells: (w) => [
      w.name,
      w.type,
      w.rof,
      w.range,
      w.mod,
      w.dam,
      w.ton,
      w.fro,
      w.mcu,
      w.keywords || "—",
    ],
    getFields: (w) => ({
      name: w.name,
      mcuCost: String(w.mcu ?? ""),
      fro: String(w.fro ?? ""),
      tonnage: String(w.ton ?? ""),
      notes: w.keywords || "",
    }),
  },
  {
    label: "Support",
    headers: ["Name", "Loc", "Ton", "PFRO", "Qty", "MCU", "Effect"],
    data: SUPPORT,
    getCells: (s) => [s.name, s.loc, s.ton, s.pfro, s.qty, s.mcu, s.effect],
    getFields: (s) => ({
      name: s.name,
      mcuCost: String(s.mcu ?? ""),
      fro: String(s.pfro ?? ""),
      tonnage: String(s.ton ?? ""),
      notes: s.effect || "",
    }),
  },
  {
    label: "Munitions",
    headers: ["Name", "DAM", "Effect"],
    data: MUNITIONS,
    getCells: (m) => [m.name, m.dam, m.effect],
    getFields: (m) => ({
      name: m.name,
      mcuCost: "",
      fro: "",
      tonnage: "",
      notes: m.effect || "",
    }),
  },
  {
    label: "Newtype",
    headers: ["Name", "Limit", "MCU", "Effect"],
    data: NEWTYPE_UPGRADES,
    getCells: (n) => [n.name, n.limit, n.mcu, n.effect],
    getFields: (n) => ({
      name: n.name,
      mcuCost: String(n.mcu ?? ""),
      fro: "",
      tonnage: "",
      notes: n.effect || "",
    }),
  },
  {
    label: "Bits / Funnels",
    headers: ["Type", "Cat", "Armor", "Range", "Mods", "DAM", "MCU", "Faction"],
    data: BITS,
    getCells: (b) => [
      b.type,
      b.cat,
      b.armor,
      b.range,
      b.mods,
      b.dam,
      b.mcu,
      b.faction,
    ],
    getFields: (b) => ({
      name: b.type + " Bit",
      mcuCost: String(b.mcu ?? ""),
      fro: "",
      tonnage: "",
      notes: [b.range, b.mods, `DAM ${b.dam}`].filter(Boolean).join(" | "),
    }),
  },
];

const EquipmentPickerModal = ({ onClose, onSelect }) => {
  const [tab, setTab] = useState(0);
  const current = PICKER_TABS[tab];
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
                    onSelect(current.getFields(item));
                    onClose();
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#d5f5e3")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  {current.getCells(item).map((cell, j) => (
                    <td key={j} className="pv2 pr2 bb b--black-20 lh-copy">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ─── Single sheet panel ───────────────────────────────────────────────────────

const PilotSheetPanel = ({ onMsuNameChange }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  // Pilot
  const [msuName, setMsuName] = useState("");
  const [pilotName, setPilotName] = useState("");
  const [gunnery, setGunnery] = useState("");
  const [gunneryMod, setGunneryMod] = useState("");
  const [brawl, setBrawl] = useState("");
  const [brawlMod, setBrawlMod] = useState("");
  const [piloting, setPiloting] = useState("");
  const [pilotingMod, setPilotingMod] = useState("");
  const [traits, setTraits] = useState(["", "", "", "", ""]);

  // Mobile Suit
  const [mobileSuit, setMobileSuit] = useState("");
  const [mcu, setMcu] = useState("");
  const [fro, setFro] = useState("");
  const [tonnageLimit, setTonnageLimit] = useState("");
  const [movement, setMovement] = useState("");
  const [armorValue, setArmorValue] = useState("");

  // Equipment
  const [baseEquip, setBaseEquip] = useState(
    Array(8).fill(null).map(blankEquip),
  );
  const [addlEquip, setAddlEquip] = useState(
    Array(8).fill(null).map(blankEquip),
  );
  const [soldBase, setSoldBase] = useState(Array(8).fill(false));

  const mcuLimit = traits.some((t) => t === "OYW Veteran") ? 325 : 250;

  const totalMCU =
    parseMCU(mcu) +
    baseEquip.reduce((sum, row, i) => {
      if (!soldBase[i]) return sum + parseMCU(row.mcuCost);
      const isFree = String(row.mcuCost).trim().toUpperCase() === "FREE";
      return isFree ? sum - 10 : sum - parseMCU(row.mcuCost);
    }, 0) +
    addlEquip.reduce((sum, row) => sum + parseMCU(row.mcuCost), 0);

  const totalTonnage =
    baseEquip.reduce(
      (sum, row, i) => sum + (soldBase[i] ? 0 : parseMCU(row.tonnage)),
      0,
    ) + addlEquip.reduce((sum, row) => sum + parseMCU(row.tonnage), 0);

  // Hit locations: Head/Torso get an extra equipment slot
  const [locations, setLocations] = useState({
    head: blankLoc(3),
    torso: blankLoc(4),
    rightArm: blankLoc(3),
    leftArm: blankLoc(3),
    rightLeg: blankLoc(3),
    leftLeg: blankLoc(3),
  });

  // Reference panel visibility
  const [showTraits, setShowTraits] = useState(false);
  const [showWeapons, setShowWeapons] = useState(false);
  const [showMelee, setShowMelee] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  // Equipment picker popup: null when closed, { onSelect: fn } when open
  const [equipPopup, setEquipPopup] = useState(null);
  const openEquipPopup = (onSelect) => setEquipPopup({ onSelect });
  const closeEquipPopup = () => setEquipPopup(null);

  // Updaters
  const handleMsuName = (v) => {
    setMsuName(v);
    onMsuNameChange?.(v);
  };

  const updateTrait = (i, v) =>
    setTraits((prev) => prev.map((t, idx) => (idx === i ? v : t)));

  const updateBaseEquip = (i, field, v) =>
    setBaseEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, [field]: v } : e)),
    );

  const applyBaseEquip = (i, fields) =>
    setBaseEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, ...fields } : e)),
    );

  const updateAddlEquip = (i, field, v) =>
    setAddlEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, [field]: v } : e)),
    );

  const applyAddlEquip = (i, fields) =>
    setAddlEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, ...fields } : e)),
    );

  const updateLoc = (loc, field, v) =>
    setLocations((prev) => ({ ...prev, [loc]: { ...prev[loc], [field]: v } }));

  const applyPreset = (id) => {
    const preset = PRESETS.find((p) => p.id === id);
    if (!preset) return;
    const d = preset.data;
    setMsuName(d.msuName);
    onMsuNameChange?.(d.msuName);
    setMobileSuit(d.mobileSuit);
    setMcu(d.mcu);
    setFro(d.fro);
    setTonnageLimit(d.tonnageLimit);
    setMovement(d.movement);
    setArmorValue(d.armorValue);
    setBaseEquip(d.baseEquip);
    setAddlEquip(d.addlEquip);
    setSoldBase(Array(8).fill(false));
    setLocations(d.locations);
  };

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="pa3 pa4-ns mw9 center">
      {/* ── MSU Name ── */}
      <div className="ba b--black-20 mb3">
        <SheetHeader>MSU Name</SheetHeader>
        <div className="pa2">
          <TextInput
            value={msuName}
            onChange={handleMsuName}
            placeholder="Enter MSU name…"
            className="f3 fw7"
          />
        </div>
      </div>

      {/* ── Pilot ── */}
      <div className="ba b--black-20 mb3">
        <SheetHeader>Pilot</SheetHeader>

        {/* Stats row */}
        <div className="overflow-auto">
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="w-30 tc">Pilot Name</TH>
                <TH className="tc">Gunnery</TH>
                <TH className="tc">+Mod</TH>
                <TH className="tc">Brawl</TH>
                <TH className="tc">+Mod</TH>
                <TH className="tc">Piloting</TH>
                <TH className="tc">+Mod</TH>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TD>
                  <TextInput
                    value={pilotName}
                    onChange={setPilotName}
                    placeholder="Pilot name"
                    className="tc"
                  />
                </TD>
                <TD className="tc">
                  <NumInput value={gunnery} onChange={setGunnery} />
                </TD>
                <TD className="tc">
                  <NumInput value={gunneryMod} onChange={setGunneryMod} />
                </TD>
                <TD className="tc">
                  <NumInput value={brawl} onChange={setBrawl} />
                </TD>
                <TD className="tc">
                  <NumInput value={brawlMod} onChange={setBrawlMod} />
                </TD>
                <TD className="tc">
                  <NumInput value={piloting} onChange={setPiloting} />
                </TD>
                <TD className="tc">
                  <NumInput value={pilotingMod} onChange={setPilotingMod} />
                </TD>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pilot Traits */}
        <div className="bt b--black-10 overflow-auto">
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="w-30 tc">Pilot Trait</TH>
                <TH className="tc w-10">Cost</TH>
                <TH className="tc">Effect</TH>
              </tr>
            </thead>
            <tbody>
              {traits.map((t, i) => (
                <TraitRow
                  key={i}
                  value={t}
                  onChange={(v) => updateTrait(i, v)}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Trait reference */}
        <div className="ph2 pb2 bt b--black-10">
          <RefToggle
            open={showTraits}
            onToggle={() => setShowTraits((v) => !v)}
            label="Trait Reference"
          />
        </div>
        {showTraits && (
          <div className="bt b--black-10 overflow-auto">
            <table className="w-100 f7" cellSpacing="0">
              <thead>
                <tr>
                  <TH className="w-25">Trait</TH>
                  <TH className="tc w-10">Cost</TH>
                  <TH>Effect</TH>
                </tr>
              </thead>
              <tbody>
                {TRAITS.map((t) => (
                  <tr key={t.name} className="stripe-light">
                    <TD className="fw6">{t.name}</TD>
                    <TD className="tc fw6 dark-green">{t.cost}</TD>
                    <TD className="lh-copy">{t.effect}</TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Mobile Suit + Equipment (single table so columns align) ── */}
      <div className="ba b--black-20 mb3">
        <div className="flex items-center justify-between bg-dark-green white fw7 f7 pa2 ttu tracked">
          <span>Mobile Suit Unit</span>
          <select
            className="f7 ba b--white pa1 bg-dark-green white pointer normal"
            style={{ minWidth: "14rem" }}
            value=""
            onChange={(e) => {
              if (e.target.value) applyPreset(e.target.value);
            }}
          >
            <option value="">— Load Preset —</option>
            <optgroup label="Earth Federation">
              {EF_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Zeon">
              {ZEON_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className="overflow-auto">
          <table className="w-100 f7" cellSpacing="0">
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "5rem" }} />
              <col style={{ width: "5rem" }} />
              <col style={{ width: "5.5rem" }} />
              <col style={{ width: "6rem" }} />
              <col style={{ width: "5rem" }} />
            </colgroup>
            <thead>
              <tr>
                <TH className="tc">Mobile Suit</TH>
                <TH className="tc">MCU Cost / 250</TH>
                <TH className="tc">FRO</TH>
                <TH className="tc">Tonnage</TH>
                <TH className="tc">Movement (Base)</TH>
                <TH className="tc">Armor Value</TH>
              </tr>
            </thead>
            <tbody>
              {/* Mobile Suit row */}
              <tr>
                <TD>
                  <TextInput
                    value={mobileSuit}
                    onChange={setMobileSuit}
                    placeholder="e.g. GM Sniper II"
                  />
                </TD>
                <TD className="tc">
                  <NumInput value={mcu} onChange={setMcu} width="4rem" />
                  <div
                    className={classNames("f8 fw6 mt1", {
                      "dark-red": totalMCU > mcuLimit,
                      "dark-green": totalMCU > 0 && totalMCU <= mcuLimit,
                      gray: totalMCU === 0,
                    })}
                  >
                    {totalMCU} / {mcuLimit}
                  </div>
                </TD>
                <TD className="tc">
                  <NumInput value={fro} onChange={setFro} />
                </TD>
                <TD className="tc">
                  <NumInput value={tonnageLimit} onChange={setTonnageLimit} />
                  <div
                    className={classNames("f8 fw6 mt1", {
                      "dark-red":
                        totalTonnage > Math.ceil(Number(tonnageLimit) / 3),
                      "dark-green":
                        totalTonnage > 0 &&
                        totalTonnage <= Math.ceil(Number(tonnageLimit) / 3),
                      gray: totalTonnage === 0,
                    })}
                  >
                    {totalTonnage} / {Math.ceil(Number(tonnageLimit) / 3) || 0}
                  </div>
                </TD>
                <TD className="tc">
                  <TextInput
                    value={movement}
                    onChange={setMovement}
                    placeholder='e.g. 16"'
                    className="tc"
                  />
                </TD>
                <TD className="tc">
                  <NumInput
                    value={armorValue}
                    onChange={setArmorValue}
                    width="4rem"
                  />
                </TD>
              </tr>

              {/* ── Equipment (Base) section ── */}
              <tr>
                <td
                  colSpan={6}
                  className="bg-dark-green white fw7 f7 pa2 ttu tracked"
                >
                  Equipment (Base)
                </td>
              </tr>
              <tr>
                <TH className="tc">Name</TH>
                <TH className="tc">MCU Cost</TH>
                <TH className="tc">Passive / Active FRO</TH>
                <TH className="tc">Tonnage</TH>
                <TH className="tc" colSpan={2}>
                  Notes
                </TH>
              </tr>
              {baseEquip.map((row, i) => (
                <EquipmentRow
                  key={i}
                  row={row}
                  onChange={(f, v) => updateBaseEquip(i, f, v)}
                  onNameClick={() =>
                    openEquipPopup((fields) => applyBaseEquip(i, fields))
                  }
                  lastCellColSpan={2}
                  sold={soldBase[i]}
                  onSell={() =>
                    setSoldBase((prev) =>
                      prev.map((s, idx) => (idx === i ? !s : s)),
                    )
                  }
                />
              ))}

              {/* ── Additional Equipment section ── */}
              <tr>
                <td
                  colSpan={6}
                  className="bg-dark-green white fw7 f7 pa2 ttu tracked"
                >
                  Additional Equipment
                </td>
              </tr>
              <tr>
                <TH>Name</TH>
                <TH className="tc">MCU Cost</TH>
                <TH className="tc">Passive / Active FRO</TH>
                <TH className="tc">Tonnage</TH>
                <TH className="tc" colSpan={2}>
                  Effects
                </TH>
              </tr>
              {addlEquip.map((row, i) => (
                <EquipmentRow
                  key={i}
                  row={row}
                  onChange={(f, v) => updateAddlEquip(i, f, v)}
                  onNameClick={() =>
                    openEquipPopup((fields) => applyAddlEquip(i, fields))
                  }
                  lastCellColSpan={2}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Reference toggles */}
        <div className="ph2 pb2 flex">
          <RefToggle
            open={showWeapons}
            onToggle={() => setShowWeapons((v) => !v)}
            label="Ranged Weapons Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showMelee}
            onToggle={() => setShowMelee((v) => !v)}
            label="Melee Weapons Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showSupport}
            onToggle={() => setShowSupport((v) => !v)}
            label="Support Equipment Reference"
          />
        </div>
        {showWeapons && (
          <div className="bt b--black-10 ph2 pb2">
            <RangedWeaponTable />
          </div>
        )}
        {showMelee && (
          <div className="bt b--black-10 ph2 pb2">
            <MeleeWeaponTable />
          </div>
        )}
        {showSupport && (
          <div className="bt b--black-10 ph2 pb2">
            <SupportEquipmentTable />
          </div>
        )}
      </div>

      {/* ── Hit Locations + Reference Tables ── */}
      <div className={classNames({ flex: !isMobile })}>
        {/* Hit location 2-column grid */}
        <div className={classNames({ "w-75 pr3": !isMobile, mb3: isMobile })}>
          {[
            ["head", "HEAD", "torso", "TORSO"],
            ["rightArm", "RIGHT ARM", "leftArm", "LEFT ARM"],
            ["rightLeg", "RIGHT LEG", "leftLeg", "LEFT LEG"],
          ].map(([locA, titleA, locB, titleB]) => (
            <div key={locA} className="flex mb2">
              <div className="w-50 pr1">
                <LocationCard
                  title={titleA}
                  data={locations[locA]}
                  onChange={(f, v) => updateLoc(locA, f, v)}
                />
              </div>
              <div className="w-50 pl1">
                <LocationCard
                  title={titleB}
                  data={locations[locB]}
                  onChange={(f, v) => updateLoc(locB, f, v)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Reference column */}
        <div className={classNames("ba b--black-20", { "w-25": !isMobile })}>
          <SheetHeader>Evasion Tier Table</SheetHeader>
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="tc">Move</TH>
                <TH className="tc">Evasion</TH>
                <TH className="tc">Aim Instability</TH>
              </tr>
            </thead>
            <tbody>
              {[
                ['0–8"', "2d3 + PS −1", "+1 GS"],
                ['9–20"', "2d3 + PS", "+0 GS"],
                ['21+"', "2d3 + PS +1", "−1 GS"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-near-white tc" : "bg-white tc"}
                >
                  {row.map((cell, j) => (
                    <TD key={j}>{cell}</TD>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <SheetHeader>Hit Locations</SheetHeader>
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="tc w-20">Roll</TH>
                <TH className="tc w-20">Location</TH>
              </tr>
            </thead>
            <tbody>
              {[
                ["2", "Torso"],
                ["3", "Left Arm"],
                ["4", "Right Arm"],
                ["5", "Left Leg"],
                ["6", "Right Leg"],
                ["7", "Left Arm"],
                ["8", "Right Arm"],
                ["9", "Left Leg"],
                ["10", "Right Leg"],
                ["11", "Head"],
                ["12", "Torso"],
              ].map(([roll, loc], i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                >
                  <TD className="tc fw6">{roll}</TD>
                  <TD>{loc}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Equipment picker modal */}
      {equipPopup && (
        <EquipmentPickerModal
          onClose={closeEquipPopup}
          onSelect={equipPopup.onSelect}
        />
      )}
    </div>
  );
};

// ─── Six-pilot two-team tab wrapper ──────────────────────────────────────────

const TEAMS = [
  { label: "Team 1", color: "dark-red", pilots: [0, 1, 2] },
  { label: "Team 2", color: "dark-blue", pilots: [3, 4, 5] },
];

export const PilotSheet = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabNames, setTabNames] = useState([
    "Pilot 1",
    "Pilot 2",
    "Pilot 3",
    "Pilot 4",
    "Pilot 5",
    "Pilot 6",
  ]);
  const [initiatives, setInitiatives] = useState(["", "", "", "", "", ""]);

  const handleMsuNameChange = (tabIndex, name) => {
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === tabIndex ? (name.trim() ? name : `Pilot ${tabIndex + 1}`) : label,
      ),
    );
  };

  const updateInitiative = (i, v) =>
    setInitiatives((prev) => prev.map((val, idx) => (idx === i ? v : val)));

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="flex flex-wrap bb b--black-20 bg-near-white items-stretch">
        {TEAMS.map((team) => (
          <div key={team.label} className="flex items-center br b--black-20">
            <span className={`f7 fw7 ph2 nowrap ${team.color}`}>
              {team.label}
            </span>
            {team.pilots.map((i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={classNames(
                  "f6 pv2 ph3 pointer bn lh-solid bl b--black-20",
                  {
                    [`bg-${team.color} white fw7`]: activeTab === i,
                    "bg-near-white dark-gray dim": activeTab !== i,
                  },
                )}
              >
                {tabNames[i]}
                {initiatives[i] !== "" && (
                  <span className="ml1 f7 o-60">·{initiatives[i]}</span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* ── Initiative tracker ── */}
      <div className="flex bb b--black-20 bg-white">
        {TEAMS.map((team) => (
          <div key={team.label} className="w-50 br b--black-20">
            <div className={`f7 fw7 pa1 ph2 bb b--black-20 ${team.color}`}>
              {team.label} — Initiative
            </div>
            {team.pilots.map((i) => (
              <div
                key={i}
                className="flex items-center justify-between ph2 pv1 bb b--black-10"
              >
                <button
                  onClick={() => setActiveTab(i)}
                  className={classNames(
                    "f7 bn bg-transparent pointer dim tl pa0 truncate w-70",
                    {
                      "fw7 dark-red":
                        team.color === "dark-red" && activeTab === i,
                      "fw7 dark-blue":
                        team.color === "dark-blue" && activeTab === i,
                      "dark-gray": activeTab !== i,
                    },
                  )}
                >
                  {tabNames[i]}
                </button>
                <div className="flex items-center">
                  <span className="f7 gray mr1">Init</span>
                  <input
                    type="number"
                    className="input-reset ba b--black-20 pa1 bg-white f7 tc"
                    style={{ width: "3rem" }}
                    value={initiatives[i]}
                    onChange={(e) => updateInitiative(i, e.target.value)}
                    placeholder="—"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* All six sheets kept mounted — only active one is visible */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={{ display: activeTab === i ? "block" : "none" }}>
          <PilotSheetPanel
            onMsuNameChange={(name) => handleMsuNameChange(i, name)}
          />
        </div>
      ))}
    </div>
  );
};
