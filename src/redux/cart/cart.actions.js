// cart.actions.js
import { cartActionTypes } from "./cart.types"; // Use curly braces for named exports

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const addQuantity = (item) => ({
  type: cartActionTypes.ADD_QUANTITY,
  payload: item,
});
export const subtractQuantity = (item) => ({
  type: cartActionTypes.REDUCE_QUANTITY,
  payload: item,
});
