import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from '../enhancers/monitorReducers'
import loggerMiddleware from '../middleware/logger'
import rootReducer from './rootReducer'

const initialStore = {
    cartItems: {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}

export default function configureStore(initialStore) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, initialStore, composedEnhancers)

    return store
}