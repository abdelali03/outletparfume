import React, { useState } from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, quantity } = item;
  const [showModal, setShowModal] = useState(false);
  const [nameExpanded, setNameExpanded] = useState(false);

  // Toast-Message
  const [notification, setNotification] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastKey, setToastKey] = useState(0); // damit Animation erneut abläuft

  const handleAddToCart = () => {
    addItem(item);
    // Text für den Toast
    setNotification(`„${name}“ wurde zum Warenkorb hinzugefügt 🛒`);
    // Sichtbar machen & Animation neu triggern
    setToastKey((k) => k + 1);
    setToastVisible(true);
    // nach 2.5s ausblenden
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => setShowModal(true)}
        />
        <div className="collection-footer">
          <span
            className={`name${nameExpanded ? " expanded" : ""}`}
            onClick={() => setNameExpanded((prev) => !prev)}
            title={nameExpanded ? "Klicken zum Kürzen" : "Klicken für mehr"}
          >
            {name}
          </span>
        </div>

        {quantity === 0 ? (
          <div className="out-of-stock">ausverkauft</div>
        ) : (
          <CustomButton onClick={handleAddToCart} inverted>
            Add to Cart
          </CustomButton>
        )}
      </div>

      {showModal && (
        <div className="image-modal" onClick={() => setShowModal(false)}>
          <img src={imageUrl} alt={name} />
        </div>
      )}

      {/* Toast-Notification (global positioniert) */}
      {notification && (
        <div
          key={toastKey}
          className={`toast-notification ${toastVisible ? "show" : ""}`}
          role="status"
          aria-live="polite"
        >
          {notification}
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
