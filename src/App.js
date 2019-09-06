import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ResetStyle, GlobalStyle } from './components/Style';
import { Drawer, DrawerBackdrop, DrawerPaper } from './components/Drawer';
import Wrapper from './components/Wrapper';
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
                <Drawer>
                    <DrawerBackdrop />
                    <DrawerPaper>
                        Hello World
                    </DrawerPaper>
                </Drawer>
                <Wrapper>
                    <Navbar />
                    <Board />
                </Wrapper>
            </div>
        </ThemeProvider>
    );
}

export default App;
