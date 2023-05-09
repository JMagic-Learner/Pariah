export const HPDefense = () => {
    return (
        <div >
            <h1 className="EmphasizedTitle">F. Hit Points and Defense </h1>
            <p className="h6"> You start with 1d8 maximum hitpoints </p>
            <p className="h6"> Resting recovers 1d8 + BDY hit points </p>
            <p className="h6"> Your unarmored defense rating is 12 modified by DEX </p>
            <p className="h6"> Your armored defense rating is 12 modified by DEX + Armor </p>
            <p className="h6"> If you are playing on grid scale, your speed is 6 squares + (DEX / 2, rounded up)</p>
            <p className="h6"> If you are playing on real scale, your speed is 30ft + (DEX / 2, rounded up * 5 ft)</p>
        </div>
    )
}