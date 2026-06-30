import { SupportEquipmentTable } from "../../../Components/Table/SupportEquipmentTable";

export const SupportEquipment = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">2.8 — Support Equipment</h2>
      <p className="lh-copy tj">
        Support Equipment covers upgrades, systems, and modifications that can
        be installed on a MSU beyond its standard weapons loadout. Each item
        lists its install location, tonnage cost, passive FRO drain, maximum
        quantity, MCU cost, and effect.
      </p>
      <SupportEquipmentTable />
    </div>
  );
};
