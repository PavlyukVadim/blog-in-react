import { combineReducers } from 'redux';
import { blogReducer } from './Blog/reducer';
import { newsReducer } from './News/reducer';

const blogApp = combineReducers({
  blog: blogReducer,
  news: newsReducer,
});

export default blogApp;
