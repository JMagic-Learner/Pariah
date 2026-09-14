import { FACTIONS } from "../../../Data/FactionsArray";
import { FactionCard } from "../../../Components/FactionCard";

export const FactionReZeon = () => {
  const faction = FACTIONS.find((f) => f.name === "ReZeon");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.12.5 — Faction Bonuses: ReZeon
      </h2>
      <FactionCard faction={faction} />
    </div>
  );
};
