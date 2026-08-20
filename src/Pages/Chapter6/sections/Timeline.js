const ERAS = [
  {
    name: "One Year War",
    years: "UC 0079",
    color: "bg-dark-red",
    battles: [
      {
        title: "Operation Odessa",
        text: "The Earth Federation Space Force launches a massive combined-arms offensive to reclaim Zeon-held supply lines in Odessa, marking the turning point of the ground war and debuting the EFF's mass-produced mobile suits.",
      },
      {
        title: "A Baoa Qu (Au Bao Qu)",
        text: "The climactic siege of Zeon's fortress asteroid base near Side 3. Fought across the final days of 0079, this battle effectively ends the One Year War.",
      },
    ],
  },
  {
    name: "Gryps War",
    years: "UC 0087 – 0088",
    color: "bg-dark-blue",
    battles: [
      {
        title: "Operation Stardust",
        text: "AEUG forces make a desperate strike to prevent the Titans from dropping a colony onto Earth. The colony is destroyed in low orbit instead, scattering debris that still litters near-Earth space.",
      },
    ],
  },
  {
    name: "Second Neo Zeon War",
    years: "UC 0093",
    color: "bg-purple",
    battles: [
      {
        title: "Axis Shock",
        text: "Neo Zeon, led by the returned Char Aznable, attempts to drop the asteroid Axis onto Earth. The attempt is repelled at the last possible moment, an event that comes to be known across the UC as the Axis Shock.",
      },
    ],
  },
  {
    name: "Laplace Incident",
    years: "UC 0096",
    color: "bg-dark-gray",
    battles: [
      {
        title: "Industrial 7",
        text: "Neo Zeon remnants known as the Sleeves clash with Federation forces over a mobile suit rumored to hold the key to Laplace's Box — the lost founding charter of the Federation itself.",
      },
      {
        title: "Torrington Base",
        text: "Fighting spills onto Federation soil as the search for Laplace's Box continues. See Chapter 4, Mission 1 for a playable scenario based on this engagement.",
      },
    ],
  },
  {
    name: "Crossbone Vanguard Era",
    years: "UC 0120s – 0130s",
    color: "bg-near-black",
    battles: [
      {
        title: "The Outer Colonies Rise",
        text: "Decades after Laplace's Box is opened, distant colonies chafe under a Earth Federation grown complacent and corrupt. The Crossbone Vanguard takes up arms beyond the Asteroid Belt, carrying the fight into a new generation.",
      },
    ],
  },
];

export const Timeline = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.1 — Timeline</h2>

      <p className="lh-copy tj mb4">
        The Universal Century spans decades of conflict. The eras below offer a
        loose throughline of major battles a Campaign can draw from — use them
        as a backbone for linking Campaign Battles together, or as inspiration
        for homebrew scenarios set between them.
      </p>

      {ERAS.map((era, ei) => (
        <div key={ei} className="mb4 ba b--black-20">
          <div className={`${era.color} pv3 ph4 flex items-center justify-between`}>
            <h3 className="f3 fw7 white ma0">{era.name}</h3>
            <span className="f6 white fw6">{era.years}</span>
          </div>
          <div className="pa4">
            {era.battles.map((b, bi) => (
              <div
                key={bi}
                className="mb3 pa3 bg-near-white ba b--black-10"
              >
                <p className="fw7 ma0 mb1 red">{b.title}</p>
                <p className="lh-copy ma0 f6">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
