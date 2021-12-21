import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";
import TripEdit from "./TripEdit";
import { deleteTrip } from "../actions/deleteTrip";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Trip = (props) => {

    // console.log(props)
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]

    const handleDelete = (trip) => {
        props.deleteTrip(trip.id)
    }

    return (
        <div>
            <h3>
                Destination: {trip ? trip.destination : null}
                <br/><br/>
                From {trip ? trip.start_date : null} to {trip ? trip.end_date : null}
            </h3>
            <PackingItemContainer trip={trip}/>
            <br/><br/>
            <Link to={`/trips/`} onClick={trip ? () => handleDelete(trip) : null} >Delete Trip</Link>

            <br/><br/><br/>
            <h4>Edit your trip Information:</h4>
            <TripEdit trip={trip}/>
        </div>
    )

}

export default connect(null, {deleteTrip})(Trip)