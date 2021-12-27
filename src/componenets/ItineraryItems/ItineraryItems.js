import React from "react";
import {connect} from "react-redux"

// functional component can receive information from props from PackingContainer
const ItineraryItems = (props) => {

    // const handleDelete = (item) => {
    //     props.deleteItem(item.id, item.trip_id)
    // }

    return (
        <div>
                Itinerary Items
        </div>
    )
}

export default connect()(ItineraryItems)