export const Origins = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">B. Origins </h1>
            <p className="h6"> CORE RULES: Roll 1d6 and choose one of the two benefits listed</p>
            <p className="h6"> ALTERNATIVE: Roll 1d10 and choose one of the two benefits listed</p>
            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">1. Carbon [CORE] </h1>
                <p> Grown in space-based exo-wombs. Short life spans. Live their lives offworld and are untroubled by the darkness of space. More comfortable in a EVA Suit than out of one</p>
                <ul>
                    <li className="h6"> Engineered Lungs: Use half oxygen compared to everyone else (1 step for every two normal steps) </li>
                    <li className="h6"> Gearhead: Repair twice as fast </li>
                </ul>
            </div>

            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">2. Chrome [CORE] </h1>
                <p> Ancient AI placed in a body of organic material. Part machine, but with organic CPU and a distributed neural system that requires oxygen</p>
                <ul>
                    <li className="h6"> Native Machine: You can converse with machines as if they were real people. Plug in and find a friend </li>
                    <li className="h6"> Body Battery: You can use your body to power one small eletrical device, such as a hand-held item </li>
                </ul>
            </div>
            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">3. Punk [CORE] </h1>
                <p> Rebellious and non-conformist with a long history. They have seen civilizations collaspe, and others turn against each other</p>
                <ul>
                    <li className="h6"> Stubborn: You never give up. Reroll any dice roll once per session </li>
                    <li className="h6"> Green Thumb: You know everything about plants and what to usee them for. You start with a pocket greenhouse and some random seeds </li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">4. Solpod [CORE] </h1>
                    <p> Hibernating for decades, only staying awake for short periods. They dedicate their lives to the scientific study of slow cosmic phenomena</p>
                    <ul>
                        <li className="h6"> Long-Lived: You have a old and useful contact in every port </li>
                        <li className="h6"> Old Tech: You have a portable hibernation pod. Regenerates lost limbs, prevents aging, and the need to eat. Powered by starlight </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">5. Velocity Cursed [CORE] </h1>
                    <p> Ill-fated ones that have started to lose their connection with reality. They shift and flicker in and out of spacetime with glitching faces</p>
                    <ul>
                        <li className="h6"> Future Memory: You have already been here. Once per session, ask the referee for directions. </li>
                        <li className="h6"> Pocket World: You start with a portable non-phys server, housing a virtual reality where you store memories to connect the past and future of your life. Up to ten yesers can connect simultaneously </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">6. Void [CORE] </h1>
                    <p> Robed nihility shamans, hidden behind masks, speaking through synthetic voice scramblers. They have visions of the edge of the universe </p>
                    <ul>
                        <li className="h6"> Voice of the Void: You can make nearby electronics emit static and crackling whispers. </li>
                        <li className="h6"> Masked: You have a mask that you can reshape during rest into the resemblance of another face or mask. At a distance, it fools most.</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">7. Sightless [EXTRA] </h1>
                    <p> A byproduct of a experiment gone horribly wrong, centuries of captivity within a dark star robbed these individuals of sight. In turn, their senses have evolved to compensate,  </p>
                    <ul>
                        <li className="h6"> Thermal Sight: Instead of seeing the visible spectrum of light, you instead see the world in gray/black of the thermal spectrum. </li>
                        <li className="h6"> Sixth Sense: You can navigate in total darkness and know the location of objects/obstacles/persons in the current (immediate) room/space. You can hear soundwaves through 6 inches of material.</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">8. Nomad [EXTRA] </h1>
                    <p> A stateless wandering people. Never staying too long in one harbor, and somewhat stereotyped as pirates, refugees, and drug addicts  </p>
                    <ul>
                        <li className="h6"> Stateless Person: Once per session, you can change your background. </li>
                        <li className="h6"> Scavenger: When searching for food, you can also an roll a extra 1d20 on the FOOD table. Reroll on results of 18-20   .</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">9. Halo [EXTRA] </h1>
                    <p> A faint aura of visible void static is suspended above bald heads. The halo's static spectrum responds to the emotional state.   </p>
                    <ul>
                        <li className="h6"> Afterlife Conduit: When your hit points drop below 0, you gain one void point. </li>
                        <li className="h6"> Emotional Outburst: Once per session, your raise your emotional state such that your static halo emits a defeaning drone.</li>
                    </ul>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">10. Abomination [EXTRA] </h1>
                    <p> Onyx protrusions have erupted from under your skin, and a metallic tinge lingers wherever you walk. Significant mutations are apparent on your body. </p>
                    <ul>
                        <li className="h6"> Bladeform: Once per combat encounter, you can inflict 1d4 damage on yourself to transform one or both of your arms into onxy-black blades (1d8 damage) </li>
                        <li className="h6"> Void Maddened: Once per session, you can automatically receive a void corruption to auto pass a SVY check </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}