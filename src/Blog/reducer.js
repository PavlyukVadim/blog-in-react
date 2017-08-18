import { combineReducers } from 'redux';
import {
  REQUEST_BLOG_POSTS,
  RECEIVE_BLOG_POSTS,
  UPDATED_POST,
  FILTER_DATE,
  FILTER_POPULAR,
  FILTER_ALPHABET,
} from './actions';
import {
  CREATED_POST,
  DELETED_POST,
} from './../Admin/actions';

const defaultState = {
  isFetching: false,
  items: [],
};

const receiveNewBlogPosts = (state, action) => {
  return Object.assign({}, state, {
    items: action.posts.filter(post => post !== null),
    isFetching: false,
    lastUpdated: action.receivedAt,
  });
};

const requestBlogPosts = (state, action) => {
  return Object.assign({}, state, {
    isFetching: true,
  });
};

const blogPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BLOG_POSTS: return requestBlogPosts(state, action);
    case RECEIVE_BLOG_POSTS: return receiveNewBlogPosts(state, action);
    case CREATED_POST: return receiveNewBlogPosts(state, action);
    case DELETED_POST: return receiveNewBlogPosts(state, action);
    case UPDATED_POST: return receiveNewBlogPosts(state, action);
    default: return state;
  }
};

const visibilityFilterReducer = (state = FILTER_DATE, action) => {
  switch (action.type) {
    case FILTER_DATE: return 'FILTER_DATE';
    case FILTER_POPULAR: return 'FILTER_POPULAR';
    case FILTER_ALPHABET: return 'FILTER_ALPHABET';
    default: return state;
  }
};

export const blogReducer = combineReducers({
  posts: blogPostsReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default blogReducer;
