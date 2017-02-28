import React, { Component } from 'react';
import { Link } from 'react-router';
import GeneralPreloader from './GeneralPreloader';

import './Admin.scss';



class PostElement extends Component {
	render() {
	
		this.date = new Date( this.props.post.date);		

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
							<time dateTime={ this.props.post.date }>
								{ ("0" + this.date.getDate()).slice(-2) + "/" + ("0"+(this.date.getMonth()+1)).slice(-2) + "/" +
    this.date.getFullYear() + " " }
							</time>
						</p>
						<ul className="control-panel">
							<li className="delete" 
								onClick={() => this.props.deletePostById(this.props.post.id)}>
								<Link>Delete</Link>
							</li>
							<li><Link to={"/admin/edit/" + this.props.post.id}>Edit</Link></li>
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
    		.then(json => this.setState( { posts: json.reverse() } ))
	}

	deletePostById(id) {
		this.props.APIAccess.deletePostById(id)
			.then(json => this.setState( { posts: json.reverse() } ) )
			.then(() => this.props.updateBlogPosts()); 
	}
	

    render() {
		let postElements = <GeneralPreloader />
		if ( this.state.posts ) {
			postElements = this.state.posts.map((post) => {
				if(post) { 
					return <PostElement 
						key={post.id}
						post={post}
						deletePostById={this.deletePostById}
					/>
				}
			});
		}
		

        return (
        	<div className="full-grid">
            	{postElements}
            	<Link to={"/admin/edit"} className="button-add">+</Link>
            </div> 
        );
    }
}

export default Admin;
