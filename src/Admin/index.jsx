import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostCards from './components/PostCards';
import {
  deleteBlogPostById,
  createPost,
} from './actions';
import { fetchBlogPostsIfNeeded } from './../Blog/actions';

/*
  APIAccess = {
    createPost: (data) => {
      return axios.post(`${this.hostname}/posts`, data)
        .then(response => response.data);
    },
    getPostById: (id) => {
      return axios.get(`${this.hostname}/posts/${id}`)
        .then(response => response.data);
    },
    updatePostById: (id, data) => {
      return axios.put(`${this.hostname}/posts/${id}`, data)
        .then(response => response.data);
    },
  };

  updateBlogPosts() {
    this.context.store.dispatch(fetchBlogPosts());
  }
}*/

const mapStateToProps = (state) => {
  const notEmptyPosts = state.blog.posts.items.filter((item) => item !== null);
  notEmptyPosts.forEach((post) => post.link = `posts/${post.id}`);
  return {
    posts: notEmptyPosts,
    type: 'blog',
    isFetching: state.blog.posts.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchBlogPostsIfNeeded()),
    createPost: (data) => dispatch(createPost(data)),
    deletePostById: (id) => dispatch(deleteBlogPostById(id)),
  };
};

const Admin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCards);

export default Admin;

Admin.contextTypes = {
  store: React.PropTypes.object.isRequired,
};
