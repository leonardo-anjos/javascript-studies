// actions
const increment = {type: 'increment'};
const decrement = {type: 'decrement'};

// reducer 
const reducer = ( state = {counter = 0}, action) => {
    switch(action.type) {
        case 'increment':
            return {counter: state.counter + 1}
        case 'decrement':
            return {counter: state.counter - 1}
        default:
            return state
    }
}

// store
const store = Redux.createStore(reducer);

// logger
function log() {
    console.log('counter: ', store.getState().counter)
}