import React, { Component } from 'react';
import PostCards from './../../../components/PostCards';
import Sidebar from './../../../components/Sidebar';
import NewsFilters from './../../../components/Filters/NewFilters';

class NewsPage extends Component {
  render() {
    const { 
      news,
      type,
      isFetching,
      setNews,
    } = this.props;
    return (
      <div>
        <PostCards
          news={news}
          type={type}
          isFetching={isFetching}
        />
        <Sidebar>
          <NewsFilters
            news={news}
            type={type}
            isFetching={isFetching}
            setNews={setNews}
          />
        </Sidebar>
      </div>
    );
  }
}

export default NewsPage;
