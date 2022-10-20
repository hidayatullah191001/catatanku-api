import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
const SearchBar = ({ keyword, keywordChange }) => {
    const {locale} = React.useContext(LocaleContext);
    return (
        <div className="mb-4">
            <label><strong>{locale === 'id' ? 'Cari Catatan' : 'Search Note'}</strong></label>
            <input
                className="form-control mr-sm-2"
                type="text"
                placeholder={locale === 'id' ? 'Cari berdasarkan judul' : 'Search by title'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;