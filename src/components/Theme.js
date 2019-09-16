import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import MainContext from '../hook/main';
import themes from '../themes';

function Theme(props) {
    const [mainState] = useContext(MainContext);

    return (
        <ThemeProvider theme={themes[mainState.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;
