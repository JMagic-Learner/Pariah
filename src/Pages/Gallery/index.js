import { useState, useEffect } from "react";
import { ImageGallery } from "../../Data/ImageGallery";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { ImageMosaic } from "./ImageMosaic";
import OneEarth from "../../Assets/Images/ONEEARTH.png";

export const Gallery = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const defaultImage = {
    id: 0,
    title: "Plateau's Diamond team",
    images: [
      {
        id: 0,
        title: "OneEarth",
        url: OneEarth,
      },
    ],
    text: "A war fought for the control and extraction of Gems. Gems are known for their exceptional ability to refract light. This property allowed civilzations to advance technology such as the bridger spacecraft. Value and speculation on open markets forced political entities into a all-out corporate war. ",
  };

  const [selectedProject, setSelectedEntry] = useState([defaultImage]);
  const Open = (title1) => {
    let selectT = ImageGallery.filter((item) => item.title === title1)?.[0];
    setSelectedEntry(selectT);
  };

  useEffect(() => {
    setSelectedEntry(defaultImage);
  }, []);
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
        {ImageGallery.map((entry) => {
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
        <ImageMosaic propEntry={selectedProject} />
      </div>
    </div>
  );
};
