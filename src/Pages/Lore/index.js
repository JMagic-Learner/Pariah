import React, { useEffect, useState } from "react"
import LoreExcerpt from "../../Components/LoreExcerpt"
import { WorldLore } from "./loreArray"

export const Lore = () => {
    const [selectedLore, setSelectedLore] = useState([
        {
            id: 0,
            title: "Welcome to Death In Space",
            imageUrl: "xxxxxxxx",
            text: "Death in Space is a Sci Fi Roleplaying Game with space junker aesthetics",
            text2: "Please select lore entries in the left panel"
        }
    ])
    const Open = (title1) => {
        console.log("We have clicked on a lore entry")
        let selectT = WorldLore.filter((item) => item.title === title1)
        setSelectedLore(selectT)
    }
    return (
        <div className="Lorepage Page">
            <div className="d-flex">
                <div className="sideMenu bg-dark">
                    <h2> Entries </h2>
                    {WorldLore.map((lore) => {
                        return (
                            <button className="entry" onClick={() => Open(lore.title)}> {lore.title} </button>
                        )
                    })}
                </div>

                <LoreExcerpt propLore={selectedLore} />

            </div>
        </div>
    )
}

