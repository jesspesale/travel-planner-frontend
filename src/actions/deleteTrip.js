export const deleteTrip = (tripId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(trips => dispatch({type: "DELETE_TRIP", payload: trips}))

    }
}