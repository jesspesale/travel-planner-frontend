import React from "react";
import {connect} from "react-redux"
import { Button } from 'react-bootstrap';

// functional component can receive information from props from PackingContainer
const ItineraryItems = (props) => {

    const handleDelete = (item) => {
        // props.deleteItineraryItem(item.id, item.trip_id)
        console.log(item)
    }
    console.log(props)
    return (
        <div>
                {props.itineraryItems.map(item => 
                    <li key={item.id} >{item.description}
                    <Button style={{ marginLeft: '.5rem'}} 
                        size="sm" 
                        onClick={() => handleDelete(item)} 
                        type="submit" 
                        variant="outline-secondary">x
                    </Button></li>
                )}
        </div>
    )
}

export default connect()(ItineraryItems)