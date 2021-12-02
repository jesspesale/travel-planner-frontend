import React from "react";
// functional component bc just showing a list of trips
// just returns JSX

const Trip = (props) => {

    return (
        <div>
            Trips
           {props.trips.map(trip => 
           <li>
               {trip.destination} from {trip.start_date} => {trip.end_date}
           </li>
           )}
        </div>
    )
}

export default Trip

