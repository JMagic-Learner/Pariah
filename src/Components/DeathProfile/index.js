import React, { useEffect } from 'react'

const DeathProfile = (props) => {
    const { deathProfile } = props

    return (
        <div className="sideMenu2 bg-dark">
            <h2>{deathProfile[0].characterName}</h2>
            <div className="excerpt-text">
                <table className="table excerpt-text">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Player</th>
                            <th scope="col">Race</th>
                            <th scope="col">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> {deathProfile[0].date} </th>
                            <td>{deathProfile[0].playerName}</td>
                            <td>{deathProfile[0].race}</td>
                            <td>{deathProfile[0].class}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr></hr>
            <div className="excerpt-text">
                <h2> Cause of Death </h2>
                <p className="excerpt-text text-justify"> {deathProfile[0].causeOfDeath}  </p>
            </div>
            <hr></hr>
            <div className="excerpt-text">
                <h2 className="leading"> Damage </h2>
                <p className="excerpt-text text-justify"> {deathProfile[0].damage}  </p>
            </div>
            <hr></hr>
            <div className="excerpt-text">
                <h2> Description </h2>
                <p className="excerpt-text text-justify"> {deathProfile[0].description}  </p>
            </div>
        </div>
    )
}

export default DeathProfile