import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';

import { WeatherPageReducer } from '../src/containers/WeatherPage/reducer';
import { defaultSaga } from './containers/WeatherPage/saga';

const sagaMiddleWare = createSagaMiddleWare();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(WeatherPageReducer, compose(applyMiddleware(sagaMiddleWare), reduxDevTools));

sagaMiddleWare.run(defaultSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
