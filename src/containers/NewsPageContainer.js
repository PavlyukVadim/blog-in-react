import React, { Component } from 'react';

import NewsPage from '../components/NewsPage.jsx';
import { updateViewsNumberInPosts } from '../actions/blogAPIactions';


class NewsPageContainer extends Component {

  constructor(props) {
    super(props);
    this.updateViewsNumber = this.updateViewsNumber.bind(this);
  }
	
	getPostById = (id) => {
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
	};

  updatePostById = (id, data) => {
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
    }

  updateViewsNumber(id, views) {
    this.context.store.dispatch(updateViewsNumberInPosts(id, views));
  }

    render() {
        return (
        	 <div className="grid full-grid">
    			   <NewsPage 
                postId={this.props.params.postId} 
                getPostById={this.getPostById}
                updatePostById={this.updatePostById}
                updateViewsNumber={this.updateViewsNumber}/>
  			   </div>
        );
    }
}


export default NewsPageContainer; 

NewsPageContainer.contextTypes = {
  store: React.PropTypes.object.isRequired
};