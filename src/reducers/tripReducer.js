export default function tripReducer(state = {trips: []}, action) {
    
    switch (action.type) {
        case "FETCH_TRIPS":
            return {
                trips: action.payload
            }
        case "ADD_TRIP":
            return {
                ...state,
                trips: [...state.trips, action.payload]
            }
        case "DELETE_TRIP":
            // debugger
            return {
                ...state,
                trips: action.payload
            }
        case "ADD_PACKINGITEM":
                let trips = state.trips.map(trip => {
                    if (trip.id === action.payload.id){
                        return action.payload
                    }
                    else {
                        return trip
                    }
                })
            return {
                ...state,
                trips: trips
            }
        case "DELETE_PACKINGITEM":
                let trip2 = state.trips.map(trip => {
                    if (trip.id === action.payload.id){
                        return action.payload
                    }
                    else {
                        return trip
                    }
                })
            return {
                ...state,
                trips: trip2
            }
        case "EDIT_TRIP":
            let trip3 = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {
                ...state,
                trips: trip3
            }
        default:
            return state
    }
}