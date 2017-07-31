import React, { Component } from 'react';
import PostCards from './../../../components/PostCards';
import Sidebar from './../../../components/Sidebar';
import BlogFilters from './../../../components/Filters/BlogFilters';

class BlogPage extends Component {
  render() {
    const { 
      news,
      type,
      isFetching,
      setPopular,
      setDate,
      setAlphabet,
    } = this.props;
    return (
      <div>
        <PostCards
          news={news}
          type={type}
          isFetching={isFetching}
        />
        <Sidebar>
          <BlogFilters
            news={news}
            type={type}
            isFetching={isFetching}
            setPopular={setPopular}
            setDate={setDate}
            setAlphabet={setAlphabet}
          />
        </Sidebar>
      </div>
    );
  }
}

export default BlogPage;
