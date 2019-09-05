import styled from 'styled-components';

export const Topics = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px;
    grid-gap: 2px;
    background-color: ${props => props.theme.topicsBackgroundColor};
    overflow-y: scroll;
`;

export const Topic = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 100px;
    align-items: center;
    justify-items: center;
    color: ${props => props.theme.topicColor};
    background-color: ${props => props.theme.topicBackgroundColor};
`;
