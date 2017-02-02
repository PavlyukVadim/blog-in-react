import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';

const blogApp = combineReducers({
	visibilityFilter
})

export default blogApp;