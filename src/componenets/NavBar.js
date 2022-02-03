import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/trips">All Trips </Link>
            
            <Link to="/trips/new">Add a new Trip </Link>
        </div>
    )
}

export default NavBar