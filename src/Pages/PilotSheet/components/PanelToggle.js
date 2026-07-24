export const PanelToggle = ({ open, onToggle }) => (
  <button
    className="f8 ph2 pv1 bn br1 pointer bg-white dark-green fw7 dim v-mid"
    onClick={onToggle}
  >
    {open ? "▲ Collapse" : "▼ Expand"}
  </button>
);
