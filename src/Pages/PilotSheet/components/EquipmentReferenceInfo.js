import classNames from "classnames";
import { renderKeywords } from "../../../utils/renderKeywords";

// Read-only reference panels shared by EquipmentDetailsModal (editing a
// loadout row) and EquipmentPreviewModal (browsing the picker on mobile).

export const WeaponReferenceInfo = ({ weaponInfo, setKwDialog }) => (
  <div className="mb3 pa2 bg-near-white br1">
    <p className="f7 fw6 dark-green ttu tracked mb2">
      {weaponInfo.kind} Weapon Reference
    </p>
    {weaponInfo.types.length > 0 && (
      <div className="mb2">
        <label className="db f7 fw6 gray mb1">Type</label>
        <div className="flex flex-wrap" style={{ gap: "0.25rem" }}>
          {weaponInfo.classes.map((t) => (
            <span key={t} className="f7 ph2 pv1 br1 bg-white ba b--black-20">
              {t}
            </span>
          ))}
          {weaponInfo.damageType && (
            <span
              className={classNames("f7 ph2 pv1 br1 white fw6", {
                "bg-blue": weaponInfo.damageType === "Beam",
                "bg-dark-gray": weaponInfo.damageType === "Kinetic",
              })}
            >
              {weaponInfo.damageType}
            </span>
          )}
        </div>
      </div>
    )}
    <div className="flex flex-wrap mb2 w-100" style={{ gap: "0.75rem" }}>
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
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">Faction</label>
        <span className="f6">{weaponInfo.faction || "NA"}</span>
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
);

export const SupportReferenceInfo = ({
  supportInfo,
  setKwDialog,
  tonOverride,
}) => (
  <div className="mb3 pa2 bg-near-white br1">
    <p className="f7 fw6 dark-green ttu tracked mb2">
      Support Equipment Reference
    </p>
    <div className="flex flex-wrap mb2 w-100" style={{ gap: "0.75rem" }}>
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">Location</label>
        <span className="f6">{supportInfo.loc || "—"}</span>
      </div>
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">Ton</label>
        <span className="f6">{tonOverride ?? supportInfo.ton ?? "—"}</span>
      </div>
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">FRO</label>
        <span className="f6">{supportInfo.pfro || "—"}</span>
      </div>
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">Qty</label>
        <span className="f6">{supportInfo.qty ?? "—"}</span>
      </div>
      <div className=" w-20">
        <label className="db f7 fw6 gray mb1">Faction</label>
        <span className="f6">{supportInfo.faction || "NA"}</span>
      </div>
    </div>
    {supportInfo.effect && (
      <div>
        <label className="db f7 fw6 gray mb1">Effect</label>
        <span className="f6 lh-copy">
          {renderKeywords(supportInfo.effect, setKwDialog)}
        </span>
      </div>
    )}
  </div>
);
