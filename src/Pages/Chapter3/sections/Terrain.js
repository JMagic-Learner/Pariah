const TERRAIN_TYPES = [
  {
    name: 'HARD COVER',
    color: 'bg-dark-gray',
    examples: 'Concrete walls, armored bunkers, wrecked mobile suits, reinforced buildings.',
    los: 'Blocks LOS when fully obscured. Partial cover grants +1 EVA die to the defender.',
    movement: 'Costs 2" extra movement to enter or cross.',
    defense: '+1 EVA die when the MSU is behind this terrain and not fully exposed.',
    notes: 'Deployable Shields grant Hard Cover when deployed. MSUs in Hard Cover can still be targeted if any part of the base is exposed.',
  },
  {
    name: 'OBSCURING COVER',
    color: 'bg-dark-green',
    examples: 'Smoke clouds, dense jungle, chaff fields, ruined structures with broken walls, Nanolaminate Chaff.',
    los: 'Partially blocks LOS. All ranged attacks through Obscuring Cover suffer −1 to hit. Missiles passing through are detonated.',
    movement: 'No movement penalty.',
    defense: '+1 EVA die to the defender. Guerilla Ops trait grants an additional −1 penalty to attackers.',
    notes: 'STEALTH MSUs inside Obscuring Cover cannot be targeted at all beyond 4". Smoke tokens placed via munitions count as Obscuring Cover.',
  },
  {
    name: 'DIFFICULT TERRAIN',
    color: 'bg-dark-red',
    examples: 'Rubble fields, swamps, deep craters, collapsed flooring, thick undergrowth.',
    los: 'Does not block LOS.',
    movement: 'All movement through Difficult Terrain costs double (halved move speed while in or crossing it).',
    defense: 'No EVA bonus.',
    notes: 'BOOST ignores Difficult Terrain movement penalties. Hover Platform support also ignores Difficult Terrain.',
  },
];

export const Terrain = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">3.8 — Terrain</h2>

      <p className="lh-copy mb3">
        Terrain represents the physical environment of the battlefield. All terrain must be
        classified and agreed upon before the game begins. Terrain falls into one of three types.
        A single piece of terrain may qualify as more than one type simultaneously (e.g., a ruined
        bunker could be both Hard Cover and Difficult Terrain to cross).
      </p>

      <div>
        {TERRAIN_TYPES.map((t, i) => (
          <div key={i} className="mb4 ba b--black-20">
            <div className={`${t.color} pv2 ph3`}>
              <h3 className="f4 fw7 white ma0">{t.name}</h3>
            </div>
            <div className="pa3">
              <p className="f6 lh-copy mb2">
                <strong>Examples:</strong> {t.examples}
              </p>
              <div className="overflow-auto">
                <table className="f6 w-100 collapse ba b--black-10">
                  <tbody>
                    <tr className="bb b--black-10">
                      <td className="pa2 fw7 w-25 bg-near-white">Line of Sight</td>
                      <td className="pa2 lh-copy">{t.los}</td>
                    </tr>
                    <tr className="bb b--black-10">
                      <td className="pa2 fw7 w-25 bg-near-white">Movement</td>
                      <td className="pa2 lh-copy">{t.movement}</td>
                    </tr>
                    <tr className="bb b--black-10">
                      <td className="pa2 fw7 w-25 bg-near-white">Defense Bonus</td>
                      <td className="pa2 lh-copy">{t.defense}</td>
                    </tr>
                    <tr>
                      <td className="pa2 fw7 w-25 bg-near-white">Notes</td>
                      <td className="pa2 lh-copy">{t.notes}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="f4 fw7 mt4 mb2">Terrain Setup Guidelines</h3>
      <ul className="lh-copy pl3">
        <li className="pv1">Each player places terrain alternately before deployment. Typically 6–10 pieces per side for a standard table (36"×36").</li>
        <li className="pv1">No terrain piece may be placed within 6" of a deployment zone.</li>
        <li className="pv1">Terrain pieces should be roughly equal in coverage (within 25% area).</li>
        <li className="pv1">At least 3 Hard Cover pieces and 2 Obscuring Cover pieces are recommended for balanced play.</li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">Destroying Terrain</h3>
      <p className="lh-copy">
        Players may agree before the game that terrain pieces can be destroyed. When an attack
        with AOE[X] detonates in or adjacent to a destroyable terrain piece, that piece is
        immediately converted to Difficult Terrain and loses its LOS-blocking or cover properties.
        Hard terrain (bunkers, reinforced walls) requires two such detonations to destroy.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Elevation</h3>
      <p className="lh-copy">
        Elevated terrain (buildings, hills, cliffs) grants a bonus to ranged attacks firing down
        at targets at a lower level: <strong>+1 GS</strong> when the attacker is more than 6"
        above the target. Targets behind terrain at a lower elevation do not benefit from that
        terrain's cover if the attacker has an unobstructed top-down LOS.
      </p>
    </div>
  );
};
