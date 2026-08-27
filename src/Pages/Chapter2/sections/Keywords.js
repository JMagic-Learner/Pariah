import { KEYWORDS } from "../../../Data/KeywordArray";
import classNames from "classnames";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
export const Keywords = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log(isMobile);
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.11 — Keywords</h2>
      <p className="lh-copy mb4">
        Keywords appear on weapons, support systems, and abilities to define
        special rules. When a keyword conflicts with a general rule, the keyword
        takes precedence. Keywords marked with <strong>(X)</strong> include a
        numeric value that scales the effect — the specific value is listed on
        the item that grants it.
      </p>
      <div className="w-100 h-100">
        {KEYWORDS.map((keyword, index) => (
          <div
            key={index}
            className={classNames(" bg-light-gray fl mh2 ph1", {
              "w-30 h6 mb2": !isMobile,
              "w-100 mb3": isMobile,
            })}
          >
            <p className="fw7 ma0 mb1 red f6 tc">{keyword.name}</p>
            <p className="lh-copy ma0 f7 tj">{keyword.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
