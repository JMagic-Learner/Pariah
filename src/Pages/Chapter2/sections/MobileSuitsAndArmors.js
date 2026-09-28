import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
export const MobileSuitsAndArmors = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.2.1 — Mobile Suits and Mobile Armor
      </h2>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        Mobile Suits - The new standard of warfare in the Universal Century. In
        Gundam Flashpoint, Mobile Suits or MSU (Mobile Suit Units) as
        abbreviated, are the main focus.
      </p>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        Mobile Suits refer to all MSUS within Gundam Flashpoint. But certain MSU
        are also classified as Mobile Armors. Mobile armors are huge, gargantuan
        war machines that are significantly bulkier than conventional mobile
        suits.
      </p>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>The distinction is as follows:</p>
      <ul className={classNames("lh-copy pl3 tj red fw6", { f7: isMobile })}>
        <li className={classNames("pv1", { f7: isMobile })}>
          Mobile Suits have a hexagon action base to represent their field of
          view and the space they take up on the battlefield.
        </li>
        <li className={classNames("pv1", { f7: isMobile })}>
          Mobile Armors have an octagonal action base to represent their field
          of view and the space they take up on the battlefield.
        </li>
      </ul>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        While this seems like a small distinction, the increased facings of
        Mobile Armors means that it is harder to move around, and to also turn
        to face. Mobile Armors on MSU sheets will be marked with the M.A
        denotation.
      </p>

      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        The facing of a Mobile Suit or Mobile Armor is important to consider
        when moving around the battlefield. The facing of a MSU is represented
        by the direction of the action base. The front half of the action base
        is considered to be the front arc, while the back half of the action
        base is considered to be the rear arc. The front arc is where the MSU
        can fire its weapons, while the rear arc is where the MSU cannot fire
        its weapons.
      </p>
      <p className={classNames("lh-copy tj", { f7: isMobile })}>
        {" "}
        MSU are typically represented by a MSU sheet. These MSU sheets can be
        found in the FORCELIST tab of this website.
      </p>
    </div>
  );
};
