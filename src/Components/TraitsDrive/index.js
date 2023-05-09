import { Traits } from "./traitArray"
import { Drive } from "./driveArray"
import { Table } from "../Table"
import { Details } from "./detailArray"
import React, { useState, useEffect } from 'react'
export const TraitDrive = () => {
    const [selectedTrait, setSelectedTrait] = useState("")
    const [selectedDrive, setSelectedDrive] = useState("")
    const [selectedDetails, setSelectedDetails] = useState("")
    const generateRandom = (min, array, type) => {
        min = Math.ceil(min);
        const max = Math.floor(array.length);
        const index = Math.floor(Math.random() * (max - min + 1) + min)
        if (type === "Traits") {
            setSelectedTrait(array[index].title)
        } else if (type === "Drive") {
            setSelectedDrive(array[index].title)
        } else {
            setSelectedDetails(array[index].title)
        }
    }

    useEffect(() => {
        generateRandom(0, Traits, "Traits")
        generateRandom(0, Drive, "Drive")
        generateRandom(0, Details, "Details")
    }, [])
    return (
        <div >
            <h1 className="EmphasizedTitle">D. Traits, Drive, and other Details</h1>
            <p className="h6"> Roll, choose, or invent your character information</p>

            <section className="d-flex flex-row mx-auto randomGenerationContainer">
                <button type="button" class="btn btn-secondary randomButton" onClick={() => generateRandom(0, Traits, "Traits")}> Generate Random Trait </button>
                <span className="Keyword"> </span>
                <p>You are </p> <span className="Keyword EmphasizedTitle"> {selectedTrait} </span>
            </section>

            <section className="d-flex flex-row mx-auto randomGenerationContainer">
                <button type="button" class="btn btn-secondary randomButton" onClick={() => generateRandom(0, Drive, "Drive")}> Generate Random Drive</button>
                <span className="Keyword EmphasizedTitle"> {selectedDrive} </span>
            </section>
            <hr></hr>
            <section className="d-flex flex-row mx-auto randomGenerationContainer">
                <button type="button" class="btn btn-secondary randomButtonLarge" onClick={() => generateRandom(0, Details, "Details")}> Generate Random Details</button>
            </section>
            <span className="Keyword EmphasizedTitle"> {selectedDetails} </span>
            {/* <section className="d-flex flex-row">
                <Table dataArray={Traits} tableTitle="Traits" />
                <Table dataArray={Drive} tableTitle="Drive" />

            </section> */}

        </div >
    )
}