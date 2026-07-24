import { useState } from "react";
import classNames from "classnames";
import { TextInput } from "../../../Components/TextInput";
import { isLimitedUseItem } from "../../../utils/limitedUseEquipment";
import { TD } from "./TableCells";
import { EquipmentDetailsModal } from "./EquipmentDetailsModal";

export const EquipmentRow = ({
  row,
  onChange,
  onNameClick,
  lastCellColSpan = 1,
  sold,
  onSell,
  onClear,
  scavengerToggle,
  detailsLabel = "Notes",
  used,
  onToggleUsed,
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const limitedUse = isLimitedUseItem(row.name);
  return (
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
          {limitedUse && used && (
            <span className="f8 fw6 orange ml1 flex-shrink-0">(USED)</span>
          )}
          {row.name && (
            <button
              className="f8 ph1 pv0 ml1 bn br1 pointer flex-shrink-0 lh-copy bg-near-white dark-gray"
              onClick={() => setDetailsOpen(true)}
              title="View Details"
            >
              View
            </button>
          )}
        </div>
        {detailsOpen && (
          <EquipmentDetailsModal
            row={row}
            detailsLabel={detailsLabel}
            onChange={onChange}
            onClose={() => setDetailsOpen(false)}
            sold={sold}
            onSell={onSell}
            onClear={onClear}
            scavengerToggle={scavengerToggle}
            used={used}
            onToggleUsed={onToggleUsed}
          />
        )}
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
};
