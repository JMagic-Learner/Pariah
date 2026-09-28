import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
const TERRAIN_TYPES = [
  {
    name: "HARD COVER",
    rules: [
      "MSU Hit Locations for RANGED attacks can be protected by HARD COVER.",
      "LOS cannot be drawn through HARD COVER if the MSU is 100% obscured.",
      "MSU must move around, or over HARD COVER. They cannot Move or Boost through.",
      "HARD COVER can be targeted by attacks, and have 10 Armor per inch of height.",
    ],
    examples: [
      "Buildings",
      "Large Shipping Containers",
      "Asteroids",
      "Rock walls",
      "Hills",
    ],
    note: "If a Building is tall enough to partially cover 50% of an MSU's legs, those MSU's hit locations are considered protected and cannot be assigned damage.",
  },
  {
    name: "OBSCURING COVER",
    rules: [
      "MSU Hit Locations cannot be protected by OBSCURING COVER.",
      "LOS cannot be drawn through OBSCURING COVER.",
      "LOS can be drawn into OBSCURING COVER. MSUs inside gain +1 EVASION.",
    ],
    examples: [
      "Forests",
      "Gas Clouds",
      "Smoke from Equipment and Munitions",
      "Blizzards",
      "High Altitude Clouds",
    ],
    note: null,
  },
  {
    name: "DIFFICULT TERRAIN",
    rules: [
      "MSUs that end movement on top of DIFFICULT TERRAIN take a -1 penalty to all skill checks (INCLUDING EVASION CHECKS).",
      "MSUs that move through difficult terrain take a -1 movement penalty.",
    ],
    examples: ["Rubble", "Rivers", "Space Wreckage", "Swamps"],
    note: null,
  },
];

export const Terrain = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">3.8 — Terrain and Cover</h2>

      <div className="bg-near-white ba b--black-10 pa3 mb4">
        <h3 className="f5 fw7 mb2">Hit Locations and Cover</h3>
        <p className={classNames("lh-copy mb2", { f7: isMobile })}>
          Gundam Flashpoint operates on a true line of sight basis.
        </p>
        <p className={classNames("lh-copy mb2 red b", { f7: isMobile })}>
          If the player gets down on the "eye to eye level" (aka behind the
          MSU's head) and cannot draw line of sight to any hit locations, those
          hit locations are considered protected.
        </p>
        <p className={classNames("lh-copy mb2", { f7: isMobile })}>
          For example, if a Zaku has his right leg and right arm covered by the
          side of a building, any hit locations of right arm / right leg made
          against that Zaku are considered nullified.
        </p>
        <p className={classNames("lh-copy", { f7: isMobile })}>
          If a Zaku is in the open field, but you can only see the side (aka
          right arm, right leg), those are the only two hit locations available
          to your ranged attacks.
        </p>
      </div>

      <div>
        {TERRAIN_TYPES.map((t, i) => (
          <div key={i} className="mb4 ba b--black-20">
            <div className="bg-dark-gray pv2 ph3">
              <h3 className="f4 fw7 white ma0">{t.name}</h3>
            </div>
            <div className="pa3">
              <ul className={classNames("lh-copy pl3 mb3", { f7: isMobile })}>
                {t.rules.map((rule, j) => (
                  <li key={j} className={classNames("pv1", { f7: isMobile })}>
                    {rule}
                  </li>
                ))}
              </ul>
              <p className={classNames("lh-copy mb2", { f7: isMobile, "f6": !isMobile })}>
                <strong>Examples:</strong> {t.examples.join(", ")}
              </p>
              {t.note && (
                <p
                  className={classNames("lh-copy i", {
                    f7: isMobile,
                    f6: !isMobile,
                  })}
                >
                  {t.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
