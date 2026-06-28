export const NumInput = ({
  value,
  onChange,
  placeholder = "",
  width = "3rem",
}) => (
  <input
    type="number"
    className="input-reset ba b--black-20 pa1 bg-white f7 tc"
    style={{ width }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);
