export const ReZeonFactionBonuses = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">ReZeon Faction Bonuses</h2>
      <p className="lh-copy mb4">
        ReZeon is an altogether separate faction from ZEON. The bonuses below
        apply to any <span className="fw6 red"> [FIRETEAM] </span> composed
        entirely of ReZeon / TITAN units. Subfaction bonuses are in addition to
        the General Faction Bonuses.
      </p>

      {/* General */}
      <div className="mb5 ba b--black-20">
        <div className="bg-dark-red pv3 ph4">
          <h3 className="f3 fw7 white ma0">General Faction Bonuses</h3>
        </div>
        <div className="pa4">
          <div className="mb3 pa3 bg-near-white ba b--black-10">
            <p className="fw7 ma0 mb1 red">Developmental Split</p>
            <p className="lh-copy ma0 f6">
              ReZeon forces can purchase MSUs with the{" "}
              <span className="fw6 red">[TITAN]</span> faction keyword. ReZeon
              forces cannot purchase MSUs with the Zeon keyword.
            </p>
          </div>
          <div className="mb3 pa3 bg-near-white ba b--black-10">
            <p className="fw7 ma0 mb1 red">Unknown IFFs</p>
            <p className="lh-copy ma0 f6">
              Instead of deploying MSU units as normal, ReZeon MSUs may deploy
              as 25mm markers inside their deployment zone. Before initiative is
              rolled, the player controlling these markers will deploy their MSU
              in base contact with these markers. The deployment of these MSUs
              cannot exceed the mission deployment zones.
            </p>
          </div>
          <div className="mb3 pa3 bg-near-white ba b--black-10">
            <p className="fw7 ma0 mb1 red">I-Field Research</p>
            <p className="lh-copy ma0 f6">
              REZEON MSUs have access to advanced I-Field technology, allowing
              them to field more sophisticated shielding systems. I-Field
              Generators that come as base equipment no longer count towards the
              base MCU cost calcuations.
            </p>
          </div>
          <div className="pa3 bg-near-white ba b--black-10">
            <p className="fw7 ma0 mb1 red">Tristellar Plan (TR Plan)</p>
            <p className="lh-copy ma0 f6">
              Units on the force list with the{" "}
              <span className="fw6 red">[TR PROJECT]</span> keyword are
              considered to be Mobile Armors. Use octagon bases.
            </p>
          </div>
        </div>
      </div>

      {/* Subfactions */}
      <h3 className="f3 fw7 mb3">Subfactions</h3>
      <div className="flex-ns flex-wrap">
        {/* Tristellar */}
        <div className="w-third-ns pr3-ns mb4">
          <div className="ba b--black-20 h-100">
            <div className="bg-near-black pv2 ph3">
              <h5 className="f5 white fw7 ma0">Tristellar</h5>
            </div>
            <div className="pa3">
              <div className="mb3">
                <p className="fw7 ma0 mb1 red f6">Titans Black Ops</p>
                <p className="lh-copy ma0 f7">
                  Pilots can purchase the Cyber Newtype trait upgrade (see Core
                  Rules), and MSUs with the{" "}
                  <span className="fw6 red">[TITAN]</span> Faction Keyword for
                  35 MCU less.
                </p>
              </div>
              <div>
                <p className="fw7 ma0 mb1 red f6">TR Project Deployment</p>
                <p className="lh-copy ma0 f7">
                  An additional 100 MCU can be spent on a single weapon and any
                  associated support equipment upgrades. This weapon is not
                  equipped on any <span className="fw6 red"> [FIRETEAM] </span>{" "}
                  MSUs at the beginning of the game. The{" "}
                  <span className="fw6 red"> [FIRETEAM] </span>{" "}
                  <span className="fw6 red"> [COMMANDER] </span> may spend an
                  action in Step 1.4 of the Status Phase to deploy a TR weapons
                  cache capsule within 8 inches of the{" "}
                  <span className="fw6 red"> [FIRETEAM] </span>{" "}
                  <span className="fw6 red"> [COMMANDER] </span>. In the
                  movement phase, ReZeon MSUs in base contact with the TR marker
                  can pick up the new weapon without spending an action,
                  provided the MSU can drop weapons to offset any additional
                  equipment tonnage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alice Guards */}
        <div className="w-third-ns pr3-ns mb4">
          <div className="ba b--black-20 h-100">
            <div className="bg-near-black pv2 ph3">
              <h5 className="f5 white fw7 ma0">Alice Guards</h5>
            </div>
            <div className="pa3">
              <div className="mb3">
                <p className="fw7 ma0 mb1 red f6">Cloning Project</p>
                <p className="lh-copy ma0 f7">
                  Pilots other than the{" "}
                  <span className="fw6 red"> [COMMANDER] </span> may take the
                  same pilot traits as the{" "}
                  <span className="fw6 red"> [FIRETEAM] </span>{" "}
                  <span className="fw6 red"> [COMMANDER] </span>, but for one
                  less trait point (to a minimum of 1). These "cloned" pilots
                  have a limit of 4 traits instead of the usual 5 pilot trait
                  limit.
                </p>
              </div>
              <div>
                <p className="fw7 ma0 mb1 red f6">Resolute Till the End</p>
                <p className="lh-copy ma0 f7">
                  A ReZeon MSU with a destroyed Hit Location may spend a free
                  reaction once per round to:
                </p>
                <ul className="f7 lh-copy pl4 mt2 mb0">
                  <li>Spend 2 FRO to BOOST[6]</li>
                  <li>
                    Spend 2 FRO and an Action to declare a Reactive Attack
                    action without the -2 reactive penalty
                  </li>
                  <li>
                    Spend 2 FRO to reroll a hit location inflicted against it
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
