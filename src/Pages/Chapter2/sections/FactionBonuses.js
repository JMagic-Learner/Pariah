import { FACTIONS } from "../../../Data/FactionsArray";

export const FactionBonuses = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.10 — Faction Bonuses</h2>
      <p className="lh-copy mb4">
        Each Fireteam can belong to an overarching faction; Earth Federation,
        Principality of ZEON, etc. Within each faction, players may select a
        subfaction that grants additional bonuses. All general faction bonuses
        apply regardless of subfaction choice.
      </p>
      {FACTIONS.map((faction, fi) => (
        <div key={fi} className="mb5 ba b--black-20">
          <div className={`${faction.color} pv3 ph4`}>
            <h3 className="f3 fw7 white ma0">{faction.name}</h3>
          </div>
          <div className="pa4">
            <p className="lh-copy tj mb3">{faction.lore}</p>
            <h4 className="f5 fw7 mb2 mt3">General Bonuses</h4>
            <div className="pl3">
              {faction.generalBonuses.map((b, bi) => (
                <div key={bi} className="mb3 pa3 bg-near-white ba b--black-10">
                  <p className="fw7 ma0 mb1 red">{b.title}</p>
                  <p className="lh-copy ma0 f6">{b.text}</p>
                </div>
              ))}
            </div>
            <h4 className="f5 fw7 mt4 mb2">Subfactions</h4>
            <div className="flex-ns flex-wrap">
              {faction.subfactions.map((sub, si) => (
                <div key={si} className="w-third-ns pr3-ns mb3">
                  <div className="ba b--black-20 h-100">
                    <div className="bg-near-black pv2 ph3">
                      <h5 className="f6 white fw7 ma0">{sub.name}</h5>
                    </div>
                    <div className="pa3">
                      {sub.bonuses.map((b, bi) => (
                        <div key={bi} className="mb3">
                          <p className="fw7 ma0 mb1 red f6">{b.title}</p>
                          <p className="lh-copy ma0 f7">{b.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
