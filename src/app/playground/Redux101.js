import { createStore } from 'redux';

// Action generators - functions that return action objects

console.log({
    a: 1, b: 12
}, 100);

// destructured object
const add = ({ a, b }, c) => {
    return a = b;
};

// destructured generator
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy 
    };
};

// destructured generator
const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy 
    };
};

// destructured generator
const resetCount = () => ({
        type: 'RESET'
});

// destructured generator
const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count 
    };
};

// Reducers - handle the store logic to manipulate data
// 1. are pure functions (relying only on inputs and outputs)
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            };
        case 'RESET': 
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
};

// create store takes a function as argument
const store = createStore(countReducer);

// fires everytime the store changes
const unsuscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - pbject that gets sent to the store

// increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// // increment
// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(incrementCount());

// reset
store.dispatch(resetCount());

// decrement with destructured generator
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// decrement
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({ count: 101 }));
// store.dispatch({
//     type: 'SET',
//     count: 101
// });