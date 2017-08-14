import axios from 'axios';

export const CREATED_POST = 'CREATED_POST';
export const DELETED_POST = 'DELETED_POST';

const createdPost = (json) => {
  return {
    type: DELETED_POST,
    posts: json,
    receivedAt: Date.now(),
  };
};

const deletedPost = (json) => {
  return {
    type: DELETED_POST,
    posts: json,
    receivedAt: Date.now(),
  };
};

export const createPost = (data) => {
  return (dispatch) => {
    const hostname = 'http://localhost:9000'; // window.location.origin;
    return axios.post(`${this.hostname}/posts`, data)
      .then(response => dispatch(createdPost(response.data)));
  };
};

export const deletePostById = (id) => {
  return (dispatch) => {
    const hostname = 'http://localhost:9000'; // window.location.origin;
    return axios.delete(`${hostname}/posts/${id}`)
      .then(response => dispatch(deletedPost(response.data)))
  };
};
