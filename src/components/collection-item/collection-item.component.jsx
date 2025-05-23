import React from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, quantity } = item; // Ensure `quantity` is part of the item object.

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      {quantity === 0 ? (
        <div className="out-of-stock">Out of Stock</div> // Display "Out of Stock" if quantity is 0.
      ) : (
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to Cart
        </CustomButton>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
