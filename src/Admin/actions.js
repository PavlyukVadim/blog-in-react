import { receiveNewBlogPosts } from './../Blog/actions';
import axios from 'axios';

export const CREATED_POST = 'CREATED_POST';
export const DELETED_POST = 'DELETED_POST';

export const createPost = (data) => {
  return (dispatch) => {
    const hostname = 'http://localhost:9000'; // window.location.origin;
    return axios.post(`${hostname}/posts`, data)
      .then(response => dispatch(receiveNewBlogPosts(response.data, CREATED_POST)));
  };
};

export const deletePostById = (id) => {
  return (dispatch) => {
    const hostname = 'http://localhost:9000'; // window.location.origin;
    return axios.delete(`${hostname}/posts/${id}`)
      .then(response => dispatch(receiveNewBlogPosts(response.data, DELETED_POST)));
  };
};
