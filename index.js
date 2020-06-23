const redux = require('redux')
const createStore = redux.createStore

const BUY_Cake = 'BUY_CAKE'

function buyCake() {
    return {
        type:BUY_Cake,
        info: 'first redux action'
    }
}

// reducer .... (pre-state , action) => new state

const initialState = {
    noofCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_Cake: return {
            ...state,
            noofCakes: state.noofCakes - 1
        }

        default: return state;
    }
}


// communication with the store 
// getstate() == from the store to reducer.. i.e, returns the current state to the reducer from the store 
// dispatch(action) == from the reducer to store ... i.e, it frowds the action triggered to the store to make the required changesin the store 

// the store also allow the application to register for the listeners vis subscribe method
// subscribe(listener) ... the subscribe is hit when ever there is change in the store



// createStore accept hte reducer function which hold the initial state
const store = createStore(reducer)
console.log('',store.getState())
const unsubscribe = store.subscribe(() => console.log('',store.getState()));
store.dispatch(buyCake())

unsubscribe();