import { TRAITS } from "../../../Data/PilotTraitArray";
import { renderKeywords } from "../../../utils/renderKeywords";
import { TD } from "./TableCells";

export const TraitRow = ({ value, onChange, onKeywordClick }) => {
  const selected = TRAITS.find((t) => t.name === value);
  return (
    <tr>
      <TD className="w-30">
        <select
          className="w-100 f7 ba b--black-20 pa1 bg-white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">— Select Trait —</option>
          {TRAITS.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
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
