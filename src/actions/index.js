const SET_FILTER = 'SET_VISIBILITY_FILTER';


export const setVisibilityFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}
