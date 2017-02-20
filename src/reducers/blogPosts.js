import { REQUEST_BLOG_POSTS, RECEIVE_BLOG_POSTS } from '../actions/blogAPIactions';


function posts(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_BLOG_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_BLOG_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default: return state;
    }
}

function blogPosts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BLOG_POSTS:
        case REQUEST_BLOG_POSTS:
            return Object.assign({}, state, {
              ['posts']: posts(state['blogPosts'], action)
            })
        default: return state
    }
}

export default blogPosts;