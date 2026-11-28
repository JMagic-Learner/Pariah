import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import { KeywordDialog } from "../../../Components/KeywordDialog";
import { renderKeywords } from "../../../utils/renderKeywords";
import { lookupWeaponInfo } from "../utilities/lookupWeaponInfo";
import { lookupSupportInfo } from "../utilities/lookupSupportInfo";
import { Z_MODAL } from "../../../utils/zIndex";
import {
  WeaponReferenceInfo,
  SupportReferenceInfo,
} from "./EquipmentReferenceInfo";

const WEAPON_TABS = new Set(["Ranged", "Melee"]);
const SUPPORT_TABS = new Set(["Support", "Upgrades", "Frame Improvements"]);
const LONG_TEXT_HEADERS = new Set(["Effect", "Keywords"]);

// Mobile preview of a picker row. Shares its shell and reference panels with
// EquipmentDetailsModal; "Select" hands `fields` back to the picker.
export const EquipmentPreviewModal = ({
  tab,
  item,
  fields,
  onSelect,
  onClose,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [kwDialog, setKwDialog] = useState(null);
  const weaponInfo = WEAPON_TABS.has(tab.label)
    ? lookupWeaponInfo(item.name)
    : null;
  const supportInfo = SUPPORT_TABS.has(tab.label)
    ? lookupSupportInfo(item.name)
    : null;

  // Tabs without a dedicated reference panel (Munitions, Newtype, War
  // Criminal, Bits) fall back to the tab's own columns. Column 0 is the name.
  const cells = tab.getCells(item);
  const columns = tab.headers
    .map((h, i) => [h, cells[i]])
    .slice(1)
    .filter(([h]) => h !== "MCU" && h !== "Cost");
  const stats = columns.filter(([h]) => !LONG_TEXT_HEADERS.has(h));
  const longText = columns.filter(([h, v]) => LONG_TEXT_HEADERS.has(h) && v);

  return (
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
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />
      <div
        style={{
          width: isMobile ? "100vw" : "90vw",
          maxWidth: isMobile ? "100vw" : "26rem",
          height: isMobile ? "100vh" : undefined,
          maxHeight: isMobile ? "100vh" : "85vh",
          overflowY: "auto",
          background: "white",
          borderRadius: isMobile ? 0 : "4px",
        }}
        className="pa3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb3">
          <span className="fw7 f5 truncate pr2">{fields.name}</span>
          <button
            onClick={onClose}
            className="bn bg-transparent fw7 f4 pointer dim lh-solid flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {weaponInfo && (
          <WeaponReferenceInfo
            weaponInfo={weaponInfo}
            setKwDialog={setKwDialog}
          />
        )}

        {supportInfo && (
          <SupportReferenceInfo
            supportInfo={supportInfo}
            setKwDialog={setKwDialog}
            tonOverride={fields.tonnage || undefined}
          />
        )}

        {!weaponInfo && !supportInfo && (
          <div className="mb3 pa2 bg-near-white br1">
            <p className="f7 fw6 dark-green ttu tracked mb2">
              {tab.label} Reference
            </p>
            {stats.length > 0 && (
              <div
                className="flex flex-wrap mb2 w-100"
                style={{ gap: "0.75rem" }}
              >
                {stats.map(([h, v]) => (
                  <div key={h} className=" w-20">
                    <label className="db f7 fw6 gray mb1">{h}</label>
                    <span className="f6">{v ?? "—"}</span>
                  </div>
                ))}
              </div>
            )}
            {longText.map(([h, v]) => (
              <div key={h}>
                <label className="db f7 fw6 gray mb1">{h}</label>
                <span className="f6 lh-copy">
                  {renderKeywords(String(v), setKwDialog)}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex mb3" style={{ gap: "0.5rem" }}>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1">MCU Cost</label>
            <span className="f6">{fields.mcuCost || "—"}</span>
          </div>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1 nowrap">
              Passive/Active FRO
            </label>
            <span className="f6">{fields.fro || "—"}</span>
          </div>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1">Tonnage</label>
            <span className="f6">{fields.tonnage || "—"}</span>
          </div>
        </div>

        <button
          className="f6 ph3 pv2 bn br1 pointer w-100 bg-dark-green white fw7"
          onClick={() => onSelect(fields)}
        >
          Select
        </button>
      </div>
    </div>
  );
};
