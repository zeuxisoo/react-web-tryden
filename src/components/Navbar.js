import styled from 'styled-components';

export const Navbar = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 1fr;
    grid-template-rows: 1fr;
    background-color: ${props => props.theme.navbarBackgroundColor};
    color: ${props => props.theme.navbarColor};
    padding: 5px 5px;
`;

export const NavbarMenu = styled.div`

`;

export const NavbarBoard = styled.div`
    text-align: center;
`;

export const NavbarTopic = styled.div`
    text-align: left;
`;
