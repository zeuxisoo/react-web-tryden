import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink, faUser } from '@fortawesome/free-solid-svg-icons';

import mainContext from '../hook/main';
import Api from '../api';

function Drawer() {
    const duration = 300;
    const [boards, setBoards] = useState([]);
    const { state, setDrawerStatus } = useContext(mainContext);

    // Handler
    function handleDrawerClose() {
        setDrawerStatus('closing');

        setTimeout(() => {
            setDrawerStatus('close');
        }, duration);
    }

    // Hook
    useEffect(() => {
        Api.get("boards.json").then(response => {
            setBoards(response.data);
        });
    }, []);

    return (
        <DrawerContainer status={state.drawerStatus} duration={duration}>
            <DrawerBackdrop status={state.drawerStatus} duration={duration} onClick={handleDrawerClose} />
            <DrawerPaper status={state.drawerStatus} duration={duration}>
                <DrawerPaperIcons>
                    <FontAwesomeIcon icon={faSmileWink} size="lg" />
                    <FontAwesomeIcon icon={faUser} size="lg" />
                </DrawerPaperIcons>
                <DrawerPaperBoardList>
                    {
                        boards.map((board, i)  => (
                            <div key={i}>{board.name}</div>
                        ))
                    }
                </DrawerPaperBoardList>
            </DrawerPaper>
        </DrawerContainer>
    )
}

const DrawerContainer = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    visibility: ${props => props.status === 'close' ? 'hidden' : 'block' };
`;

const DrawerBackdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    background-color: ${props => props.theme.drawerBackdropColor};

    // Shared animation
    transition: opacity ${props => props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    // Animation (isOpen): fade in
    opacity: ${props => props.status === 'open' ? 1 : 0};

    // Animation (isClosing): fade out
    opacity: ${props => props.status === 'closing' ? 0 : 1};
`;

const DrawerPaper = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;

    position: fixed;
    right: auto;
    z-index: 1200;
    width: 300px;
    height: 100%;
    color: ${props => props.theme.drawerPaperColor};
    background-color: ${props => props.theme.drawerPaperBackgroundColor};
    opacity: 0.9;

    // Shared animation
    transition: transform ${props => props.duration}ms ease-in-out;

    // Animation (isOpen): slide left to right from -300px to 0px
    left: ${props => props.status === 'open' ? '-300px' : ''};
    transform: ${props => props.status === 'open' ? 'translate(300px, 0px)' : ''};

    // Animation (isClosing): slide right to left from 0px to -300px
    left: ${props => props.status === 'closing' ? '-300px' : ''};
    transform: ${props => props.status === 'closing' ? 'translate(0px, 0px)' : ''};
`;

const DrawerPaperIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 30px);
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    padding-top: 10px;
    background-color: ${props => props.theme.drawerPaperIconsBackgroundColor}
`;

const DrawerPaperBoardList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 30px);
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    padding-top: 10px;
`;

export default Drawer;
