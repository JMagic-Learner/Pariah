import { Table } from "../../../Components/Table";
import { MeleeWeaponTable } from "../../../Components/Table/WeaponTable";

export const MeleeWeapons = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.6 — Melee Weapons</h2>
      <MeleeWeaponTable />
    </div>
  );
};
