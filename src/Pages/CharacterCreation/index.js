import { Abilities } from "../../Components/Abilities";
import { Origins } from "../../Components/Origins";
export const CharacterCreation = () => {
    return (
        <div className="Page CharacterCreation bg-dark">
            <h2 className="EmphasizedTitle"> Character Creation </h2>
            <section className="d-flex flex-row">
                <section className="Right-Column">
                    <Abilities />
                    <hr></hr>
                    <Abilities />
                </section>
                <section className="Left-Column">
                    <Origins />
                </section>

            </section>



            <section className="Past Allegiance">

            </section>

            <section className="Hit Points and Defense Rating">

            </section>

        </div >
    )
}
