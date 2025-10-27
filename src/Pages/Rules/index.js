import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";

const Pricing = [
  {
    tier: "Infantry - TableTop Ready",
    refinement: "Yes",
    basic: "Yes",
    shading: "No",
    edge: "No",
    cost: "$5.00 per miniature",
    description:
      "An infantry unit is painted, with three or more basic colors. Shading, edgehighlighting is not included",
  },
  {
    tier: "Infantry - TableTop Ready Plus",
    refinement: "Yes",
    basic: "Yes",
    shading: "Yes",
    edge: "Yes",
    cost: "$7.50 per miniature",
    description:
      "An infantry unit of choice is painted in three or more basic colors, along with shading, and edgehighlighting. This is for individuals where you definitely want to make a impression",
  },
  {
    tier: "Vehicle / Monster - TableTop Ready",
    refinement: "Yes",
    basic: "Yes",
    shading: "No",
    edge: "No",
    cost: "$15.00 per miniature",
    description:
      "The Unit is painted, with three or more basic colors. Shading, edgehighlighting is not included",
  },
  {
    tier: "Vehicle / Monster - TableTop Ready Plus",
    refinement: "Yes",
    basic: "Yes",
    shading: "Yes",
    edge: "Yes",
    cost: "$30 per miniature",
    description:
      "The Unit is painted, with three or more basic colors. Shading, edgehighlighting is not included",
  },
  {
    tier: "Character - TableTop Ready Plus",
    refinement: "Yes",
    basic: "Yes",
    shading: "Yes",
    edge: "Yes",
    cost: "$50.00 per miniature",
    description:
      "The Unit is painted, with three or more basic colors. Shading, Edgelihgting",
  },
  {
    tier: "ASSEMBLY",
    refinement: "Yes",
    basic: "NA",
    shading: "Na",
    edge: "NA",
    cost: "To be determined by complexity of the model",
    description:
      "A flat overall charge of $10 for an simple model (less than 50 pieces). If the modal is 50 pieces or more, a flat fee of $20 is charged",
  },
  {
    tier: "SHIPPING",
    refinement: "NA",
    basic: "NA",
    shading: "NA",
    edge: "NA",
    cost: "To be determined by shipping company and distance",
    description:
      "Shipping is a down payment, the client puts down x amount for delivery and return of the parcel",
  },
  {
    tier: "3D Printed Minatures",
    refinement: "NA",
    basic: "NA",
    shading: "NA",
    edge: "NA",
    cost: "To be determined by volume of resin used",
    description:
      "Printed via an Elegoo resin printer, this option allows you to forgo the initial cost of shipping to my address",
  },
];
export const Rules = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      className={classNames("", {
        "flex mt5": !isMobile,
        mt2: isMobile,
      })}
    >
      <div className="center">
        <div className="mh3">
          <h1> Pricing </h1>
          {!isMobile && (
            <div className="overflow-auto">
              <table className="f9 w-100 mh2" cellspacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white ">
                      Painting Tier
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Gap Filling / Sanding
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Basic Colors (3+)
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Shading
                    </th>
                    <th className="fw6 bb b--black-20 pb3 pr3 bg-white">
                      Edge Highlights
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Cost
                    </th>
                    <th className="fw6 bb b--black-20  pb3 pr3 bg-white">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {Pricing.map((entry) => {
                    return (
                      <>
                        <tr>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.tier}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.refinement}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.basic}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.shading}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.edge}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.cost}
                          </td>
                          <td className="pv3 pr3 bb b--black-20">
                            {entry.description}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {isMobile && (
            <div className="w-100">
              {Pricing.map((entry) => {
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
                          Tier: {entry.tier}
                        </h2>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Gap Filling / Sanding: {entry.refinement}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Base Colors (3+): {entry.basic}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Shading: {entry.shading}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Edge Highlights: {entry.edge}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Cost: {entry.cost}
                        </p>
                        <p className={`pv3 pr3 bb b--white-20`}>
                          Description: {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
                generally safer to ship unassembled, or new on sprue miniatures
                than fully assembled figures. If your miniature has some fragile
                parts such as exposed spears, lances, swords, I highly recommend
                leaving the minature assembled and having the sprue act as
                protective support.
              </p>

              <p className="tj">
                If for whatever reason, you do want to ship a fully assembled
                miniature, please take a photograph of it's initial condition
                prior to shipping. If it arrives damaged, or broken, I will
                return the miniature as is. There have been instances in the
                past where a resin model has been shattered into oblivion by
                rough handling at distribution centers, making it nearly
                impossible to repair and continue the commision work.
              </p>

              <p className="tj">
                I in turn, will also take a picture of the miniature when I send
                the finished commision back to your address. I will most likely
                also take a final video of me packing the miniature into it's
                parcel, prior to dropping it off at the shipping company. I will
                not be able to guarantee the level of handling from the shipping
                company or it's affiliated distribution centers
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
    </div>
  );
};
