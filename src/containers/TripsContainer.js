// render other compontnets and pass them data
import React from "react";
import { connect } from 'react-redux';
import {Routes, Route} from "react-router-dom"
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
        {/* // when the route matches the path render this component */}
            <Routes >
                    <Route path="/trips/new" element={<TripForm/>} />
                        
                    <Route path="/trips" element={<Trips trips={this.props.trips} />}  />
            </Routes>
                 <br/><br/>
                {/* <Trips  /> */}
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