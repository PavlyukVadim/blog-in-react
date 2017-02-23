import { connect } from 'react-redux';
import NewsContent from '../components/NewsContent';



const mapStateToProps = (state) => {
  return {
    news: state.articlesBySource[state.selectedSource].items.map((item, index) => { 
        return {
            id: index,
            title: item.title,
            describe: item.description,
            image: item.urlToImage,
            link: item.url
        }  
    }),
    type: 'news',
    isFetching: state.articlesBySource[state.selectedSource].isFetching
  }
}


const NewsContainer = connect(
    mapStateToProps
)(NewsContent)

export default NewsContainer;