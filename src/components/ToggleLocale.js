import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function ToggleLocale(){
    const { locale, toggleLocale } = React.useContext(LocaleContext);
    return <button onClick={toggleLocale} className={`btn btn-sm btn-primary mr-3`}>{locale === 'id' ? 'English' : 'Indonesia'}</button>;
}

export default ToggleLocale;