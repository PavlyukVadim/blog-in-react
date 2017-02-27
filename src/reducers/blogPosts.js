import { REQUEST_BLOG_POSTS,
         RECEIVE_BLOG_POSTS,
         UPDATE_VIEWS_NUMBER } from '../actions/blogAPIactions';


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
        case UPDATE_VIEWS_NUMBER:
            let newState = Object.assign({}, state);
            newState.posts.items.forEach((post) => { 
                if(post.id == action.id) post.views++;
            });
            return newState    
        default: return state
    }
}

export default blogPosts;