import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const SUPPORT = [
  {
    name: "Advanced Fire Solutions",
    loc: "Head/Torso",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 50,
    effect: 'When this MSU moves <8", +1 to Gunnery.',
  },
  {
    name: "Aim Assist",
    loc: "Head/Torso",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 55,
    effect: "Aim is a free action but costs 1 additional FRO.",
  },
  {
    name: "ALICE System",
    loc: "Torso",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 75,
    effect:
      "+1 Gunnery and Brawl if [PILOT] did not purchase Brawl/Gunnery/Newtype traits.",
  },
  {
    name: "AMS",
    loc: "Arm/Torso",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 25,
    effect:
      'At Step 1.1 of the Status Phase, roll PS 5 for each enemy MISSILE token within 18"; remove on success.',
  },
  {
    name: "Anti-Beam Coating Kit",
    loc: "Any",
    ton: "–",
    pfro: "–",
    qty: 5,
    mcu: 10,
    effect:
      "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields",
  },
  {
    name: "Arms (Extra)",
    loc: "Shoulder/Torso",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 30,
    effect: "Add a pair of arms; each can hold one weapon.",
  },
  {
    name: "Beam Shields (20 Armor)",
    loc: "Arm",
    ton: 2,
    pfro: 2,
    qty: 1,
    mcu: 50,
    effect:
      "Reduce Beam damage by 10. Regenerate 10 Shield Armor at Step 0 of Status Phase.",
  },
  {
    name: "Brutal",
    loc: "Melee Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect:
      "Add AP(2) to one non-beam melee weapon. If this weapon already has AP(X), instead add AP(X+2)",
  },
  {
    name: "Beam Focus",
    loc: "Melee Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect:
      'Spend (X) FRO to increase melee range of a beam weapon by 3" and damage by (X)',
  },
  {
    name: "CAMO Cloak",
    loc: "Torso",
    ton: "-",
    pfro: "",
    qty: 1,
    mcu: 35,
    effect:
      "In the deployment phase, MSU equipped with the CAMO Cloak may deploy after the opponent has finished deploying their entire force",
  },
  {
    name: "Command Protocol",
    loc: "Torso",
    ton: 3,
    pfro: "–",
    qty: 1,
    mcu: 50,
    effect:
      "[COMMANDER] can perform the RALLY action for free at Step 1.1 of the Status Phase.",
  },
  {
    name: "Cyclic",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect:
      "+1 ROF to Rifle/MG/SMG/Pistol/Grenade Launcher type weapons. If two [CYCLIC] upgrades are given to a beam rifle, increase active FRO cost by 1 ",
  },
  {
    name: "[COUNTERSTRIKE]",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect: "Add [COUNTERSTRIKE] keyword to one melee weapon.",
  },
  {
    name: "ECM/ECCM",
    loc: "Torso",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 25,
    effect:
      'End of Status Phase: roll PS 6; all friendly within 8" gain +1 EVA vs ranged weapons this round.',
  },
  {
    name: "Emergency Proximity System",
    loc: "Legs (Both)",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 45,
    effect: 'Once per round when an enemy enters within 12", BOOST[6].',
  },
  {
    name: "Enhanced Visors",
    loc: "Head",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 50,
    effect: "All ranged weapons are treated as having [SCOPE].",
  },
  {
    name: "Enhanced Ejection",
    loc: "Torso",
    ton: 1,
    pfro: "–",
    qty: 1,
    mcu: 30,
    effect:
      "When destroyed, nearby friendly MSUs do not roll for [FEAR/SHAKEN].",
  },
  {
    name: "Enhanced Fusion Reactors",
    loc: "Torso",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 35,
    effect: "Increase FRO by 2.",
  },
  {
    name: "Extra Armor [10]",
    loc: "Any",
    ton: 2,
    pfro: "–",
    qty: 5,
    mcu: 10,
    effect: "Add 10 Armor to one hit location.",
  },
  {
    name: "EXAM System",
    loc: "Torso",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 35,
    effect: "When targeting a Newtype/CyberNewtype [PILOT], +1 GS, BR, and PS.",
  },
  {
    name: "Firing Drills",
    loc: "Any",
    ton: 1,
    pfro: "–",
    qty: 1,
    mcu: 50,
    effect:
      "If target is already declared as an attack target this round, +1 GS.",
  },
  {
    name: "Flares",
    loc: "Any",
    ton: 1,
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect:
      'Deploy Flare token within 8"; enemy missiles can rotate 45* if possible and move toward it. LIMITED USE[1].',
  },
  {
    name: "Forward Observer",
    loc: "Torso",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 35,
    effect: "See Forward Observe Action (Section 3.7).",
  },
  {
    name: "[GRIP] Upgrade",
    loc: "[INBUILT]/A",
    ton: 0,
    pfro: "–",
    qty: "–",
    mcu: 25,
    effect: "Add [GRIP] keyword to one ranged weapon.",
  },
  {
    name: "Hardpoints",
    loc: "Any",
    ton: 0,
    pfro: "–",
    qty: 6,
    mcu: 30,
    effect: "Add one hardpoint slot for a [MOUNTABLE weapon.",
  },
  {
    name: "Heavy Boosters",
    loc: "Legs/Torso",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 25,
    effect: "BOOST[1] becomes BOOST[2].",
  },
  {
    name: "High Velocity/Missile",
    loc: "[INBUILT]/A",
    ton: 1,
    pfro: "–",
    qty: 1,
    mcu: 30,
    effect: "[MISSILE(X)] becomes MISSILE[X+6].",
  },
  {
    name: "Hover Platform",
    loc: "Legs (Both)",
    ton: 3,
    pfro: 2,
    qty: 1,
    mcu: 45,
    effect:
      "Omnidirectional movement; prevents CROUCHED state.Can now turn facing for 1 inch move",
  },
  {
    name: "[INBUILT] Field",
    loc: "Shoulder/Torso",
    ton: 2,
    pfro: 3,
    qty: 1,
    mcu: 75,
    effect:
      "Deploy [INBUILT] Field at any phase: nullifies all beam attacks for one round. LIMITED USE[1].",
  },
  {
    name: "Impact",
    loc: "Melee Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect: "Increase tonnage by 3; weapon gains IMPACT[3].",
  },
  {
    name: "Inertia Redirection System",
    loc: "Legs (Both)",
    ton: 3,
    pfro: "–",
    qty: 1,
    mcu: 25,
    effect: 'Turn base facing costs 1" instead of 2" during [MOVEMENT].',
  },
  {
    name: "[LETHAL] Upgrade",
    loc: "Weapons",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect: "Add [LETHAL] keyword to one melee weapon.",
  },
  {
    name: "Missile Arming Upgrade",
    loc: "Weapon",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 50,
    effect: 'Missiles reduce minimum range by 5".',
  },
  {
    name: "Missile Proximity",
    loc: "Weapon",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 65,
    effect: "Missiles detonate within AOE range of target.",
  },
  {
    name: "Munitions Racks",
    loc: "Weapon",
    ton: 2,
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect: "Increase [LIMITED USE(X)] of two weapons by 1.",
  },
  {
    name: "Nanolaminate Chaff",
    loc: "Torso",
    ton: 2,
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect:
      'Deploy 8" chaff cloud blocking LOS and detonating missiles. LIMITED USE[1].',
  },
  {
    name: "Panoptic Canopy",
    loc: "Torso",
    ton: 2,
    pfro: 0,
    qty: 1,
    mcu: 50,
    effect: "360° LOS but still fires from front arc only.",
  },
  {
    name: "Pistol Caliber",
    loc: "Weapons",
    ton: "–",
    pfro: "–",
    qty: 4,
    mcu: 15,
    effect: "Pistols gain [[PRECISE]] and [LETHAL], +4 damage.",
  },
  {
    name: "[PRECISE] Upgrade",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect: "Add [PRECISE] to one weapon that has [SCOPE].",
  },
  {
    name: "Predictive Fire Control",
    loc: "Torso",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 45,
    effect: "+1 mod to [REACTIVE ATTACKS] with ranged weapons.",
  },
  {
    name: "Proximity Mines",
    loc: "–",
    ton: 2,
    pfro: "–",
    qty: 3,
    mcu: 20,
    effect:
      'MSU moving within 4" takes 15 damage to both LEG locations. LIMITED USE[1], AOE[4]. [DEPLOYABLE]',
  },
  {
    name: "Psycommu Funnel/Bit",
    loc: "Torso",
    ton: 3,
    pfro: 2,
    qty: 1,
    mcu: 75,
    effect: "Requires NEWTYPE/CYBER-NEWTYPE trait; deploy 2 bits as weapons.",
  },
  {
    name: "Quasi Psycommu System",
    loc: "Torso",
    ton: 3,
    pfro: 3,
    qty: 1,
    mcu: 120,
    effect: "Access to INCOMS Beam/Shield Bits without Newtype trait.",
  },
  {
    name: "[QUICK SWAP] Upgrade",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: "–",
    mcu: 15,
    effect: "Add [QUICK SWAP] to one [LIGHT] or [MEDIUM] weapon.",
  },
  {
    name: "Recoil Counterbalance",
    loc: "Arms (Both)",
    ton: 1,
    pfro: 1,
    qty: 1,
    mcu: 35,
    effect: "[FULL AUTO] weapons do not incur the -2 hit modifier.",
  },
  {
    name: "Reinforced Hydraulics",
    loc: "Legs (Both)",
    ton: 1,
    pfro: "–",
    qty: 1,
    mcu: 15,
    effect: 'No fall damage from heights up to 24".',
  },
  {
    name: "Scope Upgrade",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: "–",
    mcu: 15,
    effect: "Add [SCOPE] to one ranged weapon.",
  },
  {
    name: "Shields [20]",
    loc: "Arm",
    ton: 2,
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect:
      "When damage is assigned to the Torso, or the respective's attached arm's side (left leg + left arm example), assign all damage dealth (even with cleave and AOE) to the shield. Shields occupy a weapon slot.",
  },
  {
    name: "Shields {Hit Location) [20]",
    loc: "Arm",
    ton: 2,
    pfro: "–",
    qty: 2,
    mcu: 15,
    effect:
      "Same as above, but replace `Torso, or the respective's attached arm's side (left leg + left arm example)` with the [HIT LOCATION]",
  },
  {
    name: "Shields [20, [DEPLOYABLE]]",
    loc: "Arms",
    ton: 2,
    pfro: "–",
    qty: 2,
    mcu: 20,
    effect:
      "Same as Shields (20); additionally provides [BRACE] and HARD COVER. [DEPLOYABLE]",
  },
  {
    name: "Shields (HEAVY) [30]",
    loc: "Arm",
    ton: 5,
    pfro: "–",
    qty: 1,
    mcu: 25,
    effect:
      "When damage is assigned to the Torso, or to the attached arm's respective side (meaning a shield can cover left leg and left arm simulatenously), assign all damage dealt. Cleave and AOE damage is assigned to the shield in this case. Shields occupy a weapon slot. RESTRICTED TO AU BU QU ROYAL GUARD",
  },
  {
    name: "Side Verniers",
    loc: "Arms/Legs/Torso",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 40,
    effect: "No movement penalty sideways; can BOOST sideways.",
  },
  {
    name: "Spiky Shoulders",
    loc: "Arm",
    ton: 1,
    pfro: "–",
    qty: 1,
    mcu: 25,
    effect: "[BLITZ] collision: 15 damage + 1 per 3 inches traveled.",
  },
  {
    name: "Stealth System",
    loc: "Head/Torso",
    ton: 3,
    pfro: 1,
    qty: 1,
    mcu: 55,
    effect: 'Gain [STEALTH] state when moving <8".',
  },
  {
    name: "[SUPPRESSIVE] Upgrade",
    loc: "Weapon",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect: "One [FULL AUTO] weapon gains [SUPPRESSIVE] keyword.",
  },
  {
    name: "Slugger",
    loc: "Weapons",
    ton: "–",
    pfro: "–",
    qty: 2,
    mcu: 25,
    effect:
      "Shotguns lose [[CLUSTER]], gain ROF 2; Arm Cannons/Shotguns gain AP 10.",
  },
  {
    name: "Tactical Data Uplink",
    loc: "Torso",
    ton: 2,
    pfro: 1,
    qty: 1,
    mcu: 50,
    effect: "Determine rangebands from any friendly MSU with LOS.",
  },
  {
    name: "Target Designator",
    loc: "Head",
    ton: 2,
    pfro: "–",
    qty: 1,
    mcu: 40,
    effect: "Allows Airstrike action. LIMITED USE[1].",
  },
];

export const SupportEquipmentTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div className={classNames("", { "flex mt5": !isMobile, mt2: isMobile })}>
      <div className="center w-100">
        <div className="mh3">
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Location
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Passive FRO
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Qty
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white tc">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {SUPPORT.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                    >
                      <td className="pv3 pr3 bb b--black-20 fw6 nowrap">
                        {item.name}
                      </td>
                      <td className="pv3 pr3 bb b--black-20">{item.loc}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.ton}</td>
                      <td className="pv3 pr3 bb b--black-20 tc dark-red fw6">
                        {item.pfro}
                      </td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.qty}</td>
                      <td className="pv3 pr3 bb b--black-20 tc">{item.mcu}</td>
                      <td className="pv3 pr3 bb b--black-20 lh-copy">
                        {item.effect}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {isMobile && (
            <div className="w-100">
              {SUPPORT.map((item, i) => (
                <div key={i} className="mb2 pa3 ba b--black-10 bg-near-white">
                  <p className="fw7 ma0 mb1">{item.name}</p>
                  <p className="ma0 f7 dark-red mb1">
                    {item.loc} · Ton {item.ton} · P.FRO {item.pfro} · Qty{" "}
                    {item.qty} · {item.mcu} MCU
                  </p>
                  <p className="ma0 f7 lh-copy">{item.effect}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
