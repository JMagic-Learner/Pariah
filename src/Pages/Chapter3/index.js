import { ChapterLayout } from '../../Components/ChapterLayout';
import { Phases } from './sections/Phases';
import { Movement } from './sections/Movement';
import { HitLocations } from './sections/HitLocations';
import { Reactions } from './sections/Reactions';
import { AttackSequence } from './sections/AttackSequence';
import { States } from './sections/States';
import { OtherActions } from './sections/OtherActions';
import { Terrain } from './sections/Terrain';

const SECTIONS = [
  { id: 'phases', title: '3.1 — Phases', Component: Phases },
  { id: 'movement', title: '3.2 — Movement', Component: Movement },
  { id: 'hitlocations', title: '3.3 — Hit Locations', Component: HitLocations },
  { id: 'reactions', title: '3.4 — Reactions', Component: Reactions },
  { id: 'attacksequence', title: '3.5 — Attack Sequence', Component: AttackSequence },
  { id: 'states', title: '3.6 — States', Component: States },
  { id: 'otheractions', title: '3.7 — Other Actions', Component: OtherActions },
  { id: 'terrain', title: '3.8 — Terrain', Component: Terrain },
];

export const Chapter3 = () => (
  <ChapterLayout chapterTitle="Chapter 3: Playing the Game" sections={SECTIONS} />
);
