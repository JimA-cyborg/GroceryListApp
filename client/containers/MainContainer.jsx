import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx'
import * as actions from '/../Users/PolumboStudio/Documents/GitHub/Jim-Armbruster-Solo-Project/client/actions/actions'

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const someFunc = (e) => {
            e.preventDefault()
            console.log('BUTTON PUSHED')
            this.props.addItem(e.target[0].value)
        }
        return(
            <div className="container">
              <h1 id="header">Grocery Shopping List</h1>
              <TotalsDisplay />
              <div className="list" >
                  <form id="item" onSubmit={someFunc}>
                    <input type="text" id="itemText"></input>
                    <button type="submit" value="Submit">ADD ITEM</button>
                  </form>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('MAP STATE TO PROPS CALLED')
    return {
        itemName: state.itemName,
        totalItems: state.totalItems,
    }
}

const mapDispatchToProps = dispatch => {
    ('MAP DISPATCH TO PROPS CALLED')
    return {
        addItem: (e) => {
            dispatch(actions.addItem(e))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);