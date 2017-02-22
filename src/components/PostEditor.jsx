import React, { Component } from 'react';

import './PostEditor.scss';


class PostEditor extends Component {
  

	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	componentDidMount(){
		if ( this.props.params.postId ) {
			this.updateMode = true;

			this.props.APIAccess.getPostById( this.props.params.postId )
			.then(json => this.setState(json) );
		}
	}

	handleTitleChange(e) {
		let state = Object.assign(this.state, {title: e.target.value});
		this.setState(state);
	}

	handleSubmit(e) {
		e.preventDefault();

		let postParams = {
			title: this.state.title,
			describe: this.textInput.textContent,
			image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/cobol.png'
		};

		console.log(postParams)

		if (!this.updateMode) {
			this.props.APIAccess.createPost(postParams)
				.then(() => this.props.updateBlogPosts()); 	
		}

		else {
			this.props.APIAccess.updatePostById(this.props.params.postId, postParams)
				.then(() => this.props.updateBlogPosts()); 
		}
		
	}


	render() {
		return (
			<div className="post-editor">
			    <form onSubmit={this.handleSubmit}>
			        <input type="text" placeholder="Title" 
			         value={this.state.title || ''}
			         onChange={this.handleTitleChange} />
			        <div className="edit-area">
				        <div className="editable"
				          contentEditable="true"
				          placeholder="Enter text here..."
				          suppressContentEditableWarning={true}
				          ref={(input) => { this.textInput = input; }}>
				          {this.state.describe}
				        </div>
				        <div className="edit-toolbar">
				        	<button className="h1">h1</button>
							<button className="bold">b</button>
				        </div>
				        <input type="submit" value="Submit" />
			        </div>
			    </form>
			</div>
		);
	}

}

export default PostEditor;
