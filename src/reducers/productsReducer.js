import { SORT_PRICES_ASC, SORT_PRICES_DESC } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRICES_ASC:
      return {
        ...state,
        products: [
          ...state.products.sort((a, b) => {
            return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
          })
        ]
      };
    case SORT_PRICES_DESC:
      return {
        ...state,
        products: [
          ...state.products.sort((a, b) => {
            return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
          })
        ]
      };
    default:
      return state;
  }
};
