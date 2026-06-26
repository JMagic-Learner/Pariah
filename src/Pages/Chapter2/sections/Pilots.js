import { PilotTraits } from "../../../Components/Table/PilotTraits";

export const Pilots = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.1 — Pilots</h2>

      <p className="lh-copy tj">
        In Flashpoint, each Mobile Suit Unit is piloted by a single [PILOT].
        Pilots have three base statistics and a pool of 5 Trait Points used to
        customize their skills and abilities.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">Base Statistics</h3>
      <p className="lh-copy tj">Gunnery (GS) - Used to make ranged attacks</p>
      <p className="lh-copy tj">Brawl (BS)- Used to make melee attacks</p>
      <p className="lh-copy tj">
        Piloting (PS) - Used to roll initiatve, use certain equipment, and to
        evade attacks
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj"> What are [PILOT] stats used for</h3>
      <p className="lh-copy tj">
        {" "}
        [PILOT] stats are used to caculate final results of certain actions and
        skill checks. All [PILOT] skills start at 1, but may be increased
        permanently or temporary based on the source"
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

      <h3 className="f4 fw7 mt4 mb2 tj">Traits</h3>
      <p className="lh-copy tj">
        Each [PILOT] has a Trait Point (TP) budget. Normally, all pilots begin
        with 5 trait points. Traits are purchased from the table below. Some
        traits are stackable and can be taken multiple times.
      </p>
      <p className="lh-copy tj">
        Each [PILOT] can only have a maximum of five pilot traits. This means
        that if a faction bonus were to grant a [PILOT] an additional trait by
        default, the [PILOT] can only obtain 4 more traits.
      </p>
      <PilotTraits />
    </div>
  );
};
