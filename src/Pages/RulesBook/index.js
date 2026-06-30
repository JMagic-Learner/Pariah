import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

import { Chapter1 } from "../Chapter1";

import { Pilots } from "../Chapter2/sections/Pilots";
import { MobileSuits } from "../Chapter2/sections/MobileSuits";
import { FireteamCreation } from "../Chapter2/sections/FireteamCreation";
import { RangedWeapons } from "../Chapter2/sections/RangedWeapons";
import { MeleeWeapons } from "../Chapter2/sections/MeleeWeapons";
import { WeaponsEquipment } from "../Chapter2/sections/WeaponsEquipment";
import { Keywords } from "../Chapter2/sections/Keywords";
import { FactionBonuses } from "../Chapter2/sections/FactionBonuses";
import { Munitions } from "../Chapter2/sections/Munitions";
import { SupportEquipment } from "../Chapter2/sections/SupportEquipment";

import { Phases } from "../Chapter3/sections/Phases";
import { Movement } from "../Chapter3/sections/Movement";
import { HitLocations } from "../Chapter3/sections/HitLocations";
import { Reactions } from "../Chapter3/sections/Reactions";
import { AttackSequence } from "../Chapter3/sections/AttackSequence";
import { States } from "../Chapter3/sections/States";
import { OtherActions } from "../Chapter3/sections/OtherActions";
import { Terrain } from "../Chapter3/sections/Terrain";

import { Overview } from "../Chapter4/sections/Overview";
import { TorringtonBase } from "../Chapter4/sections/TorringtonBase";
import { Recon } from "../Chapter4/sections/Recon";
import { Assault } from "../Chapter4/sections/Assault";
import { SectorControl } from "../Chapter4/sections/SectorControl";
import { Extraction } from "../Chapter4/sections/Extraction";
import { ColonyDrop } from "../Chapter4/sections/ColonyDrop";
import { NewtypeUpgrades } from "../Chapter2/sections/NewtypeUpgrades";

import { SupportUnitsOverview } from "../Chapter5/sections/Overview";
import { Infantry } from "../Chapter5/sections/Infantry";
import { ArmoredVehicles } from "../Chapter5/sections/ArmoredVehicles";
import { AirSupport } from "../Chapter5/sections/AirSupport";

import { ReZeonFactionBonuses } from "../ReZeonExpansion/sections/FactionBonuses";
import { ReZeonPilotTraits } from "../ReZeonExpansion/sections/PilotTraits";

const CHAPTERS = [
  {
    id: "ch1",
    title: "Ch.1 — Introduction",
    sections: [
      { id: "ch1-intro", title: "What is Flashpoint?", Component: Chapter1 },
    ],
  },
  {
    id: "ch2",
    title: "Ch.2 — Building Your Force",
    sections: [
      { id: "pilots", title: "2.1 — Pilots", Component: Pilots },
      {
        id: "mobilesuits",
        title: "2.2 — Mobile Suits",
        Component: MobileSuits,
      },
      {
        id: "force",
        title: "2.3 — Fireteam Creation",
        Component: FireteamCreation,
      },
      {
        id: "weaponsequip",
        title: "2.4 — Weapons and Equipment",
        Component: WeaponsEquipment,
      },
      {
        id: "ranged",
        title: "2.5 — Ranged Weapons",
        Component: RangedWeapons,
      },
      {
        id: "melee",
        title: "2.6 — Melee Weapons",
        Component: MeleeWeapons,
      },
      {
        id: "munitions",
        title: "2.7 — Munitions",
        Component: Munitions,
      },
      {
        id: "supportequip",
        title: "2.8 — Support Equipment",
        Component: SupportEquipment,
      },
      {
        id: "newtypeUpgrades",
        title: "2.9 — Newtype Upgrades",
        Component: NewtypeUpgrades,
      },
      {
        id: "factions",
        title: "2.10 — Faction Bonuses",
        Component: FactionBonuses,
      },
      { id: "keywords", title: "2.11 — Keywords", Component: Keywords },
    ],
  },
  {
    id: "ch3",
    title: "Ch.3 — Playing the Game",
    sections: [
      { id: "phases", title: "3.1 — Phases", Component: Phases },
      { id: "movement", title: "3.2 — Movement", Component: Movement },
      {
        id: "hitlocations",
        title: "3.3 — Hit Locations",
        Component: HitLocations,
      },
      { id: "reactions", title: "3.4 — Reactions", Component: Reactions },
      {
        id: "attacksequence",
        title: "3.5 — Attack Sequence",
        Component: AttackSequence,
      },
      { id: "states", title: "3.6 — States", Component: States },
      {
        id: "otheractions",
        title: "3.7 — Other Actions",
        Component: OtherActions,
      },
      { id: "terrain", title: "3.8 — Terrain", Component: Terrain },
    ],
  },
  {
    id: "ch4",
    title: "Ch.4 — Missions",
    sections: [
      { id: "overview", title: "4.0 — Overview", Component: Overview },
      {
        id: "torrington",
        title: "Mission 1: Torrington Base",
        Component: TorringtonBase,
      },
      { id: "recon", title: "Mission 2: Recon", Component: Recon },
      { id: "assault", title: "Mission 3: Assault", Component: Assault },
      {
        id: "sectorcontrol",
        title: "Mission 4: Sector Control",
        Component: SectorControl,
      },
      {
        id: "extraction",
        title: "Mission 5: Extraction",
        Component: Extraction,
      },
      {
        id: "colonydrop",
        title: "Mission 6: Colony Drop",
        Component: ColonyDrop,
      },
    ],
  },
  {
    id: "ch5",
    title: "Ch.5 — Support Units",
    sections: [
      {
        id: "supportoverview",
        title: "5.0 — Overview",
        Component: SupportUnitsOverview,
      },
      { id: "infantry", title: "5.1 — Infantry", Component: Infantry },
      {
        id: "armoredvehicles",
        title: "5.2 — Armored Vehicles",
        Component: ArmoredVehicles,
      },
      { id: "airsupport", title: "5.3 — Air Support", Component: AirSupport },
    ],
  },
  {
    id: "ch6",
    title: "Ch.6 — Expanded Content",
    sections: [
      {
        id: "rezeon-faction-bonuses",
        title: "6.1 — ReZeon Faction Bonuses",
        Component: ReZeonFactionBonuses,
      },
      {
        id: "rezeon-pilot-traits",
        title: "6.2 — ReZeon Pilot Traits",
        Component: ReZeonPilotTraits,
      },
    ],
  },
];

const ALL_SECTIONS = CHAPTERS.flatMap((ch) => ch.sections);

export const RulesBook = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [activeSectionId, setActiveSectionId] = useState("ch1-intro");

  const activeSection = ALL_SECTIONS.find((s) => s.id === activeSectionId);
  const ActiveComponent = activeSection?.Component;

  return (
    <div className={classNames({ flex: !isMobile })}>
      <div
        className={classNames({
          "w-25 br b--black-10 bg-near-white": !isMobile,
          "w-100": isMobile,
        })}
        style={!isMobile ? { minHeight: "100vh" } : {}}
      >
        {isMobile ? (
          <select
            className="w-100 pa2 f6 ba b--black-20 bg-white"
            value={activeSectionId}
            onChange={(e) => setActiveSectionId(e.target.value)}
          >
            {CHAPTERS.map((ch) => (
              <optgroup key={ch.id} label={ch.title}>
                {ch.sections.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        ) : (
          CHAPTERS.map((ch) => (
            <div key={ch.id}>
              <div className="pv2 ph3 bg-near-black">
                <p className="f7 white fw7 ma0 ttu tracked">{ch.title}</p>
              </div>
              {ch.sections.map((s) => (
                <button
                  key={s.id}
                  className={classNames(
                    "db w-100 tl pv2 ph3 bn pointer f6 bb b--black-10 lh-copy",
                    {
                      "bg-orange white fw7": activeSectionId === s.id,
                      "bg-near-white dark-gray": activeSectionId !== s.id,
                    },
                  )}
                  onClick={() => setActiveSectionId(s.id)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          ))
        )}
      </div>

      <div
        className={classNames("pa3 pa4-ns overflow-auto", {
          "w-75": !isMobile,
          "w-100": isMobile,
        })}
      >
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};
