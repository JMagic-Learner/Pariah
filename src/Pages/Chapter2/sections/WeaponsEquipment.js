export const WeaponsEquipment = () => {
  return (
    <div>
      <h2 className="f2 fw7 orange bb pb2 mb3">2.4 — Weapons and Equipment</h2>

      <h3 className="f4 fw7 mt3 mb2 tj">Weapons Characteristics</h3>
      <p className="lh-copy tj">
        Weapons in Gundam Flashpoint have the following characteristics.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 orange fw6">
          Name
          <span className="fw4 black"> Self Explanatory</span>
        </li>
        <li className="pv1 orange fw6">
          Type
          <span className="fw4 black"> What type of weapon category</span>
        </li>
        <li className="pv1 orange fw6">
          ROF
          <span className="fw4 black">
            {" "}
            Rate of Fire, or how many attack dice are rolled per{" "}
            <span className="fw6 orange"> [ATTACK] </span>
            declaration
          </span>
        </li>
        <li className="pv1 orange fw6">
          Rangebands
          <span className="fw4 black">
            {" "}
            Divided into four brackets, Short Range | Medium Range | Long Range
            | Extreme Range
          </span>
        </li>
        <li className="pv1 orange fw6">
          Mods
          <span className="fw4 black">
            {" "}
            Divided into four brackets, Short Range Mods | Medium Range Mods |
            Long Range Mods | Extreme Range Mods. Typically ranges from -2 to +2
          </span>
        </li>
        <li className="pv1 orange fw6">
          Damage:{" "}
          <span className="fw4 black">
            How much hit points are subtracted from a hit location
          </span>
        </li>
        <li className="pv1 orange fw6">
          Equipment Tonnage:{" "}
          <span className="fw4 black">How much weight this weapon incurs</span>
        </li>
        <li className="pv1 orange fw6">
          Active FRO:{" "}
          <span className="fw4 black">
            How much FRO a MSU spends to fire this weapon or use this weapon.
          </span>
        </li>
        <li className="pv1 orange fw6">
          MCU (MONETARY CREDIT UNITS) Cost:{" "}
          <span className="fw4 black">How much a weapon typically costs.</span>
        </li>
        <li className="pv1 orange fw6">
          Restrictions:{" "}
          <span className="fw4 black">
            What restrictions are there to purchase this weapon.
          </span>
        </li>
        <li className="pv1 orange fw6">
          Keywords:{" "}
          <span className="fw4 black">
            What special abilities are associated with this weapon
          </span>
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2 tj">Selling Weapons and Equipment</h3>
      <p className="lh-copy tj">
        Each base weapon that comes stock (marked as FREE) on a MSU may be sold,
        but they only refund 10 MCU.
      </p>
      <p className="lh-copy tj">
        Each support equipment that comes stock (marked as FREE) on a MSU may be
        sold for full refund.
      </p>
      <p className="lh-copy tj">
        See Base Calculation costs from the LINKS TAB - Community MSU Folder -
        Creating your own MSU
      </p>

      <h3 className="f4 fw7 mt4 mb2 lh-copy tj">
        Weapon weight classes - [LIGHT] vs [MEDIUM] vs [HEAVY]
      </h3>
      <p className="lh-copy tj">
        The tonnage of certain weapons affect the avaibility of MSU's hands and
        how they perform in{" "}
        <span className="fw6 orange"> [SIMULTANEOUS ATTACK] </span> actions
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 orange fw6">
          [LIGHT] Weapons
          <span className="fw4 black">
            {" "}
            1 - 2 tons. Can be held in one hand.
          </span>
        </li>
        <li className="pv1 orange fw6">
          [MEDIUM] Weapons
          <span className="fw4 black">
            {" "}
            3 - 5 tons. Can be held in one hand
          </span>
        </li>
        <li className="pv1 orange fw6">
          [HEAVY] Weapons
          <span className="fw4 black">
            {" "}
            6+ tons. Requires two hands to wield, unless it is mounted on a
            [HARDPOINT], or has the [BRACE] keyword
          </span>
        </li>
      </ul>

      <h3 className="f4 fw7 mt4 mb2 lh-copy tj">
        Equipping Weapons — <span className="fw6 orange"> [READIED] </span> vs{" "}
        <span className="fw6 orange"> [INBUILT] </span> vs{" "}
        <span className="fw6 orange"> [STOWED] </span> vs{" "}
        <span className="fw6 orange"> [MOUNTED] </span>
      </h3>
      <p className="lh-copy tj">
        Gunpla have numerous ways to equip weapons. The way a weapon is
        held/readied determines how it interacts with certain ACTIONS.
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">[READIED] Weapons</h5>
      <p className="lh-copy tj">
        The most common way for Gunpla and MSU to hold weapons. These are
        weapons physically held by the Gunpla in either arm(s).{" "}
        <span className="fw6 orange"> [READIED] </span>
        weapons allow <span className="fw6 orange"> [SWAP]</span>,{" "}
        <span className="fw6 orange"> [DROP] </span>,{" "}
        <span className="fw6 orange"> [ATTACK] </span>,{" "}
        <span className="fw6 orange"> [SIMULTANEOUS ATTACK]</span> and{" "}
        <span className="fw6 orange"> [REACTIVE ATTACK]</span> actions.{" "}
        <span className="fw6 orange"> [READIED] </span> weapons are slotted into
        the Weapons slot of the hit location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [INBUILT] Weapons (built into the frame)
      </h5>
      <p className="lh-copy tj">
        A somewhat rare feature on Gunpla and MSUs. These are weapons concealed
        or attached directly to the frame of the MSU.{" "}
        <span className="fw6 orange"> [INBUILT] </span> weapons can be used for{" "}
        <span className="fw6 orange"> [ATTACK] </span>,
        <span className="fw6 orange"> [SIMULTANEOUS ATTACK] </span>,{" "}
        <span className="fw6 orange"> [REACTIVE ATTACK] </span>
        actions. <span className="fw6 orange"> [INBUILT] </span> weapons can
        either be slotted into the Weapon slot or the Equipment slot of a hit
        location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [STOWED] Weapons (in storage)
      </h5>
      <p className="lh-copy tj">
        <span className="fw6 orange"> [STOWED] </span> weapons are usually
        represented by racked weapons on the back or any other location. These
        weapons are not readied and therefore cannot be used in{" "}
        <span className="fw6 orange"> [ATTACK] </span> or
        <span className="fw6 orange"> [REACTIVE ATTACK] </span>
        actions. They can however be used for{" "}
        <span className="fw6 orange"> [SWAP]</span> and{" "}
        <span className="fw6 orange"> [DROP] </span>
        actions. <span className="fw6 orange"> [STOWED] </span> weapons can only
        be slotted into the equipment slot of a hit location
      </p>

      <h5 className="f5 fw7 mt3 mb1 lh-copy tj">
        [MOUNTED] Weapons (attached to outer armor)
      </h5>
      <p className=" lh-copy tj">
        Weapons attached via <span className="fw6 orange"> [HARDPOINTS] </span>{" "}
        to the outside of an MSU.{" "}
        <span className="fw6 orange"> [MOUNTED] </span>
        weapons can only be used for{" "}
        <span className="fw6 orange"> [ATTACK] </span> and{" "}
        <span className="fw6 orange"> [SIMULTANEOUS ATTACK] </span> actions.
        <span className="fw6 orange"> [MOUNTED] </span> weapons go into the
        Weapon slot or the Equipment slot of a hit location.
      </p>

      <h3 className="f4 fw7 mt4 mb2 lh-copy tj">
        How to add Support Equipment to your MSU.
      </h3>

      <p className="lh-copy tj">
        Much like weapons, <span className="fw6 orange"> [PILOT]</span>s
        purchase Support Equipment according to MCU, FRO, and Tonnage limits
      </p>

      <p className="lh-copy tj">
        However, Support Equipment may take up more than one slot in a hit
        location.
      </p>

      <ul className="lh-copy pl3 tj">
        <li className="pv1 orange fw6">
          Hit Location 1
          <span className="fw4 black">
            {" "}
            Designates that this Support equipment only goes into that one
            specifeid hit location
          </span>
        </li>
        <li className="pv1 orange fw6">
          Hit Location 1/ Hit Location 2
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment goes into all hit locations
            mentioned.
          </span>
        </li>
        <li className="pv1 orange fw6">
          Both Hit Locations (Legs or Arms)
          <span className="fw4 black">
            {" "}
            Designates that this Support Equipment MUST go into both [LEGS] or
            [ARMS] go into Hit Location 1 and/or Hit Location 2. This Hit
            Location assignment allows the Support Equipment to keep functioning
            even if one of the assigned limbs are lost.
          </span>
        </li>
        <li className="pv1 orange fw6">
          Weapon
          <span className="fw4 black">
            {" "}
            Designates that this support equipment is some sort of weapon
            upgrade or modification. Weapon upgrades do not take a slot, but
            require some notation on the MSU sheet to denote which weapon
            receives the upgrade.
          </span>
        </li>
        <li className="pv1 orange fw6">
          "-----"
          <span className="fw4 black">
            {" "}
            Some support equipment do not have hit locations specified, meaning
            that they can be assigned anywhere that is legal.
          </span>
        </li>
      </ul>
    </div>
  );
};
