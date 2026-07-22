import { createContext, useContext, useState } from "react";
import { blankEquip, blankLoc } from "../Data/PresetsArray";

const defaultPilotState = () => ({
  msuName: "",
  pilotName: "",
  gunnery: "",
  gunneryMod: "",
  brawl: "",
  brawlMod: "",
  piloting: "",
  pilotingMod: "",
  traits: ["", "", "", "", ""],
  mobileSuit: "",
  mcu: "",
  fro: "",
  tonnageLimit: "",
  movement: "",
  armorValue: "",
  baseEquip: Array(8).fill(null).map(blankEquip),
  addlEquip: Array(8).fill(null).map(blankEquip),
  soldBase: Array(8).fill(false),
  usedBase: Array(8).fill(false),
  usedAddl: Array(8).fill(false),
  purgeArmor: false,
  mechanicChoice: "",
  scavengerChoice: "",
  newtypeChoice1: "",
  newtypeChoice2: "",
  cyberNewtypeChoice: "",
  ramboChoice: "",
  grypsVetChoice: "",
  locations: {
    head: blankLoc(3),
    torso: blankLoc(3),
    rightArm: blankLoc(3),
    leftArm: blankLoc(3),
    rightLeg: blankLoc(3),
    leftLeg: blankLoc(3),
  },
  showTraits: false,
  showWeapons: false,
  showMelee: false,
  showSupport: false,
  showKeywords: false,
  showNewtype: false,
  showPilotPanel: true,
  showBaseEquip: true,
  showAddlEquip: true,
});

const PilotSheetContext = createContext(null);

export const PilotSheetProvider = ({ children }) => {
  const [pilots, setPilots] = useState(() =>
    Array(6).fill(null).map(defaultPilotState)
  );
  const [activeTab, setActiveTab] = useState(0);
  const [tabNames, setTabNames] = useState([
    "Pilot 1",
    "Pilot 2",
    "Pilot 3",
    "Pilot 4",
    "Pilot 5",
    "Pilot 6",
  ]);
  const [initiatives, setInitiatives] = useState(["", "", "", "", "", ""]);
  const [customPreset, setCustomPreset] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gf_custom_preset")) ?? null;
    } catch {
      return null;
    }
  });
  return (
    <PilotSheetContext.Provider
      value={{
        pilots,
        setPilots,
        activeTab,
        setActiveTab,
        tabNames,
        setTabNames,
        initiatives,
        setInitiatives,
        customPreset,
        setCustomPreset,
      }}
    >
      {children}
    </PilotSheetContext.Provider>
  );
};

export const usePilotSheet = () => useContext(PilotSheetContext);

export const usePilotSlot = (slotIndex) => {
  const {
    pilots,
    setPilots,
    tabNames,
    setTabNames,
    customPreset,
    setCustomPreset,
  } = usePilotSheet();

  const pilot = pilots[slotIndex];

  // Creates a setter that mirrors the useState setter API:
  // accepts either a direct value or a functional updater (prev => next).
  const makeSet = (key) => (valueOrFn) =>
    setPilots((prev) => {
      const next = [...prev];
      next[slotIndex] = {
        ...next[slotIndex],
        [key]:
          typeof valueOrFn === "function"
            ? valueOrFn(next[slotIndex][key])
            : valueOrFn,
      };
      return next;
    });

  // Bulk-update multiple fields at once (used by preset loaders).
  const setAll = (patch) =>
    setPilots((prev) => {
      const next = [...prev];
      next[slotIndex] = { ...next[slotIndex], ...patch };
      return next;
    });

  return {
    ...pilot,
    setMsuName: makeSet("msuName"),
    setPilotName: makeSet("pilotName"),
    setGunnery: makeSet("gunnery"),
    setGunneryMod: makeSet("gunneryMod"),
    setBrawl: makeSet("brawl"),
    setBrawlMod: makeSet("brawlMod"),
    setPiloting: makeSet("piloting"),
    setPilotingMod: makeSet("pilotingMod"),
    setTraits: makeSet("traits"),
    setMobileSuit: makeSet("mobileSuit"),
    setMcu: makeSet("mcu"),
    setFro: makeSet("fro"),
    setTonnageLimit: makeSet("tonnageLimit"),
    setMovement: makeSet("movement"),
    setArmorValue: makeSet("armorValue"),
    setBaseEquip: makeSet("baseEquip"),
    setAddlEquip: makeSet("addlEquip"),
    setSoldBase: makeSet("soldBase"),
    setUsedBase: makeSet("usedBase"),
    setUsedAddl: makeSet("usedAddl"),
    setPurgeArmor: makeSet("purgeArmor"),
    setMechanicChoice: makeSet("mechanicChoice"),
    setScavengerChoice: makeSet("scavengerChoice"),
    setNewtypeChoice1: makeSet("newtypeChoice1"),
    setNewtypeChoice2: makeSet("newtypeChoice2"),
    setCyberNewtypeChoice: makeSet("cyberNewtypeChoice"),
    setRamboChoice: makeSet("ramboChoice"),
    setGrypsVetChoice: makeSet("grypsVetChoice"),
    setLocations: makeSet("locations"),
    setShowTraits: makeSet("showTraits"),
    setShowWeapons: makeSet("showWeapons"),
    setShowMelee: makeSet("showMelee"),
    setShowSupport: makeSet("showSupport"),
    setShowKeywords: makeSet("showKeywords"),
    setShowNewtype: makeSet("showNewtype"),
    setShowPilotPanel: makeSet("showPilotPanel"),
    setShowBaseEquip: makeSet("showBaseEquip"),
    setShowAddlEquip: makeSet("showAddlEquip"),
    setAll,
    customPreset,
    setCustomPreset,
    tabNames,
    setTabNames,
  };
};
