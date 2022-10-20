import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from "prop-types";
import LocaleContext from '../contexts/LocaleContext';

const NotesNotFound = () => {
    return (
        <div className="alert alert-danger">Note Not Found!</div>
    );
}

const NoteList = ({ notes, onDelete, onArchive, onUnarchive }) => {
    const {locale} = React.useContext(LocaleContext);

    return (
        notes.length > 0 ?
            <div className="row">
                {
                    notes.map((note, i) => (
                        <NoteItem
                            key={i}
                            note={note}
                            onDelete={onDelete}
                            titleBtnArchive={note.archived === false ? `${locale === 'id' ? 'Arsip' : 'Archive'}` : `${locale === 'id' ? 'Batalkan Arsip' : 'UnArchive'}`}
                            onArchive={note.archived === false ? onArchive : onUnarchive}
                            {...note} />
                    ),)
                }
            </div>
            : <NotesNotFound />
    )
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func
}

export default NoteList;