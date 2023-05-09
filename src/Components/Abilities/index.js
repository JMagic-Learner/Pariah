import React, { useState, useEffect } from "react"
export const Abilities = () => {

    const [body, setBody] = useState(0)
    const [dexterity, setDexterity] = useState(0)
    const [savvy, setSavvy] = useState(0)
    const [tech, setTech] = useState(0)
    const generateRandom = () => {
        const min = Math.ceil(0);
        const max = Math.floor(4);
        const value = Math.floor(Math.random() * (max - min + 1) + min)
        const value2 = Math.floor(Math.random() * (max - min + 1) + min)
        const value3 = Math.floor(Math.random() * (max - min + 1) + min)
        const value4 = Math.floor(Math.random() * (max - min + 1) + min)
        const value5 = Math.floor(Math.random() * (max - min + 1) + min)
        const value6 = Math.floor(Math.random() * (max - min + 1) + min)
        const value7 = Math.floor(Math.random() * (max - min + 1) + min)
        const value8 = Math.floor(Math.random() * (max - min + 1) + min)
        setBody(value - value2)
        setDexterity(value3 - value4)
        setSavvy(value5 - value6)
        setTech(value7 - value8)
    }

    useEffect(() => {
        generateRandom()
    }, [])

    return (
        <div >
            <h1 className="EmphasizedTitle">A. Generating Ability Scores</h1>
            <p className="h6"> For each ability, roll 2d4, One at a time. The ability value is the first roll minus the second</p>
            <section className="d-flex flex-row mx-auto randomGenerationContainer">
                <button type="button" class="btn btn-secondary randomButtonLarge" onClick={() => generateRandom()}> Generate Random Stats </button>
            </section>

            <section className="d-flex flex-row">
                <div className="QuadContainer">
                    <ul>
                        <h2 className="EmphasizedTitle"> BDY {body} </h2>
                        <li className="h6"> Body  </li>
                        <li className="h6"> Physical Resistance </li>
                        <li className="h6"> Muscularity </li>
                        <li className="h6"> Melee Attacks </li>
                        <li className="h6 EmphasizedTitle"> Recovery {"1d8 +" + body} </li>
                    </ul>
                </div>
                <div className="QuadContainer">
                    <ul>
                        <h2 className="EmphasizedTitle"> DEX {dexterity}</h2>
                        <li className="h6"> Dexterity </li>
                        <li className="h6"> Poise </li>
                        <li className="h6"> Speed </li>
                        <li className="h6"> Reflexes </li>
                        <li className="h6 EmphasizedTitle"> Unarmored Defense {12 + dexterity} </li>
                    </ul>
                </div>
                <div className="QuadContainer">
                    <ul>
                        <h2 className="EmphasizedTitle"> SVY {savvy} </h2>
                        <li className="h6"> Savvy </li>
                        <li className="h6"> Perception </li>
                        <li className="h6"> Intuition </li>
                        <li className="h6"> Psyche </li>
                        <li className="h6"> Piloting </li>
                    </ul>
                </div>
                <div className="QuadContainer">
                    <ul>
                        <h2 className="EmphasizedTitle"> TEC {tech} </h2>
                        <li className="h6"> Tech </li>
                        <li className="h6"> Hacking </li>
                        <li className="h6"> Engineering </li>
                        <li className="h6"> Crafting </li>
                        <li className="h6"> Ranged Attacks </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}