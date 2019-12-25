import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Topic(props) {
    const { topic } = props;

    return (
        <TopicContainer>
            <StyledLink to={`/thread/${topic.id}`}>{topic.title}</StyledLink>
        </TopicContainer>
    );
}

Topic.defaultProps = {
    topic: {}
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

const StyledLink = styled(Link)`
    color: ${props => props.theme.topicLinkColor};

    &:hover {
        color: ${props => props.theme.topicLinkHoverColor};
    }
`;

export default Topic;
