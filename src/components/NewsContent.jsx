import React, { Component } from 'react';

import NewsCard from './NewsCard.jsx';
import './grid.scss';


class NewsContent extends Component {

	render() {
		let news = this.props.news.map((news) => {
			return <NewsCard key={news.id} info={news} />
		});

		return (
			<div className="grid">
				{ news }
		    </div>
		);
  	}
}

export default NewsContent;
