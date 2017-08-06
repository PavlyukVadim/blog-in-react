import React, { Component } from 'react';
import PostPage from './../components/PostPage';
import { updateViewsNumberInPosts } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.hostname = 'http://localhost:9000'; // window.location.origin;
    this.updateViewsNumber = this.updateViewsNumber.bind(this);
  }

	getPostById = (id) => {
		let myHeaders = new Headers({
	    'Content-Type': 'json/plain',
	    'X-Custom-Header': 'ProcessThisImmediately',
		});
		
    return fetch(`${this.hostname}/posts/${id}`, {
          method: 'GET',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default',
        }
      ).then(response => response.json())
	};

  updatePostById = (id, data) => {
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    return fetch(`${this.hostname}/posts/${id}`, {
          method: 'PUT', 
          headers: myHeaders,
          body: JSON.stringify(data),
          mode: 'cors',
          cache: 'default',
        }
      ).then(response => response.json())
    }

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
