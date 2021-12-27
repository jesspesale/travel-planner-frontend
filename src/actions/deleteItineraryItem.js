export const deleteItineraryItem = (item_id, trip_id) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${trip_id}/itinerary_items/${item_id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "DELETE_PACKINGITEM", payload: trip}))

    }

}