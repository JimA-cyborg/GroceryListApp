import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx'
import * as actions from '/../Users/PolumboStudio/Documents/GitHub/Jim-Armbruster-Solo-Project/client/actions/actions'

const mapStateToProps = state => ({
    //do i need anything here?
});

const mapDispatchToProps = dispatch => ({
    //do i need anything here either?
});

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const someFunc = (e) => {
        //     e.preventDefault()
        //     this.props.
        // }
        return(
            <div className="container">
              <h1 id="header">Grocery Shopping List</h1>
              <TotalsDisplay />
              <div className="list" >
                  <form id="item" /*onSubmit={someFunc}*/>
                    <input type="text" id="itemText"></input>
                    <button type="submit">ADD ITEM</button>
                  </form>
              </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);