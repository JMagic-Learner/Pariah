import React, { useState, useEffect } from "react";
import { RaceTable } from "./RaceTable";
import { AppearanceTable } from "./AppearanceTable";
import { VitalStatsTable } from "./VitalStatsTable";
import { ConstitutionTableModifier } from "./ConstitutionModifierTable";
import { BodyMeasurementsTable } from "./BodyMeasurementsTable";
import { AdverseTraitsTable } from "./AdverseTraitsTable";
import { SpecialtyTable } from "./SpecialtyTable";
import { PositionTable } from "./PositionsTable";
import { InclinationTable } from "./Inclination";
import { EmotionalStateTable } from "./EmotionalState";
import { PCInclinationTable } from "./PCCharismaInclinationTable";
import { BrothelSize } from "./BrothelSize";
import { BrothelClassTable } from "./BrothelClass";
import { BrothelDistributionTable } from "./BrothelDistributionTable";
export const Prostitutes = () => {
  const [BrothelSizeValue, setBrothelSize] = useState("");
  const [BrothelClassValue, setBrothelClass] = useState("");
  const [BrothelEmployees, setBrothelEmployees] = useState(0);
  const [ProstituteStats, setProstituteStats] = useState({});
  const maxD2 = Math.floor(2);
  const maxD4 = Math.floor(4);
  const maxD6 = Math.floor(6);
  const maxD8 = Math.floor(8);
  const maxD10 = Math.floor(10);
  const maxD12 = Math.floor(12);
  const maxD20 = Math.floor(20);
  const maxD100 = Math.floor(100);

  const Prostitute = {
    Race: "",
    Sex: "Female",
    Price: 0,
    Strength: generateRandomAbilityScores(),
    Dexterity: generateRandomAbilityScores(),
    Constitution: generateRandomAbilityScores(),
    Intelligence: generateRandomAbilityScores(),
    Wisdom: generateRandomAbilityScores(),
    Charisma: generateRandomAbilityScores(),
    Height: 0,
    Weight: 0,
    Age: 0,
    HairColor: "",
    HairStyle: "",
    EyeColor: "",
    Complexion: "",
    VitalScore: 22,
    Bust: 0,
    Hips: 0,
    Waist: 0,
    AdverseTraits: "",
    Specialty: "",
    FavoritePosition: "",
    PriceAdjustment: 0,
    EmotionalState: "",
    Inclination: "",
  };

  const generateRandom = () => {
    const BrothelSizeValue = Math.floor(Math.random() * maxD100) + 1;
    const BrothelClassValue = Math.floor(Math.random() * maxD20) + 1;

    if (BrothelSizeValue >= 0 && BrothelSize <= 24) {
      setBrothelSize("Street Alleys");
      setBrothelEmployees(Math.floor(Math.random() * maxD4) + 1);
    } else if (BrothelSizeValue >= 25 && BrothelSizeValue <= 49) {
      setBrothelSize("Small Whorehouse");
      setBrothelEmployees(3 * Math.floor(Math.random() * maxD4) + 1);
    } else if (BrothelSizeValue >= 50 && BrothelSizeValue <= 64) {
      setBrothelSize("Brothel");
      setBrothelEmployees(5 * Math.floor(Math.random() * maxD4) + 1);
    } else if (BrothelSizeValue >= 65 && BrothelSizeValue <= 74) {
      setBrothelSize("Established Brothel");
      setBrothelEmployees(5 * Math.floor(Math.random() * maxD6) + 1);
    } else if (BrothelSizeValue >= 75 && BrothelSizeValue <= 84) {
      setBrothelSize("Large Brothel");
      setBrothelEmployees(6 * Math.floor(Math.random() * maxD8) + 1);
    } else if (BrothelSizeValue >= 85 && BrothelSizeValue <= 94) {
      setBrothelSize("Famous Brothel");
      setBrothelEmployees(8 * Math.floor(Math.random() * maxD8) + 1);
    } else if (BrothelSizeValue >= 95 && BrothelSizeValue <= 100) {
      setBrothelEmployees(10 * Math.floor(Math.random() * maxD10));
      setBrothelSize("Famous Brothel");
    }

    if (BrothelClassValue >= 1 && BrothelClassValue <= 3) {
      setBrothelClass("Fine");
      Prostitute.PriceAdjustment = Prostitute.PriceAdjustment + 20;
    } else if (BrothelClassValue >= 4 && BrothelSizeValue <= 12) {
      setBrothelClass("Normal");
      Prostitute.PriceAdjustment = Prostitute.PriceAdjustment + 10;
    } else if (BrothelClassValue >= 13 && BrothelSizeValue <= 16) {
      setBrothelClass("Low");
    } else if (BrothelClassValue >= 17 && BrothelSizeValue <= 20) {
      setBrothelClass("Slave");
      Prostitute.PriceAdjustment = Prostitute.PriceAdjustment - 15;
    }
  };

  function generateRandomAbilityScores() {
    const FirstRoll = Math.floor(Math.random() * maxD6 + 1);
    const SecondRoll = Math.floor(Math.random() * maxD6 + 1);
    const ThirdRoll = Math.floor(Math.random() * maxD6 + 1);
    const FourthRoll = Math.floor(Math.random() * maxD6 + 1);
    const DiceRollArray = [FirstRoll, SecondRoll, ThirdRoll, FourthRoll];
    const sortedArray = DiceRollArray.sort();
    const score = sortedArray[1] + sortedArray[2] + sortedArray[3];
    return score;
  }

  function generateRandomHairColor() {
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll >= 1 && DiceRoll <= 13) {
      Prostitute.HairColor = "Brunette";
    } else if (DiceRoll >= 14 && DiceRoll <= 26) {
      Prostitute.HairColor = "Blonde";
    } else if (DiceRoll >= 27 && DiceRoll <= 34) {
      Prostitute.HairColor = "Auburn";
    } else if (DiceRoll >= 35 && DiceRoll <= 42) {
      Prostitute.HairColor = "Sable";
    } else if (DiceRoll >= 43 && DiceRoll <= 50) {
      Prostitute.HairColor = "Crimson";
    } else if (DiceRoll >= 51 && DiceRoll <= 58) {
      Prostitute.HairColor = "Silver";
    } else if (DiceRoll >= 59 && DiceRoll <= 67) {
      Prostitute.HairColor = "White";
    } else if (DiceRoll >= 68 && DiceRoll <= 75) {
      Prostitute.HairColor = "Sky Blue";
    } else if (DiceRoll >= 76 && DiceRoll <= 83) {
      Prostitute.HairColor = "Light Green";
    } else if (DiceRoll >= 84 && DiceRoll <= 91) {
      Prostitute.HairColor = "Lilac";
    } else if (DiceRoll >= 92 && DiceRoll <= 99) {
      Prostitute.HairColor = "Iridescent";
    } else {
      Prostitute.HairColor = "NA";
    }
  }

  function generateRandomHairStyle(repeat) {
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll >= 1 && DiceRoll <= 13) {
      Prostitute.HairStyle = "Short Wavy Hair";
    } else if (DiceRoll >= 14 && DiceRoll <= 26) {
      Prostitute.HairStyle = "Long Hair with Straight Bangs";
    } else if (DiceRoll >= 27 && DiceRoll <= 34) {
      Prostitute.HairStyle = "Short Hair with Ponytail";
    } else if (DiceRoll >= 35 && DiceRoll <= 42) {
      Prostitute.HairStyle = "Braided Hair";
    } else if (DiceRoll >= 43 && DiceRoll <= 50) {
      Prostitute.HairStyle = "Bob Cut";
    } else if (DiceRoll >= 51 && DiceRoll <= 58) {
      Prostitute.HairStyle = "Twintails";
    } else if (DiceRoll >= 59 && DiceRoll <= 67) {
      Prostitute.HairStyle = "Pixie Cut";
    } else if (DiceRoll >= 68 && DiceRoll <= 75) {
      Prostitute.HairStyle = "Wolf Cut";
    } else if (DiceRoll >= 76 && DiceRoll <= 83) {
      Prostitute.HairStyle = "Parted Bangs";
    } else if (DiceRoll >= 84 && DiceRoll <= 91) {
      Prostitute.HairStyle = "Mohawk";
    } else if (DiceRoll >= 92 && DiceRoll <= 99 && !repeat) {
      Prostitute.HairStyle = generateRandomHairStyle(true);
    } else {
      Prostitute.HairStyle = "Bald";
    }
  }

  function generateRandomEyeColor() {
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll >= 1 && DiceRoll <= 13) {
      Prostitute.EyeColor = "Light Blue";
    } else if (DiceRoll >= 14 && DiceRoll <= 26) {
      Prostitute.EyeColor = "Dark Green";
    } else if (DiceRoll >= 27 && DiceRoll <= 34) {
      Prostitute.EyeColor = "Hazel";
    } else if (DiceRoll >= 35 && DiceRoll <= 42) {
      Prostitute.EyeColor = "Brown";
    } else if (DiceRoll >= 43 && DiceRoll <= 50) {
      Prostitute.EyeColor = "Crimson";
    } else if (DiceRoll >= 51 && DiceRoll <= 58) {
      Prostitute.EyeColor = "Silver";
    } else if (DiceRoll >= 59 && DiceRoll <= 67) {
      Prostitute.EyeColor = "Light Green";
    } else if (DiceRoll >= 68 && DiceRoll <= 75) {
      Prostitute.EyeColor = "Dark Blue";
    } else if (DiceRoll >= 76 && DiceRoll <= 83) {
      Prostitute.EyeColor = "Pink";
    } else if (DiceRoll >= 84 && DiceRoll <= 91) {
      Prostitute.EyeColor = "Purple";
    } else if (DiceRoll >= 92 && DiceRoll <= 99) {
      Prostitute.EyeColor = "Choose";
    } else {
      Prostitute.EyeColor = "Each Eye Color Different";
    }
  }

  function generateRandomComplexion() {
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll >= 1 && DiceRoll <= 13) {
      Prostitute.Complexion = "Dusky Olive";
    } else if (DiceRoll >= 14 && DiceRoll <= 26) {
      Prostitute.Complexion = "Bronze";
    } else if (DiceRoll >= 27 && DiceRoll <= 34) {
      Prostitute.Complexion = "Milky White";
    } else if (DiceRoll >= 35 && DiceRoll <= 42) {
      Prostitute.Complexion = "Ebony";
    } else if (DiceRoll >= 43 && DiceRoll <= 50) {
      Prostitute.Complexion = "Light Red";
    } else if (DiceRoll >= 51 && DiceRoll <= 58) {
      Prostitute.Complexion = "Yellow";
    } else if (DiceRoll >= 59 && DiceRoll <= 67) {
      Prostitute.Complexion = "Brown";
    } else if (DiceRoll >= 68 && DiceRoll <= 75) {
      Prostitute.Complexion = "Golden";
    } else if (DiceRoll >= 76 && DiceRoll <= 83) {
      Prostitute.Complexion = "Dark Brown";
    } else if (DiceRoll >= 84 && DiceRoll <= 91) {
      Prostitute.Complexion = "Light Salmon";
    } else if (DiceRoll >= 92 && DiceRoll <= 99) {
      Prostitute.Complexion = "Choose";
    } else {
      Prostitute.Complexion = "Choose";
    }
  }

  function generateRandomProstitute(value) {
    const DiceRoll = Math.floor(Math.random() * maxD100) + 1;

    if (value === "Fine") {
      if (DiceRoll >= 1 && DiceRoll <= 62) {
        Prostitute.Race = "Human";
      } else if (DiceRoll >= 63 && DiceRoll <= 70) {
        Prostitute.Race = "Elf";
      } else if (DiceRoll >= 71 && DiceRoll <= 82) {
        Prostitute.Race = "Half-Elf";
      } else if (DiceRoll >= 83 ** DiceRoll <= 84) {
        Prostitute.Race = "Dwarf";
      } else if (DiceRoll === 85) {
        Prostitute.Race = "Halfling";
      } else if (DiceRoll >= 86 && DiceRoll <= 90) {
        Prostitute.Race = "Half-Orc";
      } else {
        Prostitute.Race = "Exotic";
      }
    }

    if (value === "Normal") {
      if (DiceRoll >= 1 && DiceRoll <= 67) {
        Prostitute.Race = "Human";
      } else if (DiceRoll >= 68 && DiceRoll <= 70) {
        Prostitute.Race = "Elf";
      } else if (DiceRoll >= 71 && DiceRoll <= 79) {
        Prostitute.Race = "Half-Elf";
      } else if (DiceRoll === 80) {
        Prostitute.Race = "Dwarf";
      } else if (DiceRoll === 81) {
        Prostitute.Race = "Halfling";
      } else if (DiceRoll >= 82 && DiceRoll <= 99) {
        Prostitute.Race = "Half-Orc";
      } else if (DiceRoll === 100) {
        Prostitute.Race = "Exotic";
      }
    }

    if (value === "Low") {
      if (DiceRoll >= 1 && DiceRoll <= 70) {
        Prostitute.Race = "Human";
      } else if (DiceRoll >= 71 && DiceRoll <= 75) {
        Prostitute.Race = "Half-Elf";
      } else if (DiceRoll >= 86 && DiceRoll <= 95) {
        Prostitute.Race = "Half-Orc";
      } else if (DiceRoll >= 96 && DiceRoll <= 100) {
        Prostitute.Race = "Exotic";
      }
    }

    if (value === "Slave") {
      if (DiceRoll >= 1 && DiceRoll <= 60) {
        Prostitute.Race = "Human";
      } else if (DiceRoll >= 61 && DiceRoll <= 64) {
        Prostitute.Race = "Elf";
      } else if (DiceRoll >= 65 && DiceRoll <= 74) {
        Prostitute.Race = "Half-Elf";
      } else if (DiceRoll === 75) {
        Prostitute.Race = "Dwarf";
      } else if (DiceRoll === 76) {
        Prostitute.Race = "Halfing";
      } else if (DiceRoll >= 77 && DiceRoll <= 95) {
        Prostitute.Race = "Half-Orc";
      } else if (DiceRoll >= 96 && DiceRoll <= 100) {
        Prostitute.Race = "Exotic";
      }
    }

    if (Prostitute.Race === "Human") {
      Prostitute.Strength = Prostitute.Strength + 1;
      Prostitute.Dexterity = Prostitute.Dexterity + 1;
      Prostitute.Constitution = Prostitute.Constitution + 1;
      Prostitute.Intelligence = Prostitute.Intelligence + 1;
      Prostitute.Wisdom = Prostitute.Wisdom + 1;
      Prostitute.Charisma = Prostitute.Charisma + 1;

      const HeightRollOne = Math.floor(Math.random() * maxD10 + 1);
      const HeightRollTwo = Math.floor(Math.random() * maxD10 + 1);
      Prostitute.Height = HeightRollOne + HeightRollTwo + 55;

      const WeightRollOne = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollFour = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollFive = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollSix = Math.floor(Math.random() * maxD10 + 1);
      Prostitute.Weight =
        WeightRollOne +
        WeightRollTwo +
        WeightRollThree +
        WeightRollFour +
        WeightRollFive +
        WeightRollSix +
        90;

      const AgeRollOne = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Age = AgeRollOne + AgeRollTwo + 16;
    }

    if (Prostitute.Race === "Dwarf") {
      Prostitute.Constitution = Prostitute.Constitution + 2;

      const HeightRollOne = Math.floor(Math.random() * maxD10 + 1);
      Prostitute.Height = HeightRollOne + 41;

      const WeightRollOne = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollFour = Math.floor(Math.random() * maxD10 + 1);

      Prostitute.Weight =
        WeightRollOne + WeightRollTwo + WeightRollThree + WeightRollFour + 105;

      const AgeRollOne = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollThree = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollFour = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Age =
        AgeRollOne + AgeRollTwo + AgeRollThree + AgeRollFour + 35;
    }

    if (Prostitute.Race === "Elf") {
      Prostitute.Dexterity = Prostitute.Dexterity + 2;

      const HeightRollOne = Math.floor(Math.random() * maxD6 + 1);
      const HeightRollTwo = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Height = HeightRollOne + HeightRollTwo + 58;

      const WeightRollOne = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD10 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD10 + 1);
      Prostitute.Weight = WeightRollOne + WeightRollTwo + WeightRollThree + 70;

      const AgeRollOne = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollThree = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollFour = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollFive = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Age =
        AgeRollOne +
        AgeRollTwo +
        AgeRollThree +
        AgeRollFour +
        AgeRollFive +
        100;
    }

    if (Prostitute.Race === "Halfling") {
      Prostitute.Dexterity = Prostitute.Dexterity + 2;

      const HeightRollOne = Math.floor(Math.random() * maxD8 + 1);
      const HeightRollTwo = Math.floor(Math.random() * maxD8 + 1);
      Prostitute.Height = HeightRollOne + HeightRollTwo + 30;

      const WeightRollOne = Math.floor(Math.random() * maxD4 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD4 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD4 + 1);
      const WeightRollFour = Math.floor(Math.random() * maxD4 + 1);
      const WeightRollFive = Math.floor(Math.random() * maxD4 + 1);
      Prostitute.Weight =
        WeightRollOne +
        WeightRollTwo +
        WeightRollThree +
        WeightRollFour +
        WeightRollFive +
        48;

      const AgeRollOne = Math.floor(Math.random() * maxD4 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD4 + 1);
      const AgeRollThree = Math.floor(Math.random() * maxD4 + 1);
      Prostitute.Age = AgeRollOne + AgeRollTwo + AgeRollThree + 20;
    }

    if (Prostitute.Race === "Half-Elf") {
      Prostitute.Dexterity = Prostitute.Dexterity + 1;
      Prostitute.Constitution = Prostitute.Constitution + 1;
      Prostitute.Charisma = Prostitute.Charisma + 2;

      const HeightRollOne = Math.floor(Math.random() * maxD4 + 1);
      const HeightRollTwo = Math.floor(Math.random() * maxD4 + 1);
      const HeightRollThree = Math.floor(Math.random() * maxD4 + 1);
      Prostitute.Height = HeightRollOne + HeightRollTwo + HeightRollThree + 53;

      const WeightRollOne = Math.floor(Math.random() * maxD12 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD12 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD12 + 1);
      Prostitute.Weight = WeightRollOne + WeightRollTwo + WeightRollThree + 85;

      const AgeRollOne = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Age = AgeRollOne + AgeRollTwo + 16;
    }

    if (Prostitute.Race === "Half-Orc") {
      Prostitute.Strength = Prostitute.Strength + 2;
      Prostitute.Constitution = Prostitute.Constitution + 1;

      const HeightRollOne = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Height = HeightRollOne + 55;

      const WeightRollOne = Math.floor(Math.random() * maxD12 + 1);
      const WeightRollTwo = Math.floor(Math.random() * maxD12 + 1);
      const WeightRollThree = Math.floor(Math.random() * maxD12 + 1);
      Prostitute.Weight = WeightRollOne + WeightRollTwo + WeightRollThree + 100;

      const AgeRollOne = Math.floor(Math.random() * maxD6 + 1);
      const AgeRollTwo = Math.floor(Math.random() * maxD6 + 1);
      Prostitute.Age = AgeRollOne + AgeRollTwo + 16;
    }

    return Prostitute;
  }

  function generateVitalStatistics(constitutionScore) {
    let VitalAdjustment = 0;

    if (constitutionScore <= 8) {
      VitalAdjustment = -2;
    } else if (constitutionScore >= 9 && constitutionScore <= 12) {
      VitalAdjustment = 0;
    } else if (constitutionScore >= 13 && constitutionScore <= 18) {
      VitalAdjustment = 2;
    }

    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll <= 30) {
      Prostitute.VitalScore = 22 + VitalAdjustment;
    } else if (DiceRoll >= 31 && DiceRoll <= 50) {
      Prostitute.VitalScore = 23 + VitalAdjustment;
    } else if (DiceRoll >= 51 && DiceRoll <= 65) {
      Prostitute.VitalScore = 24 + VitalAdjustment;
    } else if (DiceRoll >= 66 && DiceRoll <= 77) {
      Prostitute.HairColor = 25 + VitalAdjustment;
    } else if (DiceRoll >= 78 && DiceRoll <= 82) {
      Prostitute.HairColor = 26 + VitalAdjustment;
    } else if (DiceRoll >= 83 && DiceRoll <= 86) {
      Prostitute.HairColor = 27 + VitalAdjustment;
    } else if (DiceRoll >= 87 && DiceRoll <= 90) {
      Prostitute.HairColor = 28 + VitalAdjustment;
    } else if (DiceRoll >= 91 && DiceRoll <= 94) {
      Prostitute.HairColor = 29 + VitalAdjustment;
    } else if (DiceRoll >= 95 && DiceRoll <= 97) {
      Prostitute.HairColor = 30 + VitalAdjustment;
    } else if (DiceRoll >= 98 && DiceRoll <= 99) {
      Prostitute.HairColor = 31 + VitalAdjustment;
    } else {
      Prostitute.HairColor = 32 + VitalAdjustment;
    }
  }

  function generateBustHipsAss(charismaScore, vitalScore) {
    if (charismaScore <= 3) {
      Prostitute.Bust = `${0 + vitalScore} - ${0 + vitalScore}`;
      Prostitute.Waist = 20 + vitalScore;
      const FirstRoll = Math.floor(Math.random() * maxD6 + 1);
      const SecondRoll = Math.floor(Math.random() * maxD6 + 1);
      const ThirdRoll = Math.floor(Math.random() * maxD6 + 1);
      const FourthRoll = Math.floor(Math.random() * maxD6 + 1);
      const FifthRoll = Math.floor(Math.random() * maxD6 + 1);
      const SixthRoll = Math.floor(Math.random() * maxD6 + 1);
      const Hips =
        FirstRoll + SecondRoll + ThirdRoll + FourthRoll + FifthRoll + SixthRoll;
      Prostitute.Hips = `${0 + vitalScore + Hips} - ${0 + vitalScore + Hips}`;
    } else if (charismaScore >= 4 && charismaScore <= 5) {
      Prostitute.Bust = `${1 + vitalScore} - ${2 + vitalScore}`;
      Prostitute.Waist = 7 + vitalScore;
      const FirstRoll = Math.floor(Math.random() * maxD6 + 1);
      const Hips = FirstRoll;
      Prostitute.Hips = `${1 + vitalScore + Hips}-${2 + vitalScore + Hips}`;
    } else if (charismaScore >= 6 && charismaScore <= 8) {
      Prostitute.Bust = `${3 + vitalScore}-${4 + vitalScore}`;
      Prostitute.Waist = 3 + vitalScore;
      Prostitute.Hips = `${3 + vitalScore}-${4 + vitalScore}`;
    } else if (charismaScore >= 9 && charismaScore <= 11) {
      Prostitute.Bust = `${5 + vitalScore}-${6 + vitalScore}`;
      Prostitute.Waist = 2 + vitalScore;
      Prostitute.Hips = `${5 + vitalScore}-${6 + vitalScore}`;
    } else if (charismaScore >= 12 && charismaScore <= 15) {
      Prostitute.Bust = `${7 + vitalScore}-${8 + vitalScore}`;
      Prostitute.Waist = 0 + vitalScore;
      Prostitute.Hips = `${7 + vitalScore}-${8 + vitalScore}`;
    } else if (charismaScore >= 16 && charismaScore <= 17) {
      Prostitute.Bust = `${9 + vitalScore}-${10 + vitalScore}`;
      Prostitute.Waist = 0 + vitalScore;
      Prostitute.Hips = `${9 + vitalScore - 1}-${10 + vitalScore - 1}`;
    } else if (charismaScore >= 18) {
      Prostitute.Bust = `${11 + vitalScore}-${12 + vitalScore}`;
      Prostitute.Waist = 0 + vitalScore;
      Prostitute.Hips = `${11 + vitalScore - 2}-${12 + vitalScore - 2}`;
    }
  }

  function generateAdverseTraits() {
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll <= 49) {
    } else if (DiceRoll >= 50 && DiceRoll <= 79) {
      Prostitute.AdverseTraits = "Natural Disease";
    } else if (DiceRoll >= 80 && DiceRoll <= 89) {
      Prostitute.AdverseTraits = "Magical Disease";
    } else if (DiceRoll >= 90 && DiceRoll <= 99) {
      Prostitute.AdverseTraits = "Insanity";
    } else if (DiceRoll === 100) {
      Prostitute.AdverseTraits = "Insanity";
    }
  }

  function generateSpecializations(repeat) {
    let Specialty = "";
    let Adjustment = 0;
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll <= 39) {
    } else if (DiceRoll >= 40 && DiceRoll <= 55) {
      Specialty = "Massage";
      Adjustment = 10;
    } else if (DiceRoll >= 56 && DiceRoll <= 69) {
      Specialty = "Dancing";
      Adjustment = 10;
    } else if (DiceRoll >= 70 && DiceRoll <= 79) {
      Specialty = "Oral Sex";
      Adjustment = 20;
    } else if (DiceRoll >= 80 && DiceRoll <= 89) {
      Specialty = "Anal Sex";
      Adjustment = 40;
    } else if (DiceRoll >= 90 && DiceRoll <= 94) {
      Specialty = "Bondage";
      Adjustment = 60;
    } else if (DiceRoll >= 95 && DiceRoll <= 97) {
      Specialty = "Beastiality";
      Adjustment = 80;
    } else if (DiceRoll >= 98 && DiceRoll <= 99 && !repeat) {
      Specialty = `${generateSpecializations(true)} + ${generateSpecializations(
        true
      )}`;
    } else if (DiceRoll === 100 && !repeat) {
      Specialty = `${generateSpecializations(true)} + ${generateSpecializations(
        true
      )} + ${generateSpecializations(true)}`;
    }
    Prostitute.PriceAdjustment = Prostitute.PriceAdjustment + Adjustment;
    if (!repeat) {
      Prostitute.Specialty = Specialty;
    }
    if (repeat) {
      return Specialty;
    }
  }

  function generatePositions(repeat) {
    let Position = "";
    let Adjustment = 0;
    const DiceRoll = Math.floor(Math.random() * maxD100 + 1);
    if (DiceRoll <= 30) {
    } else if (DiceRoll >= 31 && DiceRoll <= 49) {
      Position = "Missionary";
      Adjustment = 10;
    } else if (DiceRoll >= 50 && DiceRoll <= 64) {
      Position = "Doggy Style";
      Adjustment = 10;
    } else if (DiceRoll >= 65 && DiceRoll <= 69) {
      Position = "Cowgirl";
      Adjustment = 20;
    } else if (DiceRoll >= 70 && DiceRoll <= 74) {
      Position = "Reverse Cowgirl";
      Adjustment = 20;
    } else if (DiceRoll >= 75 && DiceRoll <= 79) {
      Position = "Standing Split";
      Adjustment = 30;
    } else if (DiceRoll >= 80 && DiceRoll <= 84) {
      Position = "Amazon";
      Adjustment = 50;
    } else if (DiceRoll >= 85 && DiceRoll <= 89) {
      Position = "Mating Press";
      Adjustment = 60;
    } else if (DiceRoll >= 90 && DiceRoll <= 94) {
      Position = "SpitRoast";
      Adjustment = 75;
    } else if (DiceRoll >= 95 && DiceRoll <= 97) {
      Position = "GangBangs";
      Adjustment = 100;
    } else if (DiceRoll >= 98 && DiceRoll <= 99 && !repeat) {
      Position = `${generatePositions(true)} + ${generatePositions(true)}`;
    } else if (DiceRoll === 100 && !repeat) {
      Position = `${generatePositions(true)} + ${generatePositions(
        true
      )} + ${generatePositions(true)}`;
    }

    Prostitute.PriceAdjustment = Prostitute.PriceAdjustment + Adjustment;
    if (!repeat) {
      Prostitute.Positions = Position;
    }

    if (repeat) {
      return Position;
    }
  }

  function generateInclination() {
    let InclinationModifier;
    let Adjustment = 0;
    const DiceRoll = Math.floor(Math.random() * maxD20 + 1);
    if (DiceRoll <= 2) {
      Prostitute.EmotionalState = "Angry";
      InclinationModifier = -3;
    } else if (DiceRoll >= 3 && DiceRoll <= 4) {
      Prostitute.EmotionalState = "Jealous";
      InclinationModifier = -2;
    } else if (DiceRoll >= 5 && DiceRoll <= 7) {
      Prostitute.EmotionalState = "Pensive";
      InclinationModifier = -1;
    } else if (DiceRoll >= 8 && DiceRoll <= 10) {
      Prostitute.EmotionalState = "Tired";
    } else if (DiceRoll >= 11 && DiceRoll <= 13) {
      Prostitute.EmotionalState = "Tender";
      InclinationModifier = +1;
    } else if (DiceRoll >= 14 && DiceRoll <= 15) {
      Prostitute.EmotionalState = "Excited";
      InclinationModifier = +2;
    } else if (DiceRoll >= 16 && DiceRoll <= 17) {
      Prostitute.EmotionalState = "Ardent";
      InclinationModifier = +3;
    } else if (DiceRoll >= 18 && DiceRoll <= 19) {
      Prostitute.EmotionalState = "Aroused";
      InclinationModifier = +4;
    } else if (DiceRoll === 20) {
      Prostitute.EmotionalState = "Obsessed";
      InclinationModifier = +4;
    }

    const BaseD20 = Math.floor(Math.random() * maxD20 + 1);
    const DiceRoll2Modified = BaseD20 + InclinationModifier;
    if (DiceRoll2Modified === 1) {
      Prostitute.Inclination = "Angry";
      Adjustment = 100;
    } else if (DiceRoll2Modified <= 2) {
      Prostitute.Inclination = "Hate";
      Adjustment = 80;
    } else if (DiceRoll2Modified === 3 || DiceRoll2Modified === 4) {
      Prostitute.Inclination = "Dislike";
      Adjustment = 50;
    } else if (DiceRoll2Modified === 5 || DiceRoll2Modified === 6) {
      Prostitute.Inclination = "Aloof";
      Adjustment = 50;
    } else if (DiceRoll2Modified === 7 || DiceRoll === 8) {
      Prostitute.Inclination = "Sympathetic";
      Adjustment = -30;
    } else if (DiceRoll2Modified === 9 || DiceRoll2Modified === 11) {
      Prostitute.Inclination = "Interested";
      Adjustment = -40;
    } else if (DiceRoll2Modified === 12 || DiceRoll2Modified === 14) {
      Prostitute.Inclination = "Playful";
      Adjustment = -50;
    } else if (DiceRoll2Modified === 15 || DiceRoll2Modified === 16) {
      Prostitute.Inclination = "Capracious";
      Adjustment = -60;
    } else if (DiceRoll2Modified === 17 || DiceRoll2Modified === 18) {
      Prostitute.Inclination = "Fondness";
      Adjustment = -70;
    } else if (DiceRoll2Modified === 18 || DiceRoll2Modified === 19) {
      Prostitute.Inclination = "Infatuation";
      Adjustment = -80;
    } else if (DiceRoll2Modified >= 20) {
      Prostitute.Inclination = "Passionate";
      Adjustment = -90;
    }
    Prostitute.PriceAdjustment = Prostitute.PriceAdjustment + Adjustment;
  }

  function generateFinalPrice(race, priceAdjustment) {
    let BasePrice = 50;

    if (race === "Dwarf") {
      BasePrice = BasePrice * 2;
    }

    if (race === "Elf") {
      BasePrice = BasePrice * 5;
    }

    if (race === "Gnome") {
      BasePrice = BasePrice * 3;
    }

    if (race === "Half-Elf") {
      BasePrice = BasePrice * 2.5;
    }

    if (race === "Half-Orc") {
      BasePrice = BasePrice * 0.75;
    }

    if (race === "Halfling") {
      BasePrice = BasePrice * 4;
    }

    if (race === "Human") {
      BasePrice = BasePrice * 1;
    }

    const percentile = priceAdjustment / 100;
    const percentileCorrected = 1 + percentile;
    const newPrice = BasePrice * percentileCorrected;
    Prostitute.Price = newPrice;
  }

  useEffect(() => {
    generateRandom();
  }, []);

  useEffect(() => {
    generateRandomProstitute(BrothelClassValue);
    generateRandomHairColor();
    generateRandomHairStyle();
    generateRandomEyeColor();
    generateRandomComplexion();
    generateVitalStatistics(Prostitute.Constitution);
    generateBustHipsAss(Prostitute.Charisma, Prostitute.VitalScore);
    generateAdverseTraits();
    generateSpecializations();
    generatePositions();
    generateInclination();
    generateFinalPrice(Prostitute.Race, Prostitute.PriceAdjustment);
    setProstituteStats(Prostitute);
    console.log(ProstituteStats);
  }, [BrothelClassValue, BrothelEmployees]);

  return (
    <div className=" w-100">
      <h1 className="EmphasizedTitle">A. Prostitute Creation</h1>
      <p className="h6"> Follow the steps to create a harlot.</p>
      <section className="d-flex flex-row mx-auto randomGenerationContainer">
        <button
          type="button"
          class="btn btn-secondary randomButtonLarge"
          onClick={() => generateRandom()}
        >
          {" "}
          Generate Random Stats{" "}
        </button>
      </section>

      <table class="table h6 text-white">
        <thead>
          <tr>
            <th scope="col">Brothel Size</th>
            <th scope="col">Brothel Class</th>
            <th scope="col">Employees </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{BrothelSizeValue}</th>
            <td> {BrothelClassValue} </td>
            <td> {BrothelEmployees}</td>
          </tr>
        </tbody>
      </table>

      <section id="ProstituteCharacterSheet" className="d-flex flex-row">
        <div className="px-2 w-20">
          {" "}
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Stat</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Strength</th>
                <td> {Prostitute.Strength} </td>
              </tr>
              <tr>
                <th scope="row">Dexterity</th>
                <td> {Prostitute.Dexterity} </td>
              </tr>
              <tr>
                <th scope="row">Constitution</th>
                <td> {Prostitute.Constitution} </td>
              </tr>
              <tr>
                <th scope="row">Intelligence</th>
                <td> {Prostitute.Intelligence} </td>
              </tr>
              <tr>
                <th scope="row">Wisdom</th>
                <td> {Prostitute.Wisdom} </td>
              </tr>
              <tr>
                <th scope="row">Charisma</th>
                <td> {Prostitute.Charisma} </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-100">
          {" "}
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col px-2">Race</th>
                <th scope="col">Sex</th>
                <th scope="col">Age</th>
                <th scope="col">Eye Color</th>
                <th scope="col">Hair Style</th>
                <th scope="col">Hair Color</th>
                <th scope="col">Complexion</th>
                <th scope="col">Vital Score</th>
                <th scope="col">Height (inches)</th>
                <th scope="col">Height (Feet)</th>
                <th scope="col">Weight</th>
                <th scope="col">Bust</th>
                <th scope="col">Waist</th>
                <th scope="col">Hips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-2">{ProstituteStats.Race}</th>
                <td> Female </td>
                <td> {ProstituteStats.Age} </td>
                <td> {ProstituteStats.EyeColor} </td>
                <td> {ProstituteStats.HairStyle} </td>
                <td> {ProstituteStats.HairColor} </td>
                <td> {ProstituteStats.Complexion} </td>
                <td> {ProstituteStats.VitalScore} </td>
                <td> {ProstituteStats.Height} inches </td>
                <td> {(ProstituteStats.Height / 12).toFixed(2)} feet</td>
                <td> {ProstituteStats.Weight} lbs </td>
                <td> {ProstituteStats.Bust} </td>
                <td> {ProstituteStats.Waist} </td>
                <td> {ProstituteStats.Hips} </td>
              </tr>
            </tbody>
          </table>
          <ul className="h6">
            <li> She is currently {ProstituteStats.EmotionalState}</li>
            <li> Inclination: {ProstituteStats.Inclination}.</li>
            <li> Favorite Position: {ProstituteStats.Positions}</li>
            <li> AdverseTraits: {ProstituteStats.AdverseTraits}</li>
            <li> Price: {ProstituteStats.Price} gold</li>
          </ul>
        </div>
      </section>

      <section id="textDescription" className=" w-50">
        <p className="h6">
          {" "}
          A {ProstituteStats.Race} woman stands before you, exposed and
          completely nude. Her breasts bare her nipples, and you can see the wet
          sheen on her pussy. She has {ProstituteStats.HairColor} color hair,
          styled in the fashion of {ProstituteStats.HairStyle}. Her eyes are{" "}
          {ProstituteStats.EyeColor} and her {ProstituteStats.Complexion} skin
          is glistening with sweat.
        </p>

        <p className="h6">
          {" "}
          She is currently {ProstituteStats.EmotionalState}. Her underbust
          measures {ProstituteStats.Bust}, and her hips measure{" "}
          {Prostitute.Hips}. Her waist measures {ProstituteStats.Waist} You
          think she is around {ProstituteStats.Height} inches tall, and weighs{" "}
          {ProstituteStats.Weight} pounds. She readies her body by assuming the{" "}
          {ProstituteStats.Positions} position.
        </p>
      </section>

      <h2 className="EmphasizedTitle">
        Step 1: Determine Brothel Size, Class, and Race Distribution
      </h2>
      <section className="d-flex flex-row">
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle">Table 1 A: Brothel Size</h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll</th>
                  <th scope="col">Brothel Size</th>
                  <th scope="col">Employees </th>
                </tr>
              </thead>
              <tbody>
                {BrothelSize.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Size} </td>
                      <td>{entry.Employees} prostitutes</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>

        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle">Table 1 B: Brothel Class</h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll d20</th>
                  <th scope="col">Class </th>
                  <th scope="col">Price Adjustment </th>
                </tr>
              </thead>
              <tbody>
                {BrothelClassTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Class}</td>
                      <td>{entry.Adjustment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>

        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle">Table 1 C:Race Distribution</h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Race</th>
                  <th scope="col">Fine d100</th>
                  <th scope="col">Normal d100 </th>
                  <th scope="col">Low d100 </th>
                  <th scope="col">Slave d100 </th>
                </tr>
              </thead>
              <tbody>
                {BrothelDistributionTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.Race}</th>
                      <td>{entry.Fine}</td>
                      <td>{entry.Normal}</td>
                      <td>{entry.Low}</td>
                      <td>{entry.Slave}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
      </section>

      <h2 className="EmphasizedTitle">
        Step 2: Determine Prostitute's Height and Weight
      </h2>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle">Table 2: Height and Weight</h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Race</th>
                <th scope="col">Base Height (Inches) </th>
                <th scope="col">Hieght Modifier (Inches)</th>
                <th scope="col">Base Weight (Pounds)</th>
                <th scope="col">Weight Modifier (Pounds)</th>
              </tr>
            </thead>
            <tbody>
              {RaceTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.Race}</th>
                    <td>{entry.BaseHeight} inches</td>
                    <td> {entry.HeightMod} inches</td>
                    <td> {entry.BaseWeight} pounds</td>
                    <td> {entry.HeightMod} pounds</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>

      <h2 className="EmphasizedTitle">
        Step 3: Determine Prostitute's Physical Appearance, roll four times
      </h2>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle"> Table 3: Appearance </h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Die Roll (d100)</th>
                <th scope="col">Hair Color</th>
                <th scope="col">Hair Style</th>
                <th scope="col">Eye Color </th>
                <th scope="col">Complexion </th>
              </tr>
            </thead>
            <tbody>
              {AppearanceTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.DieRoll}</th>
                    <td>{entry.HairColor}</td>
                    <td>{entry.HairStyle}</td>
                    <td>{entry.EyeColor}</td>
                    <td>{entry.Complexion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>

      <h2 className="EmphasizedTitle">Step 4: Determine Age</h2>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle"> Table 4: Age </h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Race</th>
                <th scope="col">Base</th>
                <th scope="col">Modifier</th>
              </tr>
            </thead>
            <tbody>
              {RaceTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.Race}</th>
                    <td>{entry.BaseAge}</td>
                    <td> {entry.AgeMod} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>

      <h2 className="EmphasizedTitle">Step 5: Determine Vital Statistics </h2>
      <section className="d-flex flex-row">
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle">
              {" "}
              Table 5 A: Constitution Modifier To Vital Stats{" "}
            </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Constitution Score</th>
                  <th scope="col">Modifier</th>
                </tr>
              </thead>
              <tbody>
                {ConstitutionTableModifier.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.Score}</th>
                      <td>{entry.Mod}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle"> Table 5 B: Vital Statistics </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll (d100)</th>
                  <th scope="col">Vital Statistics</th>
                </tr>
              </thead>
              <tbody>
                {VitalStatsTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.VitalStat}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
      </section>

      <h2 className="EmphasizedTitle">
        Step 6: Add Vital Statistics to Measurements{" "}
      </h2>
      <ul>
        <li>To find Bust size, add Vital Statistic to Proper Bust Mod </li>
        <li>To find Waist size, add Vital Statistic to Proper Waist Mod </li>
        <li>To find Hip size, add Bust Size to Proper Hips Adjustment </li>
      </ul>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle"> Table 6: Body Measurements </h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Charisma Score</th>
                <th scope="col">(Under) Bust</th>
                <th scope="col">Waist</th>
                <th scope="col">Hips</th>
              </tr>
            </thead>
            <tbody>
              {BodyMeasurementsTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.Score}</th>
                    <td>{entry.Bust}</td>
                    <td>{entry.Waist}</td>
                    <td>{entry.Hips}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>

      <h2 className="EmphasizedTitle">
        Step 7: Roll to generate Adverse Traits{" "}
      </h2>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle"> Table 7: Adverse Traits </h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Die Roll d20</th>
                <th scope="col">Trait</th>
              </tr>
            </thead>
            <tbody>
              {AdverseTraitsTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.DieRoll}</th>
                    <td>{entry.Trait}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>

      <h2 className="EmphasizedTitle">
        Step 8: Roll to Generate Specializations and Favorite Positions{" "}
      </h2>
      <section className="d-flex flex-row">
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle"> Table 8 A: Specializations </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll d100</th>
                  <th scope="col">Specializations</th>
                  <th scope="col">Price Adjustment</th>
                </tr>
              </thead>
              <tbody>
                {SpecialtyTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Specialty}</td>
                      <td>{entry.Adjustment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle"> Table 8 B: Favorite Positions </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll d100</th>
                  <th scope="col">Positions</th>
                  <th scope="col">Price Adjustment</th>
                </tr>
              </thead>
              <tbody>
                {PositionTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Positions}</td>
                      <td>{entry.Adjustment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
      </section>

      <h2 className="EmphasizedTitle">
        Step 9: Determine Emotional State and Inclinations{" "}
      </h2>
      <section className="d-flex flex-row">
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle"> Table 9 A: Emotional State </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll d20</th>
                  <th scope="col">Emotional / Mental State</th>
                  <th scope="col">Modifier to Inclination Table</th>
                </tr>
              </thead>
              <tbody>
                {EmotionalStateTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Emotion}</td>
                      <td>{entry.Mod}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle">
              {" "}
              Table 9 B: Client Modifier to Inclination{" "}
            </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Charisma Score</th>
                  <th scope="col">Modifier to Inclination Table</th>
                </tr>
              </thead>
              <tbody>
                {PCInclinationTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.Score}</th>
                      <td>{entry.Mod}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
        <div className="w-50">
          <ul>
            <h2 className="EmphasizedTitle"> Table 9 C: Inclination </h2>
            <table class="table h6 text-white">
              <thead>
                <tr>
                  <th scope="col">Die Roll d20</th>
                  <th scope="col">Inclination</th>
                  <th scope="col">Price Adjustment</th>
                </tr>
              </thead>
              <tbody>
                {InclinationTable.map((entry) => {
                  return (
                    <tr>
                      <th scope="row">{entry.DieRoll}</th>
                      <td>{entry.Inclination}</td>
                      <td>{entry.Adjustment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
      </section>

      <h2 className="EmphasizedTitle">
        Step 10: Determine Racial Multipliers to Cost{" "}
      </h2>
      <div className="w-100">
        <ul>
          <h2 className="EmphasizedTitle">
            {" "}
            Table 10: Race Multipliers to Cost{" "}
          </h2>
          <table class="table h6 text-white">
            <thead>
              <tr>
                <th scope="col">Race</th>
                <th scope="col">Multiplier </th>
              </tr>
            </thead>
            <tbody>
              {RaceTable.map((entry) => {
                return (
                  <tr>
                    <th scope="row">{entry.Race}</th>
                    <td>{entry.PriceMod}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
};
