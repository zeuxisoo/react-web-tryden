import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import mainContext from '../hook/main';
import themes from '../themes';

function Theme(props) {
    const { state } = useContext(mainContext);

    return (
        <ThemeProvider theme={themes[state.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;
