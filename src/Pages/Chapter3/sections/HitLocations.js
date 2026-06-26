const HIT_TABLE = [
  {
    roll: "2",
    location: "Torso (Critical)",
    effect:
      "Double damage applied to Torso. If Torso HP reaches 0, MSU is destroyed.",
  },
  {
    roll: "3",
    location: "Right Leg",
    effect:
      "Damage applied to Right Leg. At 0 HP: CRIPPLED (Right Leg). Both legs destroyed: KNOCKDOWN.",
  },
  {
    roll: "4",
    location: "Left Leg",
    effect:
      "Damage applied to Left Leg. At 0 HP: CRIPPLED (Left Leg). Both legs destroyed: KNOCKDOWN.",
  },
  {
    roll: "5",
    location: "Right Arm",
    effect:
      "Damage applied to Right Arm. At 0 HP: CRIPPLED (Right Arm). Cannot use weapons held in that arm.",
  },
  {
    roll: "6",
    location: "Torso",
    effect: "Damage applied to Torso. At 0 HP: MSU is destroyed.",
  },
  {
    roll: "7",
    location: "Torso",
    effect: "Damage applied to Torso. At 0 HP: MSU is destroyed.",
  },
  {
    roll: "8",
    location: "Torso",
    effect: "Damage applied to Torso. At 0 HP: MSU is destroyed.",
  },
  {
    roll: "9",
    location: "Left Arm",
    effect:
      "Damage applied to Left Arm. At 0 HP: CRIPPLED (Left Arm). Cannot use weapons held in that arm.",
  },
  {
    roll: "10",
    location: "Right Leg",
    effect:
      "Damage applied to Right Leg. At 0 HP: CRIPPLED (Right Leg). Both legs destroyed: KNOCKDOWN.",
  },
  {
    roll: "11",
    location: "Left Leg",
    effect:
      "Damage applied to Left Leg. At 0 HP: CRIPPLED (Left Leg). Both legs destroyed: KNOCKDOWN.",
  },
  {
    roll: "12",
    location: "Head",
    effect:
      "Damage applied to Head. At 0 HP: Pilot loses 1 PS permanently. Head sensors destroyed: -1 GS for remainder of game.",
  },
];

const LOCATION_HP = [
  {
    location: "Head",
    baseArmor: 10,
    notes: "Lowest HP. Sensor destruction at 0.",
  },
  {
    location: "Right Arm",
    baseArmor: 15,
    notes: "Weapons in this arm disabled at 0.",
  },
  {
    location: "Left Arm",
    baseArmor: 15,
    notes: "Weapons in this arm disabled at 0.",
  },
  {
    location: "Right Leg",
    baseArmor: 20,
    notes: "CRIPPLED at 0. KNOCKDOWN if both legs reach 0.",
  },
  {
    location: "Left Leg",
    baseArmor: 20,
    notes: "CRIPPLED at 0. KNOCKDOWN if both legs reach 0.",
  },
  {
    location: "Torso",
    baseArmor: 30,
    notes: "MSU destroyed at 0. Double damage on roll of 2.",
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
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-10 tc">2d6 Roll</th>
              <th className="pa2 fw6 w-25">Location</th>
              <th className="pa2 fw6">Consequence</th>
            </tr>
          </thead>
          <tbody>
            {HIT_TABLE.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2 tc fw7 dark-red f5">{row.roll}</td>
                <td className="pa2 fw7">{row.location}</td>
                <td className="pa2 lh-copy">{row.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Hit Location Base Armor</h3>
      <p className="lh-copy mb2">
        Each hit location has its own Armor pool. Armor is subtracted from
        incoming damage before HP is reduced. Armor does not regen between
        rounds unless a support system provides regen. Armor can be increased
        per location via Extra Armor support upgrades.
      </p>
      <div className="overflow-auto mv2">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Location</th>
              <th className="pa2 fw6 tc">Base Armor</th>
              <th className="pa2 fw6">Notes</th>
            </tr>
          </thead>
          <tbody>
            {LOCATION_HP.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2 fw7">{row.location}</td>
                <td className="pa2 tc">{row.baseArmor}</td>
                <td className="pa2 lh-copy">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="f6 i lh-copy mt2">
        Note: Base Armor values shown are for a standard grunt-tier MSU.
        Higher-tier MSUs may have higher armor values configured during Force
        Creation.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Applying Damage</h3>
      <ol className="lh-copy pl3">
        <li className="pv1">
          Roll to hit (1d6 + GS or BR vs. target number, adjusted by EVA).
        </li>
        <li className="pv1">
          For each successful hit, roll 2d6 for the hit location (unless
          [PRECISE]).
        </li>
        <li className="pv1">
          Apply AP reduction to that location's Armor (Armor − AP[X], minimum
          0).
        </li>
        <li className="pv1">
          Subtract remaining Armor from DAM. If DAM exceeds 0, reduce that
          location's HP.
        </li>
        <li className="pv1">
          If HP reaches 0, apply the location's consequence (CRIPPLED,
          destroyed, etc.).
        </li>
      </ol>

      <h3 className="f4 fw7 mt4 mb2">Shields</h3>
      <p className="lh-copy">
        If an MSU has a Shield equipped, it may intercept hits to the Torso or
        the arm holding the shield. Declare the shield interception before
        rolling damage. The shield's Armor pool absorbs damage instead of the
        body location. If the shield's HP reaches 0, remaining damage carries
        over to the intended location.
      </p>
    </div>
  );
};
