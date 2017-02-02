import { connect } from 'react-redux';
import { setDateFilter, setPopularFilter, setAlphabetFilter } from '../actions';


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
        },
        setAlphabet: () => {
            dispatch(setAlphabetFilter());
        }
    }
}


const FilterNews = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters)

export default FilterNews;