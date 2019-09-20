import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../hook/theme';
import themes from '../themes';

function Theme(props) {
    const { state } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={themes[state.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;
