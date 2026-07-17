import classNames from "classnames";

export const SheetHeader = ({ children, right }) => (
  <div
    className={classNames("bg-dark-green white fw7 f7 pa2 ttu tracked", {
      tc: !right,
      "flex items-center justify-between": right,
    })}
  >
    <span>{children}</span>
    {right}
  </div>
);
