import { SELECT_SOURCE } from '../actions/newsAPIactions';

function selectedSource(state = 'time', action) {
  switch (action.type) {
    case SELECT_SOURCE: return action.source
    default: return state
  }
}

export default selectedSource;
