import React from "react"
import PackingItemForm from "../componenets/PackingItemForm"
import PackingItems from "../componenets/PackingItems"

class PackingItemContainer extends React.Component {
// class component bc containers have state and need other functions
    
    // checkTrip() {
    //     if(this.props.trip) {
    //         return (<PackingItems packing_items={this.props.trip.packing_items} />)
    //     }
    //     else {
    //         return (<h2>Packing items loading...</h2>)
    //     }
    // }

    render() {
        // console.log(this.props.trip)
        return (
            <div>
                <br/><br/>
                <h2>Packing List:</h2>
                <PackingItems packing_items={this.props.trip && this.props.trip.packing_items} />
                {/* {this.checkTrip()} */}
                <br/><br/>
                <PackingItemForm packing_items={this.props.trip && this.props.trip.packing_items}/>
            </div>
        )
    }

}

export default PackingItemContainer