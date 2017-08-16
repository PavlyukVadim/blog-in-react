import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostCards from './components/PostCards';
import {
  createPost,
  deletePostById,
} from './actions';
import { fetchBlogPostsIfNeeded } from './../Blog/actions';

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
    deletePostById: (id) => dispatch(deletePostById(id)),
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
