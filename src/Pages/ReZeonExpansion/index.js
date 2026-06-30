import { useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { ReZeonFactionBonuses } from "./sections/FactionBonuses";
import { ReZeonPilotTraits } from "./sections/PilotTraits";

const SECTIONS = [
  {
    id: "faction-bonuses",
    title: "Faction Bonuses",
    Component: ReZeonFactionBonuses,
  },
  { id: "pilot-traits", title: "Pilot Traits", Component: ReZeonPilotTraits },
];

export const ReZeonExpansion = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [activeSectionId, setActiveSectionId] = useState("faction-bonuses");

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId);
  const ActiveComponent = activeSection?.Component;

  return (
    <div className={classNames({ flex: !isMobile })}>
      <div
        className={classNames({
          "w-25 br b--black-10 bg-near-white": !isMobile,
          "w-100": isMobile,
        })}
        style={!isMobile ? { minHeight: "100vh" } : {}}
      >
        {isMobile ? (
          <select
            className="w-100 pa2 f6 ba b--black-20 bg-white"
            value={activeSectionId}
            onChange={(e) => setActiveSectionId(e.target.value)}
          >
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        ) : (
          <div>
            <div className="pv3 ph3 bg-dark-orange">
              <p className="f6 white fw7 ma0 ttu tracked">ReZeon Expansion</p>
            </div>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={classNames(
                  "db w-100 tl pv2 ph3 bn pointer f6 bb b--black-10 lh-copy",
                  {
                    "bg-orange white fw7": activeSectionId === s.id,
                    "bg-near-white dark-gray": activeSectionId !== s.id,
                  },
                )}
                onClick={() => setActiveSectionId(s.id)}
              >
                {s.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={classNames("pa3 pa4-ns overflow-auto", {
          "w-75": !isMobile,
          "w-100": isMobile,
        })}
      >
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};
