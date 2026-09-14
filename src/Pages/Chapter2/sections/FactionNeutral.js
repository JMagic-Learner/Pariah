import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionNeutral = () => {
  const faction = FACTIONS.find((f) => f.name === "Neutral");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.12.6 — Faction Bonuses: Neutral
      </h2>
      <FactionCard faction={faction} />
    </div>
  );
};
