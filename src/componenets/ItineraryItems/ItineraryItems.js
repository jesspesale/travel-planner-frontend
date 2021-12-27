import React from "react";
import {connect} from "react-redux"

// functional component can receive information from props from PackingContainer
const ItineraryItems = (props) => {

    // const handleDelete = (item) => {
    //     props.deleteItem(item.id, item.trip_id)
    // }
    console.log(props)
    return (
        <div>
                {props.itineraryItems && props.itineraryItems.map(item => 
                     <li>{item.description}</li>
                )}
        </div>
    )
}

export default connect()(ItineraryItems)