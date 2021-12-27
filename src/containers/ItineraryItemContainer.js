import React from "react"
// import PackingItemForm from "../componenets/PackingItemForm"
import ItineraryItems from "../componenets/ItineraryItems/ItineraryItems"

class ItineraryItemContainer extends React.Component {
// class component bc containers have state and need other functions
    
    render() {
        return (
            <div>
                <br/><br/>
                <h2 className="underlined" >What to do:</h2>

                {/* <PackingItems packing_items={this.props.trip && this.props.trip.packing_items} /> */}
                <br/><br/>
            </div>
        )
    }
}

export default ItineraryItemContainer