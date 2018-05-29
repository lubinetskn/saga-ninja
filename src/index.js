import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import promiseMiddleware from './middlewares/promiseMiddleware';
import App from './App';
import './index.css';

// middleware
// const store = createStore(reducers, applyMiddleware(promiseMiddleware, logger));

// thunk
// const store = createStore(reducers, applyMiddleware(thunk, logger));

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
