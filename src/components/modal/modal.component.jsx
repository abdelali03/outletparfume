import React from "react";
import Modal from "react-modal";
import "./modal.style.scss";

Modal.setAppElement("#root");

const UserInfoModal = ({
  isOpen,
  onRequestClose,
  formData,
  handleChange,
  handleSubmit,
  handleWhatsapp,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="User Information"
    className="user-info-modal"
    overlayClassName="user-info-modal-overlay"
  >
    <h2>Enter Your Information</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Location Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  </Modal>
);

export default UserInfoModal;
