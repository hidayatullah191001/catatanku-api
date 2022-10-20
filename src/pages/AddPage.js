import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/api_service';
import NoteInput from '../components/NoteInput';
import {AlertSwal} from '../components/Alert';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

const AddPage = () => {
    const {theme} = React.useContext(ThemeContext);
    const {locale} = React.useContext(LocaleContext);

    const navigate = useNavigate();

    const onAddNoteHandler = (note) => {
        addNote(note);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil ditambah!" });
        navigate('/home');
    }

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-5">Buat Catatan Baru</h2>
                <div className={`card ${theme !== 'light' ? 'bg-dark' : 'bg-white'} shadow-lg border-0`}>
                    <div className="card-body">
                        <NoteInput addNotes={onAddNoteHandler} lang={locale}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPage;