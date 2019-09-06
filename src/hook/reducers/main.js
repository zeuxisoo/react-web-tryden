import types from '../types';

const mainDefaultState = {
    theme: 'snow',
};

const mainReducer = (state, action) => {
    switch(action.type) {
        case types.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
}

export {
    mainDefaultState,
    mainReducer,
}
