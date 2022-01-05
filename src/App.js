import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TripsContainer from './containers/TripsContainer';
import NavBar from './componenets/NavBar';
import "bootswatch/dist/quartz/bootstrap.min.css";

class App extends React.Component {

    render() {
      return (
        <div className="App">
          <NavBar />
          <br/>
          <TripsContainer/>
        </div>
      );
    }
  }

//   const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         trips: state.tripReducer
//         itinerary_items: state.itineraryReducer

//     }
// }

export default connect()(App);
// connect connects the redux store to this component
// calls dipatch for you on the return value of fetchTrips (the action object)


// fix seeing all packing items or just pakcing items associated wiht a trip at Part 3 32 minutes
// fetch('http://localhost:3000/api/v1/trips/1/packing_items')
// accesing all the packing items for a specific trip

// fetch('http://localhost:3000/api/v1/trips/1/itinerary_items')
// accesing all the itinerary items for a specific trip