import { ChapterLayout } from "../../Components/ChapterLayout";
import { Pilots } from "./sections/Pilots";
import { ForceCreation } from "./sections/ForceCreation";
import { Equipment } from "./sections/Equipment";
import { Keywords } from "./sections/Keywords";
import { FactionBonuses } from "./sections/FactionBonuses";
import { FireteamCreation } from "./sections/FireteamCreation";
import { RangedWeapons } from "./sections/RangedWeapons";
import { RangedWeapons } from "./sections/MeleeWeapons";
import { MobileSuits } from "./sections/MobileSuits";

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
  { id: "equipment", title: "2.4 — Ranged Weapons", Component: RangedWeapons },
  { id: "equipment", title: "2.5 — Melee Weapons", Component: MeleeWeapons },
  { id: "keywords", title: "2.6 — Keywords", Component: Keywords },
  { id: "factions", title: "2.7 — Faction Bonuses", Component: FactionBonuses },
];

export const Chapter2 = () => (
  <ChapterLayout
    chapterTitle="Chapter 2: Building Your Force"
    sections={SECTIONS}
  />
);
