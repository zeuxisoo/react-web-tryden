import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';

import theme from './theme';
import './App.css';

function App() {
    const [themeName, setThemeName] = useState('snow');

    function changeThemeName() {
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
                <Drawer />
                <Main>
                    <Navbar />
                    <Board />
                </Main>
            </div>
        </ThemeProvider>
    );
}

export default App;
