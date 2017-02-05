import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import selectedSource from './selectedSource';
import articlesBySource from './articles';

const blogApp = combineReducers({
	visibilityFilter,
	selectedSource,
	articlesBySource
})

export default blogApp;