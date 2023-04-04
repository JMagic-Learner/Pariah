import React from "react"
import ParallaxBanner from "../../Components/ParallaxBanner"
import MainImage from "../../Assets/Images/Purgatory.png"

const Home = () => {
    return(
        <div className="Homepage Page">
            <ParallaxBanner background={MainImage} />
        <div className="introduction bg-dark">
            <p> Welcome to Purgatory</p>
            <hr></hr>
        </div>
         
        </div>
    )
}

export default Home