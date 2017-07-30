import React, { Component } from 'react';
import GeneralPreloader from '../GeneralPreloader';
import BlogCard from '../BlogCard';
import NewsCard from '../NewsCard';
//import './grid.css';

class NewsContent extends Component {
  render() {
    let cards;
    if (this.props.isFetching) {
      cards = <GeneralPreloader />
    } else if (this.props.type === 'blog') {
      cards = this.props.news.map((news) => {
        return (
          <BlogCard
            key={news.id}
            info={news}
          />
        );
      });	
    } else if (this.props.type === 'news') {
      cards = this.props.news.map((news) => {
        return (
          <NewsCard
            key={news.id}
            info={news}
          />
        );
      });
    }

    return (
      <div className="grid">
        {cards}
      </div>
    );
  }
}

export default NewsContent;