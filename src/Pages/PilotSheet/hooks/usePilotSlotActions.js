import {
  PRESETS,
  blankEquip,
  blankLoc,
} from "../../../Data/PresetsArray";

// Bundles the actions that write "whole slot" state — the MSU name (which
// also has to keep the tab label in sync), and saving/loading/applying full
// sheet presets. Takes the full usePilotSlot(slotIndex) result plus the
// index itself, since every action here ends up touching setTabNames.
export const usePilotSlotActions = (slotIndex, slot) => {
  const {
    msuName,
    setMsuName,
    pilotName,
    mobileSuit,
    mcu,
    fro,
    tonnageLimit,
    movement,
    armorValue,
    gunnery,
    brawl,
    piloting,
    traits,
    baseEquip,
    addlEquip,
    soldBase,
    usedBase,
    usedAddl,
    purgeArmor,
    locations,
    mechanicChoice,
    newtypeChoice1,
    newtypeChoice2,
    cyberNewtypeChoice,
    ramboChoice,
    grypsVetChoice,
    customPreset,
    setCustomPreset,
    setTabNames,
    setAll,
  } = slot;

  const handleMsuName = (v) => {
    setMsuName(v);
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex ? (v.trim() ? v : `Pilot ${slotIndex + 1}`) : label,
      ),
    );
  };

  const saveCustomPreset = () => {
    const snapshot = {
      msuName,
      pilotName,
      mobileSuit,
      mcu,
      fro,
      tonnageLimit,
      movement,
      armorValue,
      gunnery,
      brawl,
      piloting,
      traits,
      baseEquip,
      addlEquip,
      soldBase,
      usedBase,
      usedAddl,
      purgeArmor,
      locations,
      mechanicChoice,
      newtypeChoice1,
      newtypeChoice2,
      cyberNewtypeChoice,
      ramboChoice,
      grypsVetChoice,
    };
    try {
      localStorage.setItem("gf_custom_preset", JSON.stringify(snapshot));
    } catch {}
    setCustomPreset(snapshot);
  };

  const loadCustomPreset = () => {
    if (!customPreset) return;
    const d = customPreset;
    setAll({
      msuName: d.msuName ?? "",
      pilotName: d.pilotName ?? "",
      mobileSuit: d.mobileSuit ?? "",
      mcu: d.mcu ?? "",
      fro: d.fro ?? "",
      tonnageLimit: d.tonnageLimit ?? "",
      movement: d.movement ?? "",
      armorValue: d.armorValue ?? "",
      gunnery: d.gunnery ?? "",
      brawl: d.brawl ?? "",
      piloting: d.piloting ?? "",
      traits: d.traits ?? ["", "", "", "", ""],
      baseEquip: d.baseEquip ?? Array(8).fill(null).map(blankEquip),
      addlEquip: d.addlEquip ?? Array(8).fill(null).map(blankEquip),
      soldBase: d.soldBase ?? Array(8).fill(false),
      usedBase: d.usedBase ?? Array(8).fill(false),
      usedAddl: d.usedAddl ?? Array(8).fill(false),
      purgeArmor: d.purgeArmor ?? false,
      locations: d.locations ?? {
        head: blankLoc(3),
        torso: blankLoc(3),
        rightArm: blankLoc(3),
        leftArm: blankLoc(3),
        rightLeg: blankLoc(3),
        leftLeg: blankLoc(3),
      },
      mechanicChoice: d.mechanicChoice ?? "",
      newtypeChoice1: d.newtypeChoice1 ?? "",
      newtypeChoice2: d.newtypeChoice2 ?? "",
      cyberNewtypeChoice: d.cyberNewtypeChoice ?? "",
      ramboChoice: d.ramboChoice ?? "",
      grypsVetChoice: d.grypsVetChoice ?? "",
    });
    const name = d.msuName ?? "";
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex
          ? name.trim()
            ? name
            : `Pilot ${slotIndex + 1}`
          : label,
      ),
    );
  };

  const applyPreset = (id) => {
    const preset = PRESETS.find((p) => p.id === id);
    if (!preset) return;
    const d = preset.data;
    setAll({
      msuName: d.msuName,
      mobileSuit: d.mobileSuit,
      mcu: d.mcu,
      fro: d.fro,
      tonnageLimit: d.tonnageLimit,
      movement: d.movement,
      armorValue: d.armorValue,
      baseEquip: d.baseEquip,
      addlEquip: d.addlEquip,
      soldBase: Array(8).fill(false),
      locations: d.locations,
    });
    setTabNames((prev) =>
      prev.map((label, i) =>
        i === slotIndex
          ? d.msuName.trim()
            ? d.msuName
            : `Pilot ${slotIndex + 1}`
          : label,
      ),
    );
  };

  return { handleMsuName, saveCustomPreset, loadCustomPreset, applyPreset };
};
