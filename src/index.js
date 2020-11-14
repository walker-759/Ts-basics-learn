import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// import {createStore,applyMiddleware} from 'redux'
// import {reducer} from './reducer'
import {Provider} from 'react-redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import { helloSaga } from './saga';

// // 引入saga函数
// import createSagaMiddleware from 'redux-saga';
// // 创建saga中间件
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
// // 运行saga
// sagaMiddleware.run(helloSaga);
import {store} from './redux/index'
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
