import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from './Theme';
import { DrawerContext } from './Drawer';

function Navbar() {
    const { toggleTheme } = useContext(ThemeContext);
    const { setDrawerStatus } = useContext(DrawerContext);

    function handleDrawerOpen() {
        setDrawerStatus('open');
    }

    return (
        <NavbarContainer>
            <NavbarMenu>
                <FontAwesomeIcon icon={faBars} onClick={handleDrawerOpen} />&nbsp;
                <FontAwesomeIcon icon={faSmileWink} onClick={toggleTheme} />
            </NavbarMenu>
            <NavbarBoard>Board Name</NavbarBoard>
            <NavbarTopic>Topic Name</NavbarTopic>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: grid;
    grid-template-columns: [Menu] 5% [Board] 20% [Topic] 1fr;
    grid-template-rows: [Main] 1fr;
    background-color: ${props => props.theme.navbarBackgroundColor};
    color: ${props => props.theme.navbarColor};
    font-size: 24px;
`;

const NavbarMenu = styled.div`
    padding: 5px 5px;
`;

const NavbarBoard = styled.div`
    padding: 5px 5px;
    text-align: center;
    border-right: 1px solid ${props => props.theme.topicsBackgroundColor};
`;

const NavbarTopic = styled.div`
    padding: 5px 5px;
    text-align: left;
`;

export default Navbar;
