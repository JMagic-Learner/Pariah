import React from "react"
import ParallaxBanner from "../../Components/ParallaxBanner"
import MainImage from "../../Assets/Images/Purgatory.png"

const Home = () => {
    return (
        <div className="Homepage Page">
            <ParallaxBanner background={MainImage} />

            <h2 className="centered-overlay bg-dark"> Welcome to Durandis.</h2>


            {/* <div className="introduction bg-dark">

                <hr></hr>
            </div> */}

        </div>
    )
}

export default Home