import { SET_SORT_TYPE } from './types';

export const sortPrices = sortType => {
  const sortFilter = [];
  sortFilter[0] = 'price';
  sortFilter[1] = sortType;

  return {
    type: SET_SORT_TYPE,
    payload: sortFilter
  };
};
