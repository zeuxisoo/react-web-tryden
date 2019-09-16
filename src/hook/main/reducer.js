import types from './types';

const mainDefaultState = {
    theme       : 'snow',
    drawerStatus: 'close',
};

const mainReducer = (state, action) => {
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
}

export {
    mainDefaultState,
    mainReducer,
}
