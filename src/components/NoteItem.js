import React from 'react';
import DeleteButton from './DeleteButton';
import ArsipButton from './ArsipButton';
import NoteBody from './NoteBody';
import PropTypes from "prop-types";
import ThemeContext from '../contexts/ThemeContext'


const NoteItem = ({ note, onDelete, onArchive, titleBtnArchive }) => {
  const {theme} = React.useContext(ThemeContext);  
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={`card ${theme === 'light' ? 'bg-light' : 'bg-dark'} h-100 shadow border-secondary`}>
        <NoteBody note={note} />
        <div className="card-footer d-flex justify-content-beetween">
          <ArsipButton id={note.id} methodArchive={onArchive} titleBtn={titleBtnArchive} />
          <DeleteButton id={note.id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  )
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  titleBtnArchive: PropTypes.string.isRequired,
}

export default NoteItem;