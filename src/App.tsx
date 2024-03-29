import { FC } from 'react';
import { GlobalStateProvider } from './context/useGlobalState';
import { ThemeStateProvider } from './context/useThemeState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexRouter from './routes';

const App: FC = () => {
  return (
    <ThemeStateProvider>
      <GlobalStateProvider>
        <IndexRouter />
        <ToastContainer />
      </GlobalStateProvider>
    </ThemeStateProvider>
  );
};

export default App;
