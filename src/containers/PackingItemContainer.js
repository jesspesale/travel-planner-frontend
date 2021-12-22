import React from "react"
import PackingItemForm from "../componenets/PackingItemForm"
import PackingItems from "../componenets/PackingItems"

class PackingItemContainer extends React.Component {
// class component bc containers have state and need other functions
    
    render() {
        return (
            <div>
                <br/><br/>
                <h2 className="underlined" >Packing List:</h2>
                <PackingItems packing_items={this.props.trip && this.props.trip.packing_items} />
                <br/><br/>
                <PackingItemForm packing_items={this.props.trip && this.props.trip.packing_items} tripId={this.props.trip && this.props.trip.id} />
            </div>
        )
    }
}

export default PackingItemContainer