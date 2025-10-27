import { Link } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  /* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-dark"></span>
        </button> */

  return (
    <div className="bb">
      <nav
        className={classNames("bg-near-white flex", {
          "pv3 center w-80": !isMobile,
          "pv2 w-100": isMobile,
        })}
      >
        <div className="w-25">
          <Link
            className={classNames("link dim red no-underline", {
              h3: !isMobile,
              h5: isMobile,
            })}
            to="/"
          >
            Pariah
          </Link>
        </div>

        <div className="w-25">
          <Link
            className={classNames("link dim black no-underline", {
              h3: !isMobile,
              h5: isMobile,
            })}
            to="/Gallery"
          >
            Gallery
          </Link>
        </div>

        <div className="w-25">
          <Link
            className={classNames("link dim black no-underline", {
              h3: !isMobile,
              h5: isMobile,
            })}
            to="/Rules"
          >
            Rules
          </Link>
        </div>

        <div className="w-25">
          <Link
            className={classNames("link dim black no-underline", {
              h3: !isMobile,
              h5: isMobile,
            })}
            to="/Gallery"
          >
            Discord
          </Link>
        </div>
      </nav>
    </div>
  );
};
