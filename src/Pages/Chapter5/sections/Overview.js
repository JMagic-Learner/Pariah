export const SupportUnitsOverview = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">5.0 — Support Units Overview</h2>

      <p className="lh-copy mb3">
        Support Units represent the broader forces of the Universal Century
        battlefield — infantry squads, armored vehicles, transports, and air
        support. These units operate differently from Mobile Suits and can be
        fielded alongside your Fireteam to add tactical depth.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f4 fw7 mb2">General Rules</h3>
        <ul className="lh-copy pl3 mb0">
          <li className="pv1">
            Support units are represented by <strong>28mm hex bases</strong>.
          </li>
          <li className="pv1">
            Infantry can move in any direction. Tanks, transports, and jets
            follow the same movement restrictions as MSU.
          </li>
          <li className="pv1">
            Each individual unit (indicated by Unit Size) only has{" "}
            <strong>one hit location</strong>.
          </li>
          <li className="pv1">
            Support Units all have <strong>Initiative 0</strong>.
          </li>
          <li className="pv1">
            Their Gunnery, Piloting, and Brawl skills are all at{" "}
            <strong>0</strong>.
          </li>
          <li className="pv1">
            Instead of rolling hit locations against Support Units, each
            individual attack dice hits one hit location.
          </li>
          <li className="pv1">
            <strong>AOE and Napalm Munitions</strong> wipe out one hex base per
            successful hit.
          </li>
        </ul>
      </div>
    </div>
  );
};
