import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ResetStyle, GlobalStyle } from './components/Style';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Theme from './components/Theme';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <div id="app">
                    <ResetStyle />
                    <GlobalStyle />
                    <Drawer>
                        <Main>
                            <Navbar />
                            <Board />
                        </Main>
                    </Drawer>
                </div>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
