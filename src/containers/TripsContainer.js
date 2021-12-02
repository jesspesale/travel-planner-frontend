// render other compontnets and pass them data
import React from "react";
import { connect } from 'react-redux';

import TripForm from "../componenets/TripForm";
import Trips from "../componenets/Trips"
import { fetchTrips } from "../actions/fetchTrips";


class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    render() {
        return (
            <div>
                <TripForm />
                <Trips trips={this.props.trips} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)