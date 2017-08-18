import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from './actions';
import NewsPage from './components/NewsPage';

const mapStateToProps = (state) => {
  const newsSource = state.news.source;
  const news = state.news.articles[newsSource].items.map((item, index) => {
    return {
      id: index,
      title: item.title,
      describe: item.description,
      image: item.urlToImage,
      link: item.url,
    };
  });
  return {
    news,
    type: 'news',
    isFetching: state.news.articles[newsSource].isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (e) => {
      const source = e.target.id;
      dispatch(fetchPostsIfNeeded(source));
    },
  };
};

const News = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsPage);

export default News;
