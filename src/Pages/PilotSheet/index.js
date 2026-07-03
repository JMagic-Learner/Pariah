import { useState } from "react";
import { usePilotSheet, usePilotSlot } from "../../context/PilotSheetContext";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { TRAITS } from "../../Data/PilotTraitArray";
import { TEAMS } from "../../Data/TeamArray";
import { PICKER_TABS } from "../../Data/EquipmentPickerArray";
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
  CROSSBONE_PRESETS,
  MAFTY_PRESETS,
  REZEON_PRESETS,
} from "../../Data/PresetsArray";
import { SUPPORT } from "../../Data/SupportEquipmentArray";
import { parseMCU } from "./utilities/parseMCU";
import { lookupSupportMCU } from "./utilities/lookupMCU";
import { KEYWORDS } from "../../Data/KeywordArray";
import { NEWTYPE_UPGRADES, BITS } from "../../Data/NewtypeUpgrades";
import { renderKeywords } from "../../utils/renderKeywords";
import { KeywordDialog } from "../../Components/KeywordDialog";
import { SheetHeader } from "../../Components/SheetHeader";
import { TextInput } from "../../Components/TextInput";
import { NumInput } from "../../Components/NumImput";
import { LocationCard } from "../../Components/LocationCard";
// ─── Shared primitives ────────────────────────────────────────────────────────

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

const TraitRow = ({ value, onChange, onKeywordClick }) => {
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
      <TD className="lh-copy">
        {selected?.effect
          ? renderKeywords(selected.effect, onKeywordClick)
          : ""}
      </TD>
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
  onClear,
  scavengerToggle,
}) => (
  <tr className={sold ? "o-40" : ""}>
    <TD>
      <div className={onSell || onClear ? "flex items-center" : ""}>
        {onSell && (
          <button
            className={classNames(
              "f8 ph1 pv0 mr1 bn br1 pointer flex-shrink-0 lh-copy",
              sold ? "bg-red white" : "bg-near-white dark-gray",
            )}
            onClick={onSell}
            title={sold ? "Click to reinstate" : "Click to sell"}
          >
            {sold ? "SOLD" : "SELL"}
          </button>
        )}
        {onClear && (
          <button
            className="f8 ph1 pv0 mr1 bn br1 pointer flex-shrink-0 lh-copy bg-near-white dark-gray"
            onClick={onClear}
            title="Clear row"
          >
            ×
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
      {scavengerToggle && (
        <button
          className={classNames(
            "f8 ph1 pv0 mt1 bn br1 pointer lh-copy w-100",
            scavengerToggle.active
              ? "bg-dark-green white fw7"
              : "bg-near-white dark-gray",
          )}
          onClick={scavengerToggle.onClick}
          title="Scavenger: halve this Support Equipment's MCU cost"
        >
          {scavengerToggle.active ? "−50% ✓" : "Scavenge ½"}
        </button>
      )}
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

// ─── Reference toggle button ──────────────────────────────────────────────────

const RefToggle = ({ open, onToggle, label }) => (
  <button
    className="f7 pa1 ph2 ba b--dark-green dark-green bg-white pointer dim br1 mt2"
    onClick={onToggle}
  >
    {open ? `▲ Hide ${label}` : `▼ View ${label}`}
  </button>
);

// ─── Support equipment location auto-fill ─────────────────────────────────────
// Returns an array of candidate arrays. Each entry represents one required slot;
// candidates are tried in order — the first with an empty equipment row wins.
const parseLocInstructions = (loc) => {
  if (!loc) return [];
  const l = loc.toLowerCase().trim();
  if (l === "–" || l === "-" || l === "any") return [];
  // Weapon/upgrade attachments live in weapon slots, not equipment slots
  if (/^(weapon|weapons|melee weapon)$/.test(l) || l.startsWith("weapon"))
    return [];

  if (l.includes("all location")) {
    return [
      ["head"],
      ["torso"],
      ["rightArm"],
      ["leftArm"],
      ["rightLeg"],
      ["leftLeg"],
    ];
  }

  const slots = [];
  if (l.includes("head")) slots.push(["head"]);
  if (l.includes("torso")) slots.push(["torso"]);

  // Specific directional arm locations take priority over generic "arm"
  if (l.startsWith("right") && l.includes("arm")) {
    slots.push(["rightArm"]);
  } else if (l.startsWith("left") && l.includes("arm")) {
    slots.push(["leftArm"]);
  } else if (l.includes("arms")) {
    slots.push(["rightArm"]);
    slots.push(["leftArm"]);
  } else if (l.includes("arm") || l.includes("shoulder")) {
    slots.push(["rightArm", "leftArm"]); // try right first, then left
  }

  // Specific directional leg locations take priority over generic "leg"
  if (l.startsWith("right") && l.includes("leg")) {
    slots.push(["rightLeg"]);
  } else if (l.startsWith("left") && l.includes("leg")) {
    slots.push(["leftLeg"]);
  } else if (l.includes("legs") || l.includes("both leg")) {
    slots.push(["rightLeg"]);
    slots.push(["leftLeg"]);
  } else if (l.includes("leg")) {
    slots.push(["rightLeg", "leftLeg"]);
  }

  return slots;
};

const LOC_LABELS = {
  head: "Head",
  torso: "Torso",
  rightArm: "Right Arm",
  leftArm: "Left Arm",
  rightLeg: "Right Leg",
  leftLeg: "Left Leg",
};

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

const PilotSheetPanel = ({ slotIndex }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const {
    msuName,
    setMsuName,
    pilotName,
    setPilotName,
    gunnery,
    setGunnery,
    brawl,
    setBrawl,
    piloting,
    setPiloting,
    traits,
    setTraits,
    mobileSuit,
    setMobileSuit,
    mcu,
    setMcu,
    fro,
    setFro,
    tonnageLimit,
    setTonnageLimit,
    movement,
    setMovement,
    armorValue,
    setArmorValue,
    baseEquip,
    setBaseEquip,
    addlEquip,
    setAddlEquip,
    soldBase,
    setSoldBase,
    mechanicChoice,
    setMechanicChoice,
    scavengerChoice,
    setScavengerChoice,
    newtypeChoice1,
    setNewtypeChoice1,
    newtypeChoice2,
    setNewtypeChoice2,
    cyberNewtypeChoice,
    setCyberNewtypeChoice,
    ramboChoice,
    setRamboChoice,
    grypsVetChoice,
    setGrypsVetChoice,
    locations,
    setLocations,
    showTraits,
    setShowTraits,
    showWeapons,
    setShowWeapons,
    showMelee,
    setShowMelee,
    showSupport,
    setShowSupport,
    showKeywords,
    setShowKeywords,
    showNewtype,
    setShowNewtype,
    customPreset,
    setCustomPreset,
    setTabNames,
    setAll,
  } = usePilotSlot(slotIndex);

  const hasMechanic = traits.some((t) => t === "Mechanic");
  const hasNewtype = traits.some((t) => t === "Newtype");
  const hasCyberNewtype = traits.some((t) => t === "Cyber-Newtype (TITANS)");
  const hasRambo = traits.some((t) => t === "Rambo");
  const hasRookie = traits.some((t) => t === "Rookie");
  const hasScavenger = traits.some((t) => t === "Scavenger");
  const hasGrypsVet = traits.some((t) => t === "Gryps War Veteran (REZEON)");
  const gunneryTraitCount = traits.filter((t) => t === "Gunnery").length;
  const brawlerTraitCount = traits.filter((t) => t === "Brawler").length;
  const pilotingTraitCount = traits.filter((t) => t === "Piloting").length;

  const gsBonus =
    gunneryTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "gs" ? 1 : 0) + (newtypeChoice2 === "gs" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "gs" ? 1 : 0) +
    (hasRambo && ramboChoice === "gs" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "gs" ? 1 : 0);
  const bsBonus =
    brawlerTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "bs" ? 1 : 0) + (newtypeChoice2 === "bs" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "bs" ? 1 : 0) +
    (hasRambo && ramboChoice === "bs" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "bs" ? 1 : 0);
  const psBonus =
    pilotingTraitCount +
    (hasNewtype
      ? (newtypeChoice1 === "ps" ? 1 : 0) + (newtypeChoice2 === "ps" ? 1 : 0)
      : 0) +
    (hasCyberNewtype && cyberNewtypeChoice === "ps" ? 1 : 0) +
    (hasGrypsVet && grypsVetChoice === "ps" ? 1 : 0);

  const efrCount =
    baseEquip.filter(
      (row, i) => row.name === "Enhanced Fusion Reactors" && !soldBase[i],
    ).length +
    addlEquip.filter((row) => row.name === "Enhanced Fusion Reactors").length;
  const froBonus =
    (hasMechanic && mechanicChoice === "fro" ? 2 : 0) + efrCount * 2;
  const effectiveTonnageLimit =
    Number(tonnageLimit) +
    (hasMechanic && mechanicChoice === "tonnage" ? 12 : 0);

  const mcuLimit =
    250 +
    (traits.some((t) => t === "One Year War Veteran") ? 75 : 0) +
    (traits.some((t) => t === "CORRUPT GOVERNMENT (EF GENERAL)") ? 50 : 0);

  const hasMerchantOfDeath = traits.some((t) => t === "Merchant of Death");

  const totalMCU =
    parseMCU(mcu) +
    baseEquip.reduce((sum, row, i) => {
      if (!soldBase[i]) return sum + parseMCU(row.mcuCost);
      const isFree = String(row.mcuCost).trim().toUpperCase() === "FREE";
      if (!isFree) return sum - parseMCU(row.mcuCost);
      const supportMCU = lookupSupportMCU(row.name);
      const freeWeaponRefund = hasMerchantOfDeath ? 35 : 10;
      return supportMCU !== null ? sum - supportMCU : sum - freeWeaponRefund;
    }, 0) +
    addlEquip.reduce((sum, row, i) => {
      const cost = parseMCU(row.mcuCost);
      const isDiscounted =
        hasScavenger &&
        scavengerChoice === String(i) &&
        SUPPORT.some((s) => s.name === row.name);
      return sum + (isDiscounted ? Math.floor(cost / 2) : cost);
    }, 0);

  const totalTonnage =
    baseEquip.reduce(
      (sum, row, i) => sum + (soldBase[i] ? 0 : parseMCU(row.tonnage)),
      0,
    ) + addlEquip.reduce((sum, row) => sum + parseMCU(row.tonnage), 0);

  // Ephemeral UI-only state (dialogs/popups — not persisted)
  const [equipPopup, setEquipPopup] = useState(null);
  const [slotWarning, setSlotWarning] = useState(null);
  const [kwDialog, setKwDialog] = useState(null);
  const openEquipPopup = (onSelect) => setEquipPopup({ onSelect });
  const closeEquipPopup = () => setEquipPopup(null);

  // Updaters
  const handleMsuName = (v) => {
    setMsuName(v);
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex ? (v.trim() ? v : `Pilot ${slotIndex + 1}`) : label,
      ),
    );
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

  const removeSupportLoc = (itemName) => {
    const supportItem = SUPPORT.find((s) => s.name === itemName);
    if (!supportItem) return;
    const instructions = parseLocInstructions(supportItem.loc);
    if (instructions.length === 0) return;

    const armorMatch = itemName.match(/Extra Armor.*\[(\d+)\]/i);
    const armorDelta = armorMatch ? parseInt(armorMatch[1]) : 0;

    const isShield = /shield/i.test(itemName);
    const ARM_KEYS = new Set(["rightArm", "leftArm"]);

    setLocations((prev) => {
      const next = { ...prev };
      for (const candidates of instructions) {
        for (const key of candidates) {
          const loc = next[key];
          const idx = loc.equipment.indexOf(itemName);
          if (idx !== -1) {
            const eq = [...loc.equipment];
            eq[idx] = "";
            const updated = { ...loc, equipment: eq };
            if (armorDelta > 0) {
              const curNum = parseInt(updated.current) || 0;
              const maxNum = parseInt(updated.max) || 0;
              updated.current = String(Math.max(0, curNum - armorDelta));
              updated.max = String(Math.max(0, maxNum - armorDelta));
            }
            if (isShield && ARM_KEYS.has(key)) {
              updated.shieldCurrent = "";
              updated.shieldMax = "";
            }
            next[key] = updated;
            break;
          }
        }
      }
      return next;
    });
  };

  const autoFillSupportLoc = (itemName) => {
    const supportItem = SUPPORT.find((s) => s.name === itemName);
    if (!supportItem) return;
    const instructions = parseLocInstructions(supportItem.loc);
    if (instructions.length === 0) return;

    const armorMatch = itemName.match(/Extra Armor.*\[(\d+)\]/i);
    const armorDelta = armorMatch ? parseInt(armorMatch[1]) : 0;

    const isShield = /shield/i.test(itemName);
    const shieldHpMatch =
      itemName.match(/\[(\d+)/) || itemName.match(/\((\d+)\s*armor\)/i);
    const shieldHp = isShield && shieldHpMatch ? parseInt(shieldHpMatch[1]) : 0;
    const ARM_KEYS = new Set(["rightArm", "leftArm"]);

    const overflow = [];
    const next = { ...locations };

    for (const candidates of instructions) {
      let filled = false;
      for (const key of candidates) {
        const loc = next[key];
        // A stowed weapon occupies the last equipment slot.
        const availableSlots = loc.weaponStowed
          ? loc.equipment.slice(0, loc.equipment.length - 1)
          : loc.equipment;
        const emptyIdx = availableSlots.findIndex((eq) => eq === "");
        if (emptyIdx !== -1) {
          const eq = [...loc.equipment];
          eq[emptyIdx] = itemName;
          const updated = { ...loc, equipment: eq };
          if (armorDelta > 0) {
            const curNum = parseInt(updated.current) || 0;
            const maxNum = parseInt(updated.max) || 0;
            updated.current = String(curNum + armorDelta);
            updated.max = String(maxNum + armorDelta);
          }
          if (shieldHp > 0 && ARM_KEYS.has(key)) {
            updated.shieldCurrent = String(shieldHp);
            updated.shieldMax = String(shieldHp);
          }
          next[key] = updated;
          filled = true;
          break;
        }
      }
      if (!filled) overflow.push(candidates[0]);
    }

    setLocations(next);
    if (overflow.length > 0) {
      setSlotWarning(
        `No available equipment slots in: ${overflow.map((k) => LOC_LABELS[k]).join(", ")}.`,
      );
    }
  };

  const saveCustomPreset = () => {
    const snapshot = {
      msuName,
      pilotName,
      mobileSuit,
      mcu,
      fro,
      tonnageLimit,
      movement,
      armorValue,
      gunnery,
      brawl,
      piloting,
      traits,
      baseEquip,
      addlEquip,
      soldBase,
      locations,
      mechanicChoice,
      newtypeChoice1,
      newtypeChoice2,
      cyberNewtypeChoice,
      ramboChoice,
      grypsVetChoice,
    };
    try {
      localStorage.setItem("gf_custom_preset", JSON.stringify(snapshot));
    } catch {}
    setCustomPreset(snapshot);
  };

  const loadCustomPreset = () => {
    if (!customPreset) return;
    const d = customPreset;
    setAll({
      msuName: d.msuName ?? "",
      pilotName: d.pilotName ?? "",
      mobileSuit: d.mobileSuit ?? "",
      mcu: d.mcu ?? "",
      fro: d.fro ?? "",
      tonnageLimit: d.tonnageLimit ?? "",
      movement: d.movement ?? "",
      armorValue: d.armorValue ?? "",
      gunnery: d.gunnery ?? "",
      brawl: d.brawl ?? "",
      piloting: d.piloting ?? "",
      traits: d.traits ?? ["", "", "", "", ""],
      baseEquip: d.baseEquip ?? Array(8).fill(null).map(blankEquip),
      addlEquip: d.addlEquip ?? Array(8).fill(null).map(blankEquip),
      soldBase: d.soldBase ?? Array(8).fill(false),
      locations: d.locations ?? {
        head: blankLoc(3),
        torso: blankLoc(3),
        rightArm: blankLoc(3),
        leftArm: blankLoc(3),
        rightLeg: blankLoc(3),
        leftLeg: blankLoc(3),
      },
      mechanicChoice: d.mechanicChoice ?? "",
      newtypeChoice1: d.newtypeChoice1 ?? "",
      newtypeChoice2: d.newtypeChoice2 ?? "",
      cyberNewtypeChoice: d.cyberNewtypeChoice ?? "",
      ramboChoice: d.ramboChoice ?? "",
      grypsVetChoice: d.grypsVetChoice ?? "",
    });
    const name = d.msuName ?? "";
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex
          ? name.trim()
            ? name
            : `Pilot ${slotIndex + 1}`
          : label,
      ),
    );
  };

  const applyPreset = (id) => {
    const preset = PRESETS.find((p) => p.id === id);
    if (!preset) return;
    const d = preset.data;
    setAll({
      msuName: d.msuName,
      mobileSuit: d.mobileSuit,
      mcu: d.mcu,
      fro: d.fro,
      tonnageLimit: d.tonnageLimit,
      movement: d.movement,
      armorValue: d.armorValue,
      baseEquip: d.baseEquip,
      addlEquip: d.addlEquip,
      soldBase: Array(8).fill(false),
      locations: d.locations,
    });
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex
          ? d.msuName.trim()
            ? d.msuName
            : `Pilot ${slotIndex + 1}`
          : label,
      ),
    );
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
                  {hasRookie && <div className="f8 fw6 mt1 red">base: 0</div>}
                </TD>
                <TD className="tc">
                  <NumInput value={gsBonus} onChange={() => {}} />
                </TD>
                <TD className="tc">
                  <NumInput value={brawl} onChange={setBrawl} />
                  {hasRookie && <div className="f8 fw6 mt1 red">base: 0</div>}
                </TD>
                <TD className="tc">
                  <NumInput value={bsBonus} onChange={() => {}} />
                </TD>
                <TD className="tc">
                  <NumInput value={piloting} onChange={setPiloting} />
                  {hasRookie && <div className="f8 fw6 mt1 red">base: 0</div>}
                </TD>
                <TD className="tc">
                  <NumInput value={psBonus} onChange={() => {}} />
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
                  onKeywordClick={setKwDialog}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Trait modifiers */}
        {(hasMechanic ||
          gunneryTraitCount > 0 ||
          brawlerTraitCount > 0 ||
          pilotingTraitCount > 0 ||
          hasNewtype ||
          hasCyberNewtype ||
          hasRambo ||
          hasRookie ||
          hasGrypsVet) &&
          (() => {
            const StatBtn = ({ label, active, onClick }) => (
              <button
                className={classNames(
                  "f8 ph2 pv1 mr1 bn br1 pointer lh-copy",
                  active
                    ? "bg-dark-green white fw7"
                    : "bg-near-white dark-gray",
                )}
                onClick={onClick}
              >
                {label}
              </button>
            );
            return (
              <div className="ph3 pv2 bt b--black-10 bg-washed-green">
                <p className="f8 fw7 ttu tracked mb2 dark-green">
                  Active Trait Modifiers
                </p>

                {/* Stackable stat traits — auto-applied, no toggle needed */}
                {(gunneryTraitCount > 0 ||
                  brawlerTraitCount > 0 ||
                  pilotingTraitCount > 0) && (
                  <div className="flex items-center mb2 flex-wrap">
                    {gunneryTraitCount > 0 && (
                      <span className="f8 mr3 dark-green fw6">
                        Gunnery ×{gunneryTraitCount} → +{gunneryTraitCount} GS
                      </span>
                    )}
                    {brawlerTraitCount > 0 && (
                      <span className="f8 mr3 dark-green fw6">
                        Brawler ×{brawlerTraitCount} → +{brawlerTraitCount} BR
                      </span>
                    )}
                    {pilotingTraitCount > 0 && (
                      <span className="f8 dark-green fw6">
                        Piloting ×{pilotingTraitCount} → +{pilotingTraitCount}{" "}
                        PS
                      </span>
                    )}
                  </div>
                )}

                {/* Newtype — choose 2 different stats */}
                {hasNewtype && (
                  <div className="mb2">
                    <span className="f7 fw6 mr2">
                      Newtype (choose 2 stats):
                    </span>
                    <div className="flex items-center mt1 flex-wrap">
                      <span className="f8 mr2 gray">Choice 1:</span>
                      {["gs", "bs", "ps"].map((s) => (
                        <StatBtn
                          key={s}
                          label={`+1 ${s.toUpperCase()}`}
                          active={newtypeChoice1 === s}
                          onClick={() =>
                            setNewtypeChoice1((p) => (p === s ? "" : s))
                          }
                        />
                      ))}
                      <span className="f8 mh2 gray">Choice 2:</span>
                      {["gs", "bs", "ps"]
                        .filter((s) => s !== newtypeChoice1)
                        .map((s) => (
                          <StatBtn
                            key={s}
                            label={`+1 ${s.toUpperCase()}`}
                            active={newtypeChoice2 === s}
                            onClick={() =>
                              setNewtypeChoice2((p) => (p === s ? "" : s))
                            }
                          />
                        ))}
                    </div>
                  </div>
                )}

                {/* Cyber-Newtype — choose 1 stat */}
                {hasCyberNewtype && (
                  <div className="flex items-center mb2 flex-wrap">
                    <span className="f7 fw6 mr2 nowrap">Cyber-Newtype:</span>
                    {["gs", "bs", "ps"].map((s) => (
                      <StatBtn
                        key={s}
                        label={`+1 ${s.toUpperCase()}`}
                        active={cyberNewtypeChoice === s}
                        onClick={() =>
                          setCyberNewtypeChoice((p) => (p === s ? "" : s))
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Rambo — choose GS or BR */}
                {hasRambo && (
                  <div className="flex items-center mb2">
                    <span className="f7 fw6 mr2 nowrap">Rambo:</span>
                    {["gs", "bs"].map((s) => (
                      <StatBtn
                        key={s}
                        label={`+1 ${s.toUpperCase()}`}
                        active={ramboChoice === s}
                        onClick={() =>
                          setRamboChoice((p) => (p === s ? "" : s))
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Gryps War Veteran (REZEON) — choose 1 stat */}
                {hasGrypsVet && (
                  <div className="flex items-center mb2 flex-wrap">
                    <span className="f7 fw6 mr2 nowrap">
                      Gryps War Veteran:
                    </span>
                    {["gs", "bs", "ps"].map((s) => (
                      <StatBtn
                        key={s}
                        label={`+1 ${s.toUpperCase()}`}
                        active={grypsVetChoice === s}
                        onClick={() =>
                          setGrypsVetChoice((p) => (p === s ? "" : s))
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Rookie — reminder */}
                {hasRookie && (
                  <div className="flex items-center mb2">
                    <span className="f7 fw6 red mr2 nowrap">Rookie:</span>
                    <span className="f8 red">
                      Base GS / BR / PS default to 0
                    </span>
                  </div>
                )}

                {/* Mechanic */}
                {hasMechanic && (
                  <div className="flex items-center mb2">
                    <span className="f7 fw6 mr2 nowrap">Mechanic:</span>
                    {[
                      { label: "+12 Tonnage", value: "tonnage" },
                      { label: "+2 FRO", value: "fro" },
                    ].map(({ label, value }) => (
                      <StatBtn
                        key={value}
                        label={label}
                        active={mechanicChoice === value}
                        onClick={() =>
                          setMechanicChoice((p) => (p === value ? "" : value))
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

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
        <div className="flex items-center justify-between flex-wrap bg-dark-green white fw7 f7 pa2 ttu tracked">
          <span>Mobile Suit Unit</span>
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "0.5rem" }}
          >
            {[
              { label: "EF", presets: EF_PRESETS },
              { label: "ZEON", presets: ZEON_PRESETS },
              { label: "CBV", presets: CROSSBONE_PRESETS },
              { label: "MAFTY", presets: MAFTY_PRESETS },
              { label: "REZEON", presets: REZEON_PRESETS },
            ].map(({ label, presets }) => (
              <div key={label} className="flex items-center">
                <span className="f8 mr1 nowrap">{label}:</span>
                <select
                  className="f7 ba b--white pa1 bg-dark-green white pointer normal"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) applyPreset(e.target.value);
                  }}
                >
                  <option value="">— Preset —</option>
                  {presets.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-center" style={{ gap: "0.25rem" }}>
              <button
                className="f8 ph2 pv1 bn br1 pointer bg-white dark-green fw7 dim"
                onClick={saveCustomPreset}
                title="Save current sheet as custom preset"
              >
                SAVE CUSTOM
              </button>
              {customPreset && (
                <button
                  className="f8 ph2 pv1 bn br1 pointer bg-yellow dark-green fw7 dim"
                  onClick={loadCustomPreset}
                  title="Load saved custom preset"
                >
                  LOAD CUSTOM
                </button>
              )}
            </div>
          </div>
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
                      red: totalMCU > mcuLimit,
                      "dark-green": totalMCU > 0 && totalMCU <= mcuLimit,
                      gray: totalMCU === 0,
                    })}
                  >
                    {totalMCU} / {mcuLimit}
                  </div>
                </TD>
                <TD className="tc">
                  <NumInput value={fro} onChange={setFro} />
                  {froBonus > 0 && (
                    <div className="f8 fw6 mt1 dark-green">
                      +{froBonus} bonus
                    </div>
                  )}
                </TD>
                <TD className="tc">
                  <NumInput value={tonnageLimit} onChange={setTonnageLimit} />
                  <div
                    className={classNames("f8 fw6 mt1", {
                      red: totalTonnage > Math.ceil(effectiveTonnageLimit / 3),
                      "dark-green":
                        totalTonnage > 0 &&
                        totalTonnage <= Math.ceil(effectiveTonnageLimit / 3),
                      gray: totalTonnage === 0,
                    })}
                  >
                    {totalTonnage} / {Math.ceil(effectiveTonnageLimit / 3) || 0}
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
                    openEquipPopup((fields) => {
                      applyBaseEquip(i, fields);
                      autoFillSupportLoc(fields.name);
                    })
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
                  <span className="v-mid">Additional Equipment</span>
                  <button
                    className="ml3 f7 fw6 ph2 pv1 bg-red white bn br1 pointer ttu tracked v-mid"
                    onClick={() => {
                      addlEquip.forEach((row) => removeSupportLoc(row.name));
                      setAddlEquip(Array(8).fill(null).map(blankEquip));
                    }}
                  >
                    Clear All
                  </button>
                </td>
              </tr>
              <tr>
                <TH className="tc">Name</TH>
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
                    openEquipPopup((fields) => {
                      applyAddlEquip(i, fields);
                      autoFillSupportLoc(fields.name);
                    })
                  }
                  onClear={() => {
                    removeSupportLoc(row.name);
                    applyAddlEquip(i, blankEquip());
                    if (scavengerChoice === String(i)) setScavengerChoice("");
                  }}
                  lastCellColSpan={2}
                  scavengerToggle={
                    hasScavenger && SUPPORT.some((s) => s.name === row.name)
                      ? {
                          active: scavengerChoice === String(i),
                          onClick: () =>
                            setScavengerChoice((p) =>
                              p === String(i) ? "" : String(i),
                            ),
                        }
                      : null
                  }
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
          <span className="mr2" />
          <RefToggle
            open={showKeywords}
            onToggle={() => setShowKeywords((v) => !v)}
            label="Keyword Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showNewtype}
            onToggle={() => setShowNewtype((v) => !v)}
            label="Newtype Upgrades"
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
        {showNewtype && (
          <div className="bt b--black-10 ph2 pb2 overflow-auto">
            <p className="f7 fw7 ttu tracked mv2 dark-green">
              Newtype Upgrades
            </p>
            <table className="w-100 f7 mb3" cellSpacing="0">
              <thead>
                <tr>
                  <TH className="w-20">Name</TH>
                  <TH className="tc w-10">Limit</TH>
                  <TH className="tc w-10">MCU</TH>
                  <TH>Effect</TH>
                </tr>
              </thead>
              <tbody>
                {NEWTYPE_UPGRADES.map((u, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw6">{u.name}</TD>
                    <TD className="tc">{u.limit}</TD>
                    <TD className="tc fw6 dark-green">{u.mcu}</TD>
                    <TD className="lh-copy">
                      {renderKeywords(u.effect, setKwDialog)}
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="f7 fw7 ttu tracked mv2 dark-green">Psycommu Bits</p>
            <table className="w-100 f7" cellSpacing="0">
              <thead>
                <tr>
                  <TH>Type</TH>
                  <TH className="tc">Category</TH>
                  <TH className="tc">Armor</TH>
                  <TH className="tc">Range</TH>
                  <TH className="tc">Mods</TH>
                  <TH className="tc">Dam</TH>
                  <TH className="tc">MCU</TH>
                  <TH className="tc">Faction</TH>
                </tr>
              </thead>
              <tbody>
                {BITS.map((b, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw6">{b.type}</TD>
                    <TD className="tc">{b.cat}</TD>
                    <TD className="tc">{b.armor}</TD>
                    <TD className="tc">{b.range}</TD>
                    <TD className="tc">{b.mods}</TD>
                    <TD className="tc">{b.dam}</TD>
                    <TD className="tc fw6 dark-green">{b.mcu}</TD>
                    <TD className="tc">{b.faction}</TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showKeywords && (
          <div className="bt b--black-10 ph2 pb2 overflow-auto">
            <table className="w-100 f7" cellSpacing="0">
              <thead>
                <tr>
                  <TH className="w-20 nowrap">Keyword</TH>
                  <TH>Description</TH>
                </tr>
              </thead>
              <tbody>
                {KEYWORDS.map((kw, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw7 dark-green nowrap">{kw.name}</TD>
                    <TD className="lh-copy">
                      {renderKeywords(kw.desc, setKwDialog)}
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Hit Locations + Reference Tables ── */}
      <div className={classNames({ flex: !isMobile })}>
        {/* Hit location 2-column grid */}
        <div className={classNames({ "w-75 pr3": !isMobile, mb3: isMobile })}>
          {[
            ["head", "HEAD", "torso", "TORSO", false],
            ["rightArm", "RIGHT ARM", "leftArm", "LEFT ARM", true],
            ["rightLeg", "RIGHT LEG", "leftLeg", "LEFT LEG", false],
          ].map(([locA, titleA, locB, titleB, isArmRow]) => (
            <div key={locA} className="flex mb2">
              <div className="w-50 pr1">
                <LocationCard
                  title={titleA}
                  data={locations[locA]}
                  onChange={(f, v) => updateLoc(locA, f, v)}
                  showShield={isArmRow}
                />
              </div>
              <div className="w-50 pl1">
                <LocationCard
                  title={titleB}
                  data={locations[locB]}
                  onChange={(f, v) => updateLoc(locB, f, v)}
                  showShield={isArmRow}
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

      {/* Keyword reference dialog */}
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />

      {/* Equipment picker modal */}
      {equipPopup && (
        <EquipmentPickerModal
          onClose={closeEquipPopup}
          onSelect={equipPopup.onSelect}
        />
      )}

      {/* Slot overflow warning */}
      {slotWarning && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSlotWarning(null)}
        >
          <div
            style={{
              background: "white",
              maxWidth: "22rem",
              borderRadius: "4px",
            }}
            className="pa4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="fw7 f5 red ma0 mb2">Equipment Slots Exceeded</p>
            <p className="f6 lh-copy ma0 mb3">
              This MSU configuration exceeds available equipment slots.{" "}
              {slotWarning}
            </p>
            <button
              className="f7 ph3 pv2 bg-red white bn br1 pointer dim"
              onClick={() => setSlotWarning(null)}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const PilotSheet = () => {
  const { activeTab, setActiveTab, tabNames, initiatives, setInitiatives } =
    usePilotSheet();

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
                      "fw7 red": team.color === "red" && activeTab === i,
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
          <PilotSheetPanel slotIndex={i} />
        </div>
      ))}
    </div>
  );
};
