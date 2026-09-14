import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionCrossbone = () => {
  const faction = FACTIONS.find((f) => f.name === "CROSSBONE VANGUARD");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.12.4 — Faction Bonuses: Crossbone Vanguard
      </h2>
      <FactionCard faction={faction} />
    </div>
  );
};
