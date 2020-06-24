import React from 'react'
import { connect } from 'react-redux'
import ItemDisplay from './ItemDisplay.jsx'
import * as actions from '../actions/actions.js'

const listDisplay = (props) => {
    const list = []
    for (let i = 0; i < props.groceryList.length; i++){
        list.push(<ItemDisplay quantity={1} key={i} item={i} itemName={props.groceryList[i].itemName}/>)
    }
    return (
        <div className="myList">
            {list}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        groceryList: state.groceryList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => {
            dispatch(actions.addItem())
        },
        deleteItem: () => {
            dispatch(actions.deleteItem())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(listDisplay)