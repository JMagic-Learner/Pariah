import { BackgroundArray } from "./backgroundArray"
export const Background = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">C. Background</h1>
            <p className="h6"> Roll, choose, or invent your background</p>
            <section>
                <thead>
                    <tr className="h4 BackGroundRow EmphasizedTitle">
                        <th scope="col">#</th>
                        <th scope="col">Background</th>
                        <th className="TableDescription" scope="col">Description</th>
                    </tr>
                </thead>

                <tbody>

                    {BackgroundArray.map((background) => {
                        return (
                            <tr >
                                <th className="h6 BackGroundRow EmphasizedTitle" scope="row">{background.id}</th>
                                <td className="h6 BackGroundRow">{background.title}</td>
                                <td className="h6 BackGroundRow">{background.description}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </section>
        </div >
    )
}