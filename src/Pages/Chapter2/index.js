import { ChapterLayout } from '../../Components/ChapterLayout';
import { Pilots } from './sections/Pilots';
import { ForceCreation } from './sections/ForceCreation';
import { Equipment } from './sections/Equipment';
import { Keywords } from './sections/Keywords';
import { FactionBonuses } from './sections/FactionBonuses';

const SECTIONS = [
  { id: 'pilots', title: '2.1 — Pilots', Component: Pilots },
  { id: 'force', title: '2.2 — Force Creation', Component: ForceCreation },
  { id: 'equipment', title: '2.3 — Equipment', Component: Equipment },
  { id: 'keywords', title: '2.4 — Keywords', Component: Keywords },
  { id: 'factions', title: '2.5 — Faction Bonuses', Component: FactionBonuses },
];

export const Chapter2 = () => (
  <ChapterLayout chapterTitle="Chapter 2: Building Your Force" sections={SECTIONS} />
);
