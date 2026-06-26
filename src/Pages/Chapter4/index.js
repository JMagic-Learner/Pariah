import { ChapterLayout } from '../../Components/ChapterLayout';
import { Overview } from './sections/Overview';
import { TorringtonBase } from './sections/TorringtonBase';
import { Recon } from './sections/Recon';
import { Assault } from './sections/Assault';
import { SectorControl } from './sections/SectorControl';
import { Extraction } from './sections/Extraction';
import { ColonyDrop } from './sections/ColonyDrop';

const SECTIONS = [
  { id: 'overview', title: '4.0 — Overview', Component: Overview },
  { id: 'torrington', title: 'Mission 1: Torrington Base', Component: TorringtonBase },
  { id: 'recon', title: 'Mission 2: Recon', Component: Recon },
  { id: 'assault', title: 'Mission 3: Assault', Component: Assault },
  { id: 'sectorcontrol', title: 'Mission 4: Sector Control', Component: SectorControl },
  { id: 'extraction', title: 'Mission 5: Extraction', Component: Extraction },
  { id: 'colonydrop', title: 'Mission 6: Colony Drop', Component: ColonyDrop },
];

export const Chapter4 = () => (
  <ChapterLayout chapterTitle="Chapter 4: Missions" sections={SECTIONS} />
);
