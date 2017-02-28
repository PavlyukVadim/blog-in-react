import React, { Component } from 'react';
import './PostEditor.scss';


class PostEditor extends Component {
  

	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
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

	handleTextChange(e) {
		let state = Object.assign(this.state, {describe: e.target.value});
		this.setState(state);
	}


	handleSubmit(e) {
		e.preventDefault();

		let postParams = {
			title: this.state.title,
			describe: this.textInput.textContent,
			image: 'http://mustaqbilpakistan.pk/img/img.png',
			views: this.state.views,
			date: this.state.date
		};

		if (!this.updateMode) {
			this.props.APIAccess.createPost(postParams)
				.then(() => this.props.updateBlogPosts())
				.then(() => alert('Post sent !!!'))
				.then(() => this.context.router.push("/admin")); 
		}

		else {
			this.props.APIAccess.updatePostById(this.props.params.postId, postParams)
				.then(() => this.props.updateBlogPosts())
				.then(() => alert('Post sent !!!'))
				.then(() => this.context.router.push("/admin")); 	
		}
		
	}


	render() {
		return (
			<div className="post-editor">
			    <form onSubmit={this.handleSubmit}>
				    <div className="form-group">
				      <input type="text" 
				      	required="required" 
				      	value={this.state.title || ''}
			         	onChange={this.handleTitleChange}/>
				      <label className="control-label" htmlFor="input">Title</label><i className="bar"></i>
				    </div>
				    <div className="form-group">
				      <textarea required="required"
				      	ref={(input) => { this.textInput = input; }}
		        		value={this.state.describe}
		        		onChange={this.handleTextChange}></textarea>
				      <label className="control-label" htmlFor="textarea">Text</label><i className="bar"></i>
				    </div>
				    <div className="checkbox">
				      <label>
				        <input type="checkbox"/><i className="helper"></i>Update date
				      </label>
				    </div>
				    <div className="button-container">
    					<button className="button" type="submit"><span>Submit</span>
    				</button> 
    				</div>
				</form>

			</div>
		);
	}

}

PostEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PostEditor;