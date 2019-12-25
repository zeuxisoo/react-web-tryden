import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, BrowserRouter, Switch, Route } from 'react-router-dom';

import Api from '../api';

import Topic from './Topic';
import ThreadList from './ThreadList';
import Smile from './Smile';

function TopicList() {
    const [topics, setTopics] = useState([]);
    const { id } = useParams();

    const fetchTopic = useCallback(async () => {
        const response = await Api.get("topics.json");
        const topics   = response.data.filter(topic => topic.board_id === parseInt(id, 10));

        setTopics(topics);
    }, [id]);

    useEffect(() => {
        fetchTopic();
    }, [fetchTopic]);

    return (
        <TopicListContainer>
            <BrowserRouter>
                <TopicsContainer>
                    {topics.map((topic, i) =>
                        <Topic key={topic.id} topic={topic} />
                    )}
                </TopicsContainer>
                <Switch>
                    <Route path="/thread/:id" component={ThreadList} />
                    <Route component={Smile} />
                </Switch>
            </BrowserRouter>
        </TopicListContainer>
    );
}

const TopicListContainer = styled.div`
    display: grid;
    grid-template-columns: [Topics] 28% [Threads] 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
`;

const TopicsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
    background-color: ${props => props.theme.topicsBackgroundColor};
    border-right: 1px solid ${props => props.theme.topicsBackgroundColor};
    overflow-y: scroll;
`;

export default TopicList;
