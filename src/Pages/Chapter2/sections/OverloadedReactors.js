export const OverloadedReactors = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.2.3 — Overloaded Reactors &amp; Reactor Critical
      </h2>

      <h5 className="f4 fw7 mt4 mb2 tj red"> OVERLOADED REACTORS </h5>
      <p className="lh-copy tj">
        If FRO expenditure ever exceeds the FRO Limit/Total, the{" "}
        <span className="fw6 red"> [PILOT]</span> suffers a -3 PS penalty.
      </p>

      <h4 className="f4 fw7 mt4 mb2 tj red"> REACTOR CRITICAL </h4>
      <p className="lh-copy tj">
        If the MSU is ever destroyed via a direct [TORSO] hit or a hit location
        spillover from a hit roll of doubles (double 1s, double 2s, double 3s,
        double 6s etc), the enemy <span className="fw6 red"> [PILOT]</span>{" "}
        rolls 1d6 + [1 per each FRO expended]. On a 6+, the MSU explodes
        spectacularly. The MSU emits a{" "}
        <span className="fw6 red"> [AOX(X)]</span> explosion from it's base,
        where X is double the FRO limit of that suit. Each MSU (friend or foe)
        takes 15 damage to three hit location. Each MSU unit hit receives an
        <span className="fw6 red"> [IMPACT(3)]</span> effect, and must roll a 4+
        PS skill check or be knocked down.
      </p>
    </div>
  );
};
