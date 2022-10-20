import React from 'react';
import { NavLink } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

const Navigation = () => {
    const {locale} = React.useContext(LocaleContext)
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/home"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    {locale === 'id' ? 'Utama' :'Home'}
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/buat"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                   {locale === 'id' ? 'Tambah Baru' :'Add New'}
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/arsip"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    {locale === 'id' ? 'Arsip' :'Archive'}
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;