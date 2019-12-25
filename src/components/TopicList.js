import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Api from '../api';

import Topic from './Topic';

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
            {topics.map((topic, i) =>
                <Topic key={topic.id} topic={topic} />
            )}
        </TopicListContainer>
    );
}

const TopicListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
    background-color: ${props => props.theme.topicsBackgroundColor};
    border-right: 1px solid ${props => props.theme.topicsBackgroundColor};
    overflow-y: scroll;
`;

export default TopicList;
