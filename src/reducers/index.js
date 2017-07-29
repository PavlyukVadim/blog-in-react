import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import selectedSource from './selectedSource';
import articlesBySource from './articles';
import blogPosts from './blogPosts';

const blogApp = combineReducers({
  visibilityFilter,
  selectedSource,
  articlesBySource,
  blogPosts
})

export default blogApp;
