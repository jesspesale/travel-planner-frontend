export const deleteItem = (item_id, trip_id) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${trip_id}/packing_items/${item_id}`, {
            method: "DELETE"
            // body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        // .then(item => console.log(item))
        .then(trip => dispatch({type: "DELETE_PACKINGITEM", payload: trip}))

    }

}