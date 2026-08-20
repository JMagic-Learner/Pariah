const PILOT_FATE_TABLE = [
  {
    roll: "1",
    name: "Killed in Action",
    text: "The Pilot is permanently removed from the Campaign roster. All accumulated Accolades are lost. The controlling player must generate a Replacement Recruit before their next Campaign Battle (see Section 6.2).",
  },
  {
    roll: "2 – 3",
    name: "Critically Wounded",
    text: "The Pilot survives but is hospitalized. This Pilot cannot be fielded in the next Campaign Battle. All EXP and Accolades are retained.",
  },
  {
    roll: "4 – 5",
    name: "Shaken",
    text: "The Pilot survives with a story to tell. During their next Campaign Battle, this Pilot begins the game already in [FEAR/SHAKEN] state.",
  },
  {
    roll: "6",
    name: "Miraculous Escape",
    text: "The Pilot escapes with barely a scratch. Gain +1 bonus EXP immediately for the harrowing tale.",
  },
];

export const PilotDeath = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.3 — Pilot Death</h2>

      <p className="lh-copy tj mb4">
        This section details what happens when a{" "}
        <span className="fw6 red"> [PILOT]</span> is incapacitated or otherwise
        killed in action during a Campaign Battle. These rules only apply to
        Campaign play — in standard games, a destroyed MSU has no further
        consequence beyond the mission at hand.
      </p>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Trigger</h3>
        <p className="lh-copy f6 mb0">
          Whenever a <span className="fw6 red"> [PILOT]</span>'s MSU torso hit
          locations destroyed, or otherwise suffers a{" "}
          <span className="fw6 red"> [REACTOR CRITICAL] </span>
          explosion, immediately roll 1d6 on the Pilot Fate Table below.
        </p>
      </div>

      <h3 className="f3 fw7 mb3">Pilot Fate Table</h3>
      <div className="overflow-auto">
        <table className="f6 w-100" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">1d6</th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Result</th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">Effect</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {PILOT_FATE_TABLE.map((row, i) => (
              <tr key={i}>
                <td className="pv3 pr3 bb b--black-20 fw6 tc">{row.roll}</td>
                <td className="pv3 pr3 bb b--black-20 fw6">{row.name}</td>
                <td className="pv3 pr3 bb b--black-20">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt4 pa3 bg-near-white ba b--black-10">
        <p className="ma0 lh-copy f6">
          <strong>Note:</strong> This roll cannot be modified by pilot traits or
          support equipment unless a Pilot Accolade (Section 6.4) explicitly
          states otherwise.
        </p>
      </div>
    </div>
  );
};
