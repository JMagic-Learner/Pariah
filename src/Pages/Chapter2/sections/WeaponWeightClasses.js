export const WeaponWeightClasses = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.4.3 — Weapon Weight Classes — [LIGHT] vs [MEDIUM] vs [HEAVY]
      </h2>
      <p className="lh-copy tj">
        The tonnage of certain weapons affect the avaibility of MSU's hands and
        how they perform in{" "}
        <span className="fw6 red"> [SIMULTANEOUS ATTACK] </span> actions
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 red fw6">
          [LIGHT] Weapons
          <span className="fw4 black">
            {" "}
            1 - 2 tons. Can be held in one hand.
          </span>
        </li>
        <li className="pv1 red fw6">
          [MEDIUM] Weapons
          <span className="fw4 black">
            {" "}
            3 - 5 tons. Can be held in one hand
          </span>
        </li>
        <li className="pv1 red fw6">
          [HEAVY] Weapons
          <span className="fw4 black">
            {" "}
            6+ tons. Requires two hands to wield, unless it is mounted on a MSU,
            or has the [BRACE] keyword
          </span>
        </li>
      </ul>
    </div>
  );
};
