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
            className={classNames("fl mh2 ph1 w-100", {
              "h6 mb2": !isMobile,
              mb3: isMobile,
            })}
          >
            <div className="flex pa1">
              <div className="w-25 bg-dark-gray v-mid">
                <p
                  className={classNames("fw7 red tc", {
                    f7: isMobile,
                    f5: !isMobile,
                  })}
                >
                  {keyword.name}
                </p>
              </div>
              <div
                className={classNames("bg-light-gray", {
                  "w-50": !isMobile,
                  "w-75": isMobile,
                })}
              >
                <p className="lh-copy f7 tj ml3">DESCRIPTION: {keyword.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
