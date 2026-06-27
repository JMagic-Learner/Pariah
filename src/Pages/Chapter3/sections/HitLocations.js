const HIT_TABLE = [
  {
    roll: "2",
    location: "Torso",
    effect:
      "If Torso HP reaches 0, MSU is destroyed. See REACTOR CRITICAL rules in Section 2.2",
  },
  {
    roll: "3",
    location: "Left Arm",
    effect: "Damage applied to Left Arm. At 0 HP: Weapons and Equipment lost.",
  },
  {
    roll: "4",
    location: "Right Arm",
    effect: "Damage applied to Right Arm. At 0 HP: Weapons and Equipment lost",
  },
  {
    roll: "5",
    location: "Left Leg",
    effect:
      "Damage applied to Right Leg. At 0 HP, MSU gains KNOCKDOWN, CRIPPLIED status.",
  },
  {
    roll: "6",
    location: "Right Leg",
    effect:
      "Damage applied to Right Leg. At 0 HP, MSU gains KNOCKDOWN, CRIPPLED status.",
  },
  {
    roll: "7",
    location: "Left Arm",
    effect: "Damage applied to Left Arm. At 0 HP: Weapons and Equipment lost",
  },
  {
    roll: "8",
    location: "Right Arm",
    effect: "Damage applied to Right Arm. At 0 HP: Weapons and Equipment lost",
  },
  {
    roll: "9",
    location: "Left Leg",
    effect:
      "Damage applied to Left Leg. At 0 HP, MSU gains KNOCKDOWN, CRIPPLIED status.",
  },
  {
    roll: "10",
    location: "Right Leg",
    effect:
      "Damage applied to Right Leg. At 0 HP, MSU gains KNOCKDOWN, CRIPPLIED status.",
  },
  {
    roll: "11",
    location: "Head",
    effect:
      "Damage applied to Head. At 0 HP, lose weapons and equipment. MSU suffers from -1 Penalty to all Skill Checks",
  },
  {
    roll: "12",
    location: "Torso",
    effect:
      "If Torso HP reaches 0, MSU is destroyed. See REACTOR CRITICAL rules in Section 2.2",
  },
];

export const HitLocations = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.3 — Hit Locations</h2>

      <p className="lh-copy mb3">
        Each successful hit on an MSU requires rolling on the Hit Location table
        to determine which part of the Mobile Suit is struck. Roll 2d6 and
        consult the table below. Some weapons ([PRECISE] keyword) allow the
        attacker to choose the location instead of rolling.
      </p>

      <h3 className="f4 fw7 mt3 mb2">Hit Location Table (2d6)</h3>
      <div className="overflow-auto mv2">
        <table className="f6 w-100" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc w-10">
                2d6 Roll
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl w-25">
                Location
              </th>
              <th className="fw6 bb b--black-20 pb3 pr3 bg-white tl">
                Consequence
              </th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {HIT_TABLE.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pv2 pr3 bb b--black-20 tc fw7 dark-red f5">
                  {row.roll}
                </td>
                <td className="pv2 pr3 bb b--black-20 fw7">{row.location}</td>
                <td className="pv2 pr3 bb b--black-20 lh-copy">{row.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Applying Damage</h3>
      <ol className="lh-copy pl3">
        <li className="pv1">
          Roll 1d6 per ROF (1d6 + [GS/BR] + Mods) vs. enemy [PILOT] Evasion
          roll.
        </li>
        <li className="pv1">
          For each successful hit, roll 2d6 for the hit location.
        </li>
        <li className="pv1">
          Subtract remaining Armor by Damage amount. If Armor goes reachs 0 or
          below, that hit location is destroyed and any excess damage is
          transfered to the [TORSO]
        </li>
        <li className="pv1">
          If HP reaches 0, apply the location's consequence (CRIPPLED,
          destroyed, etc.).
        </li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Shields</h3>
      <p className="lh-copy">
        If an MSU has a Shield equipped, it may intercept hits (See Shield rules
        in Section 2.8 under Equipment effects). Declare the shield interception
        before rolling damage. The shield's Armor pool absorbs damage instead of
        the body location. If the shield's HP reaches 0, remaining damage
        carries over to the intended location.
      </p>
    </div>
  );
};
