export const Allegiances = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">E. Allegiances </h1>
            <p className="h6"> CORE RULES: Roll 1d6 or choose one allegiance listed below.</p>
            <p className="h6"> ALTERNATIVE: Roll 1d8 or choose one allegiance listed below.</p>
            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">1. An Idea [CORE] </h1>
                <p> You held some value-faith, science or somethin else, higher than war and strife. You made compromises but kept away from fighting </p>
            </div>
            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">2. Family [CORE] </h1>
                <p> You stayed with family and kin, defending your turf with tooth and claw. </p>
            </div>
            <hr></hr>
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">3. Winning Side [CORE] </h1>
                <p> You happened to side with the winners, but in the end, did you really win</p>
            </div>
            <hr></hr>
            <div>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">4. Losing Side [CORE] </h1>
                    <p> Working for the losing side, death followed in your steps. You survived, but at great cost. </p>
                </div>
            </div>
            <hr></hr>
            <div>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">5. The Contract [CORE] </h1>
                    <p> As an opportunist, you swore allegiance to those who paid best.</p>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">6. None [CORE] </h1>
                    <p> You sided only with yourself and avoided the war as well as you could</p>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">7. Chaos [EXTRA] </h1>
                    <p> In the midst of the carnage, you pledged yourself to nihilistic acts of terrorism.</p>
                </div>
                <hr></hr>
                <div className="HorizontalContainer">
                    <h1 className="EmphasizedTitle h4">8. Refugees [EXTRA] </h1>
                    <p> Seeing others displaced by the Gem Wars, you devoted yourself to humanitarian efforts. </p>
                </div>
            </div>
        </div>
    )
}