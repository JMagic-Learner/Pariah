export const CustomSuitCreation = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.2.4 — Custom Suit Creation</h2>
      <p className="lh-copy tj">
        {" "}
        Sometimes players wish to incorporate mobile suits from other Gundam
        timelines and settings. This is perfectly fine with Gundam Flashpoint's
        framework.
      </p>

      <p className="lh-copy tj">
        {" "}
        Players who wish to port over thier AU suits can use the following
        Custom MSU baseline stats.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 red fw6">
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">
            {" "}
            Custom suits do not cost any baseline MCU
          </span>
        </li>
        <li className="pv1 red fw6">
          FRO (FUSION REACTOR OUTPUT): <span className="fw4 black">6</span>
        </li>
        <li className="pv1 red fw6">
          Equipment Tonnage (TONNAGE/3):{" "}
          <span className="fw4 black">Equipment Tonnage of 16</span>
        </li>
        <li className="pv1 red fw6">
          Movement (Inches): <span className="fw4 black">8 inches</span>
        </li>
        <li className="pv1 red fw6">
          Armor: <span className="fw4 black">25</span>
        </li>
      </ul>
    </div>
  );
};
