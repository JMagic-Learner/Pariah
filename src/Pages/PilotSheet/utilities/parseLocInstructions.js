// Returns an array of candidate arrays. Each entry represents one required slot;
// candidates are tried in order — the first with an empty equipment row wins.
export const parseLocInstructions = (loc) => {
  if (!loc) return [];
  const l = loc.toLowerCase().trim();
  if (l === "–" || l === "-" || l === "any") return [];
  // Weapon/upgrade attachments live in weapon slots, not equipment slots
  if (/^(weapon|weapons|melee weapon)$/.test(l) || l.startsWith("weapon"))
    return [];

  if (l.includes("all location")) {
    return [
      ["head"],
      ["torso"],
      ["rightArm"],
      ["leftArm"],
      ["rightLeg"],
      ["leftLeg"],
    ];
  }

  const slots = [];
  if (l.includes("head")) slots.push(["head"]);
  if (l.includes("torso")) slots.push(["torso"]);

  // Specific directional arm locations take priority over generic "arm"
  if (l.startsWith("right") && l.includes("arm")) {
    slots.push(["rightArm"]);
  } else if (l.startsWith("left") && l.includes("arm")) {
    slots.push(["leftArm"]);
  } else if (l.includes("arms")) {
    slots.push(["rightArm"]);
    slots.push(["leftArm"]);
  } else if (l.includes("arm") || l.includes("shoulder")) {
    slots.push(["rightArm", "leftArm"]); // try right first, then left
  }

  // Specific directional leg locations take priority over generic "leg"
  if (l.startsWith("right") && l.includes("leg")) {
    slots.push(["rightLeg"]);
  } else if (l.startsWith("left") && l.includes("leg")) {
    slots.push(["leftLeg"]);
  } else if (l.includes("legs") || l.includes("both leg")) {
    slots.push(["rightLeg"]);
    slots.push(["leftLeg"]);
  } else if (l.includes("leg")) {
    slots.push(["rightLeg", "leftLeg"]);
  }

  return slots;
};

export const LOC_LABELS = {
  head: "Head",
  torso: "Torso",
  rightArm: "Right Arm",
  leftArm: "Left Arm",
  rightLeg: "Right Leg",
  leftLeg: "Left Leg",
};
