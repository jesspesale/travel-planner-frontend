import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/trips">All Trips </Link>
            <br/>
            <Link to="/trips/new">Add a new Trip </Link>
        </div>
    )
}

export default NavBar