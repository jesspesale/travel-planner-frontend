export const deleteItineraryItem = (itemId, tripId) => {
    console.log(itemId)
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripId}/itinerary_items/${itemId}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "DELETE_ITINERARYITEM", payload: trip}))

    }

}