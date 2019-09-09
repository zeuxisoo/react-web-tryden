import types from '../types';

const mainDefaultState = {
    theme       : 'snow',
    isDrawerOpen: false,
};

const mainReducer = (state, action) => {
    switch(action.type) {
        case types.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        case types.SET_DRAWER_OPEN:
            return {
                ...state,
                isDrawerOpen: true,
            };
        case types.SET_DRAWER_CLOSE:
            return {
                ...state,
                isDrawerOpen: false,
            };
        default:
            return state;
    }
}

export {
    mainDefaultState,
    mainReducer,
}
