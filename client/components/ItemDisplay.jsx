import React from 'react';

const ItemDisplay = (props) => (
    <div className="itemDisplay">
        <label>Item: </label>
        <label>Quantity: </label>
        <button>Edit</button>
        <button>Delete</button>
        <button>Increase Quantity</button>
        <button>Decrease Quantity</button>
    </div>
)

export default ItemDisplay;