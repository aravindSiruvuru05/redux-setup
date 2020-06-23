const redux = require('redux')
const createStore = redux.createStore

const combineReducers = redux.combineReducers

// middlewares are custom extra functionalities for redux 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger() // redux provides functionality to include middleware by apply middleware 

const applyMiddleware = redux.applyMiddleware // by passing aply middleware to createsore as 2nd arameter


const BUY_Cake = 'BUY_CAKE'
const BUY_IceCream = 'BUY_IceCream'

function buyCake() {
    return {
        type:BUY_Cake,
        info: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_IceCream,
        info: 'sec redux action'
    }
}

// reducer .... (pre-state , action) => new state

const initialCakeState = {
    noofCakes: 10
}


const initialIceCreamState = {
    noofIceCreams:20
}

const Cakereducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_Cake: return {
            ...state,
            noofCakes: state.noofCakes - 1
        }

        default: return state;
    }
}

const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_IceCream: return {
            ...state,
            noofIceCreams: state.noofIceCreams - 1
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


// combine reducers accept an object of reducers as key value pairs 
const rootReducer = combineReducers({
    cake: Cakereducer,
    IceCream: IceCreamreducer
})
//create store only accept one reducerr so we combine all the reducers and send
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('',store.getState())
//const unsubscribe = store.subscribe(() => console.log('',store.getState())); // console.log by subscribing store is not needed as logger middle=ware take cares
store.dispatch(buyCake())
store.dispatch(buyIceCream())


//unsubscribe();