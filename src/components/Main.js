import React from 'react';
import styled from 'styled-components';

function Main(props) {
    return (
        <MainContainer>
            {props.children}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: [Navbar] auto [Board] 1fr;
`;

export default Main;
