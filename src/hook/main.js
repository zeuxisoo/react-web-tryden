import { createContext, useReducer } from 'react';

const context = createContext();

const defaultState = {
    theme       : 'snow',
    drawerStatus: 'close',
};

const types = {
    SET_THEME        : "SET_THEME",
    SET_DRAWER_STATUS: "SET_DRAWER_STATUS",
};

const reducer = (state, action) => {
    switch(action.type) {
        case types.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        case types.SET_DRAWER_STATUS:
            return {
                ...state,
                drawerStatus: action.status,
            };
        default:
            return state;
    }
};

function useMain(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setDrawerStatus = status => {
        dispatch({
            type  : types.SET_DRAWER_STATUS,
            status: status,
        });
    };

    const toggleTheme = () => {
        dispatch({
            type : types.SET_THEME,
            theme: state.theme === 'snow' ? 'dark' : 'snow',
        });
    }

    return { state, setDrawerStatus, toggleTheme };
}

export default context;
export {
    useMain,
    defaultState
};
