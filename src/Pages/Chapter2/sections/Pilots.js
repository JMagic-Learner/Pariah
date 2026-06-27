import { PilotTraits } from "../../../Components/Table/PilotTraits";

export const Pilots = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.1 — Pilots</h2>

      <p className="lh-copy tj">
        In Flashpoint, each Mobile Suit Unit is piloted by a single [PILOT].
        Pilots have three base statistics, 250 MCU (Monetary Credit Units) and a
        pool of 5 Trait Points used to customize their skills and abilities.
        This section goes over the base stats and trait rules. MCU will be
        overviewed in Section 2.2 and Section 2.3
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">Base Statistics</h3>
      <p className="lh-copy tj">
        Gunnery (GS) - Used to make ranged attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Brawl (BS)- Used to make melee attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Piloting (PS) - Used to roll initiatve, use certain equipment, and to
        evade attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Trait Points (TP) - Used to purchase pilot traits. Each [PILOT] has 5 TP
      </p>
      <p className="lh-copy tj">
        Actions (A) - Each [PILOT] begins with two action points. These are used
        to conduct [ATTACK], [MOVEMENT], [COMMANDER], and other actions
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj"> What are [PILOT] stats used for</h3>
      <p className="lh-copy tj">
        {" "}
        [PILOT] stats are used to caculate final results of certain actions and
        skill checks.
      </p>
      <p className="lh-copy tj">
        {" "}
        Examples of where [PILOT] stats are used are given below:
      </p>
      <p className="lh-copy tj red">
        {" "}
        Attack Rolls: 1d6 + [GS/BS] + [ GS / BS Mods]{" "}
      </p>
      <p className="lh-copy tj red">Initiative Rolls: 1d6 + [PS] + [Mods]</p>
      <p className="lh-copy tj red ">
        Equipment / Special Rolls: 1d6 + [PS] + [MODS]
      </p>
      <p className="lh-copy tj red ">
        {" "}
        Skill Check Rolls: 1d6 + [GS/BS/PS] + [ GS / BS / PS Mods]{" "}
      </p>
      <p className="lh-copy tj red">Evasion Rolls: 2d3 + [PS] + [EVA Mods]</p>

      <h3 className="f4 fw7 mt4 mb2 tj">
        Attack Rolls, Skill Checks, and Evasion Rolls
      </h3>
      <p className="lh-copy tj">
        Attack Rolls must exceed Evasion Rolls to land a hit.
      </p>
      <p className="lh-copy tj">
        Skill Checks must meet or exceed a static numerical value.
      </p>
      <p className="lh-copy tj">
        The total bonus (base stat + any modifiers) is capped at 4. Meaning a
        [PILOT] can never exceed a +4 total bonus even after purchasing support
        systems, weapons, and increased base stats.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">Traits</h3>
      <p className="lh-copy tj">
        Each [PILOT] has a Trait Point (TP) budget. Normally, all [PILOT]s begin
        with 5 trait points. Traits are purchased from the table below. Some
        traits are stackable and can be taken multiple times.
      </p>
      <p className="lh-copy tj">
        Each [PILOT] can only have a maximum of five pilot traits. This means
        that if a faction bonus were to grant a [PILOT] an additional trait by
        default, the [PILOT] can only obtain 4 more traits. A [PILOT] cannot
        have duplicate traits unless it is Gunnery, Brawl, Piloting
      </p>
      <PilotTraits />
    </div>
  );
};
