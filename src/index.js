import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.jsx';
import blogApp from './reducers';

import { selectSource } from './actions/newsAPIactions.js';

import './reset.css';

let store = createStore(blogApp);

console.log(selectSource('time'));
ReactDOM.render(
  	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);