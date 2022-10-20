import React, { useState } from 'react';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/api_service';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { AlertSwal } from '../components/Alert';
import PropTypes from 'prop-types'

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({});

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        })
    }, [id]);

    async function onDeleteHandler(id) {
        await deleteNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
        navigate("/home");
    }

    async function onArchiveHandler (id) {
        await archiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dipindahkan ke berkas arsip!" });
        navigate("/arsip");
    }

    async function onUnarchiveHandler(id) {
        await unarchiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus dari berkas arsip!" });
        navigate("/home");
    }
    
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Detail Catatan</h2>
            <NoteDetail
                note={note}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
                onUnarchive={onUnarchiveHandler}
            />
        </div>
    );
}

DetailPage.propTypes = {
    id: PropTypes.string
}

export default DetailPage;