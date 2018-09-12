import {
  SHOW_CART,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_PRICE,
  DECREMENT_QTY
} from '../actions/types';

const initialState = {
  isOpen: false,
  cartItems: [],
  totalPrice: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case ADD_ITEM:
      const isAlreadyAdded = state.cartItems.find(
        product => product.id === action.payload.id
      );
      if (!isAlreadyAdded) action.payload.qty = 1;

      return {
        ...state,
        cartItems: !isAlreadyAdded
          ? [action.payload, ...state.cartItems]
          : state.cartItems.map(
              item =>
                item.id === action.payload.id
                  ? { ...item, qty: ++item.qty }
                  : item
            )
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case DECREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(
          item =>
            item.id === action.payload.id ? { ...item, qty: --item.qty } : item
        )
      };
    case UPDATE_PRICE:
      return {
        ...state,
        totalPrice: state.cartItems
          .reduce((acc, val) => acc + val.qty * val.price, 0)
          .toFixed(2)
      };
    default:
      return state;
  }
};
