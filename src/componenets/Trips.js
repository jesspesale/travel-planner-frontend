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
           {props.trips.map(trip => 
               <Trip key={trip.id} trip={trip}/>
           )}
        </div>
    )
}

export default Trips

