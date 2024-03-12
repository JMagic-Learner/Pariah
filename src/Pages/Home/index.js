import React from "react"
import ParallaxBanner from "../../Components/ParallaxBanner"
import MainImage from "../../Assets/Images/DiSHomeBanner.jpg"

const Home = () => {
    return (
        <div className="Homepage Page">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={MainImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={MainImage} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={MainImage} className="d-block w-100" alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <h2 className="centered-overlay bg-dark"> Welcome to Pariah, DiS Supplement.</h2> */}


            <div className="introduction">
                <p> <span className="EmphasizedTitle"> Pariah </span> is a module expansion for the <span className="EmphasizedTitle"> Death in Space </span> Sci Fi TTRPG. Authored by <span className="EmphasizedTitle"> Christian Plogfors & Carl Niblaeus </span>, DiS is a nihilistic, post-war, junker aesthetic theatre in space . Take part in the <span className="EmphasizedTitle"> Pariah </span> campaign, as you encounter a post-war cult spanning the entire Tenebris system.</p>
                <hr></hr>
                <p> Pariah is a free , stand-alone module + mechanic set. This website was coded in lightwieght stack of React, React Dom, and Boostrap </p>
            </div>

            <div className="introduction">
                <h2 className="EmphasizedTitle"> Pariah </h2>
                <li> Expanded Character Origins </li>
                <li> Hacking Module </li>
                <li> Homebrew Lore </li>
                <li> Rogue's Gallery </li>
                <li> Pariah Module: "No Questions" </li>
                <li> Pariah Module: "No More Martyrs" </li>
                <li> Pariah Module: "No Future" </li>
            </div>

        </div >
    )
}

export default Home