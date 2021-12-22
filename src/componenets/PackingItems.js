import React from "react";
import {connect} from "react-redux"
import {deleteItem} from "../actions/deleteItem"

// functional component can receive information from props from PackingContainer
const PackingItems = (props) => {

    const handleDelete = (item) => {
        props.deleteItem(item.id, item.trip_id)
    }

    return (
        <div>
            {props.packing_items && props.packing_items.map(item => 
                    <li className="answer" key={item.id}>{item.item}
                    <button className="deleteButton" onClick={() => handleDelete(item)} style={{ marginLeft: '.5rem'} } >x</button>
                    </li>
                )}
        </div>
    )
}

export default connect(null, {deleteItem})(PackingItems)