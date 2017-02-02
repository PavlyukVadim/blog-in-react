const FILTER_DATE = 'FILTER_DATE';
const FILTER_POPULAR = 'FILTER_POPULAR';


export const setDateFilter = () => {
  return {
    type: FILTER_DATE
  }
}

export const setPopularFilter = () => {
  return {
    type: FILTER_POPULAR
  }
}

