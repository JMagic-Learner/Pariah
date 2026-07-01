import { NumInput } from "../NumImput";
import { TextInput } from "../TextInput";
import classNames from "classnames";

// ─── Hit location card ────────────────────────────────────────────────────────

export const LocationCard = ({ title, data, onChange, showShield = false }) => (
  <div
    className={classNames(
      "ba h-100",
      data.destroyed ? "b--red" : "b--black-20",
    )}
  >
    <div
      className={classNames(
        "fw7 f7 pa2 ttu tracked flex items-center justify-between",
        data.destroyed ? "bg-red white" : "bg-dark-green white",
      )}
    >
      <span>{title}</span>
      <button
        className={classNames(
          "f8 ph1 pv0 bn br1 pointer flex-shrink-0 lh-copy",
          data.destroyed ? "bg-white red fw7" : "bg-dark-green white o-70",
        )}
        onClick={() => onChange("destroyed", !data.destroyed)}
        title={data.destroyed ? "Mark as intact" : "Mark as destroyed"}
      >
        {data.destroyed ? "DESTROYED" : "destroy"}
      </button>
    </div>
    <div className={classNames("pa2", { "o-40": data.destroyed })}>
      <div className="flex items-center mb2">
        <div className="flex items-center flex-auto">
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
        {showShield && (
          <div className="flex items-center ml2">
            <span className="f7 fw6 mr2 nowrap dark-blue">Shield:</span>
            <NumInput
              value={data.shieldCurrent}
              onChange={(v) => onChange("shieldCurrent", v)}
              placeholder="Cur"
            />
            <span className="f7 mh1">/</span>
            <NumInput
              value={data.shieldMax}
              onChange={(v) => onChange("shieldMax", v)}
              placeholder="Max"
            />
          </div>
        )}
      </div>
      <div className="mb2">
        <div className="f7 fw6 gray mb1 flex items-center justify-between">
          <span>Weapon</span>
          <button
            className={classNames(
              "f8 ph1 pv0 bn br1 pointer lh-copy flex-shrink-0",
              data.weaponStowed ? "bg-orange white fw7" : "bg-near-white dark-gray",
            )}
            onClick={() => onChange("weaponStowed", !data.weaponStowed)}
            title={data.weaponStowed ? "Weapon is stowed (counts as 1 equip slot) — click to unstow" : "Mark weapon as stowed"}
          >
            {data.weaponStowed ? "STOWED" : "stow"}
          </button>
        </div>
        <TextInput
          value={data.weapon}
          onChange={(v) => onChange("weapon", v)}
        />
      </div>
      {data.equipment
        .slice(0, data.weaponStowed ? data.equipment.length - 1 : data.equipment.length)
        .map((eq, i) => (
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
