export const Abilities = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">A. Generating Ability Scores</h1>
            <p> For each ability, roll 2d4, One at a time. The ability value is the first roll minus the second</p>
            <section className="d-flex flex-row">
                <div className="AbilitiyScores">
                    <ul>
                        <h2 className="EmphasizedTitle"> Body </h2>
                        <li> Body strength </li>
                        <li> Physical Resistance </li>
                        <li> Muscularity </li>
                        <li> Melee Attacks </li>
                    </ul>
                </div>
                <div className="AbilitiyScores">
                    <ul>
                        <h2 className="EmphasizedTitle"> Dexterity </h2>
                        <li> Reflexes </li>
                        <li> Poise </li>
                        <li> Speed </li>
                        <li> Dodging </li>
                    </ul>
                </div>
                <div className="AbilitiyScores">

                    <ul>
                        <h2 className="EmphasizedTitle"> Savvy </h2>
                        <li> Perception </li>
                        <li> Intuition </li>
                        <li> Psyche </li>
                        <li> Piloting </li>
                    </ul>
                </div>
                <div className="AbilitiyScores">

                    <ul>
                        <h2 className="EmphasizedTitle"> Tech </h2>
                        <li> Hacking </li>
                        <li> Engineering </li>
                        <li> Crafting </li>
                        <li> Ranged Attacks </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}