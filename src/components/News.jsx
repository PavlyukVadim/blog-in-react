import React, { Component } from 'react';

import NewsContainer from './../containers/NewsContainer';

class News extends Component {

    render() {
        return (
            <div className='news'>
            	<NewsContainer/>
          	</div>
        );
    }
}

export default News;