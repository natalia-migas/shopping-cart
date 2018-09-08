import { SHOW_CART, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  isOpen: false,
  cartItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems]
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
