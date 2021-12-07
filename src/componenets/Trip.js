import React from "react";

const Trip = (props) => {

     let trip = props.trips[props.match.params.id - 1]
    console.log(trip)
    if (trip) {
    return (
        <h4>
            Desitnation: {trip.destination }
            <br/>
            Dates: {trip.start_date} to {trip.end_date}
        </h4>
        )
    }
    else {
        return null
    }
}

export default Trip