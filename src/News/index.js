import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from './actions';
import NewsPage from './components/NewsPage';

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
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (e) => {
      let source = e.target.id;
      dispatch(fetchPostsIfNeeded(source));
    }
  }
};

const News = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsPage);

export default News;
