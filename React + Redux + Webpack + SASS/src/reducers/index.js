import { combineReducers } from 'redux';

const dummyReducer = (state = 5, action) => {
    if (action.type === 'DUMMY_ACTION') {
        return state + action.payload;
    }
    return state;
};

export default combineReducers({
    dummyReducer: dummyReducer
});
