import React, { Component } from 'react';
import axios from 'axios';
import PostPage from './../components/PostPage';
import { updateViewsNumberInPosts } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.hostname = 'http://localhost:9000'; // window.location.origin;
    this.updateViewsNumber = this.updateViewsNumber.bind(this);
  }

  getPostById = (id) => {
    return axios.get(`${this.hostname}/posts/${id}`)
      .then(response => response.data);
  };

  updatePostById = (id, data) => {
    return axios.put(`${this.hostname}/posts/${id}`, data)
      .then(response => response.data);
  };

  updateViewsNumber(id) {
    this.context.store.dispatch(updateViewsNumberInPosts(id));
  }

  render() {
    return (
      <div className="row">
        <PostPage
          postId={this.props.params.postId} 
          getPostById={this.getPostById}
          updatePostById={this.updatePostById}
          updateViewsNumber={this.updateViewsNumber}
        />
      </div>
    );
  }
}

export default Post; 

Post.contextTypes = {
  store: React.PropTypes.object.isRequired,
};
