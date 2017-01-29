import React, { Component } from 'react';

import NewsCard from './NewsCard.jsx';
import './grid.scss';

class NewsContent extends Component {
  render() {
    return (
    	<div className="grid">
	     	<NewsCard></NewsCard>
	        <NewsCard></NewsCard>
	        <NewsCard></NewsCard>
	        <NewsCard></NewsCard>
        </div>
    );
  }
}

export default NewsContent;
