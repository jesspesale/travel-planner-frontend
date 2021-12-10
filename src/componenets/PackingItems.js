import React from "react";

// functional component can receive information from props from PackingContainer
const PackingItems = (props) => {
    // console.log(props)
    // if(props.packing_list) {
            return (
                <div>
                   {props.packing_items.map(item => 
                        <li key={item.id}>{item.item}</li>
                        )}
                </div>
            )

}

export default PackingItems