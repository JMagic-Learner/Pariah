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
            causeOfDeath: "Stabbed to death by orbital station thugs",
            description: "Your true death is found at the edge of a galaxy. You feel your existence being peeled away from a existential horror, in a lake of mirrors",
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