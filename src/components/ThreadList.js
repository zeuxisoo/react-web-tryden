import React from 'react';
import styled from 'styled-components';

import Thread from './Thread';

function ThreadList() {
    return (
        <ThreadContainer>
            {[...Array(10)].map((x, i) =>
                <Thread key={i}>Thread {i+1}</Thread>
            )}
        </ThreadContainer>
    );
}

const ThreadContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    background-color: ${props => props.theme.threadsBackgroundColor};
    overflow-y: scroll;
`;

export default ThreadList;
