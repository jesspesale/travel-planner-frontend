import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";
import TripEdit from "./TripEdit";

const Trip = (props) => {

    console.log(props)
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]

    return (
        <div>
            <h3>
                Destination: {trip ? trip.destination : null}
                <br/><br/>
                From {trip ? trip.start_date : null} to {trip ? trip.end_date : null}
            </h3>
            <PackingItemContainer trip={trip}/>
            <br/><br/><br/>
            <h4>Edit your trip Information:</h4>
            <TripEdit trip={trip}/>
        </div>
    )

}

export default Trip