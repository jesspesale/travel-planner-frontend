import React from "react";
import {Route, Link} from 'react-router-dom'
import Trip from "./Trip";

// functional component bc just showing a list of trips
// just returns JSX

const Trips = (props) => {
    // console.log(props)
    // debugger

    // let trip = props.trips.filter(trip => trip.id === props.match.params.id)[0]
    // console.log(trip)
    // return (
    //     <h1>Trip</h1>
    // )

  return (
    <div>
      {props.trips.map(trip =>
        <li key={trip.id}>
          <Link to={`/trips/${trip.id}`}>{trip.destination}</Link>
        </li> )}
    </div>

  )



    // if (props.trips.length > 0) {
    //     return (
    //         <div>
    //             Trips:
    //             <br/><br/>
    //             {props.trips.map(trip => 
    //             <li key={trip.id}>
    //                 <Link to={`/trips/${trip.id}`}> {trip.destination}</Link> 
    //             </li>)}
    //         </div>
    //     )
    // }else {
    //     return null
    // }

}

export default Trips

