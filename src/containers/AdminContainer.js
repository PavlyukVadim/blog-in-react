import React, { Component } from 'react';

import Admin from '../components/Admin.jsx';


class AdminContainer extends Component {

	
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


  }


	/*getPostById = (id) => {
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
	};*/

  



    render() {
        return (
        	 <div>
    			   <Admin APIAccess={this.APIAccess}/>
  			   </div>
        );
    }
}


export default AdminContainer;