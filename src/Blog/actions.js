import axios from 'axios';

export const FILTER_DATE = 'FILTER_DATE';
export const FILTER_POPULAR = 'FILTER_POPULAR';
export const FILTER_ALPHABET = 'FILTER_ALPHABET';
export const REQUEST_BLOG_POSTS = 'REQUEST_BLOG_POSTS';
export const RECEIVE_BLOG_POSTS = 'RECEIVE_BLOG_POSTS';
export const UPDATE_VIEWS_NUMBER = 'UPDATE_VIEWS_NUMBER';

export const setDateFilter = () => {
  return {
    type: FILTER_DATE,
  }
}

export const setPopularFilter = () => {
  return {
    type: FILTER_POPULAR,
  }
}

export const setAlphabetFilter = () => {
  return {
    type: FILTER_ALPHABET,
  }
}

export const updateViewsNumberInPosts = (id) => {
  return {
    type: UPDATE_VIEWS_NUMBER,
    id: id,
  }
}

export const requestBlogPosts = () => {
  return {
    type: REQUEST_BLOG_POSTS,
  }
}

export const receiveBlogPosts = (json) => {
  return {
    type: RECEIVE_BLOG_POSTS,
    posts: json,
    receivedAt: Date.now(),
  }
}

export const fetchBlogPosts = () => {
  return (dispatch) => {
    const hostname = 'http://localhost:9000'; // window.location.origin;
    dispatch(requestBlogPosts());
    return axios.get(`${hostname}/posts`)
      .then(response => dispatch(receiveBlogPosts(response.data)))
  }
}

const shouldFetchBlogPosts = (state) => {
  const posts = state.blogPosts;
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return true; 
}

export function fetchBlogPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBlogPosts(getState())) {
      return dispatch(fetchBlogPosts());
    } else {
      return Promise.resolve()
    }
  }
}
