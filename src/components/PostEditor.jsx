import React, { Component } from 'react';

import './PostEditor.scss';


class PostEditor extends Component {
  

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let postParams = {
			title: this.titleInput.value
		};

		//var data = new FormData();
		this.props.APIAccess.createPost(postParams)
	}


	render() {
		return (
			<div className="post-editor">
			    <form onSubmit={this.handleSubmit}>
			        <input type="text" placeholder="Title"
			         ref={(input) => { this.titleInput = input; }}/>
			        <div className="edit-area">
				        <div className="editable" contentEditable="true"></div>
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
