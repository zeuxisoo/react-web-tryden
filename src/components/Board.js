import React from 'react';
import styled from 'styled-components';

import TopicList from './TopicList';
import { Threads, Thread } from './Threads';

function Board() {
    return (
        <BoardContainer>
            <TopicList />
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
