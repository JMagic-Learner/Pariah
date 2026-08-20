const RECRUIT_ORIGINS = [
  {
    roll: 1,
    name: "Academy Washout",
    text: "Reduce one stat of Gunnery, Brawl, or Piloting (player's choice) by 1, to a minimum of 0. This Pilot gains 1 additional Trait Point.",
  },
  {
    roll: 2,
    name: "Militia Volunteer",
    text: "This recruit begins with the Freelancer pilot trait for free.",
  },
  {
    roll: 3,
    name: "Transferred Officer",
    text: "This recruit gains the Cross Discipline trait. If the Fireteam has no other [COMMANDER], this Pilot may take the [COMMANDER] keyword",
  },
  {
    roll: 4,
    name: "Conscript",
    text: "This recruit obtains the Rookie pilot trait.",
  },
  {
    roll: 5,
    name: "Veteran Reservist",
    text: "Increase one stat of Gunnery, Brawl, or Piloting (player's choice) by 1.",
  },
  {
    roll: 6,
    name: "Newtype Candidate",
    text: "This recruit may purchase the Newtype / Cyber-Newtype pilot trait for 1 trait point less.",
  },
];

export const CampaignPilots = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.2 — Campaign Pilots</h2>

      <p className="lh-copy tj mb4">
        Whenever a <span className="fw6 red"> [PILOT]</span> is Killed in Action
        (see the Pilot Fate Table, Section 6.3), or a player begins a Campaign
        without a <span className="fw6 red"> [PILOT]</span> of their own, they
        must generate a Replacement Recruit before their next Campaign Battle.
      </p>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Generating a Recruit</h3>
        <p className="lh-copy f6 mb0">
          A Replacement Recruit begins with the normal 250 MCU and 5 Trait
          Points, as described in Section 2.1, modified by the result rolled
          below. Roll 1d6 on the Recruit Origin table and apply the result.
        </p>
      </div>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Starting From Zero</h3>
        <p className="lh-copy f6 mb0">
          A Replacement Recruit always begins with 0 EXP and 0 Accolades,
          regardless of how much the fallen{" "}
          <span className="fw6 red"> [PILOT]</span> had accumulated. Accolades
          are earned, not inherited — see Section 6.4.
        </p>
      </div>

      <h3 className="f3 fw7 mb3">Recruit Origin Table</h3>
      <div className="overflow-auto">
        <table className="f6 w-100" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">1d6</th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Origin</th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Effect</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {RECRUIT_ORIGINS.map((origin, i) => (
              <tr key={i}>
                <td className="pv3 pr3 bb b--black-20 fw6 tc">{origin.roll}</td>
                <td className="pv3 pr3 bb b--black-20 fw6">{origin.name}</td>
                <td className="pv3 pr3 bb b--black-20">{origin.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
