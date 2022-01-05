// render other compontnets and pass them data
import React from "react";
import { connect } from 'react-redux';
import {Route, Switch} from "react-router-dom"
import TripForm from "../componenets/TripForm";
import Trip from "../componenets/Trip";
import Trips from "../componenets/Trips"
import TripEdit from "../componenets/TripEdit";
import { fetchTrips } from "../actions/fetchTrips";
import Home from "../componenets/Home";

class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips()
    }
    
    render() {
        // console.log(this.props)
        return  (
            <div>
            <Switch>    {/* switch will choose the first route that mathces that path */}
                <Route exact path="/" component={Home} /> 
                <Route path="/trips/new" component={TripForm} />       
                <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} />} />
{/*  not rendered exactly, will be conditionally rendered based on the URL */}
                <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} /> } />
                <Route path="/trips/:id/edit"  component={TripEdit}/>
            </Switch>
                 <br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        trips: state.trips
        // trips: state.tripReducer
        // itinerary_items: state.itineraryReducer

    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)