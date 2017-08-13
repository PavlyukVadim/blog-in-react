import { combineReducers } from 'redux';
import {
  REQUEST_BLOG_POSTS,
  RECEIVE_BLOG_POSTS,
  UPDATE_VIEWS_NUMBER,
  FILTER_DATE,
  FILTER_POPULAR,
  FILTER_ALPHABET,
} from './actions';

const defaultState = {
  isFetching: false,
  items: [],
};

const recieveBlogPosts = (state, action) => {
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

const updatePostNumberOfViews = (state, action) => {
  const newState = Object.assign({}, state);
  newState.posts.items.forEach((post) => {
    if (Number(post.id) === Number(action.id)) {
      post.views++;
    }
  });
  return newState;
};

const blogPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_BLOG_POSTS: return recieveBlogPosts(state, action);
    case REQUEST_BLOG_POSTS: return requestBlogPosts(state, action);
    case UPDATE_VIEWS_NUMBER: return updatePostNumberOfViews(state, action);
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
