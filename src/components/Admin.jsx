import React, { Component } from 'react';
import { Link } from 'react-router';

import './Admin.scss';



class PostElement extends Component {
	render() {

		return (
			<div className="admin-posts">
		      	<div>
					<p className="title">{ this.props.post.title }</p>
					<div>
						<div className="bg-wrap"></div>
						<p className="stats">
							<span className="views">
								<i className="fa fa-eye"></i>
								<span className="n-views">{ this.props.post.views }</span>
							</span>	
							<time dateTime={ this.props.post.date }>{ this.props.post.date }</time>
						</p>
						<ul className="control-panel">
							<li className="delete" 
								onClick={() => this.props.deletePostById(this.props.post.id)}>
								<Link>Delete</Link>
							</li>
							<li><Link to="/">Edit</Link></li>
							<li><Link to={"/posts/" + this.props.post.id}>View</Link></li>
						</ul>
					</div>
		      	</div>
          	</div>
		);
    }	
}


class Admin extends Component {

	
	constructor(props) {
    	super(props);
    	this.state = {};
    	this.deletePostById = this.deletePostById.bind(this);
  	}

	componentDidMount() {
		this.props.APIAccess.getPosts()
    		.then(json => this.setState( { posts: json.reverse() } ) );
	}

	deletePostById(id) {
		this.props.APIAccess.deletePostById(id)
			.then(json => this.setState( { posts: json.reverse() } ) );	
	}
	

    render() {
		console.log(this.state);
		let postElements = "" 
		if ( this.state.posts ) {
			postElements = this.state.posts.map((post) =>
				<PostElement 
					key={post.id}
					post={post}
					deletePostById={this.deletePostById}
				/>
			);
		}
		
        return (
        	<div>
            	{postElements}
            </div> 
        );
    }
}

export default Admin;
