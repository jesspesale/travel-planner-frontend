export const addTrip = (trip) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/trips', { 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(trip)
        })
        .then(response => response.json())
        .then(trip => dispatch({type: "ADD_TRIP", payload: trip}))
    }
}

export default addTrip
// thunk allows us bring dispatch into the action creator
// dispatch is called from inside there and sends infor to our 
// reducer bc of the connect function