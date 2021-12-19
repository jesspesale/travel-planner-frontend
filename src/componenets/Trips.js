import React from "react";
import {Link} from 'react-router-dom'

// functional component bc just showing a list of trips
// just returns JSX

const Trips = (props) => {
    // console.log(props)

    const handleDelete = () => {

    }

  return (
    <div>
        <br/>
      <h3>All your upcoming trips:</h3>
      {props.trips.map(trip =>
        <li key={trip.id}>
          <Link to={`/trips/${trip.id}`}>{trip.destination}</Link>
          <button onClick={handleDelete} style={{ marginLeft: '.5rem'} } >X </button>
        </li> )}
    </div>
  )
}

export default Trips

