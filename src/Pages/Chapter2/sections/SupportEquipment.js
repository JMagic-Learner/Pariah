import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { SupportEquipmentTable } from "../../../Components/Table/SupportEquipmentTable";

export const SupportEquipment = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.10 — Support Equipment</h2>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Support Equipment covers upgrades, systems, and modifications that can
        be installed on a MSU beyond its standard weapons loadout. Each item
        lists its install location, tonnage cost, passive FRO drain, maximum
        quantity, MCU cost, and effect.
      </p>
      <SupportEquipmentTable />
    </div>
  );
};
