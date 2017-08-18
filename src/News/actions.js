import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';

export const selectSource = (source) => {
  return {
    source,
    type: SELECT_SOURCE,
  };
};

export const requestPosts = (source) => {
  return {
    source,
    type: REQUEST_POSTS,
  };
};

export const receivePosts = (source, json) => {
  return {
    source,
    type: RECEIVE_POSTS,
    posts: json.articles,
    receivedAt: Date.now(),
  };
};

const APIkey = 'b6928391aad342c19c8f1a90c13c4571';
export const fetchPosts = (source) => {
  return (dispatch) => {
    const link = `https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=${APIkey}`;
    dispatch(requestPosts(source));
    return axios.get(link)
      .then(response => dispatch(receivePosts(source, response.data)));
  };
};

const shouldFetchPosts = (state, source) => {
  const posts = state.news.articles[source];
  return !posts;
};

export const fetchPostsIfNeeded = (source) => {
  return (dispatch, getState) => {
    dispatch(selectSource(source));
    if (shouldFetchPosts(getState(), source)) {
      return dispatch(fetchPosts(source));
    }
    return Promise.resolve();
  };
};
