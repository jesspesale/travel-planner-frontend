import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";
import TripEdit from "./TripEdit";
import {Link} from 'react-router-dom'


const Trip = (props) => {

    // console.log(props)
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]
    // console.log(trip)
    // if (trip) {
    return (
        <div>
            <h3>
                Destination: {trip ? trip.destination : null}
                <br/><br/>
                From {trip ? trip.start_date : null} to {trip ? trip.end_date : null}
            </h3>
            <PackingItemContainer trip={trip}/>
            <br/><br/><br/>
            <h2>Edit your trip Information:</h2>
            <Link to={trip ? `/trips/${trip.id}/edit` : `/trips`}>Edit Your Trip</Link>
            {/* <Link to={`/trips/${trip.id}/edit`}>Edit {trip.destination}</Link> */}
            <TripEdit trip={trip}/>
        </div>
    )
    // }


}

export default Trip