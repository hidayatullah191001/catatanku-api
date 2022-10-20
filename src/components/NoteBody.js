import React from 'react';
import { showFormattedDate } from '../utils';
import { FaRegCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteBody = ({ note }) => {
    return (
        <div className="card-body">
            <h5>
                <strong>
                    <Link to={`/detail/${note.id}`}>{note.title}</Link>
                </strong>
            </h5>
            <p className="badge badge-primary"><FaRegCalendar className="mr-2" />{showFormattedDate(note.createdAt)}</p>
            <p>{note.body}</p>
        </div>
    )
}

NoteBody.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteBody;