import styled from 'styled-components';

export const Drawer = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    visibility: hidden;
`;

export const DrawerBackdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: ${props => props.theme.drawerBackdropColor};
`;

export const DrawerPaper = styled.div`
    position: fixed;
    left: 0;
    right: auto;
    z-index: 1200;
    width: 300px;
    height: 100%;
    color: ${props => props.theme.drawerPaperColor};
    background-color: ${props => props.theme.drawerPaperBackgroundColor};
`;
