const STATES = [
  {
    name: 'SUPPRESSED',
    color: 'bg-gold',
    icon: '⬇',
    applied: 'When hit by a weapon with the Suppressive keyword, or when a Suppressive weapon fires at the MSU (hit or miss).',
    effect: 'Movement halved (rounded down to nearest inch). −1 EVA die (minimum 0). Cannot use Aim action.',
    removed: 'Automatically removed at Step 0.1 of Status Phase.',
  },
  {
    name: 'CROUCHED',
    color: 'bg-green',
    icon: '⬊',
    applied: 'When the MSU uses the Seek Cover action, or via the Hover Platform support (which prevents this state).',
    effect: '+1 EVA die. Cannot move during this round unless spending all EVA bonus to stand (lose the bonus). Cannot perform ranged attacks unless weapon is Mounted.',
    removed: 'Voluntarily ended at the start of the MSU\'s activation. Automatically ended if the MSU moves.',
  },
  {
    name: 'KNOCKDOWN',
    color: 'bg-dark-red',
    icon: '✕',
    applied: 'When both Leg hit locations reach 0 HP. Also when an MSU collides with terrain from a height of 12" or greater.',
    effect: 'MSU is prone. All incoming attacks auto-hit (no EVA dice rolled). Cannot take any actions. Weapons Arm and Leg attacks deal double damage.',
    removed: 'At Step 0.4 of Status Phase, make a PS 5 check. Success: stand up, remove KNOCKDOWN. Failure: remain KNOCKED DOWN for another round.',
  },
  {
    name: 'CRIPPLED',
    color: 'bg-dark-orange',
    icon: '⚠',
    applied: 'When a specific hit location (Arm or Leg) reaches 0 HP.',
    effect: 'CRIPPLED Arm: all weapons in that arm cannot be used. CRIPPLED Leg: Move halved (or −2" with Enduring Will trait). Both legs CRIPPLED: MSU gains KNOCKDOWN state.',
    removed: 'Permanent for the rest of the game (unless a support system or trait specifies otherwise).',
  },
  {
    name: 'STEALTH',
    color: 'bg-near-black',
    icon: '◈',
    applied: 'When the MSU has a Stealth System equipped and moves less than 8" in the Movement Phase.',
    effect: 'Cannot be targeted by ranged attacks from MSUs more than 4" away. STEALTH is not a "hidden" state — opponents know the general location, but cannot draw precise LOS.',
    removed: 'Removed at Step 0.3 of Status Phase if the MSU fired any weapon last round. Removed immediately if the MSU fires or is moved into base contact.',
  },
  {
    name: 'SHAKEN',
    color: 'bg-purple',
    icon: '~',
    applied: 'When an enemy MSU is destroyed within 12". When the Fireteam Commander is destroyed (all nearby MSU make PS 5 check). Via the Trash Talker trait.',
    effect: '−1 GS and −1 BR for the current round only.',
    removed: 'Automatically removed at the end of the round. Can also be removed by RALLY action.',
  },
];

export const States = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.6 — States</h2>

      <p className="lh-copy mb4">
        States are condition tokens placed on an MSU to track ongoing effects. An MSU may have
        multiple states simultaneously. States stack only where explicitly noted. Resolve all
        active states at the start of the Status Phase unless the state specifies otherwise.
      </p>

      <div>
        {STATES.map((state, i) => (
          <div key={i} className="mb4 ba b--black-20">
            <div className={`${state.color} pv2 ph3 flex items-center`}>
              <span className="f3 white mr2">{state.icon}</span>
              <h3 className="f4 fw7 white ma0">{state.name}</h3>
            </div>
            <div className="pa3">
              <div className="overflow-auto">
                <table className="f6 w-100 collapse">
                  <tbody>
                    <tr className="bb b--black-10">
                      <td className="pa2 fw7 w-20 bg-near-white">Applied When</td>
                      <td className="pa2 lh-copy">{state.applied}</td>
                    </tr>
                    <tr className="bb b--black-10">
                      <td className="pa2 fw7 w-20 bg-near-white">Effect</td>
                      <td className="pa2 lh-copy">{state.effect}</td>
                    </tr>
                    <tr>
                      <td className="pa2 fw7 w-20 bg-near-white">Removed</td>
                      <td className="pa2 lh-copy">{state.removed}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="f4 fw7 mt4 mb2">RALLY Action</h3>
      <p className="lh-copy">
        Any MSU may spend one action in the Command Phase to RALLY a nearby friendly MSU within
        12". RALLY removes the SHAKEN state from the target. The Fireteam Commander may perform
        RALLY as a free action with Command Protocol equipped. The Captain trait allows one free
        Commander Action (which can be used for RALLY) per round.
      </p>
    </div>
  );
};
