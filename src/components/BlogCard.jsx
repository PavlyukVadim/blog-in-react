import React, { Component } from 'react';
import './NewsCard.scss';

class BlogCard extends Component {
	
  	render() {

	    return (
		    <div className="card-wrapper gitem-lg-3 gitem-md-4 gitem-sm-6">
		      	<div className="news-card">
					<p className="mob-cart-title">{ this.props.info.title }</p>
					<div className="img-part">
						<div className="bg-wrap"></div>
						<img src={ this.props.info.image } alt="news"></img>
						<p className="stats">
							<span className="views">
								<i className="fa fa-eye"></i>
								<span className="n-views">{ this.props.info.views }</span>
							</span>	
							
							<time dateTime={ this.props.info.date }>{ this.props.info.date }</time>
						</p>
					</div>
		      		<p className="cart-title">{ this.props.info.title }</p>
		      		<p className="short-cart-desc">{ this.props.info.describe }</p>
		      	</div>
	      	</div>
	    );
	}

}

export default BlogCard;
