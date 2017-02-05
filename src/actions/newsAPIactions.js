import fetch from 'isomorphic-fetch';


export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';



export function selectSource(source) {
	return {
		type: SELECT_SOURCE,
		source
	}
}

export function requestPosts(source) {
	return {
		type: REQUEST_POSTS,
		source
	}
}


export function receivePosts(source, json) {
	return {
		type: RECEIVE_POSTS,
		source,
		posts: json.articles,
		receivedAt: Date.now()
	}
}

// API key b6928391aad342c19c8f1a90c13c4571

export function fetchPosts(source) {
	return function (dispatch) {
    	dispatch(requestPosts(source));

    	return fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=b6928391aad342c19c8f1a90c13c4571`)
      	.then(response => response.json())
      	.then(json => dispatch( receivePosts(source, json)) )
  	}
}

function shouldFetchPosts(state, source) {
	const posts = state.articlesBySource[source];
	if (!posts) {
		return true;
	} else if (posts.isFetching) {
		return false;
	} 
}

export function fetchPostsIfNeeded(source) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

	return (dispatch, getState) => {
		if (shouldFetchPosts(getState(), source)) {
			return dispatch(fetchPosts(source));
		} else {
			return Promise.resolve()
		}
	}
}