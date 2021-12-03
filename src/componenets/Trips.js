import React from "react";
// functional component bc just showing a list of trips
// just returns JSX

const Trip = (props) => {

    return (
        <div>
            Your Trips:
           {props.trips.map(trip => 
           <li key={trip.id}>
               {trip.destination} from {trip.start_date} to {trip.end_date}
             
           </li>
           )}
        </div>
    )
}

export default Trip

