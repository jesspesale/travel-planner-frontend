export default function tripReducer(state = {trips: []}, action) {
    // debugger
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
            return {
                ...state,
                trips: action.payload
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
        case "ADD_ITINERARYITEM":
        let newTrips = state.trips.map(trip => {
            if(trip.id === action.payload.id){
                return action.payload
            }
            else {
                return trip
            }
        })
        return {
            ...state,
             trips: newTrips
        }
        default:
            return state
    }
}