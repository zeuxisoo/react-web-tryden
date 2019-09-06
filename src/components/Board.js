import React from 'react';
import styled from 'styled-components';

import { Topics, Topic } from './Topics';
import { Threads, Thread } from './Threads';

function Board() {
    return (
        <BoardContainer>
            <Topics>
                {[...Array(10)].map((x, i) =>
                    <Topic key={i}>Topic {i+1}</Topic>
                )}
            </Topics>
            <Threads>
                {[...Array(10)].map((x, i) =>
                    <Thread key={i}>Thread {i+1}</Thread>
                )}
            </Threads>
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
`;

export default Board;
