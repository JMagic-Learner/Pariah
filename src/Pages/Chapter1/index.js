import { RightHandPanel } from "./RightHandPanel";

export const Chapter1 = () => {
  return (
    <div className="w-90 center pv4">
      <h1 className="f1 fw9 red bb pb3 mb4">Chapter 1: What is Flashpoint?</h1>

      <div className="flex-ns">
        <div className="w-60-ns mr5-ns">
          <p className="tj lh-copy f5">
            Flashpoint is a skirmish game set in the Universal Century. It aims
            to establish a tabletop simulation of mecha combat as depicted in
            the Gundam franchise. Flashpoint allows you to build and customize
            your mobile suit and pilot it in an alternating activation system.
            How you build your Mobile Suit unit (MSU) depends entirely on you.
          </p>
          <p className="tj lh-copy">
            Flashpoint is designed with Gunpla in mind. Whether you have 1/144
            or 1/100 scale Gunpla, the rules are meant to be adaptable. Tabletop
            battles can be set in any era, from the ONE YEAR WAR to the far
            flung future in Cosmo Babylonia. This era features the vast majority
            of regular and experimental tech, and allows Flashpoint to draw from
            a wide pool of lore.
          </p>

          <h2 className="f3 fw7 red mt4 mb2">What is Universal Century?</h2>
          <p className="tj lh-copy">
            Universal Century (UC) is the timeline setting where the original
            Gundam series took place, originally airing on April 7, 1979. The
            (UC) timeline spans from 0068 (Mobile Suit Gundam: The Origin) to
            1014 (Reconquista in G), covering around sixteen separate
            storylines. t mainly centers around the conflict between the Earth
            Federation Space Force (EFSF) and the Principality of ZEON and its
            many sub-organizations and successors. The (UC) timeline also
            features a phenomenon known as Newtypes — individuals who exhibit
            predictive foresight, higher reaction times, and other unknown
            abilities.
          </p>

          <h2 className="f3 fw7 red mt4 mb2">Mobile Suits and Gundams</h2>
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

        <RightHandPanel />
      </div>
    </div>
  );
};
