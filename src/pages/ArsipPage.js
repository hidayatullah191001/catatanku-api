import React from 'react';
import { unarchiveNote, deleteNote, getArchivedNotes } from '../utils/api_service';
import NoteList from '../components/NoteList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { AlertSwal } from '../components/Alert';
import PropTypes from 'prop-types';
import LoadingIndicator from '../components/LoadingIndicator';

function ArsipPage() {
    const [notes, setNotes] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const [isloading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
            setLoading(false);
        })
    }, []);

    async function onDeleteHandler(id){
        await deleteNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
        const {data} = await getArchivedNotes();
        setNotes(()=>{
            return data;
        });
    }

    async function onUnarchiveHandler(id){
        await unarchiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus dari berkas arsip!" });
        const{data} = await getArchivedNotes();
        setNotes(()=>{
            return data;
        });
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    if (isloading) return (
        <LoadingIndicator type={"bubbles"} color={"#006eff"}/>
    );

    return (
        <>
            <div className="container mt-5 mb-5">
                <h2 className="text-center mb-5">Arsip Catatanku</h2>
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onUnarchive={onUnarchiveHandler} />
            </div>
        </>
    );
}

ArsipPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func,
}

export default ArsipPage;