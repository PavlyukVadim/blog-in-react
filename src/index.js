import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import PostEditor from './components/PostEditor';
import Admin from './components/Admin';
import NewsContainer from './containers/NewsContainer';
import BlogContainer from './containers/BlogContainer';
import PostPageContainer from './containers/PostPageContainer';
import AdminContainer from './containers/AdminContainer';

import blogApp from './reducers';
import { fetchPostsIfNeeded } from './actions/newsAPIactions';
import { fetchBlogPostsIfNeeded } from './actions/blogAPIactions';
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
        <IndexRoute component={BlogContainer} />
        <Route path='posts/:postId' component={PostPageContainer} />
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
