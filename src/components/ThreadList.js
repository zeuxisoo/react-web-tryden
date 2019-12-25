import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Api from '../api';

import Thread from './Thread';

function ThreadList() {
    const [threads, setThreads] = useState([]);
    const { id } = useParams();

    const fetchThreads = useCallback(async () => {
        if (typeof id === 'undefined') return;

        const response = await Api.get("threads.json");
        const threads  = response.data.filter(thread => thread.topic_id === parseInt(id, 10))

        setThreads(threads);
    }, [id]);

    useEffect(() => {
        fetchThreads();
    }, [fetchThreads]);

    return (
        <ThreadContainer>
            {threads.map((thread, i) =>
                <Thread key={thread.id}>
                    <Title>{thread.title}</Title>
                    <Content>{thread.content}</Content>
                </Thread>
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

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.threadTitleColor};
`;

const Content = styled.div`
    font-size: 18px;
    color: ${props => props.theme.threadContentColor};
`;

export default ThreadList;
