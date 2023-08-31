import { FC } from 'react';
import { GlobalStateProvider } from './context/useGlobalState';
import { ThemeStateProvider } from './context/useThemeState';
import IndexRouter from './routes';

const App: FC = () => {
    return (
        <ThemeStateProvider>
            <GlobalStateProvider>
                <IndexRouter />
            </GlobalStateProvider>
        </ThemeStateProvider>
    );
};

export default App;
