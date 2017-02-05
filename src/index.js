import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import App from './components/App.jsx';
import blogApp from './reducers';
import { fetchPostsIfNeeded } from './actions/newsAPIactions.js';

import './reset.css';


const loggerMiddleware = createLogger();

let store = createStore(
	blogApp,
	applyMiddleware(
    	thunkMiddleware, // lets us dispatch() functions
    	loggerMiddleware // neat middleware that logs actions
  	)
);

store.dispatch(fetchPostsIfNeeded('the-guardian-uk'))
store.dispatch(fetchPostsIfNeeded('time'))


ReactDOM.render(
  	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);