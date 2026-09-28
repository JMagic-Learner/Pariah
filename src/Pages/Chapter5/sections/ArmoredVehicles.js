import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import {
  GroundVehicleTable,
  GroundVehicleWeapons,
} from "../../../Components/Table/SupportUnitsTable";

export const ArmoredVehicles = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.2 — Armored Vehicles</h2>

      <p className={classNames("lh-copy mb4", { f7: isMobile })}>
        Armored vehicles follow the same movement and facing restrictions as
        MSU. Tanks provide heavy firepower and durable armor, while APC
        Transports offer mobility support. Both unit types use hex bases and
        have a single hit location.
      </p>

      <h3 className="f4 fw7 mb2">Vehicle Units</h3>
      <GroundVehicleTable />

      <h3 className="f4 fw7 mt4 mb2">Ground Vehicle Weapons</h3>
      <GroundVehicleWeapons />
    </div>
  );
};
