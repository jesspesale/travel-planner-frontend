import React from "react";
// import {addItineraryItem} from "../actions/addItineraryItem"
// import {connect} from "react-redux"
// import { Button } from 'react-bootstrap';

class ItineraryForm extends React.Component {

    render() {
        return (
            <div>
                Itinerary Form
            </div>
        )
    }

}

export default ItineraryForm

//     state = {
//         item: ""
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.addPackingItem(this.state, this.props.tripId)
//         this.setState({
//             item: ""
//         })
//     }

//     render(){
//         return (
//             <div>
//                 Add items to pack:
//                 <form onSubmit={this.handleSubmit}>
//                     <label></label>
//                     <input type="text" name="item" value={this.state.item} placeholder="what to pack" onChange={this.handleChange} ></input>
//                     <Button className="addButton" type="submit" size="sm" variant="outline-secondary">Add</Button>
//                 </form>
//             </div>
//         )
//     }
// }
// export default connect(null, {addPackingItem})(PackingItemForm)