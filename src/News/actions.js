import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';

export const selectSource = (source) => {
  return {
    type: SELECT_SOURCE,
    source,
  }
}

export const requestPosts = (source) => {
  return {
    type: REQUEST_POSTS,
    source,
  }
}

export const receivePosts = (source, json) => {
  return {
    type: RECEIVE_POSTS,
    source,
    posts: json.articles,
    receivedAt: Date.now(),
  }
}

const APIkey = 'b6928391aad342c19c8f1a90c13c4571';
export const fetchPosts = (source) => {
  return (dispatch) => {
    dispatch(requestPosts(source));
    const link = `https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=${APIkey}`;
    return fetch(link)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(source, json)))
  }
}

const shouldFetchPosts = (state, source) => {
  const posts = state.articlesBySource[source];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
}

export const fetchPostsIfNeeded = (source) => {
  return (dispatch, getState) => {
    dispatch(selectSource(source));
    if (shouldFetchPosts(getState(), source)) {
      return dispatch(fetchPosts(source));
    } else {
      return Promise.resolve()
    }
  }
}
