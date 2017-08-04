import React, { Component } from 'react';
import PostCards from './../../../components/PostCards';
import Sidebar from './../../../components/Sidebar';
import Filters from './../../../components/Filters';

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
      <div className="grid">
        <div className="gitem-lg-10">
          <PostCards
            news={news}
            type={type}
            isFetching={isFetching}
          />
        </div>
        <div className="gitem-lg-2">
          <Sidebar>
            <Filters
              news={news}
              type={type}
              isFetching={isFetching}
              setPopular={setPopular}
              setDate={setDate}
              setAlphabet={setAlphabet}
            />
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default BlogPage;
