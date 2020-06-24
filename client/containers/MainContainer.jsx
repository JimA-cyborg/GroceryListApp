import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return(
            <div className="container">
              <h1 id="header">Grocery Shopping List</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);