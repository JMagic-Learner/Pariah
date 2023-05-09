export const Table = (props) => {
    const { tableTitle, dataArray } = props
    return (
        <div className="TraitsDriveDetailsTable">
            <thead >
                <tr className="h4 EmphasizedTitle">
                    <th className="TraitsDriveDetailsTableIndex" scope="col">#</th>
                    <th className="TraitsDriveDetailsTableTitle" scope="col">{tableTitle}</th>
                </tr>
            </thead >
            <tbody>
                {dataArray.map((dataSingle) => {
                    return (
                        <tr className="TraitsDriveDetailsTableRow">
                            <th className="h6  EmphasizedTitle" scope="row">{dataSingle.id}</th>
                            <td className="h6 ">{dataSingle.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </div >
    )
}