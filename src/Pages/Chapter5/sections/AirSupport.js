import {
  AircraftTable,
  AircraftWeaponsTable,
} from "../../../Components/Table/SupportUnitsTable";

export const AirSupport = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">5.3 — Air Support</h2>

      <p className="lh-copy mb4">
        Fighter Jets and Bombers follow the same movement restrictions as MSU
        but must complete their mandatory movement distance each activation.
        Jets excel at harassment and missile strafing runs, but their mandatory
        movement makes them predictable if poorly positioned.
      </p>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Variable Altitude (High vs Attack)</h3>
        <p className="lh-copy ma0">
          In <span className="fw6 red"> HIGH ALTITUDE </span> mode, Aircraft are
          considered at unlimited height, ignoring terrain elevation, and can
          simply move over any terrain without movement penalty. They cannot
          declare any Attack action against ground units and cannot be declared
          as targets of weapons from ground units without
          <span className="fw6 red"> [ANTI-AIRCRAFT] </span> keyword.In{" "}
          <span className="fw6 red"> ATTACK RUN </span> mode, aircraft no longer
          ignore vertical terrain height, become 6" high, (instead of 36"), and
          increase base movement to 20", and gain +2 evasion.{" "}
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Flexibile Doctrines</h3>
        <p className="lh-copy ma0">
          <strong>Fighter jets and Intercepter Jets </strong> before they
          declare their <span className="fw6 red"> [MOVEMENT] </span> action,
          must choose to be <span className="fw6 red"> HIGH ALTITUDE </span> or
          enter <span className="fw6 red"> ATTACK RUN </span>.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">High Altitude Operations</h3>
        <p className="lh-copy ma0">
          <strong>AWACs and Bomber units </strong> are always in considered to
          be in <span className="fw6 red"> HIGH ALTITUDE </span>.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Helicopter Operations </h3>
        <p className="lh-copy ma0">
          <strong> Helicopters </strong>operate in{" "}
          <span className="fw6 red"> ATTACK RUN </span> mode by default.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Mandatory Movement</h3>
        <p className="lh-copy ma0">
          Jets, Bombers, and AWACs <strong>must</strong> move their full
          mandatory movement distance each time they activate. If terrain or
          board edges would prevent this, the jet is removed from play.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Tailspin Risk</h3>
        <p className="lh-copy ma0">
          All aircraft that have been hit by any attack <strong>must</strong>{" "}
          make a PS 3+ check at risk entering a tailspin. Pilots that fail will
          move their mandatory movement next round in a random direction and
          rotate up 2 hexes doing so. The jet no longer ignores terrain
          elevation and it collides with any{" "}
          <span className="fw6 red"> [HARD COVER] </span> it is immediately
          destroyed.
        </p>
      </div>

      <div className="pa3 bg-near-white ba b--black-10 mb4">
        <h3 className="f5 fw7 mb2">Carpet Bombing</h3>
        <p className="lh-copy ma0">
          Bombers may to deploy up to three AIRSTRIKE tokens per Limited Use
          during it's mandatory movement. These tokens are deployed directly
          under the flight path of this Bomber Unit.
        </p>
      </div>

      <h3 className="f4 fw7 mb2">Air Units</h3>
      <AircraftTable />

      <h3 className="f4 fw7 mt4 mb2">Aircraft Weapons</h3>
      <AircraftWeaponsTable />
    </div>
  );
};
