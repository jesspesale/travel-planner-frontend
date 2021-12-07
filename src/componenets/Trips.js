import React from "react";
import Trip from "./Trip";

// functional component bc just showing a list of trips
// just returns JSX

const Trips = (props) => {
    // debugger
    return (
        <div>
            Your Trips:
            <br/><br/>
            {props.trips.map(trip => <h1>{trip.destination}</h1>)}
        </div>
    )
}

export default Trips

