import { useState } from "react";
import classNames from "classnames";
import { TextInput } from "../../../Components/TextInput";
import { isLimitedUseItem } from "../../../utils/limitedUseEquipment";
import { EquipmentDetailsModal } from "./EquipmentDetailsModal";
import { WeaponUpgradeSelects } from "./WeaponUpgradeSelects";
import { getWeaponWeightClass } from "../utilities/weaponWeightClass";

export const MobileEquipRow = ({
  row,
  onChange,
  onNameClick,
  onPickUpgrade,
  isWeapon,
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
  const [showUpgrades, setShowUpgrades] = useState(
    () => !!(row.upgrade1 || row.upgrade2),
  );
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
        {isWeapon && !sold && (
          <button
            className={classNames(
              "f7 ph2 pv1 mr1 bn br1 pointer fw6 flex-shrink-0",
              showUpgrades
                ? "bg-dark-green white"
                : "bg-near-white dark-gray",
            )}
            onClick={() => setShowUpgrades((v) => !v)}
          >
            Upgrades {showUpgrades ? "▲" : "▼"}
          </button>
        )}
        {isWeapon && !sold && (
          <span className="f8 fw7 dark-green mr1 flex-shrink-0">
            {getWeaponWeightClass(row)}
          </span>
        )}
        <button
          className="f7 ph2 pv1 bn br1 pointer bg-dark-green white fw6 flex-shrink-0"
          onClick={() => setOpen(true)}
        >
          Details
        </button>
      </div>
      {isWeapon && !sold && showUpgrades && (
        <div className="pa2 bb b--black-10 bg-washed-green">
          <WeaponUpgradeSelects
            row={row}
            onChange={onChange}
            onPickUpgrade={onPickUpgrade}
          />
        </div>
      )}
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
