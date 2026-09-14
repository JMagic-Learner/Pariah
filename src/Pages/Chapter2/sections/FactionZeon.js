import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionZeon = () => {
  const faction = FACTIONS.find((f) => f.name === "Principality of ZEON");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.12.2 — Faction Bonuses: Principality of ZEON
      </h2>
      <FactionCard faction={faction} />
    </div>
  );
};
