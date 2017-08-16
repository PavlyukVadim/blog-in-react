import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { blogReducer } from './Blog/reducer';
import { newsReducer } from './News/reducer';

const blogApp = combineReducers({
	routing: routerReducer,
  blog: blogReducer,
  news: newsReducer,
});

export default blogApp;
