export const addPackingItem = (item, trip_id) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${trip_id}/packing_items`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: "ADD_PACKINGITEM", payload: trip}))
    }
}

