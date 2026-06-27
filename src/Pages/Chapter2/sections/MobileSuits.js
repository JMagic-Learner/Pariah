export const MobileSuits = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">
        2.2 — Mobile Suits and Mobile Armor
      </h2>

      <p className="lh-copy tj">
        {" "}
        Mobile Suits - The new standard of warfare in the UUniversal Century. In
        Gundam Flashpoint, Mobile Suits or MSU (Mobile Suit Units) as
        abbreviated, are the main focus.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">Mobile Suits and Mobile Armors</h3>
      <p className="lh-copy tj">
        Mobile Suits refer to all MSUS within Gundam Flashpoint. But certain MSU
        are also classified as Mobile Armors. Mobile armors are huge, gargantuan
        war machines that are significantly bulkier than conventional mobile
        suits.
      </p>
      <p className="lh-copy tj">The distinction is as follows:</p>
      <ul className="lh-copy pl3 tj dark-red fw6">
        <li className="pv1">
          Mobile Suits have a hexagon action base to represent their field of
          view and the space they take up on the battlefield.
        </li>
        <li className="pv1">
          Mobile Armors have an octagonal action base to represent their field
          of view and the space they take up on the battlefield.
        </li>
      </ul>
      <p className="lh-copy tj">
        While this seems like a small distinction, the increased facings of
        Mobile Armors means that it is harder to move around, and to also turn
        to face. Mobile Armors on MSU sheets will be marked with the M.A
        denotation.
      </p>
      <p className="lh-copy tj">
        {" "}
        MSU are typically represented by a MSU sheet. These MSU sheets can be
        found in the FORCELIST tab of this website.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">MSU Universal Characteristics</h3>
      <p className="lh-copy tj">
        All MSU have a number of characteristics to denote individual values.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 dark-red fw6">
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">How much a MSU typically costs.</span>
        </li>
        <li className="pv1 dark-red fw6">
          FRO (FUSION REACTOR OUTPUT):{" "}
          <span className="fw4 black">
            How much power the MSU can use per round.
          </span>
        </li>
        <li className="pv1 dark-red fw6">
          Equipment Tonnage (TONNAGE/3):{" "}
          <span className="fw4 black">
            How much weight a MSU can incur for equipment and weapons.
          </span>
        </li>
        <li className="pv1 dark-red fw6">
          Movement (Inches):{" "}
          <span className="fw4 black">
            How far/fast a MSU can traverse the battlefield.
          </span>
        </li>
        <li className="pv1 dark-red fw6">
          Armor:{" "}
          <span className="fw4 black">
            How tough / how many hit points per hit location.
          </span>
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2">MCU Cost Formula</h3>
      <p className="lh-copy mb2">
        To calculate a base MSU's MCU cost, use the following formula:
      </p>
      <div className="pa3 bg-near-white ba b--black-20 br2 mv3">
        <code className="f6 db lh-copy">
          MCU = (Armor × 2) + (Move × 2) + (FRO × 3) + (Tonnage ÷ 2) + (10 per
          distinct weapon type) + total Support Equipment cost
        </code>
      </div>

      <h3 className="f4 fw7 mt4 mb2 tj">MCU - Monetary Credit Units</h3>
      <p className="lh-copy tj">
        {" "}
        As noted previosuly in Section 2.1, [PILOTS] begin at 250 MCU. This
        essentially connotes a MCU limit of 250 per pilot. A typical [FIRETEAM]
        is composed of three [PILOTS], therefore there is a total of 750 MCU.
        [FIRETEAM] construction rules will be in Section 2.3
      </p>
      <p className="lh-copy tj">
        {" "}
        [PILOTS] can purchase MSU according to each individaul MSU cost. Up to
        25 unused MCU can be transfered to another [PILOT] after purchasing
        equipment and weapons. What generosity!
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">FRO - Fusion Reactor Output</h3>

      <p className="tj lh-copy">
        Mobile Suits are powered by Helium 3 Fusion Reactors. These reactors
        emit Minovsky particles, which interefere with conventional radar and
        other systems equipment.
      </p>
      <p className="tj lh-copy">
        Fusion Reactors are an in-game feature serving as a balancing tool for
        high-mobility and beam weapon–centric Mobile Suits. FRO (Fusion Reactor
        Output) typically ranges from 5–8, with most grunt suits near 5. Given
        the timeframe of UC 125, average FRO output is around 7, with some
        bandwidth for high-end prototype suits.
      </p>

      <p className="tj lh-copy">
        Each MSU's FRO count essentially represents how much power is available
        to use beam weapons, [BOOST(X)], turn facing, etc. When choosing a MSU
        to purchase, [PILOTS] must visualize their individaul playstyle and how
        FRO can limit the aggression / offense a suit can bring to the
        battlefield
      </p>

      <h5 className="f4 fw7 mt4 mb2 tj"> Active FRO Costs </h5>
      <p className="lh-copy tj">
        {" "}
        Cost to using Beam Weapons or use other high-energy equipment. When
        using a Beam Weapon, subtract total FRO by the ACTIVE FRO COST.
      </p>

      <h5 className="f4 fw7 mt4 mb2 tj"> Passive FRO Costs </h5>
      <p className="lh-copy tj">
        {" "}
        Native costs of running certain support equipment. Support equipment
        with PASSIVE FRO COSTS usually denote high energy requirements and
        specs. PASSIVE FRO COSTS are subtracted from the FRO total every Step
        1.1 of the Status Phase. If the all associated Support Equipment cost is
        destroyed or lost (via Hit Locations destruction), the PASSIVE FRO cost
        is no longer incurred.
      </p>

      <h5 className="f4 fw7 mt4 mb2 tj red"> OVERLOADED REACTORS </h5>
      <p className="lh-copy tj">
        If FRO expenditure ever exceeds the FRO Limit/Total, the [PILOT] suffers
        a -3 PS penalty.
      </p>

      <h4 className="f4 fw7 mt4 mb2 tj red"> REACTOR CRITICAL </h4>
      <p className="lh-copy tj">
        If the MSU is ever destroyed via a direct [TORSO] hit (hit location roll
        of a 2 or a 12), the enemy [PILOT] rolls 1d6 + [1 per each FRO that
        exceeds the FRO Limit]. On a 6+, the MSU explodes spectacularly. The MSU
        emits a [AOE(X)] explosion from it's basing, where X is the FRO value.
        Each MSU (friend or foe) takes 10 damage to three hit location
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">MOVEMENT</h3>
      <p className="tj lh-copy">
        A MSU's base movespeed. Used in [MOVEMENT] actions. See Chapter 3,
        Section 3.2 for movement rules
      </p>
      <p className="tj lh-copy">
        A MSU's base movespeed can never decrease below 1.
      </p>
      <p className="tj lh-copy">
        How far an MSU moves during the movement phase is factored into evasion
        tier tables. This means that how far an MSU moved after [MOVEMENT],
        [BOOST(X)], and [BLITZ] actions are taken into consideration.
      </p>

      <h3 className="f4 fw7 mt4 mb2 tj">ARMOR</h3>
      <p className="tj lh-copy">
        The Armor value attributed to every hit location of a MSU
      </p>

      <h2 className="f2 fw7 dark-red bb pb2 mb3">
        2.2 Extra — QUICK/EASY or CUSTOM MSU
      </h2>
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

      <p className="lh-copy tj">
        {" "}
        Players who wish to port over thier AU suits can use the following
        Custom MSU baseline stats.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 dark-red fw6">
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">
            {" "}
            Custom suits do not cost any baseline MCU
          </span>
        </li>
        <li className="pv1 dark-red fw6">
          FRO (FUSION REACTOR OUTPUT): <span className="fw4 black">6</span>
        </li>
        <li className="pv1 dark-red fw6">
          Equipment Tonnage (TONNAGE/3):{" "}
          <span className="fw4 black">Equipment Tonnage of 16</span>
        </li>
        <li className="pv1 dark-red fw6">
          Movement (Inches): <span className="fw4 black">8 inches</span>
        </li>
        <li className="pv1 dark-red fw6">
          Armor: <span className="fw4 black">25</span>
        </li>
      </ul>
    </div>
  );
};
