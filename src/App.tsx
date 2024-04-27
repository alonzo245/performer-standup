import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalizationState } from './context/useLocalizationState';
import IndexRouter from './routes';
import { parseQueryString } from './utils';

const App: FC = () => {
  const { locale, setLocale } = useLocalizationState();

  useEffect(() => {
    const existInQsUrl: any = parseQueryString(window.location.search);
    if (existInQsUrl?.locale) {
      document.body.style.direction = existInQsUrl?.locale === 'eng' ? 'ltr' : 'rtl';
      setLocale(existInQsUrl?.locale);
      localStorage.setItem('locale', existInQsUrl?.locale === 'eng' ? 'eng' : 'heb');
    } else {
      document.body.style.direction = localStorage.getItem('locale') === 'eng' ? 'ltr' : 'rtl';
    }
  }, [locale]);

  return (
    <>
      <IndexRouter />
      <ToastContainer />
    </>
  );
};

export default App;
