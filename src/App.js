import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Theme from './components/Theme';

import DrawerContext, { useDrawer, defaultDrawerState } from './hook/drawer';

import './App.css';

function App() {
    const drawer = useDrawer(defaultDrawerState);

    return (
        <BrowserRouter>
            <Theme>
                <DrawerContext.Provider value={drawer}>
                    <div id="app">
                        <ResetStyle />
                        <GlobalStyle />
                        <Drawer />
                        <Main>
                            <Navbar />
                            <Board />
                        </Main>
                    </div>
                </DrawerContext.Provider>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
