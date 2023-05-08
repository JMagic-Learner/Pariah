export const Origins = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">B. Origins </h1>
            <p> CORE RULES: Roll 1d6 and choose one of the two benefits listed</p>
            <p> ALTERNATIVE: Roll 1d8 and choose one of the two benefits listed</p>
            <hr></hr>
            <div className="AbilitiyScores">
                <h1 className="EmphasizedTitle">1. Carbon [CORE] </h1>
                <p> Grown in space-based exo-wombs. Short life spans. Live their lives offworld and are untroubled by the darkness of space. More comfortable in a EVA Suit than out of one</p>
                <ul>
                    <li> Engineered Lungs: Use half oxygen compared to everyone else (1 step for every two normal steps) </li>
                    <li> Gearhead: Repair twice as fast </li>
                </ul>
            </div>

            <hr></hr>
            <div className="AbilitiyScores">
                <h1 className="EmphasizedTitle">2. Chrome [CORE] </h1>
                <p> Ancient AI placed in a body of organic material. Part machine, but with organic CPU and a distributed neural system that requires oxygen</p>
                <ul>
                    <li> Native Machine: You can converse with machines as if they were real people. Plug in and find a friend </li>
                    <li> Body Battery: You can use your body to power one small eletrical device, such as a hand-held item </li>
                </ul>
            </div>
            <hr></hr>
            <div className="AbilitiyScores">
                <h1 className="EmphasizedTitle">3. Punk [CORE] </h1>
                <p> Rebellious and non-conformist with a long history. They have seen civilizations collaspe, and others turn against each other</p>
                <ul>
                    <li> Stubborn: You never give up. Reroll any dice roll once per session </li>
                    <li> Green Thumb: You know everything about plants and what to usee them for. You start with a pocket greenhouse and some random seeds </li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <div className="AbilitiyScores">
                    <h1 className="EmphasizedTitle">4. Solpod [CORE] </h1>
                    <p> Hibernating for decades, only staying awake for short periods. They dedicate their lives to the scientific study of slow cosmic phenomena</p>
                    <ul>
                        <li> Long-Lived: You have a old and useful contact in every port </li>
                        <li> Old Tech: You have a portable hibernation pod. Regenerates lost limbs, prevents aging, and the need to eat. Powered by starlight </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div>
                <div className="AbilitiyScores">
                    <h1 className="EmphasizedTitle">5. Velocity Cursed [CORE] </h1>
                    <p> Ill-fated ones that have started to lose their connection with reality. They shift and flicker in and out of spacetime with glitching faces</p>
                    <ul>
                        <li> Future Memory: You have already been here. Once per session, ask the referee for directions. </li>
                        <li> Pocket World: You start with a portable non-phys server, housing a virtual reality where you store memories to connect the past and future of your life. Up to ten yesers can connect simultaneously </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="AbilitiyScores">
                    <h1 className="EmphasizedTitle">6. Void [CORE] </h1>
                    <p> Robed nihility shamans, hidden behind masks, speaking through synthetic voice scramblers. They have visions of the edge of the universe </p>
                    <ul>
                        <li> Voice of the Void: You can make nearby electronics emit static and crackling whispers. </li>
                        <li> Masked: You have a mask that you can reshape during rest into the resemblance of another face or mask. At a distance, it fools most.</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="AbilitiyScores">
                    <h1 className="EmphasizedTitle">7. Sightless [EXTRA] </h1>
                    <p> A byproduct of a experiment gone horribly wrong, centuries of captivity within a dark star robbed these individuals of sight. In turn, their senses have evolved to compensate,  </p>
                    <ul>
                        <li> Echolocation: You can detect the muted sounds within 50 feet. You can also discern whether the sound is mechanical, organic, or void in origin and the exact location of audio source.  </li>
                        <li> Sixth Sense: You can navigate in total darkness and know the location of objects/obstacles in the current room/space. You can discern traces of hostility through voice tone if spoken to within 20 feet by a physical (non-holographic, non-radio, non-psychic) source.</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="AbilitiyScores">
                    <h1 className="EmphasizedTitle">8. Nomad [EXTRA] </h1>
                    <p> A stateless wandering people. Never staying too long in one harbor, and somewhat stereotyped as pirates, refugees, and drug addicts  </p>
                    <ul>
                        <li> Well-Traveled: Once per session, you can ask the referee for facts about a particular location. </li>
                        <li> Scavenger: When searching for food, you can also an roll a extra 1d20 on the FOOD table. Reroll on results of 18-20   .</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}