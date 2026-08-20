import { ChapterLayout } from "../../Components/ChapterLayout";
import { CampaignOverview } from "./sections/Overview";
import { Timeline } from "./sections/Timeline";
import { CampaignPilots } from "./sections/CampaignPilots";
import { PilotDeath } from "./sections/PilotDeath";
import { PilotAccolades } from "./sections/PilotAccolades";
import { OperationOdessa } from "./sections/OperationOdessa";

const SECTIONS = [
  { id: "overview", title: "6.0 — Overview", Component: CampaignOverview },
  { id: "timeline", title: "6.1 — Timeline", Component: Timeline },
  {
    id: "campaignpilots",
    title: "6.2 — Campaign Pilots",
    Component: CampaignPilots,
  },
  { id: "pilotdeath", title: "6.3 — Pilot Death", Component: PilotDeath },
  {
    id: "pilotaccolades",
    title: "6.4 — Pilot Accolades",
    Component: PilotAccolades,
  },
  {
    id: "operationodessa",
    title: "6.5 — Operation Odessa",
    Component: OperationOdessa,
  },
];

export const Chapter6 = () => (
  <ChapterLayout chapterTitle="Chapter 6: Campaign" sections={SECTIONS} />
);
