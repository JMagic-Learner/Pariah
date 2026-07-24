// Shared across the MSU stats table and the two equipment tables so their
// columns stay visually aligned even though they're now separate <table>s.
const MSU_COL_WIDTHS = ["40%", "5rem", "5rem", "5.5rem", "6rem", "5rem"];

export const MsuColgroup = () => (
  <colgroup>
    {MSU_COL_WIDTHS.map((w, i) => (
      <col key={i} style={{ width: w }} />
    ))}
  </colgroup>
);
