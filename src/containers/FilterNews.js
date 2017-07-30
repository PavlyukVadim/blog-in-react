import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions/newsAPIactions.js';
import NewFilters from '../components/Filters/NewFilters';

const mapStateToProps = (state) => {
  return { 
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (e) => {
      let source = e.target.id;
      dispatch(fetchPostsIfNeeded(source));
    }
  }
}

const FilterNews = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFilters)

export default FilterNews;
