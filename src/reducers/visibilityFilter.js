const visibilityFilter = (state = 'FILTER_DATE', action) => {

  switch (action.type) {
    case 'FILTER_DATE': return 'FILTER_DATE';
    case 'FILTER_POPULAR': return 'FILTER_POPULAR';
    case 'FILTER_ALPHABET': return 'FILTER_ALPHABET';
    default: return state
  }
  
}

export default visibilityFilter;