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
        event.preventDefault()
        this.props.addPackingItem(this.state, this.props.tripId)
        this.setState({
            item: ""
        })
    }

    render(){
        return (
            <div>
                Add items to pack:
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