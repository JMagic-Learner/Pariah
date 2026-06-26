import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const RANGED_COLUMNS = [
  { header: "Name", key: "name", bold: true },
  { header: "Type", key: "type" },
  { header: "ROF", key: "rof", tc: true },
  { header: "Range Bands", key: "range" },
  { header: "MOD", key: "mod" },
  { header: "DAM", key: "dam", tc: true },
  { header: "Ton", key: "ton", tc: true },
  { header: "Active FRO", key: "fro", tc: true, accent: true },
  { header: "MCU", key: "mcu", tc: true },
  { header: "Faction", key: "faction", tc: true },
  { header: "Keywords", key: "keywords", lh: true },
];

const RANGED = [
  {
    name: "Atomic Bazooka",
    type: "Cannon",
    rof: 1,
    range: "18|36|90|180",
    mod: "-3|-2|-1|+0",
    dam: 100,
    ton: 12,
    fro: 8,
    mcu: 150,
    faction: "–",
    keywords: "AOE(25), Limited Use[2]",
  },
  {
    name: "Arm Cannon",
    type: "Cannon",
    rof: 3,
    range: "12|24|–|–",
    mod: "+1|+0|–|–",
    dam: 10,
    ton: 2,
    fro: "–",
    mcu: 25,
    faction: "–",
    keywords: "AOE(6) or AP(5), Inbuilt, Quick Swap, Limited Use[1]",
  },
  {
    name: "Arm Rotary Cannon",
    type: "Cannon",
    rof: 5,
    range: "15|25|35|–",
    mod: "+1|+0|-1|–",
    dam: 6,
    ton: 2,
    fro: "–",
    mcu: 25,
    faction: "–",
    keywords: "Inbuilt, Quick Swap",
  },
  {
    name: "Bazooka",
    type: "Cannon",
    rof: 2,
    range: "12|24|36|48",
    mod: "-1|+0|+1|-2",
    dam: 15,
    ton: 8,
    fro: "–",
    mcu: 50,
    faction: "–",
    keywords: "AOE(6), Brace",
  },
  {
    name: "Bazooka (Hyper)",
    type: "Cannon",
    rof: 2,
    range: "12|24|36|48",
    mod: "-1|+1|+0|-2",
    dam: 10,
    ton: 8,
    fro: "–",
    mcu: 75,
    faction: "–",
    keywords: "AP(5), Brace",
  },
  {
    name: "Beam Cannon",
    type: "Cannon",
    rof: 1,
    range: "12|24|36|48",
    mod: "-2|+0|+1|+0",
    dam: 19,
    ton: 4,
    fro: 3,
    mcu: 75,
    faction: "–",
    keywords: "Mountable",
  },
  {
    name: "Beam Magnum",
    type: "Rifle",
    rof: 1,
    range: "15|30|45|60",
    mod: "-1|+2|+1|+0",
    dam: 20,
    ton: 4,
    fro: 4,
    mcu: 55,
    faction: "EF",
    keywords: "Scope",
  },
  {
    name: "Cannon",
    type: "Cannon",
    rof: 2,
    range: "12|24|36|48",
    mod: "-2|+1|+1|+0",
    dam: 18,
    ton: 8,
    fro: "–",
    mcu: 70,
    faction: "–",
    keywords: "AP(5), Mountable",
  },
  {
    name: "Gatling (Beam)",
    type: "MG",
    rof: 6,
    range: "18|36|54|72",
    mod: "-2|+1|+2|-1",
    dam: 8,
    ton: 4,
    fro: 4,
    mcu: 85,
    faction: "–",
    keywords: "Full Auto, Suppressive, Grip",
  },
  {
    name: "Gatling (Kinetic)",
    type: "MG",
    rof: 8,
    range: "18|36|54|72",
    mod: "-2|+2|+1|-2",
    dam: 6,
    ton: 6,
    fro: "–",
    mcu: 65,
    faction: "–",
    keywords: "Full Auto, Suppressive, Grip",
  },
  {
    name: "Grenade Launcher",
    type: "Grenade",
    rof: "2d3",
    range: "18|36|54|–",
    mod: "+2|+1|+0|–",
    dam: "Munitions",
    ton: 2,
    fro: "–",
    mcu: 20,
    faction: "–",
    keywords: "Indirect, Limited Use[3]",
  },
  {
    name: "Grenades",
    type: "Grenade",
    rof: "2d3",
    range: "(18)|(36)|–|–",
    mod: "+2|+0|–|–",
    dam: "Munitions",
    ton: 1,
    fro: "–",
    mcu: 15,
    faction: "–",
    keywords: "Indirect, Quick Swap, Limited Use[1], Thrown",
  },
  {
    name: "Homing Missiles",
    type: "Missile",
    rof: 2,
    range: 'Min Band 16"',
    mod: "–",
    dam: "Munitions",
    ton: 5,
    fro: "–",
    mcu: "–",
    faction: "–",
    keywords: "MISSILE[12], Guided, Mountable",
  },
  {
    name: "Hypersonic Missiles",
    type: "Missile",
    rof: 1,
    range: 'Min Band 24"',
    mod: "–",
    dam: 20,
    ton: 6,
    fro: "–",
    mcu: 55,
    faction: "–",
    keywords: "MISSILE[24], Mountable, Indirect",
  },
  {
    name: "MG",
    type: "MG",
    rof: 5,
    range: "15|30|45|60",
    mod: "+0|+1|+1|-1",
    dam: 6,
    ton: 3,
    fro: "–",
    mcu: 40,
    faction: "–",
    keywords: "Full Auto",
  },
  {
    name: "MG (Heavy)",
    type: "MG",
    rof: 5,
    range: "15|30|45|60",
    mod: "-2|+2|+1|+0",
    dam: 8,
    ton: 6,
    fro: "–",
    mcu: 65,
    faction: "–",
    keywords: "Full Auto",
  },
  {
    name: "Missile Pods ×2",
    type: "Missile",
    rof: 2,
    range: 'Min Band 16"',
    mod: "–",
    dam: "Munitions",
    ton: 1,
    fro: "–",
    mcu: 15,
    faction: "–",
    keywords: "MISSILE[16], Mountable, Limited Use[1]",
  },
  {
    name: "Missile Pods ×3",
    type: "Missile",
    rof: 3,
    range: 'Min Band 16"',
    mod: "–",
    dam: "Munitions",
    ton: 2,
    fro: "–",
    mcu: 25,
    faction: "–",
    keywords: "MISSILE[16], Mountable, Limited Use[1]",
  },
  {
    name: "Missile Pods ×8",
    type: "Missile",
    rof: 8,
    range: 'Min Band 16"',
    mod: "–",
    dam: "Munitions",
    ton: 4,
    fro: "–",
    mcu: 40,
    faction: "–",
    keywords: "MISSILE[16], Mountable, Limited Use[1]",
  },
  {
    name: "Missile Pods ×10",
    type: "Missile",
    rof: 10,
    range: 'Min Band 16"',
    mod: "–",
    dam: "Munitions",
    ton: 5,
    fro: "–",
    mcu: 50,
    faction: "–",
    keywords: "MISSILE[16], Mountable, Limited Use[1]",
  },
  {
    name: "PanzerFaust",
    type: "Missile",
    rof: 1,
    range: 'Min Band 9"',
    mod: "–",
    dam: 12,
    ton: 1,
    fro: 1,
    mcu: 10,
    faction: "ZEON",
    keywords: "MISSILE[18], AP(5), Mountable, Limited Use[1]",
  },
  {
    name: "Pistol (Ballistic)",
    type: "Pistol",
    rof: 2,
    range: "12|24|36|–",
    mod: "+2|+1|-1|–",
    dam: 5,
    ton: 1,
    fro: "–",
    mcu: 10,
    faction: "–",
    keywords: "Akimbo, Quick Draw",
  },
  {
    name: "Pistol (Beam)",
    type: "Pistol",
    rof: 1,
    range: "18|36|54|–",
    mod: "+1|+2|-1|–",
    dam: 6,
    ton: 1,
    fro: 1,
    mcu: 25,
    faction: "–",
    keywords: "Akimbo, Quick Draw",
  },
  {
    name: "Psychommu Hands",
    type: "Newtype",
    rof: 5,
    range: "32|64|96|–",
    mod: "+0|+2|+0|–",
    dam: 12,
    ton: 5,
    fro: 4,
    mcu: 65,
    faction: "ZEON",
    keywords: "Psycommu System, AP(5)",
  },
  {
    name: "Rail Gun",
    type: "Cannon",
    rof: 1,
    range: "18|36|90|180",
    mod: "-1|+0|+1|+2",
    dam: 30,
    ton: 10,
    fro: 2,
    mcu: 100,
    faction: "–",
    keywords: "AP(10), Brace",
  },
  {
    name: "Rifle (Anti-Mat)",
    type: "Rifle",
    rof: 1,
    range: "12|24|36|48",
    mod: "+0|+2|+1|+0",
    dam: 15,
    ton: 6,
    fro: "–",
    mcu: 50,
    faction: "–",
    keywords: "Grip, AP(5) OR AOE(6)",
  },
  {
    name: "Rifle (Beam)",
    type: "Rifle",
    rof: 1,
    range: "15|45|60|90",
    mod: "-1|+2|+0|-1",
    dam: 16,
    ton: 3,
    fro: 3,
    mcu: 25,
    faction: "–",
    keywords: "–",
  },
  {
    name: "Rifle (Kinetic)",
    type: "Rifle",
    rof: 3,
    range: "15|30|45|60",
    mod: "+0|+2|+1|+0",
    dam: 8,
    ton: 4,
    fro: "–",
    mcu: 15,
    faction: "–",
    keywords: "–",
  },
  {
    name: "Rifle (Marksman)",
    type: "Rifle",
    rof: 2,
    range: "12|30|60|90",
    mod: "-2|+0|+2|+1",
    dam: 12,
    ton: 4,
    fro: "–",
    mcu: 25,
    faction: "–",
    keywords: "Scope, Grip",
  },
  {
    name: "Shotgun (Ballistic)",
    type: "Shotgun",
    rof: "2d3",
    range: "12|24|36|–",
    mod: "+3|+0|-2|–",
    dam: 7,
    ton: 2,
    fro: "–",
    mcu: 15,
    faction: "–",
    keywords: "Grip, Akimbo, Cluster",
  },
  {
    name: "Shotgun (Beam)",
    type: "Shotgun",
    rof: "2d3",
    range: "15|30|45|–",
    mod: "+3|+1|-1|–",
    dam: 7,
    ton: 1,
    fro: 2,
    mcu: 35,
    faction: "–",
    keywords: "Grip, Akimbo, Cluster",
  },
  {
    name: "SMG (Beam)",
    type: "SMG",
    rof: 4,
    range: "16|32|48|–",
    mod: "+2|+0|-2|–",
    dam: 5,
    ton: 1,
    fro: 2,
    mcu: 35,
    faction: "–",
    keywords: "Full Auto, Akimbo, Burst[2]",
  },
  {
    name: "SMG (Kinetic)",
    type: "SMG",
    rof: 6,
    range: "14|28|42|–",
    mod: "+2|+0|-2|–",
    dam: 4,
    ton: 2,
    fro: "–",
    mcu: 15,
    faction: "–",
    keywords: "Full Auto, Akimbo, Burst[2]",
  },
  {
    name: "Sniper Rifle (Anti-Ship)",
    type: "Sniper",
    rof: 1,
    range: "18|36|90|180",
    mod: "-2|+1|+2|+2",
    dam: 25,
    ton: 8,
    fro: "–",
    mcu: 125,
    faction: "–",
    keywords: "AP(5), Slow Reload, Scope, Mountable",
  },
  {
    name: "Sniper Rifle (Beam)",
    type: "Sniper",
    rof: 1,
    range: "15|45|90|180",
    mod: "-2|+2|+2|+0",
    dam: 25,
    ton: 6,
    fro: 4,
    mcu: 100,
    faction: "–",
    keywords: "Scope, Grip, Precise",
  },
  {
    name: "Sniper Rifle (Kinetic)",
    type: "Sniper",
    rof: 2,
    range: "15|45|90|180",
    mod: "-1|+1|+2|+0",
    dam: 18,
    ton: 7,
    fro: "–",
    mcu: 70,
    faction: "–",
    keywords: "AP(5), Scope, Grip, Precise",
  },
  {
    name: "Vulcan Cannons",
    type: "MG",
    rof: 3,
    range: "6|24|36|–",
    mod: "+2|+1|-1|–",
    dam: 3,
    ton: 0,
    fro: 0,
    mcu: "FREE",
    faction: "EF",
    keywords: "Full Auto, Inbuilt",
  },
];

const MELEE = [
  {
    name: "CQC Weapon",
    type: "Any",
    rof: 2,
    range: '0–4"',
    mod: "+1",
    dam: 10,
    ton: 2,
    fro: "–",
    mcu: 10,
    keywords: "Cleave",
  },
  {
    name: "Heavy Weapon",
    type: "Any",
    rof: 1,
    range: '0–4"',
    mod: "+1",
    dam: 20,
    ton: 3,
    fro: "–",
    mcu: 35,
    keywords: "Impact[2]",
  },
  {
    name: "Pile Bunker",
    type: "Any",
    rof: 1,
    range: '0–4"',
    mod: "+0",
    dam: 30,
    ton: 4,
    fro: "–",
    mcu: 45,
    keywords: "AP(10)",
  },
  {
    name: "Heat Hawk",
    type: "Axe",
    rof: 2,
    range: '0–3"(12)',
    mod: "+0",
    dam: 10,
    ton: 1,
    fro: 1,
    mcu: 10,
    faction: "ZEON",
    keywords: "Akimbo, Quick Draw, Cleave, Throw",
  },
  {
    name: "Heat Blade",
    type: "Sword",
    rof: 2,
    range: '0–4"',
    mod: "+1",
    dam: 12,
    ton: 3,
    fro: 1,
    mcu: 20,
    faction: "ZEON",
    keywords: "Cleave, Lethal",
  },
  {
    name: "Beam Hawk",
    type: "Axe",
    rof: 2,
    range: '0–3"',
    mod: "+0",
    dam: 15,
    ton: 1,
    fro: 1,
    mcu: 25,
    faction: "ZEON",
    keywords: "Akimbo, Quick Draw, Cleave",
  },
  {
    name: "Hand(s)",
    type: "Hands",
    rof: 2,
    range: '0–2"',
    mod: "+0",
    dam: 5,
    ton: 0,
    fro: 0,
    mcu: 0,
    keywords: "Quick Draw, Akimbo",
  },
  {
    name: "Gauntlets",
    type: "Hands",
    rof: 2,
    range: '0–2"',
    mod: "+1",
    dam: 10,
    ton: 1,
    fro: "–",
    mcu: 15,
    keywords: "Akimbo, AP(5)",
  },
  {
    name: "Combat Knife",
    type: "Knife",
    rof: 3,
    range: '0–2"(12)',
    mod: "+2",
    dam: 7,
    ton: 0,
    fro: "–",
    mcu: 10,
    keywords: "Akimbo, Quick Draw, Throw, Precise, Counterstrike",
  },
  {
    name: "Beam Knife",
    type: "Knife",
    rof: 3,
    range: '0–2"',
    mod: "+2",
    dam: 8,
    ton: 0,
    fro: 1,
    mcu: 15,
    keywords: "Akimbo, Quick Draw, Precise, Lethal, Counterstrike",
  },
  {
    name: "Lance",
    type: "Lance",
    rof: 1,
    range: '0–8"',
    mod: "+2",
    dam: 13,
    ton: 3,
    fro: "–",
    mcu: 15,
    keywords: "AP(5), Precise, Lethal",
  },
  {
    name: "Beam Sabre",
    type: "Sword",
    rof: 1,
    range: '0–4"',
    mod: "+1",
    dam: 15,
    ton: 1,
    fro: 1,
    mcu: 20,
    keywords: "Cleave",
  },
  {
    name: "Beam Whip",
    type: "Whip",
    rof: 2,
    range: '0–8"',
    mod: "+0",
    dam: 10,
    ton: 1,
    fro: 2,
    mcu: 35,
    keywords: "–",
  },
  {
    name: "Chain Mines",
    type: "Whip",
    rof: 1,
    range: '0–8"',
    mod: "+0",
    dam: 15,
    ton: 1,
    fro: "–",
    mcu: 40,
    faction: "ZEON",
    keywords: "AP(5), Limited Use[3]",
  },
  {
    name: "Mace",
    type: "Mace",
    rof: 2,
    range: '0–3"',
    mod: "+2",
    dam: 10,
    ton: 2,
    fro: "–",
    mcu: 15,
    keywords: "Impact[2]",
  },
  {
    name: "Restraint Cables",
    type: "Whip",
    rof: 1,
    range: '0–15"',
    mod: "+1",
    dam: "N/A",
    ton: 1,
    fro: "–",
    mcu: 10,
    keywords: 'Inbuilt; MSU pulled 6" closer',
  },
];

export const RangedWeaponTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div className="center">
        <div className="mh3">
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      ROF
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Rangebands
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Mods
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Dam
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Active FRO
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Faction
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Keywords
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {RANGED.map((weapon) => {
                    return (
                      <>
                        <tr>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.name}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.type}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.rof}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.range}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mod}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.dam}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.ton}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.fro}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mcu}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.faction || "NA"}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.keywords || "NA"}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {isMobile && (
            <div className="w-100">
              {RANGED.map((entry) => {
                return (
                  <div className="bg-dark-gray pv3">
                    <a
                      href="#my-drawer"
                      className="pa3 bg-dark-gray white bn br2 pointer"
                    >
                      {entry.tier}
                    </a>
                    <div id="my-drawer" className="drawer-css-only">
                      <a
                        href="#"
                        className="close-btn absolute top-1 right-2 f1 blue"
                      >
                        ×
                      </a>
                      <div className="pa3 mt5">
                        <h2 className="f4 bg-near-black white mv0 pv2 ph3">
                          Name: {entry?.name}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost / Sanding: {entry?.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Effects (3+): {entry?.effect}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Restrictions: {entry?.restriction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const MeleeWeaponTable = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div className="center">
        <div className="mh3">
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Type
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      ROF
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Rangebands
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Mods
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Dam
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Ton
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Active FRO
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      MCU
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Faction
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Keywords
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {MELEE.map((weapon) => {
                    return (
                      <>
                        <tr>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.name}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.type}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.rof}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.range}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mod}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.dam}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.ton}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.fro}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.mcu}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.faction || "NA"}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {weapon.keywords || "NA"}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {isMobile && (
            <div className="w-100">
              {MELEE.map((entry) => {
                return (
                  <div className="bg-dark-gray pv3">
                    <a
                      href="#my-drawer"
                      className="pa3 bg-dark-gray white bn br2 pointer"
                    >
                      {entry.tier}
                    </a>
                    <div id="my-drawer" className="drawer-css-only">
                      <a
                        href="#"
                        className="close-btn absolute top-1 right-2 f1 blue"
                      >
                        ×
                      </a>
                      <div className="pa3 mt5">
                        <h2 className="f4 bg-near-black white mv0 pv2 ph3">
                          Name: {entry?.name}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost / Sanding: {entry?.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Effects (3+): {entry?.effect}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Restrictions: {entry?.restriction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
