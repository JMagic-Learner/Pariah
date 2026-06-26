export const Chapter1 = () => {
  return (
    <div className="w-90 center pv4">
      <h1 className="f1 fw9 dark-red bb pb3 mb4">
        Chapter 1: What is Flashpoint?
      </h1>

      <div className="flex-ns">
        <div className="w-60-ns mr5-ns">
          <p className="tj lh-copy f5">
            Flashpoint is a skirmish game set in the Universal Century. It aims
            to establish a tabletop simulation of mecha combat as depicted in
            the Gundam franchise. Flashpoint allows you to build and customize
            your mobile suit and pilot it in an alternating activation system.
            How you build your Mobile Suit Unit (MSU) depends entirely on you.
          </p>
          <p className="tj lh-copy">
            Flashpoint is designed with Gunpla in mind. Whether you have 1/144
            or 1/100 scale Gunpla, the rules are meant to be adaptable. The game
            focuses on the era around UC 125, two years after Hathaway's Flash.
            This era features the vast majority of regular and experimental
            tech, and allows Flashpoint to draw from a wide pool of lore.
          </p>

          <h2 className="f3 fw7 dark-red mt4 mb2">
            What is Universal Century?
          </h2>
          <p className="tj lh-copy">
            Universal Century (UC) is the timeline setting where the original
            Gundam series took place, originally airing on April 7, 1979. The UC
            timeline spans from 0068 (Mobile Suit Gundam: The Origin) to 1014
            (Reconquista in G), covering around sixteen separate storylines. It
            mainly centers around the conflict between the Earth Federation
            Space Force (EFSF) and the Principality of ZEON and its many
            sub-organizations and successors. The UC timeline also features a
            phenomenon known as Newtypes — individuals who exhibit predictive
            foresight, higher reaction times, and other unknown abilities.
          </p>

          <h2 className="f3 fw7 dark-red mt4 mb2">Mobile Suits and Gundams</h2>
          <p className="tj lh-copy">
            Mobile Suits are bipedal machines ranging in height from 15m to
            116m. All mobile suits use a fusion reactor that consumes Helium-3.
            The consumption of Helium-3 produces Minovsky Particles — crucial to
            understanding some game mechanic restrictions. Mobile Suits can be
            used for civilian or military purposes; in Flashpoint, they are
            military assets.
          </p>
          <p className="tj lh-copy">
            All Gundams are Mobile Suits, but only a portion of Mobile Suits are
            considered Gundams. Gundams are typically constructed with
            high-performance materials and the latest technology of their era.
            The easiest example is the original RX-78, constructed with
            Gundarium alloy and equipped with an experimental beam rifle.
          </p>
        </div>

        <div className="w-40-ns">
          {/* What to Bring */}
          <div className="ba b--black-20 pa3 mb4 bg-near-white">
            <h3 className="f4 fw7 dark-red mt0 mb3">What to Bring</h3>
            <ul className="pl3 lh-copy">
              <li className="pv1">Two D6 (six-sided dice)</li>
              <li className="pv1">
                Two Gunpla Models (any scale; preferably 1/144 or 1/100)
              </li>
              <li className="pv1">
                A table or flat surface with minimum 36 inches of width / length
              </li>
              <li className="pv1">Pen and Paper (or print an MSU sheet)</li>
            </ul>
          </div>

          {/* Earth Federation */}
          <div className="ba b--black-20 pa3 mb4">
            <h3 className="f4 fw7 dark-red mt0 mb2">Earth Federation</h3>
            <p className="lh-copy f6 tj">
              The Earth Federation was formed in the pre-UC era when
              overpopulation caused famines, outbreaks of disease, and wars over
              resources. The inauguration of its charter marked the beginning of
              the Universal Century calendar (0001 UC). To relieve Earth, the
              Federation announced the Space Colonization Plan, constructing
              orbital habitats called Bunches organized into administrative
              sectors called Sides. The wealthy remained on Earth while ordinary
              people were forced to live in space — giving rise to the image of
              the "Earth-Born Elite."
            </p>
          </div>

          {/* ZEON */}
          <div className="ba b--black-20 pa3 mb4">
            <h3 className="f4 fw7 dark-red mt0 mb2">Principality of ZEON</h3>
            <p className="lh-copy f6 tj">
              When Zeon Zum Deikun died in UC 0068, Degwin Sodo Zabi seized
              control and pushed for rapid military development. Research by
              Doctor Minovsky led to the Minovsky Particle and its effect on
              communication and weaponry. Negotiations with the Earth Federation
              broke down in UC 0079, triggering the One Year War — the largest
              conflict in UC history, where both sides lost nearly half of their
              populations before the Antarctic Treaty forbade weapons of mass
              destruction.
            </p>
          </div>

          {/* Scaling reference */}
          <div className="ba b--black-20 pa3">
            <h3 className="f4 fw7 dark-red mt0 mb2">MCU Cost Formula</h3>
            <p className="f6 lh-copy mb2">
              Base MSU cost is calculated as follows:
            </p>
            <code className="f7 db bg-near-black white pa2 br2 lh-copy">
              (Armor × 2) + (Move × 2) + (FRO × 3) + (Tonnage ÷ 2) + 10 per
              Weapon Type + Support Equipment
            </code>
            <p className="f7 lh-copy mt2 gray">
              Example: RGM-79 GM = (20×2)+(6×2)+(5×3)+(42/2)+10 = 98 → rounds to
              100 MCU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
