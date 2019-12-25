import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import TopicList from './TopicList';

function Board() {
    /**
    Left:

    1. Default or NotFound: TopicList
    2. Location: / to /topic/1

    Right:

    1. Default or NotFound: Smile
    2. Location: /thread/:id
    */

    return (
        <BoardContainer>
            <Switch>
                <Redirect from='/' to='/topic/1' exact />
                <Route path='/topic/:id' component={TopicList} />
            </Switch>
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: [TopicList] 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
`;

export default Board;
