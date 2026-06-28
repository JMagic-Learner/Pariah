import classNames from "classnames";

export const TextInput = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  onClick,
}) => (
  <input
    className={classNames(
      "input-reset ba b--black-20 pa1 bg-white f7 w-100",
      className,
    )}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    onClick={onClick}
  />
);
