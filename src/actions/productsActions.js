import { SORT_PRICES_ASC, SORT_PRICES_DESC } from './types';

export const sortPrices = sortType => {
  return {
    type: sortType === 'asc' ? SORT_PRICES_ASC : SORT_PRICES_DESC,
    payload: sortType
  };
};
