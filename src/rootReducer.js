import { combineReducers } from 'redux';
import { blogPosts, visibilityFilter } from './Blog/reducer';
import { articlesBySource, selectedSource } from './News/reducer';

const blogApp = combineReducers({
  visibilityFilter,
  selectedSource,
  articlesBySource,
  blogPosts,
});

export default blogApp;
