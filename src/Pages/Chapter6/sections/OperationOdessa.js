const RESTRICTED_UNITS = [
  {
    name: "RX-78 GP01 / RX-78 GP03",
    reason:
      "Gundam Development Project prototypes fielded later in the war, far from the African theater.",
  },
  {
    name: "FA-78 FULL ARMOR GUNDAM",
    reason: "A variant that was fielded primarily in the Thunderbolt sector",
  },
  {
    name: "MSN-02 Zeong",
    reason:
      "Char Aznable's personal flagship prototype, held in reserve for the defense of A Baoa Qu.",
  },
  {
    name: "MSN-01 Psycommu Zaku",
    reason:
      "An extremely limited Newtype test unit kept with Zeon's home fleet, never deployed to Earth.",
  },
  {
    name: "MS-18E Kampfer",
    reason:
      "Commissioned by the Delaz Fleet after the ceasefire — it does not exist yet during Odessa.",
  },
];

const WITHDRAWAL_MISSIONS = [
  {
    number: 1,
    title: "The Odessa Line",
    type: "Mission Type: Sector Control (Ch. 4, Mission 4)",
    text: "The Earth Federation's armored spearhead breaks through Zeon's fortified North African supply corridor. Zeon must hold as many objectives as possible to slow the advance.",
  },
  {
    number: 2,
    title: "Fighting Retreat",
    type: "Mission Type: Extraction (Ch. 4, Mission 5)",
    text: "With the line broken, Zeon withdraws its heavy assets across the Strait of Gibraltar as EFF armor closes in from the rear.",
  },
  {
    number: 3,
    title: "The Iberian Gauntlet",
    type: "Mission Type: Assault (Ch. 4, Mission 3)",
    text: "EFF forces push into mainland Europe. Zeon must hold a mountain corridor long enough for the last transports to escape north.",
  },
  {
    number: 4,
    title: "Collapse of the Line",
    type: "Mission Type: Final Stand (Ch. 4, Mission 8)",
    text: "The last organized Zeon defense in Europe falls. Survivors scatter into the countryside, and the African campaign is over — setting the stage for the final defense of A Baoa Qu.",
  },
];

export const OperationOdessa = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.5 — Operation Odessa</h2>

      <p className="lh-copy tj mb4">
        Operation Odessa was the Earth Federation Space Force's turning-point
        offensive of the One Year War — a combined-arms counterattack that broke
        Zeon's grip on the resource-rich supply lines of North Africa. This
        Campaign Battle series lets a Fireteam relive that collapse, playing
        either side of a grinding, multi-stage withdrawal as Zeon's African
        campaign folds and its forces are driven back into Europe.
      </p>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">MSU Restrictions</h3>
        <p className="lh-copy f6 mb0">
          Only MSU entries dated <strong>0079</strong> on the Force List may be
          fielded for this Campaign. This restriction represents the state of
          mobile suit technology at the time of the operation — later refits,
          TITANS-era units, and Neo Zeon designs are not yet in service.
        </p>
      </div>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Restricted Unit List</h3>
        <p className="lh-copy f6 mb3">
          Even among 0079-dated MSU, the following units are considered too
          rare, too experimental, or otherwise out of theater to appear in
          Operation Odessa. They cannot be fielded by either side for the
          duration of this Campaign:
        </p>
        <ul className="lh-copy pl3 f6 ma0">
          {RESTRICTED_UNITS.map((unit, i) => (
            <li key={i} className="pv1">
              <span className="fw7 red">{unit.name}</span> — {unit.reason}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="f3 fw7 mb3">The Withdrawal Track</h3>
      <p className="lh-copy tj mb3">
        Operation Odessa is played as a series of four linked Campaign Battles,
        tracking Zeon's gradual retreat out of North Africa and into Europe.
        Results carry forward: the further Zeon is pushed, the harder the next
        battle becomes.
      </p>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Tracking the Withdrawal</h3>
        <ul className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            The Withdrawal Track begins at <strong>0</strong> before Mission 1.
          </li>
          <li className="pv1">
            If the Earth Federation wins a mission, advance the Track by{" "}
            <strong>+1</strong> (maximum 3).
          </li>
          <li className="pv1">
            If Zeon wins a mission, reduce the Track by <strong>-1</strong>{" "}
            (minimum 0).
          </li>
          <li className="pv1">
            At the start of Missions 2–4, reduce Zeon's deployment zone by{" "}
            <strong>4 inches per Track point</strong>, and the Earth Federation
            gains <strong>1 additional Support Unit</strong> (Chapter 5) per
            Track point.
          </li>
          <li className="pv1">
            If the Track reaches <strong>3</strong>, Zeon also fields one fewer
            MSU for the remainder of the series, representing accumulated
            attrition.
          </li>
        </ul>
      </div>

      <h3 className="f3 fw7 mb3">Mission Series</h3>
      {WITHDRAWAL_MISSIONS.map((mission, i) => (
        <div key={i} className="mb3 ba b--black-20">
          <div className="bg-dark-red pv2 ph3">
            <h4 className="f4 fw7 white ma0">
              Mission {mission.number}: {mission.title}
            </h4>
          </div>
          <div className="pa3">
            <p className="f7 fw6 gray ma0 mb2">{mission.type}</p>
            <p className="lh-copy f6 ma0">{mission.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
