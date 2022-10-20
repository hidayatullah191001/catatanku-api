import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

const PageNotFound = () => {
    const {locale} = React.useContext(LocaleContext);
    return (
        <div style={{ height: '500px' }} className="d-flex justify-content-center align-items-center flex-column">
            <h1>404</h1>
            <p>{locale === 'id' ? 'Halaman tidak dapat ditemukan!' : 'Page Not Found!'}</p>
            <Link to={'/home'}>{locale === 'id' ? 'Kembali' : 'Back to Home'}</Link>
        </div>
    )
}

export default PageNotFound;