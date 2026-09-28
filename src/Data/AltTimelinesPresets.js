import { blankEquip } from "./PresetHelpers";
const B = blankEquip;

// ─── Mafty ───────────────────────────────────────────────────────────────────
export const AltTimelinesPresets = [
  {
    id: "OZ_00MS_Tallgeese",
    name: "OZ-00MS Tallgeese",
    faction: "GUNDAM WING",
    data: {
      msuName: "OZ-00MS Tallgeese",
      mobileSuit: "OZ-00MS Tallgeese",
      mcu: "150",
      fro: "7",
      tonnageLimit: "25",
      movement: '7"',
      armorValue: "25",
      baseEquip: [
        {
          name: "Rifle (Anti-Mat) [CYCLIC + MOUNTED]",
          mcuCost: "FREE",
          fro: "",
          tonnage: "6",
          notes:
            "[CYCLIC],[MOUNTED],[GRIP],[AP(5)] OR [AOE(6)] or [ANTI-MATERIAL]",
        },
        {
          name: "Shield",
          mcuCost: "FREE",
          fro: "",
          tonnage: "6",
          notes:
            "When damage is assigned to the Torso, or to the attached arm's respective side (meaning a shield can cover left leg and left arm simulatenously), assign all damage dealt. Cleave and AOE damage is assigned to the shield in this case",
        },
        {
          name: "Heavy Boosters",
          mcuCost: "FREE",
          fro: "",
          tonnage: "5",
          notes: "[BOOST(1)] becomes [BOOST(2)]",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        B(),
        B(),
      ],
      addlEquip: [B(), B(), B(), B(), B(), B(), B(), B()],
      locations: {
        head: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["", "", ""],
        },
        torso: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["Heavy Boosters", "", ""],
        },
        rightArm: {
          current: "25",
          max: "25",
          weapon: "Rifle (Anti-Mat) [CYCLIC + MOUNTED]",
          equipment: ["", "", ""],
        },
        leftArm: {
          current: "25",
          max: "25",
          weapon: "Shield",
          equipment: ["Beam Saber (Stowed)", "Beam Saber (Stowed)", ""],
        },
        rightLeg: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["Heavy Boosters", "", ""],
        },
        leftLeg: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["Heavy Boosters", "", ""],
        },
      },
    },
  },
  {
    id: "X-EX01 Gundam Calibarn",
    name: "X-EX01 Gundam Calibarn",
    faction: "Witch from Mercury",
    data: {
      msuName: "X-EX01 Gundam Calibarn",
      mobileSuit: "X-EX01 Gundam Calibarn",
      mcu: "200",
      fro: "7",
      tonnageLimit: "23",
      movement: '8"',
      armorValue: "23",
      baseEquip: [
        {
          name: "Beam Cannon [Extended Barrel]",
          mcuCost: "FREE",
          fro: "3",
          tonnage: "6",
          notes: "[MOUNTABLE],[BEAM FOCUS]",
        },
        {
          name: "Shield Bit x4",
          mcuCost: "FREE",
          fro: "",
          tonnage: "-",
          notes: "",
        },
        {
          name: "Beam Bit x2",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes: "",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        {
          name: "Extra Arm (1)",
          mcuCost: "FREE",
          fro: "-",
          tonnage: "1",
          notes:
            "Add an extra arm; each can hold one weapon or support equipment.",
        },
        {
          name: "GUND Format (Alice System)",
          mcuCost: "FREE",
          fro: "1 PFRO",
          tonnage: "4",
          notes:
            "+1 Gunnery and Brawl if [PILOT] did not purchase Brawl/Gunnery/Newtype traits.",
        },
        B(),
      ],
      addlEquip: [B(), B(), B(), B(), B(), B(), B(), B()],
      locations: {
        head: {
          current: "23",
          max: "23",
          weapon: "",
          equipment: ["", "", ""],
        },
        torso: {
          current: "23",
          max: "23",
          weapon: "Beam Bit x 4",
          equipment: ["Beam Saber x2 (Stowed)", "Extra Arm (1)", "GUND Format"],
        },
        rightArm: {
          current: "23",
          max: "23",
          weapon: "Beam Cannon [Extended Barrel]",
          equipment: ["Shield Bit", "", ""],
        },
        leftArm: {
          current: "23",
          max: "23",
          weapon: "",
          equipment: ["Shield Bit", "", ""],
        },
        rightLeg: {
          current: "23",
          max: "23",
          weapon: "",
          equipment: ["", "", ""],
        },
        leftLeg: {
          current: "23",
          max: "23",
          weapon: "",
          equipment: ["", "", ""],
        },
      },
    },
  },
  {
    id: "ZGMF-X10A Freedom Gundam",
    name: "ZGMF-X10A Freedom Gundam",
    faction: "Gundam Seed",
    data: {
      msuName: "ZGMF-X10A Freedom Gundam",
      mobileSuit: "ZGMF-X10A Freedom Gundam",
      mcu: "235",
      fro: "8",
      tonnageLimit: "28",
      movement: '7"',
      armorValue: "25",
      baseEquip: [
        {
          name: "Beam Cannon",
          mcuCost: "FREE",
          fro: "3",
          tonnage: "4",
          notes: "[MOUNTABLE],[BEAM FOCUS]",
        },
        {
          name: "Beam Cannon",
          mcuCost: "FREE",
          fro: "3",
          tonnage: "4",
          notes: "[MOUNTABLE],[BEAM FOCUS]",
        },
        {
          name: "Vulcan Cannons",
          mcuCost: "FREE",
          fro: "",
          tonnage: "1",
          notes: "[FULL AUTO],[INBUILT],[AKIMBO]",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        {
          name: "Beam Saber",
          mcuCost: "FREE",
          fro: "1",
          tonnage: "1",
          notes: "[CLEAVE],[AKIMBO],[QUICK SWAP],[MOMENTUM]",
        },
        {
          name: "Rifle (Beam)",
          mcuCost: "FREE",
          fro: "3",
          tonnage: "3",
          notes: "[SCOPE]",
        },
        {
          name: "Heavy Boosters",
          mcuCost: "FREE",
          fro: "",
          tonnage: "7",
          notes: "[BOOST(1)] becomes [BOOST(2)]",
        },
        {
          name: "Shield",
          mcuCost: "FREE",
          fro: "",
          tonnage: "6",
          notes:
            "When damage is assigned to the Torso, or to the attached arm's respective side (meaning a shield can cover left leg and left arm simulatenously), assign all damage dealt. Cleave and AOE damage is assigned to the shield in this case",
        },
      ],
      addlEquip: [
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        {
          name: "Anti-Beam Coating Kit",
          mcuCost: "FREE",
          fro: "",
          tonnage: "",
          notes:
            "First time hit by a Beam attack, reduce damage by 10. Cannot be stacked with Beam Shields. [LIMITED USE(1)]",
        },
        B(),
        B(),
      ],
      locations: {
        head: {
          current: "25",
          max: "25",
          weapon: "Vulcan Cannons",
          equipment: ["A.B.C Kit", "", ""],
        },
        torso: {
          current: "25",
          max: "25",
          weapon: "Beam Cannon x2",
          equipment: ["A.B.C Kit", "Heavy Boosters", "Beam Saber x2 (Stowed)"],
        },
        rightArm: {
          current: "25",
          max: "25",
          weapon: "Rifle (Beam)",
          equipment: ["A.B.C Kit", "", ""],
        },
        leftArm: {
          current: "25",
          max: "25",
          weapon: "Shield",
          equipment: ["A.B.C Kit", "", ""],
        },
        rightLeg: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["A.B.C Kit", "Heavy Boosters", ""],
        },
        leftLeg: {
          current: "25",
          max: "25",
          weapon: "",
          equipment: ["A.B.C Kit", "Heavy Boosters", ""],
        },
      },
    },
  },
];
