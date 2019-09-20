import React, { createContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../themes';

// Theme context
const ThemeContext = createContext();

// Theme default initial state
const defaultState = {
    theme: 'snow',
};

// Theme reducer
const types = {
    SET_THEME: "SET_THEME",
};

const reducer = (state, action) => {
    switch(action.type) {
        case types.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
};

// Theme reducer hook
function useTheme(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleTheme = () => {
        dispatch({
            type : types.SET_THEME,
            theme: state.theme === 'snow' ? 'dark' : 'snow',
        });
    }

    return { state, toggleTheme };
}

// Theme Component
function Theme(props) {
    const themeHook = useTheme(defaultState);

    return (
        <ThemeContext.Provider value={themeHook}>
            <ThemeProvider theme={themes[themeHook.state.theme]}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default Theme;
export {
    ThemeContext
};
