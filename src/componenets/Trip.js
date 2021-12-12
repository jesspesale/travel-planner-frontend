import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";

const Trip = (props) => {

    // let trip = props.trips[props.match.params.id - 1]
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]

    return (
        <div>
            <h3>
                Destination: {trip ? trip.destination : null}
                <br/><br/>
                From {trip ? trip.start_date : null} to {trip ? trip.end_date : null}
            </h3>
             <PackingItemContainer trip={trip}/>
        </div>
    )

}

export default Trip