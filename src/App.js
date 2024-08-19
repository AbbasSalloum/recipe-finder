import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
//import './i18n';  // Import i18n for localization

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <HomePage />
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
