import React from "react";

// functional component can receive information from props from PackingContainer
const PackingItems = (props) => {

            return (
                <div>
                   {props.packing_items && props.packing_items.map(item => 
                        <li key={item.id}>{item.item}</li>
                        )}
                </div>
            )
}

export default PackingItems