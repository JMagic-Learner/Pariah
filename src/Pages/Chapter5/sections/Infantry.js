import {
  InfantryTable,
  InfantryWeaponsTable,
} from "../../../Components/Table/SupportUnitsTable";

export const Infantry = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.1 — Infantry</h2>

      <p className="lh-copy mb4">
        Infantry squads are represented by individual 28mm hex bases grouped
        into units. Each model in the squad is its own hit location with Armor 1
        — AOE and Napalm Munitions eliminate one hex base per successful hit.
      </p>

      <p className="lh-copy mb4">
        MSU's have a -1 to hit against Infantry Squads.
      </p>

      <p className="lh-copy mb4">
        Each Infantry Squad has 5 members, each equipped with all weapons listed
        in the Infantry Weapons table below. A player moves all squads within
        one unit activation, and shoot at the same time in the
        <span className="fw6 red"> [SHOOTING PHASE] </span>.
      </p>

      <p className="lh-copy mb4">
        Infantry squads can occupy any{" "}
        <span className="fw6 red"> [HARD COVER] </span> or building. By doing
        so, the infantry squad cannot be targeted directly by attacks, and do
        not suffer damage from AOE or Napalm attacks. The number of Infantry
        squads that can occupy a <span className="fw6 red"> [HARD COVER] </span>{" "}
        is 1 squad per 2 inches of height. If{" "}
        <span className="fw6 red"> [HARD COVER] </span> is destroyed, all
        Infantry units occupying that building are destoyed as well".
      </p>

      <h3 className="f4 fw7 mb2">Infantry Units</h3>
      <InfantryTable />

      <h3 className="f4 fw7 mt4 mb2">Infantry Weapons</h3>
      <InfantryWeaponsTable />

      <div className="pa3 bg-near-white ba b--black-10 mt4">
        <p className="ma0 lh-copy">
          <strong>Note:</strong> AOE and Napalm Munitions wipe out one hex base
          per successful hit. Infantry cannot benefit from Hard Cover unless the
          terrain physically conceals their hex bases.
        </p>
      </div>
    </div>
  );
};
