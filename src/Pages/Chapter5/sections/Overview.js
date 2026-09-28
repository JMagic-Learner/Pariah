import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const SupportUnitsOverview = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.0 — Support Units Overview</h2>

      <p className={classNames("lh-copy mb3", { f7: isMobile })}>
        Support Units represent the broader forces of the Universal Century
        battlefield — infantry squads, armored vehicles, transports, and air
        support. These units operate differently from Mobile Suits and can be
        fielded alongside your Fireteam to add tactical depth.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f4 fw7 mb2">General Rules</h3>
        <ul className={classNames("lh-copy pl3 mb0", { f7: isMobile })}>
          <li className={classNames("pv1", { f7: isMobile })}>
            Support units are represented by <strong>28mm hex bases</strong> and
            have 2 actions each.
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            Infantry can move in any direction. Ground Vehicles and Aircraft
            follow the same movement restrictions as MSU.
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            Each individual unit (indicated by Unit Size) only has{" "}
            <strong>
              one hit location and two actions. Support Units may make Advance
              actions, Melee Attacks, and Ranged Attacks, Simultaneous Attacks,
              but may not have any BOOST interaction or make Reactive Attacks
            </strong>
            .
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            Support Units all have <strong>Initiative 0</strong>. If both
            players have Support Units, players alternate activations starting
            with the player with the most Support Units.
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            Their Gunnery, Piloting, and Brawl skills are all at{" "}
            <strong>0</strong>.
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            Instead of rolling hit locations against Support Units, each
            individual attack dice hits one hit location.
          </li>
          <li className={classNames("pv1", { f7: isMobile })}>
            <strong>AOE and Napalm Munitions</strong> wipe out one hex base per
            successful hit.
          </li>
        </ul>
      </div>
    </div>
  );
};
