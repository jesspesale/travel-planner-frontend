import React from "react";
import {Route, Link} from 'react-router-dom'
import Trip from "./Trip";

// functional component bc just showing a list of trips
// just returns JSX

const Trips = (props) => {
    // console.log(props)

  return (
    <div>
      {props.trips.map(trip =>
        <li key={trip.id}>
          <Link to={`/trips/${trip.id}`}>{trip.destination}</Link>
        </li> )}
    </div>

  )

}

export default Trips

