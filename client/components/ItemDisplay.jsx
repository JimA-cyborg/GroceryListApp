import React from 'react';

const ItemDisplay = (props) => (
    <div className="itemDisplay">
        <h3>Item: {props.item}</h3>
        <label>{props.quantity}</label>
        <button>Edit</button>
        <button>Delete</button>
        <button>Increase Quantity</button>
        <button>Decrease Quantity</button>
    </div>
)

export default ItemDisplay;