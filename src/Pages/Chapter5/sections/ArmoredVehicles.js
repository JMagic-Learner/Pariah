import {
  GroundVehicleTable,
  GroundVehicleWeapons,
} from "../../../Components/Table/SupportUnitsTable";

export const ArmoredVehicles = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.2 — Armored Vehicles</h2>

      <p className="lh-copy mb4">
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
