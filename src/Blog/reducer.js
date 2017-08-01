import {
  FILTER_DATE,
  FILTER_POPULAR,
  FILTER_ALPHABET,
  REQUEST_BLOG_POSTS,
  RECEIVE_BLOG_POSTS,
  UPDATE_VIEWS_NUMBER,
} from './actions';

const defaultState = {
  isFetching: false,
  items: [],
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BLOG_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BLOG_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts.filter(post => post !== null),
        lastUpdated: action.receivedAt
      });
    default: return state;
  }
};

export const blogPosts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BLOG_POSTS:
    case REQUEST_BLOG_POSTS:
      return Object.assign({}, state, {
        posts: posts(state['blogPosts'], action)
      })
    case UPDATE_VIEWS_NUMBER:
      const newState = Object.assign({}, state);
      newState.posts.items.forEach((post) => { 
        if( Number(post.id) === Number(action.id) ) post.views++;
      });
      return newState
    default: return state
  }
};

export const visibilityFilter = (state = FILTER_DATE, action) => {
  switch (action.type) {
    case FILTER_DATE: return 'FILTER_DATE';
    case FILTER_POPULAR: return 'FILTER_POPULAR';
    case FILTER_ALPHABET: return 'FILTER_ALPHABET';
    default: return state
  }
};
