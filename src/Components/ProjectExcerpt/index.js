import { useEffect, useState } from "react";

export const ProjectEntry = (props) => {
  const [transition, setTransition] = useState(0);
  useEffect(() => {
    setTransition(1);
  }, []);

  const imageGallery = props?.propEntry?.images;

  return (
    <div className="w-90 center">
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
