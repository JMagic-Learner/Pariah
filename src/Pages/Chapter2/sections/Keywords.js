const KEYWORDS = [
  { name: 'Akimbo', desc: 'This weapon can be used in the off-hand alongside another Akimbo weapon. Both weapons fire simultaneously using the same action at -1 to hit.' },
  { name: 'AOE[X]', desc: 'On a direct hit, all MSUs within X inches of the target also suffer a hit at reduced damage (half DAM). Place an AOE template centered on impact point.' },
  { name: 'AP[X]', desc: 'Armor Piercing. Reduce the target\'s Armor by X before applying damage (minimum 0).' },
  { name: 'Brace', desc: 'This weapon requires both hands to fire and must be braced before shooting. The wielder cannot move in the same activation unless using Boost.' },
  { name: 'Burst[X]', desc: 'Instead of rolling all ROF dice, fire a controlled burst of X dice at +1 to hit. You may not use Full Auto and Burst simultaneously.' },
  { name: 'Cleave', desc: 'On a successful melee attack, roll an additional melee hit targeting a different hit location. This additional hit does not generate further Cleave hits.' },
  { name: 'Cluster', desc: 'All hits from this weapon target the same hit location instead of separate locations.' },
  { name: 'Counterstrike', desc: 'When an enemy makes a melee attack against you, you may immediately make one melee attack against them with this weapon as a free reaction.' },
  { name: 'Full Auto', desc: 'Fire all ROF dice but incur a -2 to hit modifier. Cannot be used while moving (unless the BOOST action is used and the weapon has Burst).' },
  { name: 'Grip', desc: 'Requires two hands (or one hand + Brace). Reduces negative range penalties by 1.' },
  { name: 'Guided', desc: 'This weapon homes in on marked targets. Ignore all range penalties. If target has been Marked this round, add +2 to hit.' },
  { name: 'Impact[X]', desc: 'On a successful hit, push the target X inches directly away from the attacker. If impact causes a collision with terrain, the target suffers additional damage.' },
  { name: 'Indirect', desc: 'This weapon can fire over terrain and at targets not in LOS. Attacks made indirectly suffer -2 to hit.' },
  { name: 'Inbuilt', desc: 'This weapon is physically integrated into the MSU frame. It does not occupy a hand slot and cannot be dropped or stolen.' },
  { name: 'Lethal', desc: 'Hits with this weapon reduce the target\'s maximum armor at the hit location by 2 permanently (marked on the MSU sheet).' },
  { name: 'Limited Use[X]', desc: 'This weapon can only be fired X times per game. Track usage on the MSU sheet.' },
  { name: 'MISSILE[X]', desc: 'The missile travels in a straight line up to X inches. Place a MISSILE token when fired; it moves X inches per round toward the target until impact or miss.' },
  { name: 'Mountable', desc: 'This weapon can be equipped to a Hardpoint instead of occupying a hand slot. Requires a Hardpoint support upgrade.' },
  { name: 'Precise', desc: 'On a hit, you may choose which hit location is struck rather than rolling on the Hit Location table.' },
  { name: 'Psycommu System', desc: 'Requires the NEWTYPE or CYBER-NEWTYPE pilot trait to use. Weapons with this keyword are controlled remotely; they do not occupy a hand slot.' },
  { name: 'Quick Draw', desc: 'Swapping to or from this weapon is a free action (does not consume a SWAP action).' },
  { name: 'Quick Swap', desc: 'Switching to this weapon only costs a Minor Action rather than a standard SWAP action.' },
  { name: 'Scope', desc: 'Reduce Long range penalties by 1. Additionally, if the wielder did not move this round, reduce Medium range penalty by 1 as well.' },
  { name: 'Slow Reload', desc: 'After firing this weapon, it cannot be fired again until the wielder spends one full activation reloading (no other actions that activation).' },
  { name: 'Suppressive', desc: 'On a hit or miss, the target gains the SUPPRESSED state (see Section 3.6). SUPPRESSED reduces their movement by half and imposes -1 EVA.' },
  { name: 'Throw', desc: 'This weapon can be thrown as a ranged attack using the Gunnery stat. Range band is (Close) only. After throwing, the weapon is lost.' },
];

export const Keywords = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.9 — Keywords</h2>
      <p className="lh-copy mb4">
        Keywords appear on weapons and support systems to define special rules. When a rule
        conflicts with a keyword, the keyword takes precedence. Keywords marked with{' '}
        <strong>[X]</strong> include a numeric value that scales the effect.
      </p>
      <div className="overflow-auto">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-20">Keyword</th>
              <th className="pa2 fw6">Effect</th>
            </tr>
          </thead>
          <tbody>
            {KEYWORDS.map((kw, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red">{kw.name}</td>
                <td className="pa2 lh-copy">{kw.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
