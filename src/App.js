import React from 'react';
import './App.css';

class App extends React.Component {
  

  render() {
  return (
    <div className="App">
      App
    </div>
  );
}
  }


export default App;


  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/trips')
  //   .then(resp =>resp.json())
  //   .then(data => console.log(data))

  // }


  // fix seeing all packing items or just pakcing items associated wiht a trip at Part 3 32 minutes
// fetch('http://localhost:3000/api/v1/trips/1/packing_items')
// accesing all the packing items for a specific trip

// fetch('http://localhost:3000/api/v1/trips/1/itinerary_items')
// accesing all the itinerary items for a specific trip