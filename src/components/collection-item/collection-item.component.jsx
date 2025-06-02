import React, { useState } from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, quantity } = item;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          onClick={() => setShowModal(true)}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
        </div>
        {quantity === 0 ? (
          <div className="out-of-stock">ausverkauft</div>
        ) : (
          <CustomButton onClick={() => addItem(item)} inverted>
            Add to Cart
          </CustomButton>
        )}
      </div>
      {showModal && (
        <div className="image-modal" onClick={() => setShowModal(false)}>
          <img src={imageUrl} alt={name} />
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
