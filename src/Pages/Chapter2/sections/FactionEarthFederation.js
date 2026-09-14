import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionEarthFederation = () => {
  const faction = FACTIONS.find((f) => f.name === "Earth Federation");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.12.1 — Faction Bonuses: Earth Federation
      </h2>
      <FactionCard faction={faction} />
    </div>
  );
};
