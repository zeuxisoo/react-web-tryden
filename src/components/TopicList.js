import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Topic from './Topic';

function TopicList() {
    const { id } = useParams();

    console.log(id);

    return (
        <TopicListContainer>
            {[...Array(10)].map((x, i) =>
                <Topic key={i}>Topic {i+1}</Topic>
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
