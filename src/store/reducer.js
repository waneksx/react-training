import * as actionTypes from './actions';

const initialState = {
    counter: 0
};

let getCounterState = (state, counterAction) => {
    return {
        ...state,
        counter: counterAction(state.counter)
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return getCounterState(state, counter => counter + 1);
        case actionTypes.DECREMENT:
            return getCounterState(state, counter => counter - 1);
        case actionTypes.ADD:
            return getCounterState(state, counter => counter + action.val);
        case actionTypes.SUBTRACT:
            return getCounterState(state, counter => counter - action.val);
        default:
            return state
    }
};

export default reducer;