import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

import { ResetStyle, GlobalStyle } from './components/Style';
import { Drawer, DrawerBackdrop, DrawerPaper } from './components/Drawer';
import Wrapper from './components/Wrapper';
import { Navbar, NavbarMenu, NavbarBoard, NavbarTopic } from './components/Navbar';
import Board from './components/Board';
import theme from './theme';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme['snow']}>
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
                    <Navbar>
                        <NavbarMenu>
                            <FontAwesomeIcon icon={faBars} />&nbsp;
                            <FontAwesomeIcon icon={faSmileWink} />
                        </NavbarMenu>
                        <NavbarBoard>Board</NavbarBoard>
                        <NavbarTopic>Topic</NavbarTopic>
                    </Navbar>
                    <Board>
                        <div>Board</div>
                        <div>Topic</div>
                    </Board>
                </Wrapper>
            </div>
        </ThemeProvider>
    );
}

export default App;
