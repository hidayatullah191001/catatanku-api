import React from 'react';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api_service';
import ToggleTheme from '../components/ToggleTheme';
import ToggleLocale from '../components/ToggleLocale';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from 'prop-types';
import { AlertSwalError } from '../components/Alert';
import { AlertSwal } from '../components/Alert';
function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      AlertSwal({ title: 'Berhasil', message: 'Kamu berhasil masuk ke aplikasi!' })
      loginSuccess(data);
    } else if (error === true) {
      AlertSwalError({ title: "Failed", message: data });
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className={`card ${theme !== 'light' ? 'bg-dark' : 'bg-white'} border-0 shadow rounded-3 my-4`}>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">{locale === 'id' ? "Masuk" : "Sign In"}</h5>
              <LoginInput login={onLogin} />
              <p className="text-center mt-4">{locale === 'id' ? 'Belum punya akun?' : 'Don`t have account?'} <Link to="/register">{locale === 'id' ? 'Daftar di sini.' : 'Register here.'}</Link></p>
            </div>
          </div>
          <div className="text-center">
            <ToggleTheme />
            <ToggleLocale />
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
}

export default LoginPage;