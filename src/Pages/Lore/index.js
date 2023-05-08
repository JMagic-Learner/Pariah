import React, { useEffect, useState } from "react"
import LoreExcerpt from "../../Components/LoreExcerpt"
import { WorldLore } from "./loreArray"

export const Lore = () => {
    const [selectedLore, setSelectedLore] = useState([
        {
            id: 0,
            title: "Durandis",
            imageUrl: "xxxxxxxx",
            text: "Durandis, a world conceived from the dreams of a dying god. Over the millennia, various races came into existence from the god's fevered dreams. They say that serene dreams usher in ages of peace, while the god's nightmares manifests wars, famines and cataclysms",
            text2: "Durandis is fading. The Shards of the Aspect are dead, and there is a general sense of lost purpose. It has been 643 years since the end of the Pariah, and yet Durandis has yet to heal. Dead cities lay scattered amongst Durandis, littered with the white-cystalized remains of the Faceless. The dead cannot rest in peace, as the Shackling prevents the final destination.  Magical artifacts are rare and dangerous, as the Pandemonium made it even riskier to study the arcane. Durandis is a in a state of half-life, it's people trying their hardest to regain what was lost in the War in Heaven."
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

