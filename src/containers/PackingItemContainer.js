import React from "react"
import PackingItemForm from "../componenets/PackingItemForm"
import PackingItems from "../componenets/PackingItems"

class PackingItemContainer extends React.Component {
// class component bc containers have state and need other functions
    
    checkTrip() {
        if(this.props.trip) {
            return (<PackingItems packing_items={this.props.trip.packing_items} />)
        }
        else {
            return (<h2>Packing items loading...</h2>)
        }
    }

    render() {
        // console.log(this.props.trip)
        return (
            <div>
                <PackingItemForm/>
                <br/><br/>
                <h2>What to pack:</h2>
                {this.checkTrip()}
                {/* <PackingItems packing_items={this.props.trip && this.props.trip.packing_items} /> */}
            </div>
        )
    }

}

export default PackingItemContainer