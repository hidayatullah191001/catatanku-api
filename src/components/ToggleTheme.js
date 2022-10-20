import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../contexts/ThemeContext';

function ToggleTheme(){
    const {theme, onToggleTheme} = React.useContext(ThemeContext);
    return <button onClick={onToggleTheme} className={`btn btn-sm mr-3 ${theme !== 'light' ? 'btn-dark' : 'btn-light'}`}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
}

export default ToggleTheme;