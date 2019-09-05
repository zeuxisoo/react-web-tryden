import styled from 'styled-components';

export const Threads = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px;
    grid-gap: 10px;
    background-color: ${props => props.theme.threadsBackgroundColor};
    overflow-y: scroll;
`;

export const Thread = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 200px;
    align-items: center;
    justify-items: center;
    color: ${props => props.theme.threadColor};
    background-color: ${props => props.theme.threadBackgroundColor};
`;
