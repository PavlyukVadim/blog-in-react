import React, { Component } from 'react';

import './NewsPage.scss';

class NewsPage extends Component {

	constructor(props) {
    	super(props);
    	this.state = {};
  	}
	
	componentDidMount(){
		this.props.getPostById(this.props.postId)
    		.then(json => this.setState(json) );
	}


    render() {
        return (
             <div className="NewsPage">
		      	<div>
					<p className="title">{ this.state.title }</p>
					<div>
						<div className="bg-wrap"></div>
						<img src={ this.state.image } alt="news"></img>
						<p className="stats">
							<span className="views">
								<i className="fa fa-eye"></i>
								<span className="n-views">{ this.state.views }</span>
							</span>	
							<time dateTime={ this.state.date }>{ this.state.date }</time>
						</p>
					</div>
		      		<p className="news-desc" dangerouslySetInnerHTML={{__html: this.state.describe}}></p>
		      	</div>
	      	</div>
        );
    }
}

export default NewsPage;