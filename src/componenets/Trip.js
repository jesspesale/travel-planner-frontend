import React from "react";

const Trip = (props) => {
    return (
        <li>
            {props.trip.destination}     Dates: {props.trip.start_date} to {props.trip.end_date}
            <br/>
            <br/>
        </li>
    )
}

export default Trip