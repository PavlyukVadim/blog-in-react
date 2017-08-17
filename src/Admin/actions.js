import axios from 'axios';
import { hostname } from './../config';
import { receiveNewBlogPosts } from './../Blog/actions';

export const CREATED_POST = 'CREATED_POST';
export const DELETED_POST = 'DELETED_POST';

export const createPost = (data) => {
  return (dispatch) => {
    return axios.post(`${hostname}/posts`, data)
      .then(response => dispatch(receiveNewBlogPosts(response.data, CREATED_POST)));
  };
};

export const deletePostById = (id) => {
  return (dispatch) => {
    return axios.delete(`${hostname}/posts/${id}`)
      .then(response => dispatch(receiveNewBlogPosts(response.data, DELETED_POST)));
  };
};
