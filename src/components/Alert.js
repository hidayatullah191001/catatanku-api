import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PropTypes from 'prop-types';

function AlertSwal({ title, message }) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: <strong>{title}</strong>,
        html: <i>{message}</i>,
        icon: 'success'
    })
}


function AlertSwalError ({ title, message }){
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: <strong>{title}</strong>,
        html: <i>{message}</i>,
        icon: 'error'
    })
}


AlertSwal.propTypes = {
    title : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
}

AlertSwalError.propTypes = {
    title : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
}

export {AlertSwal, AlertSwalError};