import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const FinalStand = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">Mission 8 — Final Stand</h2>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <p className={classNames("i lh-copy ma0", { f7: isMobile })}>
          "At the end of the day, its only you vs the entire world."
        </p>
      </div>

      <div className="flex-ns mb4">
        <div className="w-50-ns pr3-ns">
          <h3 className="f4 fw7 mb2">Setup</h3>
          <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong>Table:</strong> 48"×72" recommended (large engagement)
            </li>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong>Defender :</strong> Deploys within 6" of one short edge
            </li>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong>Attacker:</strong> Deploys within 6" of the opposite short
              edge
            </li>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong>Hero:</strong> The Defender can only bring one MSU to the
              battle and no other support units. This MSU may purchase
              additional Actions for 175 MCU each. The [PILOT] of this MSU gains
              the following additional pilot traits for free without counting
              toward the pilot trait limit: Juke, Martyr, Fearless, Eyes on
              You!. This Pilot rolls two sets of initiative rolls each battle
              round, and can activate on each initiative.
            </li>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong>Rounds:</strong> 5
            </li>
          </ul>
        </div>
        <div className="w-50-ns pl3-ns">
          <h3 className="f4 fw7 mb2">Victory Conditions</h3>
          <ul className={classNames("lh-copy pl3 tj", { f7: isMobile })}>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong className="red">+1 VP</strong> — Defender: [PILOT]
              survives all 5 rounds
            </li>
            <li className={classNames("pv1", { f7: isMobile })}>
              <strong className="red">+1 VP</strong> — Attacker: Destroy the
              Defender's MSU
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
