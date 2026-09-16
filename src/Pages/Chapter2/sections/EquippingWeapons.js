export const EquippingWeapons = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">
        2.4.4 — Equipping Weapons — <span className="fw6 red"> [READIED] </span>{" "}
        vs <span className="fw6 red"> [INBUILT] </span> vs{" "}
        <span className="fw6 red"> [STOWED] </span> vs{" "}
        <span className="fw6 red"> [MOUNTED] </span>
      </h2>
      <p className="lh-copy tj">
        Gunpla have numerous ways to equip weapons. The way a weapon is
        held/readied determines how it interacts with certain ACTIONS. On the
        Pilot Sheet, weapons equipped to a Gunpla may occupy the same slot as
        long as the weapon's hit location is the same. For example, two Kinetic
        Gatlings mounted on the torso may be clubbed together in one equipment
        or weapon slot.
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">[READIED] Weapons</h5>
      <p className="lh-copy tj">
        The most common way for Gunpla and MSU to hold weapons. These are
        weapons physically held by the Gunpla in either arm(s).{" "}
        <span className="fw6 red"> [READIED] </span>
        weapons allow <span className="fw6 red"> [SWAP]</span>,{" "}
        <span className="fw6 red"> [DROP] </span>,{" "}
        <span className="fw6 red"> [ATTACK] </span>,{" "}
        <span className="fw6 red"> [SIMULTANEOUS ATTACK]</span> and{" "}
        <span className="fw6 red"> [REACTIVE ATTACK]</span> actions.{" "}
        <span className="fw6 red"> [READIED] </span> weapons are slotted into
        the Weapons slot of the hit location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [INBUILT] Weapons (built into the frame)
      </h5>
      <p className="lh-copy tj">
        A somewhat rare feature on Gunpla and MSUs. These are weapons concealed
        or attached directly to the frame of the MSU.{" "}
        <span className="fw6 red"> [INBUILT] </span> weapons can be used for{" "}
        <span className="fw6 red"> [ATTACK] </span>,
        <span className="fw6 red"> [SIMULTANEOUS ATTACK] </span>,{" "}
        <span className="fw6 red"> [REACTIVE ATTACK] </span>
        actions. <span className="fw6 red"> [INBUILT] </span> weapons can either
        be slotted into the Weapon slot or the Equipment slot of a hit location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [STOWED] Weapons (in storage)
      </h5>
      <p className="lh-copy tj">
        <span className="fw6 red"> [STOWED] </span> weapons are usually
        represented by racked weapons on the back or any other location. These
        weapons are not readied and therefore cannot be used in{" "}
        <span className="fw6 red"> [ATTACK] </span> or
        <span className="fw6 red"> [REACTIVE ATTACK] </span>
        actions. They can however be used for{" "}
        <span className="fw6 red"> [SWAP]</span> and{" "}
        <span className="fw6 red"> [DROP] </span>
        actions. <span className="fw6 red"> [STOWED] </span> weapons can only be
        slotted into the equipment slot of a hit location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [MOUNTED] Weapons (attached to outer armor)
      </h5>
      <p className=" lh-copy tj">
        Weapons attached via <span className="fw6 red"> [HARDPOINTS] </span> to
        the outside of an MSU. <span className="fw6 red"> [MOUNTED] </span>
        weapons can only be used for <span className="fw6 red">
          {" "}
          [ATTACK]{" "}
        </span>{" "}
        and <span className="fw6 red"> [SIMULTANEOUS ATTACK] </span> actions.
        <span className="fw6 red"> [MOUNTED] </span> weapons go into the Weapon
        slot or the Equipment slot of a hit location.
      </p>
    </div>
  );
};
