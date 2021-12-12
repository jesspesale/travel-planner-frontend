import React from "react";
import {connect} from "react-redux"
import {addPackingItem} from "../actions/addPackingItem"

class PackingItemForm extends React.Component {
// class to keep track of values of the form in state

    state = {
        item: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(this.props.packing_items[0].trip_id)
        event.preventDefault()
        this.props.addPackingItem(this.state, this.props.packing_items[0].trip_id)
        this.setState({
            item: ""
        })
    }

    render(){
        // console.log(this.props)
        // debugger
        
        return (
            <div>
                Add another item to pack:
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input type="text" name="item" value={this.state.item} placeholder="what to pack" onChange={this.handleChange} ></input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default connect(null, {addPackingItem})(PackingItemForm)