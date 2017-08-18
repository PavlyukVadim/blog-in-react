import React, { Component } from 'react';
import PostCards from './../../../components/PostCards';
import Sidebar from './../../../components/Sidebar';
import Filters from './../../../components/Filters';

class NewsPage extends Component {
  render() {
    const {
      news,
      type,
      isFetching,
      setNews,
    } = this.props;
    return (
      <div className="row">
        <div className="col-lg-10">
          <PostCards
            news={news}
            type={type}
            isFetching={isFetching}
          />
        </div>
        <div className="col-lg-2">
          <Sidebar>
            <Filters
              news={news}
              type={type}
              isFetching={isFetching}
              setNews={setNews}
            />
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default NewsPage;
