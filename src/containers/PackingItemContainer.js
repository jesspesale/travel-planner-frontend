import React from "react"
import PackingItemForm from "../componenets/PackingItemForm"
import PackingItems from "../componenets/PackingItems"

class PackingItemContainer extends React.Component {
// class component bc containers have state and need other functions

    render() {
        return (
            <div>
                PackingList Container
                <PackingItemForm/>
                <PackingItems packing_items={this.props.trip && this.props.trip.packing_items} />
            </div>
        )
    }

}

export default PackingItemContainer