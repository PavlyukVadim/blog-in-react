import React, { Component } from 'react';
import { fetchBlogPosts } from './../Blog/actions';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.hostname = 'http://localhost:9000'; //window.location.origin;
    this.updateBlogPosts = this.updateBlogPosts.bind(this);
  }

  APIAccess = {
    getPosts: () => {
      let myHeaders = new Headers({
        'Content-Type': 'json/plain',
        'X-Custom-Header': 'ProcessThisImmediately',
      });
      return fetch(`${this.hostname}/posts`, {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' 
              }).then(response => response.json())
    },
    createPost: (data) => {
      let myHeaders = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      });
      return fetch(`${this.hostname}/posts`,{
                method: 'POST', 
                headers: myHeaders,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'default',
              }).then(response => response.json())
    },
    getPostById: (id) => {
      let myHeaders = new Headers({
        'Content-Type': 'json/plain',
        'X-Custom-Header': 'ProcessThisImmediately',
      });
      return fetch(`${this.hostname}/posts/${id}`,{
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default',
              }).then(response => response.json())
    },
    updatePostById: (id, data) => {
      let myHeaders = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      });
      return fetch(`${this.hostname}/posts/${id}`,{
                method: 'PUT', 
                headers: myHeaders,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'default',
              }).then(response => response.json())
    },

    deletePostById: (id) => {
      let myHeaders = new Headers({
        'Content-Type': 'json/plain',
        'X-Custom-Header': 'ProcessThisImmediately',
      });
      return fetch(`${this.hostname}/posts/${id}`,{
                method: 'DELETE',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default', })
              .then(response => response.json())
    }
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
}

export default Admin;

Admin.contextTypes = {
  store: React.PropTypes.object.isRequired,
};
