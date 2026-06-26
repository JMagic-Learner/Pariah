import { KEYWORDS } from "../../../Data/KeywordArray";

export const Keywords = () => {
  return (
    <div>
      <h2 className="f2 fw7 dark-red bb pb2 mb3">2.11 — Keywords</h2>
      <p className="lh-copy mb4">
        Keywords appear on weapons, support systems, and abilities to define
        special rules. When a keyword conflicts with a general rule, the keyword
        takes precedence. Keywords marked with <strong>(X)</strong> include a
        numeric value that scales the effect — the specific value is listed on
        the item that grants it.
      </p>
      {/* <div className="overflow-auto">
        <table className="f6 w-100 collapse ba b--black-10">
          <thead>
            <tr className="bg-near-black white tl">
              <th className="pa2 fw6 w-20 nowrap">Keyword</th>
              <th className="pa2 fw6">Effect</th>
            </tr>
          </thead>
          <tbody>
            {KEYWORDS.map((kw, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                <td className="pa2 fw7 dark-red v-top nowrap">{kw.name}</td>
                <td className="pa2 lh-copy">{kw.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="w-100 h-100">
        {KEYWORDS.map((keyword, index) => (
          <div key={index} className="mb3 h-25 w-40 bg-light-gray fl mh2">
            <p className="fw7 ma0 mb1 dark-red f6 tc">{keyword.name}</p>
            <p className="lh-copy ma0 f7 tj">{keyword.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
