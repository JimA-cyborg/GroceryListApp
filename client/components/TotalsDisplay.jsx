import React from 'react';
import { connect } from 'react-redux'

const TotalsDisplay = (props) => (
    <div className="innerbox" id="totals">
        <label htmlFor="totalItems">Total Items: {props.totalMarkets}</label>
    </div>
);

const mapStateToProps = (state) => {
    return {
        totalItems: state.totalItems
    }
}

export default connect(mapStateToProps)(TotalsDisplay)