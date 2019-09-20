import { createContext, useReducer } from 'react';

const context = createContext();

const defaultDrawerState = {
    drawerStatus: 'close',
};

const types = {
    SET_DRAWER_STATUS: "SET_DRAWER_STATUS",
};

const reducer = (state, action) => {
    switch(action.type) {
        case types.SET_DRAWER_STATUS:
            return {
                ...state,
                drawerStatus: action.status,
            };
        default:
            return state;
    }
};

function useDrawer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setDrawerStatus = status => {
        dispatch({
            type  : types.SET_DRAWER_STATUS,
            status: status,
        });
    };

    return { state, setDrawerStatus };
}

export default context;
export {
    useDrawer,
    defaultDrawerState
};
