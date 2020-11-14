import {rootreducers} from './rootreducer'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootsaga from '../saga/index'
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootreducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootsaga)