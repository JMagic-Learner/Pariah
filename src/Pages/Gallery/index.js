import { useState } from "react";
import { ProjectEntry } from "../../Components/ProjectExcerpt";
import { Projects } from "./loreArray";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

export const Gallery = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [selectedProject, setSelectedEntry] = useState([
    {
      id: 0,
      title: "Welcome to Death In Space",
      images: [{}],
      text: "Death in Space is a Sci Fi Roleplaying Game with space junker aesthetics",
    },
  ]);
  const Open = (title1) => {
    let selectT = Projects.filter((item) => item.title === title1)?.[0];
    setSelectedEntry(selectT);
  };
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div
        className={classNames({
          "w-25": !isMobile,
          "w-100": isMobile,
        })}
      >
        {Projects.map((entry) => {
          return (
            <button
              className={classNames("w-100", {
                pv3: !isMobile,
                pv2: isMobile,
              })}
              onClick={() => Open(entry.title)}
            >
              {`${entry.title}`}
            </button>
          );
        })}
      </div>

      <div className="w-100">
        <ProjectEntry propEntry={selectedProject} />
      </div>
    </div>
  );
};
