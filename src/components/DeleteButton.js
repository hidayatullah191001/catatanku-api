import React from 'react';
import { FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const DeleteButton = ({ id, onDelete }) => {
    const {locale} = React.useContext(LocaleContext);
    return (
        <div>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}><FaTrash className="mr-1" />{locale === 'id' ? 'Hapus' : 'Deleted'}</button>
        </div>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton;