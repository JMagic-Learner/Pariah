import { TRAITS } from "../../../Data/PilotTraitArray";
import { renderKeywords } from "../../../utils/renderKeywords";
import { TD } from "./TableCells";

export const TraitRow = ({ value, onClick, onKeywordClick }) => {
  const selected = TRAITS.find((t) => t.name === value);
  return (
    <tr>
      <TD className="w-30">
        <button
          type="button"
          onClick={onClick}
          className="w-100 f7 ba b--black-20 pa1 bg-white tl pointer dim truncate"
          title="Click to choose a pilot trait"
        >
          {value || "— Select Trait —"}
        </button>
      </TD>
      <TD className="tc w-10 fw6 dark-green">{selected?.cost ?? ""}</TD>
      <TD className="lh-copy">
        {selected?.effect
          ? renderKeywords(selected.effect, onKeywordClick)
          : ""}
      </TD>
    </tr>
  );
};
