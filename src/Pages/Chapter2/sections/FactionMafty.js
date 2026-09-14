import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionMafty = () => {
  const faction = FACTIONS.find((f) => f.name === "MAFTY");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.12.3 — Faction Bonuses: MAFTY</h2>
      <FactionCard faction={faction} />
    </div>
  );
};
