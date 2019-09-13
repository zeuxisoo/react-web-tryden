import React from 'react';
import styled from 'styled-components';

function Smile() {
    return (
        <SmileContainer>
            Smile Area :)
        </SmileContainer>
    );
}

const SmileContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
`;

export default Smile;
