export const Table = ({ tableTitle, columns, dataArray }) => {
  if (columns) {
    return (
      <div className="overflow-auto mv2">
        <table
          className="f6 collapse ba b--black-10"
          style={{
            minWidth: `${Math.max(columns.length * 90, 600)}px`,
            width: "100%",
          }}
        >
          <thead>
            <tr className="bg-near-black white tl">
              {columns.map((col, i) => (
                <th key={i} className={`pa2 fw6${col.tc ? " tc" : ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataArray.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
              >
                {columns.map((col, j) => (
                  <td
                    key={j}
                    className={[
                      "pa2",
                      col.tc ? "tc" : "",
                      col.bold ? "fw7" : "",
                      col.accent ? "orange" : "",
                      col.lh ? "lh-copy" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="TraitsDriveDetailsTable">
      <thead>
        <tr className="h4 EmphasizedTitle">
          <th className="TraitsDriveDetailsTableIndex" scope="col">
            #
          </th>
          <th className="TraitsDriveDetailsTableTitle" scope="col">
            {tableTitle}
          </th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((dataSingle) => (
          <tr className="TraitsDriveDetailsTableRow" key={dataSingle.id}>
            <th className="h6 EmphasizedTitle" scope="row">
              {dataSingle.id}
            </th>
            <td className="h6">{dataSingle.title}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};
