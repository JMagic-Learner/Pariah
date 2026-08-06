import { ChapterLayout } from "../../Components/ChapterLayout";
import { Overview } from "./sections/Overview";
import { TorringtonBase } from "./sections/TorringtonBase";
import { Recon } from "./sections/Recon";
import { Assault } from "./sections/Assault";
import { SectorControl } from "./sections/SectorControl";
import { Extraction } from "./sections/Extraction";
import { ColonyDrop } from "./sections/ColonyDrop";
import { CivilianEvac } from "./sections/CivilianEvac";
import { FinalStand } from "./sections/FinalStand";

const SECTIONS = [
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
  { id: "extraction", title: "Mission 5: Extraction", Component: Extraction },
  { id: "colonydrop", title: "Mission 6: Colony Drop", Component: ColonyDrop },
  {
    id: "civilianEvac",
    title: "Mission 7: Civilian Evacuation",
    Component: CivilianEvac,
  },
  { id: "finalestand", title: "Mission 8: Final Stand", Component: FinalStand },
];

export const Chapter4 = () => (
  <ChapterLayout chapterTitle="Chapter 4: Missions" sections={SECTIONS} />
);
