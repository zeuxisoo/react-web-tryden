import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import TopicList from './TopicList';
import ThreadList from './ThreadList';
import Smile from './Smile';

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
            <Redirect from='/' to='/topic/1' exact />
            <Switch>
                <Route path={['/topic/:id', '/thread']} component={TopicList} />
                <Route component={TopicList} />
            </Switch>
            <Switch>
                <Route path="/thread/:id" component={ThreadList} />
                <Route component={Smile} />
            </Switch>
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: [TopicList] 28% [ThreadList] 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
`;

export default Board;
