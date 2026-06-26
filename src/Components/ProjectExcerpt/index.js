import { useEffect, useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

export const ProjectEntry = ({ propEntry }) => {
  const [transition, setTransition] = useState(0);
  useEffect(() => {
    setTransition(1);
  }, []);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const imageGallery = propEntry?.images;
  const factionBonuses = propEntry?.factionBonuses || [];
  const generalBonuses = propEntry?.generalBonuses || [];

  return (
    <div className="w-90 center">
      <div className="flex">
        <div
          className={classNames({
            "w-50 mr2": !isMobile,
            "w-100 mr1": isMobile,
          })}
        >
          <p className="tj">{propEntry?.description}</p>
        </div>
        <div
          className={classNames({
            "w-100 ml2": !isMobile,
            "w-100 ml1": isMobile,
          })}
        >
          {" "}
          {generalBonuses?.map((bonus, index) => {
            return (
              <div className="bg-gray tl">
                <h3>
                  {" "}
                  General Bonus {index + 1}: {bonus?.title}{" "}
                </h3>
                <p> {bonus?.text} </p>
              </div>
            );
          })}
          {factionBonuses?.map((bonus, index) => {
            return (
              <div className=" tl">
                <h3>
                  {" "}
                  Faction Bonus {index + 1}: {bonus?.title}{" "}
                </h3>
                <p> {bonus?.text} </p>
                {bonus?.extraTrait !== undefined && (
                  <div className="TraitsDriveDetailsTable">
                    <thead>
                      <tr className="h4 EmphasizedTitle">
                        <th
                          className="TraitsDriveDetailsTableIndex"
                          scope="col"
                        >
                          Trait Name
                        </th>
                        <th
                          className="TraitsDriveDetailsTableTitle"
                          scope="col"
                        >
                          Trait Cost
                        </th>
                        <th
                          className="TraitsDriveDetailsTableTitle"
                          scope="col"
                        >
                          Effect
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="TraitsDriveDetailsTableRow">
                        <th className="h6  EmphasizedTitle" scope="row">
                          {3}
                        </th>
                        <td className="h6 ">{4}</td>
                      </tr>
                    </tbody>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="fl w-100 w-50-ns ph2"
        style={{ opacity: transition, transition: "opacity 2s ease-in-out" }}
      >
        {imageGallery?.map((image, index) => {
          const active = index < 4;
          return (
            active && (
              <a
                key={`${image?.title}-${index}`}
                href=""
                className="pv2 grow db no-underline black"
              >
                <img className="db w-100" src={imageGallery[index]?.url} />
              </a>
            )
          );
        })}
      </div>
      <div className="fl w-50 w-25-ns ph2">
        {imageGallery?.map((image, index) => {
          const active = index >= 4 && index < 12;
          return (
            active && (
              <a
                key={`${image?.title}-${index}`}
                href=""
                className="pv2 grow db no-underline black"
              >
                <img className="db w-100" src={imageGallery[index]?.url} />
              </a>
            )
          );
        })}
      </div>
      <div className="fl w-50 w-25-ns ph2">
        {imageGallery?.map((image, index) => {
          const active = index >= 12;
          return (
            active && (
              <a
                key={`${image?.title}-${index}`}
                href=""
                className="pv2 grow db no-underline black"
              >
                <img className="db w-100" src={imageGallery[index]?.url} />
              </a>
            )
          );
        })}
      </div>
    </div>
  );
};
