import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostPage from './../components/PostPage';
import {
  fetchBlogPostsIfNeeded,
  updatePostById,
} from './../actions';

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
    updatePostById: (id, data) => dispatch(updatePostById(id, data)),
  };
};

const Post = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage);

export default Post;

Post.contextTypes = {
  store: React.PropTypes.object.isRequired,
};
