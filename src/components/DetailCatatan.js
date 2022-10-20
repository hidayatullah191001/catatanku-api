import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

const DetailCatatan = ({ note }) => {
    const {theme} = React.useContext(ThemeContext);
    const {locale} = React.useContext(LocaleContext);
    return (
        <div className="col-lg-8">
            <div className={`card ${theme !== 'light' ? 'bg-dark' : 'bg-light'} shadow-lg border-0`}>
                <div className="card-header">
                   {locale === 'id' ? ' Detail Catatan' : 'Note Detail'}
                </div>
                <div className="card-body">
                    <h5 className="text-center mb-4"><strong>{note.title}</strong></h5>
                    <p className="mb-5">{locale === 'id'?'Dibuat pada :' : 'Created At :'} <span className="text-center badge badge-primary"><FaRegCalendar />{showFormattedDate(note.createdAt)}</span></p>
                    <p>{note.body}</p>
                </div>
            </div>
        </div>
    )
}

DetailCatatan.propTypes = {
    note: PropTypes.object.isRequired,
}

export default DetailCatatan;