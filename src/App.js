import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Theme from './components/Theme';

import MainContext, { useMain, defaultState } from './hook/main';

import './App.css';

function App() {
    const main = useMain(defaultState);

    return (
        <BrowserRouter>
            <MainContext.Provider value={main}>
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
            </MainContext.Provider>
        </BrowserRouter>
    );
}

export default App;
