import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostCards from './components/PostCards';
import { fetchBlogPosts, deletePostById } from './../Blog/actions';

/*class Admin extends Component {
  constructor(props) {
    super(props);
    this.hostname = 'http://localhost:9000'; //window.location.origin;
    this.updateBlogPosts = this.updateBlogPosts.bind(this);
  }

  APIAccess = {
    getPosts: () => {
      return axios.get(`${this.hostname}/posts`)
        .then(response => response.data);
    },
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
    deletePostById: (id) => {
      return axios.delete(`${this.hostname}/posts/${id}`)
        .then(response => response.data);
    },
  };

  updateBlogPosts() {
    this.context.store.dispatch(fetchBlogPosts());
  }

  render() {
    return (
      <div>
        {React.cloneElement(
          this.props.children, 
          {
            APIAccess: this.APIAccess,
            updateBlogPosts: this.updateBlogPosts,
          }
        )}
      </div>
    );
  }
}*/

const mapStateToProps = (state) => {
  const notEmptyPosts = state.blogPosts.posts.items.filter((item) => item !== null);
  notEmptyPosts.forEach((post) => post.link = `posts/${post.id}`);
  return {
    news: notEmptyPosts,
    type: 'blog',
    isFetching: state.blogPosts.posts.isFetching,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(fetchBlogPosts());
    },
    deletePostById: () => {
      dispatch(deletePostById());
    },
  }
};

const Admin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCards);

export default Admin;

Admin.contextTypes = {
  store: React.PropTypes.object.isRequired,
};
