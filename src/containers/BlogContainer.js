import { connect } from 'react-redux';
import NewsContent from '../components/NewsContent';

const sortByDate = (a, b) => b.date - a.date;
const sortByPopular = (a, b) => b.views - a.views;
const sortByAlphabet = (a, b) => a.title.localeCompare(b.title);
const getSortedNews = (sortBy, NEWS) => {
  switch (sortBy) {
    case 'FILTER_DATE': return [].concat(NEWS.sort(sortByDate));
    case 'FILTER_POPULAR': return [].concat(NEWS.sort(sortByPopular));
    case 'FILTER_ALPHABET': return [].concat(NEWS.sort(sortByAlphabet));
    default: return NEWS.sort(sortByDate);
  }
}

const mapStateToProps = (state) => {
  const notEmptyPosts = state.blogPosts.posts.items.filter((item) => item !== null);
  notEmptyPosts.forEach((post) => post.link = `posts/${post.id}`);

  return {
    news: getSortedNews(state.visibilityFilter, notEmptyPosts),
    type: 'blog',
    isFetching: state.blogPosts.posts.isFetching,
  }
}

const BlogContainer = connect(
  mapStateToProps
)(NewsContent)

export default BlogContainer;
