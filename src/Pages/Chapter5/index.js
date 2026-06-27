import { ChapterLayout } from '../../Components/ChapterLayout';
import { SupportUnitsOverview } from './sections/Overview';
import { Infantry } from './sections/Infantry';
import { ArmoredVehicles } from './sections/ArmoredVehicles';
import { AirSupport } from './sections/AirSupport';

const SECTIONS = [
  { id: 'overview',         title: '5.0 — Overview',          Component: SupportUnitsOverview },
  { id: 'infantry',         title: '5.1 — Infantry',          Component: Infantry },
  { id: 'armoredvehicles',  title: '5.2 — Armored Vehicles',  Component: ArmoredVehicles },
  { id: 'airsupport',       title: '5.3 — Air Support',       Component: AirSupport },
];

export const Chapter5 = () => (
  <ChapterLayout chapterTitle="Chapter 5: Support Units" sections={SECTIONS} />
);
