import React from "react"
import ItineraryForm from "../componenets/ItineraryItems/ItineraryForm"
import ItineraryItems from "../componenets/ItineraryItems/ItineraryItems"

class ItineraryItemContainer extends React.Component {
  
    render() {
        // console.log(this.props)
        return (
            <div>
                <br/><br/>
                <h2 className="underlined" >Things to do:</h2>
                <ItineraryItems itineraryItems = {this.props.trip && this.props.trip.itinerary_items} />
                <br/><br/>
                <ItineraryForm/>
                <br/><br/>
            </div>
        )
    }
}

export default ItineraryItemContainer