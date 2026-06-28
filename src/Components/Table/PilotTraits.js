import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { TRAITS } from "../../Data/PilotTraitArray";

export const PilotTraits = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      {!isMobile && (
        <div className="center">
          <div className="mh3">
            <h1> Traits </h1>(
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Name
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Cost
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Effect
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Restricted
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {TRAITS.map((trait) => {
                    return (
                      <>
                        <tr>
                          <td className="pv3 pr3 bb b--black-20">
                            {trait.name}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {trait.cost}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {trait.effect}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {trait?.restrictions || "NA"}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            )
            {/* {isMobile && (
            <div className="w-100">
              {TRAITS.map((entry) => {
                return (
                  <div className="bg-dark-gray pv3">
                    <a
                      href="#my-drawer"
                      className="pa3 bg-dark-gray white bn br2 pointer"
                    >
                      {entry.tier}
                    </a>
                    <div id="my-drawer" className="drawer-css-only">
                      <a
                        href="#"
                        className="close-btn absolute top-1 right-2 f1 blue"
                      >
                        ×
                      </a>
                      <div className="pa3 mt5">
                        <h2 className="f4 bg-near-black white mv0 pv2 ph3">
                          Name: {entry?.name}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost / Sanding: {entry?.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Effects (3+): {entry?.effect}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Restrictions: {entry?.restriction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )} */}
          </div>

          <div className="mh3">
            <h1> Shipping, and some honest advice </h1>
            <div
              className={classNames("w-100", {
                flex: !isMobile,
              })}
            >
              <div
                className={classNames({
                  "w-50 mr2": !isMobile,
                  "w-90 center": isMobile,
                })}
              >
                <p className="tj">
                  Shipping miniatures is the trickiest part of the commision
                  business. Its the first and final step of any commision, and
                  arguably the most important factor.
                </p>

                <p className="tj">
                  Before you even begin to think about shipping a miniature, you
                  have to think about it's likeliness to survive the trip. It is
                  generally safer to ship unassembled, or new on sprue
                  miniatures than fully assembled figures. If your miniature has
                  some fragile parts such as exposed spears, lances, swords,{" "}
                  <span className="fw6 red"> [INBUILT] </span> highly recommend
                  leaving the minature assembled and having the sprue act as
                  protective support.
                </p>

                <p className="tj">
                  If for whatever reason, you do want to ship a fully assembled
                  miniature, please take a photograph of it's initial condition
                  prior to shipping. If it arrives damaged, or broken,{" "}
                  <span className="fw6 red"> [INBUILT] </span>
                  will return the miniature as is. There have been instances in
                  the past where a resin model has been shattered into oblivion
                  by rough handling at distribution centers, making it nearly
                  impossible to repair and continue the commision work.
                </p>

                <p className="tj">
                  <span className="fw6 red"> [INBUILT] </span> in turn, will
                  also take a picture of the miniature when
                  <span className="fw6 red"> [INBUILT] </span> INBUILT send the
                  finished commision back to y
                  <span className="fw6 red"> [INBUILT] </span>ress. INBUILT will
                  most likely also take a final video of me packing the
                  miniature into it's parcel, prior to dropping it off a
                  <span className="fw6 red"> [INBUILT] </span> shipping company.
                  INBUILT will not be able to guarantee the level of handling
                  from the shipping company or it's affiliated distribution
                  centers
                </p>
              </div>

              <div
                className={classNames("", {
                  "w-50 ml2": !isMobile,
                  "w-90 center": isMobile,
                })}
              >
                <img
                  className="db w-100"
                  src={
                    "https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="w-100 h-100">
          <h1> Traits </h1>
          {TRAITS.map((trait, index) => (
            <div
              key={index}
              className={classNames(" bg-light-gray fl mh1 ph1", {
                "w-100 mb3": isMobile,
              })}
            >
              <p className="fw7 ma0 mb1 red f6 tc"> {trait.name}</p>
              <p className="lh-copy ma0 f7 tj">
                Restriction(s): {trait?.restriction || "-"}{" "}
              </p>
              <p className="lh-copy ma0 f7 tj">Cost: {trait.cost}</p>
              <p className="lh-copy ma0 f7 tj">Effect {trait.effect}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
