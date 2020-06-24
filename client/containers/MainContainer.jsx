import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx'
import ListDisplay from '../components/ListDisplay.jsx'
import * as actions from '/../Users/PolumboStudio/Documents/GitHub/Jim-Armbruster-Solo-Project/client/actions/actions'

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const someFunc = (e) => {
            e.preventDefault()
            this.props.addItem(e.target[0].value)
        }
        return(
            <div className="container">
              <h1 id="header">Grocery Shopping List</h1>
              <TotalsDisplay />
              <div className="newItem" >
                  <form id="item" onSubmit={someFunc}>
                    <input type="text" id="itemText"></input>
                    <button type="submit" value="Submit">ADD ITEM</button>
                  </form>
              </div>
              <ListDisplay list={this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemName: state.itemName,
        totalItems: state.totalItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (e) => {
            dispatch(actions.addItem(e))
        },
        deleteItem: (e) => {
            dispatch(actions.deleteItem(e))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);