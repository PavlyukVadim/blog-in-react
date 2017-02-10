import React, { Component } from 'react';

import BlogCard from './BlogCard.jsx';
import NewsCard from './NewsCard.jsx';

import './grid.css';


class NewsContent extends Component {

	render() {
		let cards;

		if (this.props.type === 'blog') {
			cards = this.props.news.map((news) => {
				return <BlogCard key={news.id} info={news} />
			});	
		} else if (this.props.type === 'news') {
			cards = this.props.news.map((news) => {
				return <NewsCard key={news.id} info={news} />
			});
		}
		

		return (
			<div className="grid">
				{ cards }
		    </div>
		);
  	}
}

export default NewsContent;
