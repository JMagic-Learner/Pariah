import { Link } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const linkClass = classNames("link dim black no-underline", {
    h3: !isMobile,
    h5: isMobile,
  });

  return (
    <div className="bb">
      <nav
        className={classNames("bg-near-white flex flex-wrap", {
          "pv3 center w-90": !isMobile,
          "pv2 w-100": isMobile,
        })}
      >
        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link
            className={classNames("link dim red no-underline fw7", {
              h3: !isMobile,
              h5: isMobile,
            })}
            to="/"
          >
            Pariah
          </Link>
        </div>

        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link className={linkClass} to="/chapter1">
            Ch.1 Intro
          </Link>
        </div>

        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link className={linkClass} to="/chapter2">
            Ch.2 Forces
          </Link>
        </div>

        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link className={linkClass} to="/chapter3">
            Ch.3 Gameplay
          </Link>
        </div>

        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link className={linkClass} to="/chapter4">
            Ch.4 Missions
          </Link>
        </div>

        <div className={classNames({ "w-20": !isMobile, "w-50": isMobile })}>
          <Link className={linkClass} to="/Rules">
            Rules
          </Link>
        </div>
      </nav>
    </div>
  );
};
