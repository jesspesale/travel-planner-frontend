import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { deleteTrip } from "../actions/deleteTrip";
import { Button } from 'react-bootstrap';

// functional component bc just showing a list of trips
// just returns JSX
const Trips = (props) => {

    const handleDelete = (tripId) => {
      props.deleteTrip(tripId)
    }

  return (
    <div>
        <br/>
      <h3 className="title" >All your upcoming trips:</h3>
      {props.trips.map(trip =>
        <li key={trip.id}>
          <Link to={`/trips/${trip.id}`}>{trip.destination}</Link>
          <Button onClick={() => handleDelete(trip.id)} style={{ marginLeft: '.5rem'}} size="sm" variant="outline-secondary">Delete</Button>
        </li> )}
    </div>
  )
}

export default connect(null, {deleteTrip})(Trips)

