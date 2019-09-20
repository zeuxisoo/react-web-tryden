import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Theme from './components/Theme';

import ThemeContext, { useTheme, defaultThemeState } from './hook/theme';
import DrawerContext, { useDrawer, defaultDrawerState } from './hook/drawer';

import './App.css';

function App() {
    const theme  = useTheme(defaultThemeState);
    const drawer = useDrawer(defaultDrawerState);

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={theme}>
                <DrawerContext.Provider value={drawer}>
                    <Theme>
                        <div id="app">
                            <ResetStyle />
                            <GlobalStyle />
                            <Drawer />
                            <Main>
                                <Navbar />
                                <Board />
                            </Main>
                        </div>
                    </Theme>
                </DrawerContext.Provider>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
