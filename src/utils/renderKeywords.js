import { KEYWORDS } from "../Data/KeywordArray";

const findKeyword = (token) => {
  const normalized = token.replace(/\(\d+\)/g, "(X)");
  return KEYWORDS.find((k) =>
    k.name.split(" / ").some(
      (v) =>
        v.toLowerCase() === token.toLowerCase() ||
        v.toLowerCase() === normalized.toLowerCase(),
    ),
  );
};

export const renderKeywords = (text, onKwClick) => {
  if (!text) return null;
  return text.split(/(\[[^\]]+\])/).map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      const kw = findKeyword(part);
      if (kw) {
        return (
          <span
            key={i}
            className="dark-green pointer"
            style={{ textDecoration: "underline dotted" }}
            onClick={(e) => {
              e.stopPropagation();
              onKwClick(kw);
            }}
          >
            {part}
          </span>
        );
      }
    }
    return <span key={i}>{part}</span>;
  });
};
