import React from "react";
// import {addItineraryItem} from "../actions/addItineraryItem"
import {connect} from "react-redux"
import { Button } from 'react-bootstrap';

class ItineraryForm extends React.Component {

    state = {
        itineraryItem: ""
    }

    handleChange = (event) => {
        this.setState({
            itineraryItem: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        
    }

    render() {
        return (
            <div>
                Add something else to your itinerary:
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="itineraryItem" value={this.state.itineraryItem} placeholder="what to do" onChange={this.handleChange}></input>
                    <Button className="addButton" type="submit" size="sm" variant="outline-secondary">Add</Button>
                </form>
            </div>
        )
    }

}

export default connect()(ItineraryForm)



//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.addPackingItem(this.state, this.props.tripId)
//         this.setState({
//             item: ""
//         })
//     }

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