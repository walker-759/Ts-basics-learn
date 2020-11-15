// 创建store

// 拿到跟reducer
import {rootreducers} from './rootreducer'
// 拿到创建store的方法以及使用中间件的方法
import {createStore,applyMiddleware} from 'redux'
// 拿到创建saga的方法
import createSagaMiddleware  from 'redux-saga'
// 拿到浏览器插件
import {composeWithDevTools} from 'redux-devtools-extension'
// 拿到跟saga
import rootsaga from '../saga/index'
// 创建saga
const sagaMiddleware = createSagaMiddleware();

// 创建store对象
export const store = createStore(rootreducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))
// 运行并开始监视跟saga  
sagaMiddleware.run(rootsaga)