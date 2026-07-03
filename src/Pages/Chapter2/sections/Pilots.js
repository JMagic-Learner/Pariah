import { PilotTraits } from "../../../Components/Table/PilotTraits";

export const Pilots = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.1 — Pilots</h2>

      <p className="lh-copy tj">
        In Flashpoint, each Mobile Suit Unit is piloted by a single{" "}
        <span className="fw6 red"> [PILOT]</span>. Pilots have three base
        statistics, 250 MCU (Monetary Credit Units) and a pool of 5 Trait Points
        used to customize their skills and abilities. This section goes over the
        base stats and trait rules. MCU will be overviewed in Section 2.2 and
        Section 2.3
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">[PILOTS] Default Characteristics</h3>
      <p className="lh-copy tj">
        Gunnery (GS) - Used to make ranged attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Brawl (BR)- Used to make melee attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Piloting (PS) - Used to roll initiatve, use certain equipment, and to
        evade attacks. Begins at base value 1
      </p>
      <p className="lh-copy tj">
        Trait Points (TP) - Used to purchase pilot traits. Each{" "}
        <span className="fw6 red"> [PILOT]</span> has 5 TP
      </p>
      <p className="lh-copy tj">
        Actions (A) - Each <span className="fw6 red"> [PILOT]</span> begins with
        two action points. These are used to conduct{" "}
        <span className="fw6 red"> [ATTACK]</span>,
        <span className="fw6 red"> [ADVANCE]</span>,{" "}
        <span className="fw6 red"> [REACTIVE ATTACK]</span>, and other actions
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">
        {" "}
        The <span className="fw6 red"> [COMMANDER] </span> keyword
      </h3>
      <p className="lh-copy tj">
        If a <span className="fw6 red"> [PILOT]</span> is a{" "}
        <span className="fw6 red"> [COMMANDER] </span>, the{" "}
        <span className="fw6 red"> [PILOT]</span> gains one Command Action.
        These Command Actions are not refreshed on Status Phase Step 1.4, so
        they are single use. These Command Actions can only be spent on
        [COMMANDER ACTION] abilities. A{" "}
        <span className="fw6 red"> [PILOT]</span> with this keyword gains access
        to [COMMANDER ACTIONS]
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">
        {" "}
        What are <span className="fw6 red"> [PILOT]</span> stats used for
      </h3>
      <p className="lh-copy tj">
        {" "}
        <span className="fw6 red"> [PILOT]</span> stats are used to caculate
        final results of certain actions and skill checks.
      </p>
      <p className="lh-copy tj">
        {" "}
        Examples of where <span className="fw6 red"> [PILOT]</span> stats are
        used are given below:
      </p>
      <p className="lh-copy tj red">
        {" "}
        Attack Rolls: 1d6 + [GS/BR] + [ Weapon Mods] + [Situational
        Modifiers]{" "}
      </p>
      <p className="lh-copy tj red">Initiative Rolls: 1d6 + [PS] + [Mods]</p>
      <p className="lh-copy tj red ">
        Equipment / Special Rolls: 1d6 + [PS] + [MODS]
      </p>
      <p className="lh-copy tj red ">
        {" "}
        Skill Check Rolls: 1d6 + [GS/BR/PS] + [Situational Mods]{" "}
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
        <span className="fw6 red"> [PILOT]</span> can never exceed a +4 total
        bonus even after purchasing support systems, weapons, and increased base
        stats.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">Traits</h3>
      <p className="lh-copy tj">
        Each <span className="fw6 red"> [PILOT]</span> has a Trait Point (TP)
        budget. Normally, all <span className="fw6 red"> [PILOT]</span>s begin
        with 5 trait points. Traits are purchased from the table below. Some
        traits are stackable and can be taken multiple times.
      </p>
      <p className="lh-copy tj">
        Each <span className="fw6 red"> [PILOT]</span> can only have a maximum
        of five pilot traits. This means that if a faction bonus were to grant a{" "}
        <span className="fw6 red"> [PILOT]</span> an additional trait by
        default, the <span className="fw6 red"> [PILOT]</span> can only obtain 4
        more traits. A <span className="fw6 red"> [PILOT]</span> cannot have
        duplicate traits unless it is Gunnery, Brawl, Piloting
      </p>
      <PilotTraits />
    </div>
  );
};
