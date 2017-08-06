import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Blog from './Blog';
import Post from './Blog/Post';
import { fetchBlogPostsIfNeeded } from './Blog/actions';
import News from './News';
import { fetchPostsIfNeeded } from './News/actions';
import Admin from './Admin';
import PostCards from './Admin/components/PostCards';
import PostEditor from './Admin/components/PostEditor';
import blogApp from './rootReducer';
import './stylesheets/base/main.scss';

// const loggerMiddleware = createLogger();

let store = createStore(
  blogApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(fetchPostsIfNeeded('time'));
store.dispatch(fetchBlogPostsIfNeeded());

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={Blog} />
        <Route path='posts/:postId' component={Post} />
        <Route path='news' component={News} />
        <Route path='admin' component={Admin}>
          <IndexRoute component={PostCards} />
          <Route path='edit' component={PostEditor} />
          <Route path='edit/:postId' component={PostEditor} />
        </Route>
      </Route> 
    </Router>
  </Provider>,
  document.getElementById('root')
);
