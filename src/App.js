import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

import { ResetStyle, GlobalStyle } from './components/Style';
import { Drawer, DrawerBackdrop, DrawerPaper } from './components/Drawer';
import Wrapper from './components/Wrapper';
import { Navbar, NavbarMenu, NavbarBoard, NavbarTopic } from './components/Navbar';
import Board from './components/Board';
import { Topics, Topic } from './components/Topics';
import { Threads, Thread } from './components/Threads';
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
                    <Navbar>
                        <NavbarMenu>
                            <FontAwesomeIcon icon={faBars} />&nbsp;
                            <FontAwesomeIcon icon={faSmileWink} onClick={() => changeThemeName()} />
                        </NavbarMenu>
                        <NavbarBoard>Board Name</NavbarBoard>
                        <NavbarTopic>Topic Name</NavbarTopic>
                    </Navbar>
                    <Board>
                        <Topics>
                            {[...Array(10)].map((x, i) =>
                                <Topic key={i}>Topic {i+1}</Topic>
                            )}
                        </Topics>
                        <Threads>
                            {[...Array(10)].map((x, i) =>
                                <Thread key={i}>Thread {i+1}</Thread>
                            )}
                        </Threads>
                    </Board>
                </Wrapper>
            </div>
        </ThemeProvider>
    );
}

export default App;
