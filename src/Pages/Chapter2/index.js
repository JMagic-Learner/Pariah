import { ChapterLayout } from "../../Components/ChapterLayout";
import { Pilots } from "./sections/Pilots";
import { ForceCreation } from "./sections/ForceCreation";
import { Equipment } from "./sections/Equipment";
import { Keywords } from "./sections/Keywords";
import { FactionBonuses } from "./sections/FactionBonuses";
import { FireteamCreation } from "./sections/FireteamCreation";
import { RangedWeapons } from "./sections/RangedWeapons";
import { MeleeWeapons } from "./sections/MeleeWeapons";
import { MobileSuits } from "./sections/MobileSuits";
import { NewtypeUpgrades } from "./sections/NewtypeUpgrades";

const SECTIONS = [
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
  { id: "ranged", title: "2.4 — Ranged Weapons", Component: RangedWeapons },
  { id: "melee", title: "2.5 — Melee Weapons", Component: MeleeWeapons },
  { id: "newtype", title: "Newtype Upgrades", Component: NewtypeUpgrades },
  { id: "keywords", title: "2.9 — Keywords", Component: Keywords },
  { id: "factions", title: "Faction Bonuses", Component: FactionBonuses },
];

export const Chapter2 = () => (
  <ChapterLayout
    chapterTitle="Chapter 2: Building Your Force"
    sections={SECTIONS}
  />
);
