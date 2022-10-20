import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/InputHooks';
import {AlertSwalError} from '../components/Alert';
import LocaleContext from '../contexts/LocaleContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [password2, onPasswordChange2] = useInput('');
  const [passwordShown, setPasswordShown] = useState(false);
  const {locale} = React.useContext(LocaleContext);

  function onPasswordShown() {
    setPasswordShown(!passwordShown);
  }

  const goRegister = () => {
    if (password !== password2) {
      AlertSwalError({title:'Gagal', message:"Password tidak sama"});
    }else{
      register({ name: name, email: email, password: password });
    }
  }

  return (
    <div>
      <div className="form-group">
        <label>{locale === 'id' ? 'Nama Lengkap' : 'Full Name'}</label>
        <input className="form-control" type="text" placeholder={locale === 'id' ? 'Nama Lengkap' : 'Full Name'} value={name} onChange={onNameChange} />
      </div>

      <div className="form-group">
        <label>{locale === 'id' ? 'Alamat Email' : 'Email address'}</label>
        <input className="form-control" type="email" placeholder={locale === 'id' ? 'Alamat Email' : 'Email address'} value={email} onChange={onEmailChange} />
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
            <input className="form-control" type={passwordShown ? 'text' : 'password'} placeholder={locale === 'id' ? 'Kata Sandi' : 'Password'} value={password} onChange={onPasswordChange} />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>{locale === 'id' ? 'Ulang Kata Sandi' : 'Repeat Password'}</label>
            <input className="form-control" type={passwordShown ? 'text' : 'password'} placeholder={locale === 'id' ? 'Ulang Kata Sandi' : 'Repeat Password'} value={password2} onChange={onPasswordChange2} />
          </div>
        </div>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" onChange={onPasswordShown} />
        <label className="form-check-label">
        {locale === 'id' ? 'Lihat Kata Sandi' : 'See Password'}
        </label>
      </div>
      <div className="text-center">
        <button className="btn btn-sm btn-primary w-100" onClick={goRegister}>{locale === 'id' ?'Daftar': 'Sign Up'}</button>
      </div>
    </div>
  );
}


RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;