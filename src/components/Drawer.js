import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import MainContext from '../hook/contexts/main';
import types from '../hook/types';

function Drawer() {
    /* eslint-disable no-unused-vars */
    const [mainState, dispatch] = useContext(MainContext);
    const [isClosing, setIsClosing] = useState(false);

    function handleDrawerClose() {
        setIsClosing(true);

        setTimeout(() => {
            dispatch({
                type: types.SET_DRAWER_CLOSE
            });

            setIsClosing(false);
        }, 300);
    }

    return (
        <DrawerContainer isOpen={mainState.isDrawerOpen}>
            <DrawerBackdrop isOpen={mainState.isDrawerOpen} isClosing={isClosing} onClick={handleDrawerClose} />
            <DrawerPaper isOpen={mainState.isDrawerOpen} isClosing={isClosing}>
                Hello World
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
    visibility: ${props => props.isOpen === true ? 'block' : 'hidden' };
`;

const DrawerBackdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    opacity: 1;
    background-color: ${props => props.theme.drawerBackdropColor};

    // Shared animation
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    // Animation (isOpen): fade in
    opacity: ${props => props.isOpen === true ? 1 : 0};

    // Animation (isClosing): fade out
    opacity: ${props => props.isClosing === true ? 0 : 1};
`;

const DrawerPaper = styled.div`
    position: fixed;
    right: auto;
    z-index: 1200;
    width: 300px;
    height: 100%;
    color: ${props => props.theme.drawerPaperColor};
    background-color: ${props => props.theme.drawerPaperBackgroundColor};
    opacity: 0.9;

    // Shared animation
    transition: transform 300ms ease-in-out;

    // Animation (isOpen): slide left to right from -300px to 0px
    left: ${props => props.isOpen === true ? '-300px' : ''};
    transform: ${props => props.isOpen === true ? 'translate(300px, 0px)' : ''};

    // Animation (isClosing): slide right to left from 0px to -300px
    left: ${props => props.isClosing === true ? '-300px' : ''};
    transform: ${props => props.isClosing === true ? 'translate(0px, 0px)' : ''};
`;

export default Drawer;
