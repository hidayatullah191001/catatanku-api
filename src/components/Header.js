import React from 'react';
import Navigation from './Navigation';
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const Header = ({ logout, name}) => {
    const {theme} = React.useContext(ThemeContext);
    const {locale} = React.useContext(LocaleContext);
    return (
        <header>
            <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <h6 className="navbar-brand">Catatanku</h6>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Navigation logout={logout} />
                </div>
                <ToggleTheme/>
                <ToggleLocale/>
                <button className="btn btn-outline-danger btn-sm" onClick={logout}>{name}, Keluar</button>
            </nav>
        </header>
    )
}

Header.propTypes = {
    logout : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired,
}

export default Header;