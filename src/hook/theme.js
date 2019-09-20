import { createContext, useReducer } from 'react';

const context = createContext();

const defaultThemeState = {
    theme: 'snow',
};

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

export default context;
export {
    useTheme,
    defaultThemeState
};
