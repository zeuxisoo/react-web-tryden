import React from 'react';
import styled from 'styled-components';

import TopicList from './TopicList';
import ThreadList from './ThreadList';

function Board() {
    return (
        <BoardContainer>
            <TopicList />
            <ThreadList />
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
