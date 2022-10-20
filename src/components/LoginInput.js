import React, { useState } from 'react';
import useInput from '../hooks/InputHooks';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function LoginInput({ login }) {
    const {locale} = React.useContext(LocaleContext);
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [passwordShown, setPasswordShown] = useState(false);

    function onPasswordShown() {
        setPasswordShown(!passwordShown);
    }

    const gologin = () => {
        login({ email: email, password: password });
    }

    return (
        <div>
            <div className="form-group">
                <label>{locale === 'id' ?'Alamat Email': 'Email address'}</label>
                <input className="form-control" type="email" placeholder='Email' value={email} onChange={onEmailChange} />
            </div>
            <div className="form-group">
                <label>{locale === 'id' ?'Kata Sandi': 'Password'}</label>
                <input className="form-control" type={passwordShown ? 'text' : 'password'} placeholder={locale === 'id' ?'Kata Sandi': 'Password'} value={password} onChange={onPasswordChange} />
            </div>
            <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" checked={passwordShown} onChange={onPasswordShown} />
                <label className="form-check-label">
                {locale === 'id' ?'Lihat Kata Sandi': 'See Password'}
                </label>
            </div>
            <div className="text-center">
                <button className="btn btn-sm btn-primary w-100" onClick={gologin}>{locale === 'id' ?'Masuk': 'Sign In'}</button>
            </div>
        </div>
    );
}

LoginInput.propTypes = {
    login : PropTypes.func.isRequired
}
export default LoginInput;