import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Blog from './Blog';
import Post from './Blog/Post';
import { fetchBlogPostsIfNeeded } from './Blog/actions';
import News from './News';
import { fetchPostsIfNeeded } from './News/actions';
import Admin from './Admin';
import PostCards from './Admin/components/PostCards';
import Editor from './Admin/Editor';
import blogApp from './rootReducer';
import './stylesheets/base/main.scss';

// const loggerMiddleware = createLogger();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  blogApp,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchPostsIfNeeded('time'));
store.dispatch(fetchBlogPostsIfNeeded());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Blog} />
        <Route path='posts/:postId' component={Post} />
        <Route path='news' component={News} />
        <Route path='admin' component={Admin} />
        <Route path='edit' component={Editor} />
        <Route path='edit/:postId' component={Editor} />
      </Route> 
    </Router>
  </Provider>,
  document.getElementById('root')
);
