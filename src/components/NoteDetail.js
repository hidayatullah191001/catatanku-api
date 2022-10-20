import React from 'react';
import DetailCatatan from './DetailCatatan';
import ConsoleDetail from './ConsoleDetail';
import PropTypes from 'prop-types';

const NoteDetail = ({ note, onDelete, onArchive, onUnarchive }) => {
    return (
        <div className="row">
            <DetailCatatan note={note} />
            <ConsoleDetail note={note} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
        </div>
    )
}

NoteDetail.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default NoteDetail;