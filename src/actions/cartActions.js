import { SHOW_CART, ADD_ITEM, DELETE_ITEM } from './types';

export const showCart = () => {
  return { type: SHOW_CART };
};

export const addItem = product => {
  return {
    type: ADD_ITEM,
    payload: product
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
