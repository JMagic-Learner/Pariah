import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const NAV_LINKS = [
  { to: "/PilotSheet", label: "Pilot Sheet" },
  { to: "/ForceLists", label: "Force Lists" },
  { to: "/Gallery", label: "Gallery" },
  { to: "/Contact", label: "Contact" },
  { to: "/Links", label: "Links" },
];

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = useState(false);

  const desktopLinkClass = "link dim black no-underline h3 mh3";

  if (!isMobile) {
    return (
      <div className="bb">
        <nav className="bg-near-white flex flex-wrap pv3 center w-90">
          <div className="w-50">
            <Link className="link dim orange no-underline fw7 h3" to="/">
              Gundam Flashpoint 0.6.8
            </Link>
          </div>
          <div className="flex w-50 items-center">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} className={desktopLinkClass} to={to}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="bb bg-near-white">
      {/* Mobile header row */}
      <div className="flex items-center justify-between ph3 pv2">
        <Link
          className="link dim orange no-underline fw7 f5"
          to="/"
          onClick={() => setOpen(false)}
        >
          Gundam Flashpoint 0.6.8
        </Link>
        <button
          className="bn bg-transparent pointer pa1 f5 dark-gray"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Accordion links */}
      {open && (
        <div className="bb b--black-10">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              className="db link dim black no-underline f6 pv3 ph3 bb b--black-10 bg-near-white"
              to={to}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
