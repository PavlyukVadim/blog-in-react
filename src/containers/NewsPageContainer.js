import React, { Component } from 'react';

import NewsPage from '../components/NewsPage.jsx';


class NewsPageContainer extends Component {




    render() {
        return (
        	<div>
    			<NewsPage postId={this.props.params.postId}/>
  			</div>
        );
    }
}


export default NewsPageContainer;