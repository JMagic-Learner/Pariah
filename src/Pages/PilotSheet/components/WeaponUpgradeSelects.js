import { UpgradeInput } from "../../../Components/TextInput";
import { UPGRADES } from "../../../Data/UpgradeArray";

const findUpgrade = (name) => UPGRADES.find((u) => u.name === name);

const UpgradeSlot = ({ label, value, onClick, onClear }) => {
  const info = value ? findUpgrade(value) : null;
  return (
    <div className="flex items-center" style={{ gap: "0.5rem" }}>
      <div
        className="flex items-center flex-shrink-0"
        style={{ width: "9rem", gap: "0.25rem" }}
      >
        <UpgradeInput
          value={value}
          onChange={() => {}}
          onClick={onClick}
          placeholder={label}
        />

        <div className="f8 tc flex-shrink-0" style={{ width: "2.5rem" }}>
          {info ? (info.ton ?? "–") : "—"}
        </div>
        {value && (
          <button
            className="f5 fw7 ph2 pv1 ba b--red pointer flex-shrink-0 lh-solid red bg-white br1 dim"
            onClick={onClear}
            title="Remove upgrade"
          >
            ✕
          </button>
        )}
        <div className="f8 tc flex-shrink-0">{info ? info.effect : ""}</div>
      </div>
    </div>
  );
};

export const WeaponUpgradeSelects = ({ row, onChange, onPickUpgrade }) => (
  <div className="flex flex-column" style={{ gap: "0.35rem" }}>
    <div
      className="flex items-center f8 fw6 dark-green"
      style={{ gap: "0.5rem" }}
    >
      <span className="flex-shrink-0" style={{ width: "9rem" }}>
        Upgrade
      </span>
      <span className="tc flex-shrink-0" style={{ width: "2.5rem" }}>
        Ton
      </span>
      <span className="flex-auto">Effect</span>
    </div>
    <UpgradeSlot
      label="— Slot 1 —"
      value={row.upgrade1 || ""}
      onClick={() => onPickUpgrade(1)}
      onClear={() => onChange("upgrade1", "")}
    />
    <UpgradeSlot
      label="— Slot 2 —"
      value={row.upgrade2 || ""}
      onClick={() => onPickUpgrade(2)}
      onClear={() => onChange("upgrade2", "")}
    />
  </div>
);
