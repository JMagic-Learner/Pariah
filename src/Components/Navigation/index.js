import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <Link className="navbar-brand " to="/">
                    Pariah
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav " style={ {backgroundColor: `#dcd8c0`}}>
                        <li className="nav-item " >
                            <Link className="nav-link" to="/" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Lore">
                                Ancient Lore
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Rules">
                                Laws of Purgatory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Lore">
                               Planar Map
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Lore">
                                Adventures Log
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Lore">
                                Contact the Gods
                            </Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" 
                                   to="/Classes" 
                                   href="#" 
                                   role="button" 
                                   data-bs-toggle="dropdown" 
                                   aria-expanded="false"  
                            >
                                Classes
                            </Link>
                            <ul className="dropdown-menu"  style={ {backgroundColor: `#dcd8c0`}}>
                                <li><a className="dropdown-item text-center" href="#">Fighter</a></li>
                                <li><a className="dropdown-item text-center" href="#">Ranger</a></li>
                                <li><a className="dropdown-item text-center" href="#">Cleric</a></li>
                                <li><a className="dropdown-item text-center" href="#">Paladin</a></li>
                               
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
