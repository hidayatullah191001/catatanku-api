import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';


const WelcomePage = () => {
    const {locale} = React.useContext(LocaleContext);
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-column text-center" style={{ height: '500px' }}>
                <h1>{locale === 'id' ? 'Selamat Datang di Aplikasi Catatanku' : 'Welcome to My Notes App'}</h1>
                <h6 className="mb-4">{locale === 'id' ? 'Mari mulai untuk menulis catatan harianmu' : 'Let`s start to write your diary'}</h6>
                <div className="row">
                    <Link to='/home' className="btn btn-sm btn-primary mr-3">{locale === 'id' ? 'Lihat Catatan' : 'View Notes'}</Link>
                    <Link to='/buat' className="btn btn-sm btn-success">{locale === 'id' ? 'Buat Catatan' : 'Make a New Notes'}</Link>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;