import { connect } from 'react-redux';
import { setDateFilter, setPopularFilter} from '../actions';


import Filters from '../components/Filters';



const mapStateToProps = (state) => {
    return { state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPopular: () => {
            dispatch(setPopularFilter());
        },
        setDate: () => {
            dispatch(setDateFilter());
        }
    }
}


const FilterNews = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters)

export default FilterNews;