const visibilityFilter = (state = 'FILTER_DATE', action) => {

  switch (action.type) {
    case 'FILTER_DATE': return 'FILTER_DATE';
    case 'FILTER_POPULAR': return 'FILTER_POPULAR';
    default: return state
  }
  
}

export default visibilityFilter;