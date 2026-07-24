import classNames from "classnames";

export const TH = ({ children, className = "" }) => (
  <th
    className={classNames(
      "fw6 bb b--black-20 pb2 pr2 bg-white f7 tl nowrap",
      className,
    )}
  >
    {children}
  </th>
);

export const TD = ({ children, className = "", colSpan }) => (
  <td
    className={classNames("pv2 pr2 bb b--black-20 f7", className)}
    colSpan={colSpan}
  >
    {children}
  </td>
);
