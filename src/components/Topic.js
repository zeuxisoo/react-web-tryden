import React from 'react';
import styled from 'styled-components';

function Topic(props) {
    return (
        <TopicContainer>
            {props.children}
        </TopicContainer>
    );
}

const TopicContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 100px;
    align-items: center;
    justify-items: center;
    color: ${props => props.theme.topicColor};
    background-color: ${props => props.theme.topicBackgroundColor};
`;

export default Topic;
