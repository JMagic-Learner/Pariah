export const RefToggle = ({ open, onToggle, label }) => (
  <button
    className="f7 pa1 ph2 ba b--dark-green dark-green bg-white pointer dim br1 mt2"
    onClick={onToggle}
  >
    {open ? `▲ Hide ${label}` : `▼ View ${label}`}
  </button>
);
