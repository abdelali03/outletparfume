import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addQuantity,
  subtractQuantity,
}) => {
  // const { name, imageUrl, price, quantity } = cartItem;
  const { name, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            if (quantity > 1) {
              subtractQuantity(cartItem);
            } else {
              removeItem(cartItem);
            }
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={() => addQuantity(cartItem)}>
          &#10095;
        </div>
      </span>

      {/* <div className="price">{price}</div> */}
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addQuantity: (item) => dispatch(addQuantity(item)),
  subtractQuantity: (item) => dispatch(subtractQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
