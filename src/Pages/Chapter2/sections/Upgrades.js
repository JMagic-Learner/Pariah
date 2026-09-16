import { SupportEquipmentTable } from "../../../Components/Table/SupportEquipmentTable";
import { UPGRADES } from "../../../Data/UpgradeArray";

export const Upgrades = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.8 — Upgrades</h2>
      <p className="lh-copy tj">
        Weapon Upgrades are modifications installed on a specific ranged or
        melee weapon, altering its keywords, ROF, range, or other statistics.
        Each upgrade lists its install location, tonnage cost, passive FRO
        drain, maximum quantity, MCU cost, and effect.
      </p>

      <p className="lh-copy tj">
        When an Upgrade has a install location of "Weapon", the tonnage cost is
        added to the weapon itself. Meaning that a weapon can change weight
        classification from [LIGHT] to [MEDIUM] or [HEAVY ].
      </p>
      <SupportEquipmentTable items={UPGRADES} mobileTitle="Upgrades" />
    </div>
  );
};
