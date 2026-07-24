import { useState } from "react";
import classNames from "classnames";
import { renderKeywords } from "../../../utils/renderKeywords";
import { KeywordDialog } from "../../../Components/KeywordDialog";
import { TextInput } from "../../../Components/TextInput";
import { lookupWeaponInfo } from "../utilities/lookupWeaponInfo";
import { isLimitedUseItem } from "../../../utils/limitedUseEquipment";

export const EquipmentDetailsModal = ({
  row,
  detailsLabel,
  onChange,
  onClose,
  sold,
  onSell,
  onClear,
  scavengerToggle,
  used,
  onToggleUsed,
}) => {
  const [kwDialog, setKwDialog] = useState(null);
  const weaponInfo = lookupWeaponInfo(row.name);
  const limitedUse = isLimitedUseItem(row.name);
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
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />
      <div
        style={{
          width: "90vw",
          maxWidth: "26rem",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "white",
          borderRadius: "4px",
        }}
        className="pa3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb3">
          <span className="fw7 f5 truncate pr2">
            {row.name || "Equipment Details"}
          </span>
          <button
            onClick={onClose}
            className="bn bg-transparent fw7 f4 pointer dim lh-solid flex-shrink-0"
          >
            ✕
          </button>
        </div>

        <label className="db f7 fw6 gray mb1">Name</label>
        <TextInput
          value={row.name}
          onChange={(v) => onChange("name", v)}
          className="w-100 mb3"
        />

        {limitedUse && onToggleUsed && (
          <button
            className={classNames(
              "f7 ph2 pv2 mb3 bn br1 pointer lh-copy w-100",
              {
                "bg-orange white fw7": used,
                "bg-near-white dark-gray": !used,
              },
            )}
            onClick={onToggleUsed}
            title="[LIMITED USE(1)] — track whether this has been deployed"
          >
            {used ? "Used this scenario ✓ (click to reset)" : "Mark as Used"}
          </button>
        )}

        {weaponInfo && (
          <div className="mb3 pa2 bg-near-white br1">
            <p className="f7 fw6 dark-green ttu tracked mb2">
              {weaponInfo.kind} Weapon Reference
            </p>
            <div
              className="flex flex-wrap mb2 w-100"
              style={{ gap: "0.75rem" }}
            >
              <div className=" w-20">
                <label className="db f7 fw6 gray mb1">ROF</label>
                <span className="f6">{weaponInfo.rof || "—"}</span>
              </div>
              <div className=" w-20">
                <label className="db f7 fw6 gray mb1">Rangebands</label>
                <span className="f6">{weaponInfo.range || "—"}</span>
              </div>
              <div className=" w-20">
                <label className="db f7 fw6 gray mb1">Damage</label>
                <span className="f6">{weaponInfo.dam || "—"}</span>
              </div>
              <div className=" w-20">
                <label className="db f7 fw6 gray mb1">Mods</label>
                <span className="f6">{weaponInfo.mod || "—"}</span>
              </div>
            </div>
            {weaponInfo.keywords && (
              <div>
                <label className="db f7 fw6 gray mb1">Keywords</label>
                <span className="f6 lh-copy">
                  {renderKeywords(weaponInfo.keywords, setKwDialog)}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex mb3" style={{ gap: "0.5rem" }}>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1">MCU Cost</label>
            <TextInput
              value={row.mcuCost}
              onChange={(v) => onChange("mcuCost", v)}
              className="tc w-100"
            />
          </div>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1 nowrap">
              Passive/Active FRO
            </label>
            <TextInput
              value={row.fro}
              onChange={(v) => onChange("fro", v)}
              className="tc w-100"
            />
          </div>
          <div className="flex-auto">
            <label className="db f7 fw6 gray mb1">Tonnage</label>
            <TextInput
              value={row.tonnage}
              onChange={(v) => onChange("tonnage", v)}
              className="tc w-100"
            />
          </div>
        </div>

        <label className="db f7 fw6 gray mb1">{detailsLabel}</label>
        <TextInput
          value={row.notes}
          onChange={(v) => onChange("notes", v)}
          className="w-100 mb3"
        />

        {scavengerToggle && (
          <button
            className={classNames(
              "f7 ph2 pv2 mb3 bn br1 pointer lh-copy w-100",
              {
                "bg-dark-green white fw7": scavengerToggle.active,
                "bg-near-white dark-gray": !scavengerToggle.active,
              },
            )}
            onClick={scavengerToggle.onClick}
          >
            {scavengerToggle.active ? "−50% MCU ✓" : "Scavenge ½ MCU"}
          </button>
        )}

        {(onSell || onClear) && (
          <div className="flex" style={{ gap: "0.5rem" }}>
            {onSell && (
              <button
                className={classNames("f7 ph3 pv2 bn br1 pointer flex-auto", {
                  "bg-red white": sold,
                  "bg-near-white dark-gray": !sold,
                })}
                onClick={onSell}
              >
                {sold ? "Reinstate" : "Sell"}
              </button>
            )}
            {onClear && (
              <button
                className="f7 ph3 pv2 bn br1 pointer flex-auto bg-near-white dark-gray"
                onClick={() => {
                  onClear();
                  onClose();
                }}
              >
                Clear
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
