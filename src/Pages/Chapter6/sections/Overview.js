export const CampaignOverview = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">6.0 — Campaign Overview</h2>

      <p className="lh-copy tj mb4">
        Campaign rules are a narrative set of restrictions and scenarios that
        allow <span className="fw6 red"> [PILOT]</span>s to experience the
        Universal Century's canon battles first-hand. Rather than a single
        standalone skirmish, a Campaign links together a series of Campaign
        Battles drawn from the Timeline (see Section 6.1), letting a roster of{" "}
        <span className="fw6 red"> [PILOT]</span>s carry their history, scars,
        and reputations from one battle to the next.
      </p>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Permanent Consequences</h3>
        <p className="lh-copy f6 mb0">
          Campaign rules emphasize that{" "}
          <span className="fw6 red"> [PILOT] </span>
          death is permanent. Unlike standard play, a{" "}
          <span className="fw6 red"> [PILOT]</span> who is Killed in Action
          does not return for the next Campaign Battle. When a{" "}
          <span className="fw6 red"> [PILOT]</span> suffers their first death,
          the controlling player must randomly generate a new Pilot before
          continuing the Campaign. See Section 6.3 for resolving a{" "}
          <span className="fw6 red"> [PILOT]</span>'s fate, and Section 6.2 for
          generating their replacement.
        </p>
      </div>

      <div className="mb4 pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Experience and Accolades</h3>
        <p className="lh-copy f6 mb0">
          <span className="fw6 red"> [PILOT]</span>s that survive Campaign
          Battles earn EXP as a reward for combat experience. This EXP is spent
          between battles to obtain Pilot Accolades — upgrades attributed to
          seasoned Ace <span className="fw6 red"> [PILOT]</span>s who
          distinguish themselves across the war. See Section 6.4 for the full
          list of Accolades.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10">
        <h3 className="f4 fw7 red mt0 mb2">Running a Campaign</h3>
        <ol className="lh-copy pl3 f6 ma0">
          <li className="pv1">
            Select a Campaign Battle, using the Timeline (Section 6.1) as
            inspiration for missions and combatants.
          </li>
          <li className="pv1">Play the mission as normal.</li>
          <li className="pv1">
            Resolve the Pilot Fate Table (Section 6.3) for any{" "}
            <span className="fw6 red"> [PILOT]</span> whose MSU was destroyed.
          </li>
          <li className="pv1">
            Award EXP to surviving <span className="fw6 red"> [PILOT]</span>s.
          </li>
          <li className="pv1">
            Spend accumulated EXP on Pilot Accolades (Section 6.4), and
            generate any Replacement Recruits (Section 6.2) before the next
            Campaign Battle.
          </li>
        </ol>
      </div>
    </div>
  );
};
