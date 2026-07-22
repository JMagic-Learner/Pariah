// Support equipment with a [LIMITED USE(1)] ability that the pilot manually
// tracks as expended or not, via a toggle on its equipment row.
const LIMITED_USE_PATTERNS = [/^i[\s-]?field$/i, /^nanolaminate chaff$/i];

export const isLimitedUseItem = (name) =>
  LIMITED_USE_PATTERNS.some((re) => re.test((name || "").trim()));
