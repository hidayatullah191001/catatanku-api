import React from 'react';
// import { archiveNote, deleteNote, getActiveNotes } from '../utils/local-data'
import { archiveNote, deleteNote, getActiveNotes } from '../utils/api_service';
import NoteList from '../components/NoteList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { AlertSwal } from '../components/Alert';
import PropTypes from 'prop-types';
import LoadingIndicator from '../components/LoadingIndicator';

function HomePage() {
    const [notes, setNotes] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const [isloading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        getActiveNotes().then(({ data }) => {
            setNotes(data);
            setLoading(false);
        })
    }, []);

    async function onDeleteHandler(id) {
        await deleteNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    async function onArchiveHandler(id) {
        await archiveNote(id);
        AlertSwal({ title: "Berhasil", message: "Catatan berhasil dipindahkan ke berkas arsip!" });
        const { data } = await getActiveNotes();
        setNotes(data);
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
                <h2 className="text-center mb-5">Catatanku</h2>
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
            </div>
        </>
    );
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
}

export default HomePage;