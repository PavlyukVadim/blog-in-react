import { connect } from 'react-redux';
import PostCards from '../components/PostCards';

const mapStateToProps = (state) => {
  return {
    news: state.articlesBySource[state.selectedSource].items.map((item, index) => { 
      return {
        id: index,
        title: item.title,
        describe: item.description,
        image: item.urlToImage,
        link: item.url,
      }  
    }),
    type: 'news',
    isFetching: state.articlesBySource[state.selectedSource].isFetching,
  }
}

const NewsContainer = connect(
  mapStateToProps,
)(PostCards);

export default NewsContainer;
