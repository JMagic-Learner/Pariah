import { useState } from "react";
import classNames from "classnames";
import { TextInput } from "../../../Components/TextInput";
import { isLimitedUseItem } from "../../../utils/limitedUseEquipment";
import { EquipmentDetailsModal } from "./EquipmentDetailsModal";

export const MobileEquipRow = ({
  row,
  onChange,
  onNameClick,
  sold,
  onSell,
  onClear,
  scavengerToggle,
  detailsLabel = "Notes",
  used,
  onToggleUsed,
}) => {
  const [open, setOpen] = useState(false);
  const limitedUse = isLimitedUseItem(row.name);
  return (
    <>
      <div
        className={classNames("flex items-center pa2 bb b--black-10", {
          "o-40": sold,
        })}
      >
        <div className="flex-auto mr2" style={{ minWidth: 0 }}>
          <TextInput
            value={row.name}
            onChange={(v) => onChange("name", v)}
            onClick={!sold ? onNameClick : undefined}
            className={sold ? "strike" : ""}
            placeholder="— Empty —"
          />
          {limitedUse && used && <span className="f8 fw6 orange">(USED)</span>}
        </div>
        <button
          className="f7 ph2 pv1 bn br1 pointer bg-dark-green white fw6 flex-shrink-0"
          onClick={() => setOpen(true)}
        >
          Details
        </button>
      </div>
      {open && (
        <EquipmentDetailsModal
          row={row}
          detailsLabel={detailsLabel}
          onChange={onChange}
          onClose={() => setOpen(false)}
          sold={sold}
          onSell={onSell}
          onClear={onClear}
          scavengerToggle={scavengerToggle}
          used={used}
          onToggleUsed={onToggleUsed}
        />
      )}
    </>
  );
};
