import React, { useState } from 'react'
import DeathProfile from '../../Components/DeathProfile'
import { DeathArray } from "./PlayerDeaths"

export const Deaths = () => {
    const [death, setDeath] = useState([
        {
            date: "4/12/2023",
            playerName: "Example",
            characterName: "Example",
            race: "Example",
            class: "Example",
            causeOfDeath: "Stabbed to death by goblins",
            description: "A generic fighter who liked to wear plate armor",
            damage: 50,
        },
    ])
    const Open = (characterName) => {
        let selectT = DeathArray.filter((item) => item.characterName === characterName)
        setDeath(selectT)
    }
    return (
        <div className="Page">
            <div className="d-flex">
                <div className="sideMenu bg-dark">
                    <h2> Entries </h2>
                    {DeathArray.map((entry) => {
                        return (
                            <button className="entry" onClick={() => Open(entry.characterName)}> {entry.characterName} </button>
                        )
                    })}
                </div>
                <DeathProfile deathProfile={death} />
            </div>
        </div>
    )
}