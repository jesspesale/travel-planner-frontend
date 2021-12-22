import React from "react";
import PackingItemContainer from "../containers/PackingItemContainer";
import TripEdit from "./TripEdit";
import { deleteTrip } from "../actions/deleteTrip";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom'


const Trip = (props) => {

    // console.log(props)
    let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]
    // let startDate = trip.start_date
    // let endDate = trip.end_date
    const handleDelete = (trip) => {
        props.deleteTrip(trip.id)
    }

    const changeDate = (trip) => {
        if (trip){
        let startDate = trip.start_date.split("-")
        let endDate = trip.end_date.split("-")

        return(
            `${startDate[1]}/${startDate[2]}/${startDate[0]} -->  ${endDate[1]}/${endDate[2]}/${endDate[0]}`)
        }
    }

    return (
        <div>
                <h3 className="title">Destination:</h3>
                 <div className="answer">{trip ? trip.destination : null}</div>
                <br/>
                <br/>
                <h3 className="title">Travel Dates:</h3>
                <div className="answer">
                  {trip ? changeDate(trip) : null}
                  </div>
                <br/>
            
            <PackingItemContainer trip={trip}/>
            <br/><br/>
            <Link to={`/trips/`} onClick={trip ? () => handleDelete(trip) : null} >Delete Trip</Link>

            <br/><br/><br/>
            <h4>Edit your trip Information:</h4>
            <TripEdit trip={trip}/>
        </div>
    )

}

export default connect(null, {deleteTrip})(Trip)