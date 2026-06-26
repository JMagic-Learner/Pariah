import { NewtypeUpgradesTable } from "../../../Components/Table/NewtypeUpgradesTable";

export const NewtypeUpgrades = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3 tj">2.9 Newtype Upgrades</h2>
      <p className="lh-copy tj mb2">
        Newtype Upgrades are exclusive enhancements available only to pilots
        with the <strong>NEWTYPE</strong> or <strong>CYBER-NEWTYPE</strong>{" "}
        pilot traits. These upgrades represent the expanded capabilities of
        enhanced pilots, from psychic foresight to remote weapons control.
      </p>
      <ul className="lh-copy mb4 pl4">
        <li className="lh-copy tj">
          Only available for pilots who have taken the NEWTYPE or CYBER-NEWTYPE
          pilot trait.
        </li>
        <li className="lh-copy tj">
          Each Newtype Upgrade is <strong>unique in Force</strong> — a Force
          with multiple Newtypes cannot assign the same upgrade to more than one
          pilot.
        </li>
        <li className="lh-copy tj">
          A pilot can only have one Newtype upgrade at a time.
        </li>
      </ul>
      <div className="mt4">
        <h3 className="f3 fw7 mb3 bb pb2">Psycommu Bits — Rules</h3>
        <ul className="lh-copy pl4">
          <li className="lh-copy tj">
            Bits are deployed at the start of the game, in base contact with the
            controlling MSU.
          </li>
          <li className="lh-copy tj">
            Bits are repositioned at the end of the controller's movement,
            within 12 inches. They do not move on their own and receive only 1d6
            for evasion.
          </li>
          <li className="lh-copy tj">
            Bits can be targeted by enemy attacks. Attacks against Bits suffer a
            –1 hit penalty (small target).
          </li>
          <li className="lh-copy tj">
            <strong>Beam Bits:</strong> During the Shooting Phase, the
            controlling pilot may direct Beam Bits to attack an enemy MSU, using{" "}
            <strong>PS instead of GS</strong>. These attacks do not count as
            [SIMULTAENOUS ATTACKS].
          </li>
          <li className="lh-copy tj">
            <strong>Shield Bits &amp; Inhibitor Bits:</strong> Can intercept
            missiles and physically block enemy MSU movement.
          </li>
          <li className="lh-copy tj">
            <strong>Inhibitor Bits:</strong> Prevent enemy [NEWTYPE] pilots from
            using any Newtype Upgrade Traits or enemy Bits within{" "}
            <strong>18 inches</strong> of the Bit. Enemy Newtypes within{" "}
            <strong>12 inches</strong> of the Bit gain FEAR/SHAKEN.
          </li>
        </ul>
      </div>
      <NewtypeUpgradesTable />
    </div>
  );
};
