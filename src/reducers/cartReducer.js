import { SHOW_CART } from '../actions/types';

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
