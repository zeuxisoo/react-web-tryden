import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarMenu>
                <FontAwesomeIcon icon={faBars} />&nbsp;
                <FontAwesomeIcon icon={faSmileWink} />
            </NavbarMenu>
            <NavbarBoard>Board Name</NavbarBoard>
            <NavbarTopic>Topic Name</NavbarTopic>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 1fr;
    grid-template-rows: 1fr;
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
