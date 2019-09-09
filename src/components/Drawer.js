import React, { useContext } from 'react';
import styled from 'styled-components';

import MainContext from '../hook/contexts/main';
import types from '../hook/types';

function Drawer() {
    /* eslint-disable no-unused-vars */
    const [mainState, dispatch] = useContext(MainContext);

    function handleDrawerClose() {
        dispatch({
            type: types.SET_DRAWER_CLOSE
        });
    }

    return (
        <DrawerContainer isOpen={mainState.isDrawerOpen}>
            <DrawerBackdrop isOpen={mainState.isDrawerOpen} onClick={handleDrawerClose} />
            <DrawerPaper isOpen={mainState.isDrawerOpen}>
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

    //
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: ${props => props.isOpen === true ? 1 : 0};
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

    // Slide left to right from -300px to 0px
    left: ${props => props.isOpen === true ? '-300px' : ''};

    transition: transform 300ms ease-in-out;
    transform: ${props => props.isOpen === true ? 'translate(300px, 0px)' : ''};
`;

export default Drawer;
