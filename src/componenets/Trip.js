import React from "react";
import {useParams} from "react-router-dom"

const Trip = (props) => {
    console.log(props.trips)


     let params = useParams
     console.log(params)

    return (
        <li>
            {/* {props.trip.destination}     Dates: {props.trip.start_date} to {props.trip.end_date} */}
            Trip 
            <br/>
            <br/>
        </li>
    )
}

export default Trip