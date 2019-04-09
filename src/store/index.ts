import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, enhancer)

export type State = ReturnType<typeof reducer>

export default store
