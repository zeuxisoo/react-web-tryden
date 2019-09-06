import React, { useReducer } from 'react';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Theme from './components/Theme';

import MainContext from './hook/contexts/main';
import { mainDefaultState, mainReducer } from './hook/reducers/main';

import './App.css';

function App() {
    const mainContextReducer = useReducer(mainReducer, mainDefaultState);

    return (
        <MainContext.Provider value={mainContextReducer}>
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
    );
}

export default App;
