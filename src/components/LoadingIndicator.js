import React from "react";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types';

const LoadingIndicator = ({ type, color }) => (
    <div className="container">
        <div style={{ height: '350pt' }} className="row d-flex justify-content-center align-items-center">
            <ReactLoading type={type} color={color} height={100} width={100} />
        </div>
    </div>
);

LoadingIndicator.propTypes = {
    type : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired
}

export default LoadingIndicator;
