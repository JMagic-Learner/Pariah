export const RightHandPanel = () => {
  return (
    <div className="w-40-ns">
      {/* What to ring */}
      <div className="ba b--black-20 pa3 mb4 bg-near-white">
        <h3 className="f4 fw7 orange mt0 mb3">What to bring</h3>
        <ul className="pl3 lh-copy">
          <li className="pv1">Two D6 (six-sided dice) (at mininum)</li>
          <li className="pv1">
            Two Gunpla Models (any scale; preferably 1/144 or 1/100)
          </li>
          <li className="pv1">
            A table or flat surface with minimum 36 inches of width / length
          </li>
          <li className="pv1">Pen and Paper (or print an MS sheet)</li>
        </ul>
      </div>

      {/* Earth Federation */}
      <div className="ba b--black-20 pa3 mb4">
        <h3 className="f4 fw7 orange mt0 mb2">Earth Federation</h3>
        <p className="lh-copy f6 tj">
          The Earth Federation was formed in the pre-(UC) era when
          overpopulation caused famines, outbreaks of disease, and wars over
          resources. The inauguration of its charter marked the beginning of the
          Universal Century calendar (0001 (UC)). To relieve Earth, the
          Federation announced the Space Colonization Plan, constructing orbital
          habitats called unches organized into administrative sectors called
          Sides. The wealthy remained on Earth while ordinary people were forced
          to live in space — giving rise to the image of the "Earth-born Elite."
        </p>
      </div>

      {/* ZEON */}
      <div className="ba b--black-20 pa3 mb4">
        <h3 className="f4 fw7 orange mt0 mb2">Principality of ZEON</h3>
        <p className="lh-copy f6 tj">
          When Zeon Zum Deikun died in (UC) 0068, Degwin Sodo Zabi seized
          control and pushed for rapid military development. Research by Doctor
          Minovsky led to the Minovsky Particle and its effect on communication
          and weaponry. egotiations with the Earth Federation broke down in (UC)
          0079, triggering the One Year War — the largest conflict in (UC)
          history, where both sides lost nearly half of their populations before
          the Antarctic reaty forbade weapons of mass destruction.
        </p>
      </div>

      {/* Scaling reference */}
      <div className="ba b--black-20 pa3">
        <h3 className="f4 fw7 orange mt0 mb2">MC Cost Formula</h3>
        <p className="f6 lh-copy mb2">The MS cost is calculated as follows:</p>
        <code className="f7 db bg-near-black white pa2 br2 lh-copy">
          (Armor × 2) + (Move × 2) + (FRO × 3) + (tonnage ÷ 2) + 10 per Weapon
          Type + 100% Support Equipment Cost MCU
        </code>
        <p className="f7 lh-copy mt2 gray">
          Example: RGM-79 GM = (20×2)+(6×2)+(5×3)+(42/2)+10 = 98 → rounds to 100
          MC
        </p>
      </div>
    </div>
  );
};
