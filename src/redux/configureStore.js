import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from '../enhancers/monitorReducers'
import loggerMiddleware from '../middleware/logger'
import rootReducer from './rootReducer'

const initialState = {
    cartReducer: {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, initialState, composedEnhancers)

    return store
}