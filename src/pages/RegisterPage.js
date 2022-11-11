import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api_service';
import { useNavigate } from 'react-router-dom';
import ToggleTheme from '../components/ToggleTheme';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import ToggleLocale from '../components/ToggleLocale';
import { AlertSwal, AlertSwalError } from '../components/Alert';

function RegisterPage() {
  const navigate = useNavigate();
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error, data } = await register(user);
    if (!error) {
      AlertSwal({ title: 'Berhasil', message: "Akun berhasil didaftarkan, silahkan masuk dengan akun tersebut!" });
      navigate('/');
    } else {
      AlertSwalError({ title: "Failed", message: data });
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className={`card ${theme !== 'light' ? 'bg-dark' : 'bg-white'} border-0 shadow rounded-3 my-4`}>
            <div className="card-body p-4 p-sm-4">
              <h5 className="card-title text-center mb-5 fw-light fs-4">{locale === 'id' ? 'Daftar Akun' : 'Sign Up'}</h5>
              <RegisterInput register={onRegisterHandler} />
              <p className="text-center mt-4">{locale === 'id' ? 'Sudah punya akun?' : 'Do have an account?'} <Link to="/">{locale === 'id' ? 'Masuk di sini' : 'Please sign in here'}</Link></p>
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

export default RegisterPage;