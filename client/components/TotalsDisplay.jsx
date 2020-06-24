import React from 'react';
import { connect } from 'react-redux'

const TotalsDisplay = (props) => (
    <div className="innerbox" id="totals">
        <label htmlFor="totalItems">Total Items: {props.totalItems}</label>
    </div>
);

const mapStateToProps = (state) => {
    console.log(state.totalItems)
    return {
        totalItems: state.totalItems
    }
}

export default connect(mapStateToProps)(TotalsDisplay);