import React, { Component } from 'react';

import { fetchBlogPosts } from '../actions/blogAPIactions';

class AdminContainer extends Component {


  constructor(props) {
    super(props);
    this.updateBlogPosts = this.updateBlogPosts.bind(this);
  }
  	
  APIAccess = {
    
    getPosts : () => {
      var myHeaders = new Headers({
          "Content-Type": "json/plain",
          "X-Custom-Header": "ProcessThisImmediately",
      });


      return fetch(`http://localhost:9000/posts`,{
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' })   
              .then(response => response.json())
    },

    createPost : (data) => {
      var myHeaders = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      });

      return fetch(`http://localhost:9000/posts`,{
                method: 'POST', 
                headers: myHeaders,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'default' })   
              .then(response => response.json())
    },

    getPostById : (id) => {
      var myHeaders = new Headers({
          "Content-Type": "json/plain",
          "X-Custom-Header": "ProcessThisImmediately",
      });


      return fetch(`http://localhost:9000/posts/${id}`,{
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' })   
             .then(response => response.json())
    },

    updatePostById : (id, data) => {
      var myHeaders = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      });

      return fetch(`http://localhost:9000/posts/${id}`,{
                method: 'PUT', 
                headers: myHeaders,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'default' })   
              .then(response => response.json())
    },

    deletePostById : (id) => {
      var myHeaders = new Headers({
          "Content-Type": "json/plain",
          "X-Custom-Header": "ProcessThisImmediately",
      });


      return fetch(`http://localhost:9000/posts/${id}`,{
                method: 'DELETE',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' })   
              .then(response => response.json())
    }
  };


  updateBlogPosts() {
    this.context.store.dispatch(fetchBlogPosts());
  }

  render() {

      console.log(this.context.store);
      return (
      	 <div className="wrapper">
            { React.cloneElement(this.props.children, { APIAccess: this.APIAccess, 
                                                        updateBlogPosts: this.updateBlogPosts }) }
			   </div>
      );
  }
  
}

 
export default AdminContainer;

AdminContainer.contextTypes = {
  store: React.PropTypes.object.isRequired
};