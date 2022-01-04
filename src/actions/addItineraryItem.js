export const addItineraryItem = (item, tripId) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripId}/itinerary_items`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "ADD_ITINERARYITEM", id: tripId, payload: trip}))
    }
}
