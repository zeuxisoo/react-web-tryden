import React from 'react';
import styled from 'styled-components';

function Thread(props) {
    return (
        <ThreadContainer>
            {props.children}
        </ThreadContainer>
    );
}

const ThreadContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 200px;
    align-items: center;
    justify-items: center;
    color: ${props => props.theme.threadColor};
    background-color: ${props => props.theme.threadBackgroundColor};
`;

export default Thread;
