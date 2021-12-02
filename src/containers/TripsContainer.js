// render other compontnets and pass them data
import React from "react";
import { connect } from 'react-redux';

import TripForm from "../componenets/TripForm";
import Trips from "../componenets/Trips"
import { fetchTrips } from "../actions/fetchTrips";


class TripsContainer extends React.Component {

    componentDidMount() {
        fetchTrips()
    }

    render() {
        return (
            <div>
                <TripForm />
                <Trips />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)