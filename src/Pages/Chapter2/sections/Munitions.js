import { MunitionsTable } from "../../../Components/Table/MunitionsTable";

export const Munitions = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">2.7 — Munitions</h2>
      <p className="lh-copy tj">
        [MUNITIONS] are special payloads used by missiles, grenade launchers,
        grenades, and other [INDIRECT]-fire weapons. When a weapon lists{" "}
        <span className="fw6 orange">[MUNITIONS]</span> as its damage value, the
        actual damage and area of effect are determined by the munition type
        loaded at the time of firing.
      </p>
      <p className="lh-copy tj orange">
        Incendiary, Flash, and Tagging Smoke do not stack effects when multiple
        missile type or grenade type weapons hit the same MSU
      </p>
      <p>
        {" "}
        [MUNITIONS] occupy the same weapon slot as a [MUNITIONS] weapon.Note
        down which [MUNITIONS] type on the{" "}
        <span className="fw6 orange"> [PILOT]</span>s sheet
      </p>
      <MunitionsTable />
    </div>
  );
};
