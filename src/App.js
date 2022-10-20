import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddPage from './pages/AddPage';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import ArsipPage from './pages/ArsipPage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './pages/404Page';
import LoginPage from './pages/LoginPage';
import { putAccessToken, getUserLogged} from './utils/api_service'
import RegisterPage from './pages/RegisterPage';
import LocaleContext from './contexts/LocaleContext';
import ThemeContext from './contexts/ThemeContext';
import { AlertSwal} from './components/Alert';

function App() {
  const navigate = useNavigate();
  //Hooks Use State
  const [authedUser, setAuthed] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('lang') || 'id');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('lang', newLocale);
      return newLocale;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);


  function onToggleTheme() {
    setTheme((prevLocale) => {
      const newTheme = prevLocale === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      onToggleTheme
    };
  }, [theme]);

  function onLogout() {
    setAuthed(null);
    putAccessToken('');
    AlertSwal({ title: 'Berhasil', message: 'Kamu berhasil keluar dari aplikasi!' })
    navigate('/');
  }

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthed(data);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await getUserLogged();
      if (data === null) {
        navigate('/');
      }else{
        setAuthed(data);
      }
      setInitializing(false);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    const mode = localStorage.getItem('theme');
    if (mode !== 'light' && mode !== null) {
      document.body.classList.add('bg-dark');
      document.body.classList.add('text-white');
    } else {
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('text-white');
    }
  });

  return (
    initializing ? null : authedUser === null ?
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <Routes>
            <Route path="/*" element={
              <LoginPage
                loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>

      : <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div>
            <Header logout={onLogout} name={authedUser.name} />
            <main>
              <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<WelcomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/buat" element={<AddPage />} />
                <Route path="/arsip" element={<ArsipPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
  )
}

export default App;
