import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className="navbar_outline">
            <Link className="navbar" to="/trips">All Trips </Link>  
            <Link className="navbar" to="/trips/new">Add a new Trip </Link>
        </div>
    )
}

export default NavBar