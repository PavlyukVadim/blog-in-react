import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import PostEditor from './components/PostEditor.jsx';
import Admin from './components/Admin.jsx';
import NewsContainer from './containers/NewsContainer';
import BlogContainer from './containers/BlogContainer';
import NewsPageContainer from './containers/NewsPageContainer';
import AdminContainer from './containers/AdminContainer';

import blogApp from './reducers';
import { fetchPostsIfNeeded } from './actions/newsAPIactions';
import { fetchBlogPostsIfNeeded } from './actions/blogAPIactions';
import './reset.css';

const loggerMiddleware = createLogger();

let store = createStore(
  blogApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(fetchPostsIfNeeded('time'));
store.dispatch(fetchBlogPostsIfNeeded());

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={BlogContainer} />
        <Route path='posts/:postId' component={NewsPageContainer} />
        <Route path='news' component={NewsContainer} />
        <Route path='admin' component={AdminContainer}>
          <IndexRoute component={Admin} />
          <Route path='edit' component={PostEditor} />
          <Route path='edit/:postId' component={PostEditor} />
        </Route>
      </Route> 
    </Router>
  </Provider>,
  document.getElementById('root')
);
