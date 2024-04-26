import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalizationState } from './context/useLocalizationState';
import IndexRouter from './routes';
import LocalFlagSwitcher from './components/LocalFlagSwitcher';

const App: FC = () => {
  const { locale } = useLocalizationState();

  useEffect(() => {
    document.body.style.direction = localStorage.getItem('locale') === 'eng' ? 'ltr' : 'rtl';
  }, [locale]);

  return (
    <>
      <IndexRouter />
      <ToastContainer />
    </>
  );
};

export default App;
