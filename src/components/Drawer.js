import React, { useContext } from 'react';
import styled from 'styled-components';

import MainContext from '../hook/contexts/main';
import types from '../hook/types';

function Drawer() {
    const duration = 300;

    /* eslint-disable no-unused-vars */
    const [mainState, dispatch] = useContext(MainContext);

    function handleDrawerClose() {
        dispatch({
            type  : types.SET_DRAWER_STATUS,
            status: 'closing',
        });

        setTimeout(() => {
            dispatch({
                type  : types.SET_DRAWER_STATUS,
                status: 'close',
            });
        }, duration);
    }

    return (
        <DrawerContainer status={mainState.drawerStatus} duration={duration}>
            <DrawerBackdrop status={mainState.drawerStatus} duration={duration} onClick={handleDrawerClose} />
            <DrawerPaper status={mainState.drawerStatus} duration={duration}>
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

export default Drawer;
