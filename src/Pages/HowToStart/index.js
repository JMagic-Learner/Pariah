import React from "react"
import { ContactCard } from "../../Components/ContactCard"

export const HowToStart = () => {
    return (
        <div className=" Page">

            <div className="introduction bg-dark">
                <hr></hr>
                <h3 className="leading"> Upcoming Dungeon 4/22/2023: Cliffside Abbey</h3>
                <hr></hr>
                <div className="flex-wrap mx-auto w-75">
                    <p> Townspeople are dissapearing around the outskirts of Avard. There are whispers in the darkest Avardian alleys that the Pariah Cults are at work. The local garrison of soldiers have tracked down the missing townspeople to the ruins of a pre-war monastary, and have already sent a task force to investigate. Unfortunately, that was two weeks ago, and not a single soul has returned. You and a party of like-minded mercenaries have banded together, driven either by promises of redemption, honor, wealth, and glory.</p>
                </div>
                <div className="flex-wrap mx-auto w-75">
                    <p> Adventure Status: 0/5 </p>
                </div>

            </div>

            <div className="introduction bg-dark " >

                <ContactCard />

            </div>

        </div >
    )
}

