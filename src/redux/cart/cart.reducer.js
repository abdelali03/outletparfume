import { addItemToCart } from "./cart.utils";
import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    case cartActionTypes.ADD_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.name === action.payload.name) {
            return { ...item, quantity: (item.quantity || 0) + 1 };
          }
          return item;
        }),
      };
    case cartActionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.name === action.payload.name) {
            const newQuantity = (item.quantity || 1) - 1;
            return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
