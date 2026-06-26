const TRAITS = [
  { name: 'Aura Farmer', cost: 1, effect: 'At Step 1.4 of Status Phase, spend an action to repose MSU in epic fashion. Enemy MSUs with LOS suffer -1 to GS, BR, and PS. This MSU cannot use Movement action this round.' },
  { name: 'Back Stabber', cost: 1, effect: 'Melee attacks against MSU rear arcs inflict one additional hit location.' },
  { name: 'Boost Assault', cost: 2, effect: 'When this MSU consumes 3 FRO to BOOST[X], this Pilot gains +1 Brawl and Piloting.' },
  { name: 'Boost Junkie', cost: 2, effect: 'When this MSU consumes 3 FRO to BOOST[X], this Pilot gains +1 Gunnery and Piloting.' },
  { name: 'Brawler', cost: 2, effect: 'Gain +1 to Brawl (Stackable).' },
  { name: 'Captain', cost: 1, effect: 'Perform one Commander Action for free. Limited 1 per Fireteam, limited to Fireteam commander.' },
  { name: 'CQ Specialist', cost: 2, effect: 'When targeting MSU within 12", you may reroll 1 hit roll per turn.' },
  { name: 'Cross Discipline', cost: 1, effect: "When obtaining faction bonuses, you may exchange one subfaction bonus for another subfaction's. You may not exchange for a faction bonus that gives a free trait." },
  { name: 'Duelist', cost: 2, effect: 'If no friendly MSU within 12" of this MSU, you may reroll 1 hit roll per turn.' },
  { name: 'Efficiency Engineer', cost: 1, effect: 'All passive FRO costs are reduced to a minimum of 1.' },
  { name: 'Enduring Will', cost: 1, effect: 'First time a leg is destroyed, do not receive KNOCKDOWN State. CRIPPLED state reduces base movespeed by 2 instead of half.' },
  { name: 'Executioner', cost: 2, effect: 'Make a single ROF 1 melee attack at -2 penalty. If successful, hit location is automatically a double 1 (Torso Hit).' },
  { name: 'Explosive Pro', cost: 2, effect: 'Direct hits with the AOE keyword now do AOE[X] damage to three hit locations.' },
  { name: 'Eyes on You', cost: 1, effect: 'Once per battle round, use a free reaction to immediately rotate 360°.' },
  { name: 'Fearless', cost: 2, effect: 'This Pilot can never be affected by Fear/Shaken.' },
  { name: 'Generous', cost: 1, effect: 'Any base equipment of this MSU may be given for free to another friendly MSU within the fireteam.' },
  { name: 'Grenadier God', cost: 1, effect: 'MUNITIONS for grenades and grenade launchers gain AOE[6]. High Explosive Munitions are now AOE[9].' },
  { name: 'Guerilla Ops', cost: 1, effect: 'If this MSU is standing in OBSCURING COVER, incoming ranged attacks suffer a -1 penalty.' },
  { name: 'Gunnery', cost: 2, effect: 'Increase Gunnery by 1 (Stackable).' },
  { name: 'Heavy Weapons Specialist', cost: 1, effect: '[HEAVY] weapons gain Akimbo. [HEAVY] Ranged weapons gain the Precision keyword if the MSU stood still and did not rotate.' },
  { name: 'Juke', cost: 2, effect: 'Once per battle round, perform a reaction to reroll one of your EVASION dice if you have LOS to the attack.' },
  { name: 'Kinetic Force', cost: 1, effect: 'When moving over 21 inches, all non-beam melee attacks gain +2 base damage.' },
  { name: 'Lucky Cat', cost: 3, effect: 'You have a pet cat. Pet the cat before missions. Roll 3d3. The result is how many dice this Pilot can reroll once per game.' },
  { name: 'Measured Trigger', cost: 1, effect: 'Replace the FULL AUTO weapon keyword with BURST[3] keyword.' },
  { name: 'Mechanic', cost: 1, effect: 'Increase the equipment tonnage limit by 4 OR increase FRO by 2.' },
  { name: 'Momentum Specialist', cost: 1, effect: 'When this MSU consumes 3 FRO to BOOST[X], increase melee attack dice from 1d6 to 2d3 + 1 Trait Mod.' },
  { name: 'Newtype', cost: 4, effect: 'Increase two different base pilot stats by 1. Gain access to Newtype upgrade traits.' },
  { name: 'Opportunistic', cost: 1, effect: 'Attacks made by this Pilot against enemy MSUs with lower initiative may reroll 1 attack dice.' },
  { name: 'OYW Veteran', cost: 1, effect: 'Increase MS Credit allotment by 75 points.' },
  { name: 'Patient', cost: 1, effect: 'This Pilot can reduce its own initiative result to 0 at the start of movement phase.' },
  { name: 'Piloting', cost: 2, effect: 'Increase Piloting by 1 (Stackable).' },
  { name: 'Pugilist', cost: 1, effect: 'Melee attacks made with Hands or Gauntlets gain +1 Trait Bonus to hit, and +1 ROF.' },
  { name: 'Quick Hands', cost: 1, effect: 'All [LIGHT] or [MEDIUM] weapons gain Quick Swap trait.' },
  { name: 'Rambo', cost: 1, effect: "When wielding two weapons (one in each MSU hand), increase Gunnery or Brawl by 1." },
  { name: 'Reactive', cost: 2, effect: 'In Reactive Fire actions, you may reroll up to X Attack dice equal to PS mod.' },
  { name: 'Rookie', cost: 1, effect: 'Base Gunnery, Brawl, Piloting to 0. Limited Use [1]: Ignore hit location of one enemy attack.' },
  { name: 'Saboteur', cost: 1, effect: 'At game start, choose an enemy pilot to roll a PS 5 check. If failed, choose one penalty: Increase all Passive FRO cost by 1; Remove a support equipment with Weapon location; Reduce movespeed by 1 and FRO Limit by 1.' },
  { name: 'Scavenger', cost: 1, effect: "Reduce one Support Equipment's cost by 50% MSU Credits." },
  { name: 'Serial Killer', cost: 1, effect: 'For each MSU destroyed by this Pilot, gain +1 Gunnery or Brawl.' },
  { name: 'Sharpshooter', cost: 2, effect: 'You may reduce negative range mod penalties to a minimum of 0.' },
  { name: 'Shield Specialist', cost: 1, effect: 'Shields gain +5 Armor. Shields reduce tonnage by 1. Shields gain: ROF 1, Range 0–4(12), MOD +2, DAM 10, Keywords: Impact[2].' },
  { name: 'Six Shooter', cost: 1, effect: 'Whenever you SWAP to a pistol, that pistol gains +1 ROF and +1 hit mod.' },
  { name: 'Suppressive Tactics', cost: 1, effect: 'Enemy MSUs suppressed by this Pilot reduce base movespeed by 2.' },
  { name: 'Trash Talker', cost: 1, effect: 'At Step 1.4 of Status Phase, spend an action to trash talk. ALL enemy pilots within 24" must make a PS 5 check or suffer -1 to Gunnery and Brawl.' },
  { name: 'Tricky', cost: 1, effect: 'After rolling initiative but before rerolling ties, adjust pilot initiative result by +2 or -2.' },
  { name: 'Vindictive', cost: 1, effect: "This Pilot gains +1 Brawl and +1 Gunnery against the enemy MSU who last damaged this Pilot's MSU." },
  { name: 'Wolf Pack', cost: 2, effect: 'If 1 friendly MSU within 8": reroll 1 hit roll per round. If 2 friendly MSUs within 8": reroll 1 evasion roll per round. If 3+ friendly MSUs within 8": gain +1 Piloting, +1 Brawl, +1 Gunnery.' },
];

export const Pilots = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.1 — Pilots</h2>

      <p className="lh-copy tj">
        In Flashpoint, each Mobile Suit Unit is piloted by a single Pilot. Pilots have five base
        statistics and a pool of Trait Points used to customize their skills and abilities.
      </p>

      <h3 className="f4 fw7 mt4 mb2">Base Statistics</h3>
      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-20">Stat</th>
              <th className="pa2 fw6 w-10">Abbrev.</th>
              <th className="pa2 fw6">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gunnery', 'GS', 'Hit modifier for Ranged attacks. Added to 1d6 roll when shooting.'],
              ['Brawl', 'BR', 'Hit modifier for Melee attacks. Added to 1d6 roll when in melee.'],
              ['Piloting', 'PS', 'Used for skill checks, initiative rolls, and evasion.'],
              ['Evasion', 'EVA', 'Number of d6 dice rolled when evading. Base value: 2.'],
              ['Trait Points', 'TP', 'Points available to spend on Traits. Typically 3–5 points.'],
            ].map(([stat, abbrev, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7">{stat}</td>
                <td className="pa2 dark-red fw6">{abbrev}</td>
                <td className="pa2 lh-copy">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Skill Checks</h3>
      <p className="lh-copy">
        Skill checks use Piloting (PS). Roll 1d6 and add your PS modifier. Meet or exceed the
        target number to succeed. Some checks may grant advantage (roll 2d6, take higher) or
        disadvantage (roll 2d6, take lower).
      </p>

      <h3 className="f4 fw7 mt4 mb2">Evasion</h3>
      <p className="lh-copy">
        When targeted by an attack, you may roll your Evasion (EVA) dice. Each die result of 4 or
        higher counts as one evasion success. Each success reduces the number of incoming hits by
        one. Evasion dice are reduced by terrain, states, and other modifiers.
      </p>

      <div className="overflow-auto mv3">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6">Condition</th>
              <th className="pa2 fw6">EVA Modifier</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Base EVA', '2 dice'],
              ['In Hard Cover', '+1 die'],
              ['In Obscuring Cover', '+1 die'],
              ['CROUCHED State', '+1 die'],
              ['SUPPRESSED State', '-1 die (min 0)'],
              ['CRIPPLED Arm', '-1 die'],
              ['KNOCKED DOWN', '0 dice (auto-hit)'],
            ].map(([cond, mod], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2">{cond}</td>
                <td className="pa2 fw6 dark-red">{mod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="f4 fw7 mt4 mb2">Traits</h3>
      <p className="lh-copy mb3">
        Each Pilot has a Trait Point (TP) budget, typically 3–5 points. Traits are purchased from
        the table below. Some traits are stackable and can be taken multiple times.
      </p>
      <div className="overflow-auto">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-20">Trait Name</th>
              <th className="pa2 fw6 w-10">TP Cost</th>
              <th className="pa2 fw6">Effect</th>
            </tr>
          </thead>
          <tbody>
            {TRAITS.map((t, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-near-white' : 'bg-white'}>
                <td className="pa2 fw7 dark-red">{t.name}</td>
                <td className="pa2 tc fw6">{t.cost}</td>
                <td className="pa2 lh-copy">{t.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
