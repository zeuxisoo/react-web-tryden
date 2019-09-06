import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import MainContext from '../hook/contexts/main';
import themes from '../themes';

function Theme(props) {
    /* eslint-disable no-unused-vars */
    const [mainState, dispatch] = useContext(MainContext);

    return (
        <ThemeProvider theme={themes[mainState.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;
