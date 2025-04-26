import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import emailjs from "emailjs-com";
import "./checkout.style.scss";

import UserInfoModal from "../../components/modal/modal.component";

const CheckoutPage = ({ cartItems, total }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, address, phone } = formData;

    if (!fullName || !email || !address || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const templateParams = {
        fullName,
        email,
        address,
        phone,
        cartItems: cartItems
          .map(
            (item) =>
              `Name: ${item.name}\nPrice: $${item.price}\nQuantity: ${item.quantity}\n`
          )
          .join("\n"),
        total,
      };

      await emailjs.send(
        "service_m12x4mk", // Replace with your EmailJS service ID
        "template_n4oz1yr", // Replace with your EmailJS template ID
        templateParams,
        "ns6JbVYoWW0Ue_wKh" // Replace with your EmailJS public key
      );

      alert("Order placed successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an issue with your order. Please try again.");
    }
  };

  const handleWhatsapp = () => {
    const message = `New order received:
    Name: ${formData.fullName}
    Email: ${formData.email}
    Address: ${formData.address}
    Phone: ${formData.phone}
    Total: ${total}
    Cart Items: ${cartItems
      .map((item) => `${item.name} x ${item.quantity}`)
      .join(", ")}`;

    const phoneNumber = "32465941899"; // Correct format: without "+" and spaces
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>

      <UserInfoModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleWhatsapp={handleWhatsapp}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
