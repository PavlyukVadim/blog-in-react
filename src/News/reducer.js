import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SOURCE,
} from './actions';

const requestPosts = (state, action) => {
  return Object.assign({}, state, {
    [action.source]: {
      items: [],
      isFetching: true,
    },
  });
};

const receivePosts = (state, action) => {
  return Object.assign({}, state, {
    [action.source]: {
      items: action.posts,
      isFetching: false,
      lastUpdated: action.receivedAt,
    },
  });
};

const articlesBySourceReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS: return requestPosts(state, action);
    case RECEIVE_POSTS: return receivePosts(state, action);
    default: return state;
  }
};

const selectedSourceReducer = (state = 'time', action) => {
  switch (action.type) {
    case SELECT_SOURCE: return action.source;
    default: return state;
  }
};

const newsReducer = combineReducers({
  articles: articlesBySourceReducer,
  source: selectedSourceReducer,
});

export default newsReducer;
