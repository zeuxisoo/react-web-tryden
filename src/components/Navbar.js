import styled from 'styled-components';

export const Navbar = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 1fr;
    grid-template-rows: 1fr;
    background-color: ${props => props.theme.navbarBackgroundColor};
    color: ${props => props.theme.navbarColor};
    font-size: 24px;
`;

export const NavbarMenu = styled.div`
    padding: 5px 5px;
`;

export const NavbarBoard = styled.div`
    padding: 5px 5px;
    text-align: center;
    border-right: 1px solid ${props => props.theme.topicsBackgroundColor};
`;

export const NavbarTopic = styled.div`
    padding: 5px 5px;
    text-align: left;
`;
