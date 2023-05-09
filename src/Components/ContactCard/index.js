import React from "react"
// import { Example } from "../../Assets/Images/Example.jpg"
export const ContactCard = () => {
    return (
        <div className="CardContainer" >
            <div className="card" style={{ width: "1000px" }}>
                {/* <img className="card-img-top" src={require("../../Assets/Images/Durandis.jpg")} alt="Card image cap" /> */}
                <div className="card-body width-75">
                    <p className="card-text"> DM: Jason Ma </p>
                    <p className="card-text">  ZenithHighlight@gmail.com </p>
                </div>
            </div>
            <div className="right">
                <p> DM Notes: </p>
                <p> A standalone adventure for four - five Level 3 Characters. There will be multiple combat and puzzle encounters to overcome, along with a guaranteed miniboss + final boss.</p>
                <p> If you wish to join this adventure, please send an email to the following address: ZenithHighlight@gmail.com along with screenshots of your character sheet.</p>
            </div>
        </div>

    )
}

