import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ResetStyle, GlobalStyle } from './components/Style';
import theme from './theme';
import './App.css';

function App() {
    const [themeName, setThemeName] = useState('snow');

    function handleChangeThemeName() {
        if (themeName === 'snow') {
            setThemeName('dark');
        }else{
            setThemeName('snow');
        }
    }

    return (
        <ThemeProvider theme={theme[themeName]}>
            <div id="app">
                <ResetStyle />
                <GlobalStyle />

                <div>It is worked!</div>

                <button onClick={() => handleChangeThemeName()}>Change Theme</button>
            </div>
        </ThemeProvider>
    );
}

export default App;
