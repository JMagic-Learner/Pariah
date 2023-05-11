import { Abilities } from "../../Components/Abilities";
import { Origins } from "../../Components/Origins";
import { Background } from "../../Components/Background";
import { TraitDrive } from "../../Components/TraitsDrive";
import { Allegiances } from "../../Components/Allegiances";
import { HPDefense } from "../../Components/HPDefense";
export const CharacterCreation = () => {
    return (
        <div className="Page CharacterCreation">
            <h2 className="EmphasizedTitle"> Character Creation </h2>
            <section className="d-flex flex-row">
                <section className="Right-Column">
                    <Abilities />
                    <hr></hr>
                    <Background />
                    <hr></hr>
                    <TraitDrive />
                    <hr></hr>
                    <Allegiances />
                </section>
                <section className="Left-Column">
                    <Origins />
                    <hr></hr>
                    <HPDefense />
                </section>

            </section>



            <section className="Past Allegiance">

            </section>

            <section className="Hit Points and Defense Rating">

            </section>

        </div >
    )
}
