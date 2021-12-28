import React from "react"
import ItineraryForm from "../componenets/ItineraryItems/ItineraryForm"
import ItineraryItems from "../componenets/ItineraryItems/ItineraryItems"

class ItineraryItemContainer extends React.Component {
  
    checkTrip() {
        if(this.props.trip) {
            return (
                <div>
                    <br/><br/>
                    <h3 className="underlined" >Things to do in {this.props.trip.destination}:</h3>
                    <ItineraryItems itineraryItems={this.props.trip.itinerary_items} />
                    <br/><br/>
                    <ItineraryForm itineraryItems={this.props.trip.itinerary_items} tripId={this.props.trip.id}/>
                    <br/><br/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.checkTrip()}
            </div>
        )
    }
}

export default ItineraryItemContainer


        // return (
        //     <div>
        //         <br/><br/>
        //         <h3 className="underlined" >Things to do in {this.props.trip && this.props.trip.destination}:</h3>
        //         <ItineraryItems itineraryItems={this.props.trip && this.props.trip.itinerary_items} />
        //         <br/><br/>
        //         <ItineraryForm itineraryItems={this.props.trip && this.props.trip.itinerary_items} tripId={this.props.trip && this.props.trip.id}/>
        //         <br/><br/>
        //     </div>
        // )