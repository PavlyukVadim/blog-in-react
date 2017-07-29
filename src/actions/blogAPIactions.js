import fetch from 'isomorphic-fetch';

export const REQUEST_BLOG_POSTS = 'REQUEST_BLOG_POSTS';
export const RECEIVE_BLOG_POSTS = 'RECEIVE_BLOG_POSTS';
export const UPDATE_VIEWS_NUMBER = 'UPDATE_VIEWS_NUMBER';

export function updateViewsNumberInPosts(id) {
  return {
    type: UPDATE_VIEWS_NUMBER,
    id: id,
  }
}

export function requestBlogPosts() {
  return {
    type: REQUEST_BLOG_POSTS,
  }
}

export function receiveBlogPosts(json) {
  return {
    type: RECEIVE_BLOG_POSTS,
    posts: json,
    receivedAt: Date.now(),
  }
}

export function fetchBlogPosts() {
  return function (dispatch) {
    dispatch(requestBlogPosts());
    let hostname = window.location.origin;
    let myHeaders = new Headers({
      'Content-Type': 'json/plain',
      'X-Custom-Header': 'ProcessThisImmediately',
    });
    return fetch(`${hostname}/posts`, {
          method: 'GET',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default' 
        })
      .then(response => response.json())
      .then(json => dispatch( receiveBlogPosts(json)))
  }
}

function shouldFetchBlogPosts(state) {
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
