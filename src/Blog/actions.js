const FILTER_DATE = 'FILTER_DATE';
const FILTER_POPULAR = 'FILTER_POPULAR';
const FILTER_ALPHABET = 'FILTER_ALPHABET';

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

export const setAlphabetFilter = () => {
  return {
    type: FILTER_ALPHABET
  }
}
