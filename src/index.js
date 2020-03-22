import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import App from './components/App'

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('app')
)

