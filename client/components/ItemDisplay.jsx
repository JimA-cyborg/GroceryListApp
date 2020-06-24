import React from 'react';
import * as actions from '../actions/actions.js'
import { connect } from 'react-redux'

const ItemDisplay = (props) => (
    console.log('PROPPPPPS', props),
    <div className="itemDisplay">
        <h3>Item: {props.itemName}</h3>
        <button>Edit</button>
        <button onClick={actions.deleteItem(props.item)}>Delete</button>
        <button>Increase Quantity</button>
        <button>Decrease Quantity</button>
        <h3>Quantity: {props.quantity}</h3>
    </div>
);

const mapStateToProps = (state) => {
    return {
        groceryList: state.groceryList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: () => {
            dispatch(actions.deleteItem(props.itemName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplay)