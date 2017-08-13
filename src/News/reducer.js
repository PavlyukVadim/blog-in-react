import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SOURCE,
} from './actions';

const defaultState = {
  isFetching: false,
  items: [],
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default: return state;
  }
};

const articlesBySource = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.source]: posts(state[action.source], action)
      })
    default: return state
  }
};

const selectedSource = (state = 'time', action) => {
  switch (action.type) {
    case SELECT_SOURCE: return action.source
    default: return state
  }
};

export const newsReducer = combineReducers({
  selectedSource,
  articlesBySource,
});
