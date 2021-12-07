// render other compontnets and pass them data
import React from "react";
import { connect } from 'react-redux';
import {Route} from "react-router-dom"
import TripForm from "../componenets/TripForm";
import Trip from "../componenets/Trip";
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
            <h1>Trips Container</h1>
                    <Route path="/trips/new" component={TripForm} />       
                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} />} />
                    {/*  not rendered exactly, will be conditionally rendered based on the URL */}
                    <Route exact path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} /> } />

                 <br/><br/>
                {/* <Trips trips={this.props.trips} /> */}
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