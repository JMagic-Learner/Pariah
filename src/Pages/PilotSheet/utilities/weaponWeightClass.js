import { UPGRADES } from "../../../Data/UpgradeArray";
import { parseMCU } from "./parseMCU";

const findUpgrade = (name) => UPGRADES.find((u) => u.name === name);

const upgradeTon = (name) => {
  const upgrade = name ? findUpgrade(name) : null;
  return upgrade ? parseMCU(upgrade.ton) : 0;
};

export const getWeaponWeightClass = (row) => {
  const totalTonnage =
    parseMCU(row.tonnage) + upgradeTon(row.upgrade1) + upgradeTon(row.upgrade2);
  if (totalTonnage <= 2) return "[LIGHT]";
  if (totalTonnage <= 5) return "[MEDIUM]";
  return "[HEAVY]";
};
