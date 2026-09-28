import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const SellingWeaponsEquipment = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.4.2 — Selling Weapons and Equipment
      </h2>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Each base weapon that comes stock (marked as FREE) on a MSU may be sold,
        but they only refund 10 MCU.
      </p>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Each support equipment that comes stock (marked as FREE) on a MSU may be
        sold for full refund except for any Shields. Since shields are factored
        at 5 MCU per equipment at base MCU cost, selling base shields only
        refund 5 MCU.
      </p>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        See Base Calculation costs from the LINKS TAB - Community MSU Folder -
        Creating your own MSU
      </p>
    </div>
  );
};
