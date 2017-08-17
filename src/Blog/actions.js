import axios from 'axios';
import { hostname } from './../config';

export const REQUEST_BLOG_POSTS = 'REQUEST_BLOG_POSTS';
export const RECEIVE_BLOG_POSTS = 'RECEIVE_BLOG_POSTS';
export const UPDATE_VIEWS_NUMBER = 'UPDATE_VIEWS_NUMBER';
export const UPDATED_POST = 'UPDATED_POST';
export const FILTER_DATE = 'FILTER_DATE';
export const FILTER_POPULAR = 'FILTER_POPULAR';
export const FILTER_ALPHABET = 'FILTER_ALPHABET';

export const setDateFilter = () => {
  return {
    type: FILTER_DATE,
  };
};

export const setPopularFilter = () => {
  return {
    type: FILTER_POPULAR,
  };
};

export const setAlphabetFilter = () => {
  return {
    type: FILTER_ALPHABET,
  };
};

export const requestBlogPosts = () => {
  return {
    type: REQUEST_BLOG_POSTS,
  };
};

export const receiveNewBlogPosts = (json, actionType) => {
  return {
    type: actionType,
    posts: json,
    receivedAt: Date.now(),
  };
};

export const updatePostById = (id, data) => {
  return (dispatch) => {
    return axios.put(`${hostname}/posts/${id}`, data)
      .then(response => dispatch(receiveNewBlogPosts(response.data, UPDATED_POST)));
  };
};

export const fetchBlogPosts = () => {
  return (dispatch) => {
    dispatch(requestBlogPosts());
    return axios.get(`${hostname}/posts`)
      .then(response => dispatch(receiveNewBlogPosts(response.data, RECEIVE_BLOG_POSTS)))
  };
};

const shouldFetchBlogPosts = (state) => {
  const posts = state.blogPosts;
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return true; 
};

export const fetchBlogPostsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchBlogPosts(getState())) {
      return dispatch(fetchBlogPosts());
    } else {
      return Promise.resolve()
    }
  };
};
