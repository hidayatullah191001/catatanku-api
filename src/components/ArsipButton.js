import React from 'react';
import { FaArchive } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ArsipButton = ({ id, methodArchive, titleBtn }) => {
    return (
        <div>
            <button className="btn btn-success btn-sm mr-2" onClick={() => methodArchive(id)}><FaArchive className="mr-1" />{titleBtn}</button>
        </div>
    )
}

ArsipButton.propTypes = {
    id: PropTypes.string,
    methodArchive: PropTypes.func.isRequired,
    titleBtn: PropTypes.string.isRequired,
}

export default ArsipButton;