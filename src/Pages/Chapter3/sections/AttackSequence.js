export const AttackSequence = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">3.5 — Attack Sequence</h2>

      <p className="lh-copy mb4 tj">
        All attacks — whether in the Combat Phase or Shooting Phase — follow the
        same sequence. Each step must be resolved in order before proceeding.
        The defending <span className="fw6 red"> [PILOT]</span> rolls Evasion
        dice as a single pool compared against the attacker's full batch of
        attack dice.
      </p>

      {/* Attack Action */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 red mt0 mb1">
          <span className="fw6 red"> [ATTACK] </span>{" "}
          <span className="fw4 f5">[ACTION] [ATTACK PHASE / COMBAT PHASE]</span>
        </h3>
        <p className="lh-copy f6 mb2 tj">
          Choose one weapon that is currently{" "}
          <span className="fw6 red"> [READIED] </span>,{" "}
          <span className="fw6 red"> [INBUILT] </span>, or{" "}
          <span className="fw6 red"> [MOUNTED] </span>. Once declared, you
          cannot change weapon choice until the entire Attack sequence ends.
        </p>
        <ul className="lh-copy pl3 f6 ma0 tj">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> Check [LOS] to the enemy
            MSU and measure range from base to base. If LOS and eligible ranges
            are confirmed, proceed to Step 3. Otherwise the attack is invalid —
            do not continue.
          </li>
          <li className="pv1 ">
            <span className="fw6 red">Step 2:</span> If firing an [INDIRECT]
            weapon, you may skip the LOS requirement and continue to Step 3.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 3:</span> Check the ROF of the
            eligible weapon.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 4:</span> Roll a number of dice equal
            to the weapon's ROF. This is called a{" "}
            <span className="fw6 red">SET</span> or{" "}
            <span className="fw6 red">BATCH</span> of attack dice.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 5:</span> Add [GS] (ranged) or [BR]
            (melee), Range Mod, and any other relevant modifiers to each d6. The
            total of each die is its final attack result. The maximum total
            modifier cap is{" "}
            <span className="fw6 red">+4 after all penalties and bonuses.</span>
          </li>
          <li className="pv1">
            1d6 + [GS/BS] + [Weapon Mods] + [Situational Modifiers]
          </li>

          <li className="pv1">
            <span className="fw6 red">Step 6:</span> The target MSU rolls [x]d3
            according to the Evasion Tier Table and adds [PS] + any relevant
            modifiers. This is the{" "}
            <span className="fw6 red">Evasion Check total.</span>
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 7:</span> Compare the Evasion Check
            total against each die in the attacker's BATCH. For each attack die
            that <span className="fw6 red">exceeds</span> the Evasion Check, the
            attacker rolls 2d6 and assigns one hit location.
          </li>
        </ul>
      </div>

      {/* Simultaneous Attack */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3">
        <h3 className="f4 fw7 red mt0 mb1">
          [SIMULTANEOUS ATTACK]{" "}
          <span className="fw4 f5">[ACTION] [ATTACK PHASE / COMBAT PHASE]</span>
        </h3>
        <p className="lh-copy f6 mb2">
          Choose <span className="fw6 red">two weapons</span> that are currently
          <span className="fw6 red"> [READIED] </span>,{" "}
          <span className="fw6 red"> [INBUILT] </span>, or{" "}
          <span className="fw6 red"> [MOUNTED] </span>. Shooting two weapons
          simultaneously incurs a <span className="fw6 red">−2 penalty</span> to
          all attack dice unless a keyword (such as [AKIMBO]) states otherwise.
        </p>
        <ul className="lh-copy pl3 f6 ma0 tj">
          <li className="pv1">
            <span className="fw6 red">Step 1:</span> Choose two weapons. Once
            declared, you cannot change weapon choice until the entire Attack
            sequence ends.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 2:</span> Measure range to determine
            rangeband and range modifiers. Confirm [LOS] to the target.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 3:</span> For each weapon, roll 1d6
            per ROF and add [GS] (ranged) or [BR] (melee) + any mods. Apply the
            −2 simultaneous penalty to each die unless reduced by a keyword.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 4:</span> Each weapon generates its
            own separate BATCH of attack dice. The defender rolls one Evasion
            Check against both BATCHES.
          </li>
          <li className="pv1">
            <span className="fw6 red">Step 5:</span> For each attack die in each
            BATCH that exceeds the corresponding Evasion Check, roll 2d6 for one
            hit location.
          </li>
        </ul>
        <p className="lh-copy f7 mt2 mb0">
          Note: You may assign 1 attack die per individual target, including
          [MISSILE] tokens. <span className="fw6 red"> [MOUNTED] </span> weapons
          cannot be used in [SIMULTANEOUS ATTACK].
        </p>
      </div>

      {/* Worked Example */}
      <div className="bg-near-white ba b--black-10 br2 pa3 mb3 tj">
        <h3 className="f4 fw7 red mt0 mb2">Worked Example</h3>
        <p className="lh-copy f6 mb2 fw6">
          Single Weapon (<span className="fw6 red"> [ATTACK]</span>):
        </p>
        <p className="lh-copy f6 mb3">
          An attacker with a Kinetic Rifle (ROF 3) rolls three dice:{" "}
          <span className="fw6 red">4, 5, 7</span>. The defender rolls 2d3 +
          [PS] + mods for a total of <span className="fw6 red">6</span>. The
          attack values of <span className="fw6 red">4</span> and{" "}
          <span className="fw6 red">5</span> do not exceed 6 — those dice are
          negated. The attack die of <span className="fw6 red">7</span> exceeds
          6 and scores a hit. The attacker rolls 2d6 for one hit location and
          the defender marks down the appropriate damage.
        </p>
        <p className="lh-copy f6 mb2 fw6">
          Two Weapons ([SIMULTANEOUS ATTACK]):
        </p>
        <p className="lh-copy f6 mb0">
          An attacker fires two Kinetic Rifles simultaneously (ROF 3 each, −2
          penalty applied). Batch 1 results:{" "}
          <span className="fw6 red">4, 5, 7</span>. Batch 2 results:{" "}
          <span className="fw6 red">2, 8, 7</span>. The defender rolls a total
          of <span className="fw6 red">6</span> vs ALL ATTACK DICE{" "}
        </p>
        <p className="lh-copy f6 mb0">
          {" "}
          "Against Batch 1 dice 4, 5 are negated — only the"{" "}
          <span className="fw6 red">7</span> scores a hit (1 hit location).
          Against Batch 2: dice 2 are negated — the{" "}
          <span className="fw6 red">8</span> and{" "}
          <span className="fw6 red">7</span> both score hits (2 hit locations).
          Damage is assigned to the defender's hit locations for all three
          successful hits.
        </p>
      </div>
    </div>
  );
};
