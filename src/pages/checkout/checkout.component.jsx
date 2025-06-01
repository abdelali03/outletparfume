import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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

  // Ref for the section to be included in the PDF
  const pdfRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  // Function to generate the PDF with product images
  const generatePDF = async () => {
    try {
      const element = pdfRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        windowWidth: 794,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("order-summary.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, address, phone } = formData;
    if (!fullName || !email || !address || !phone) {
      alert("Please fill in all the fields.");
      return;
    }
    // Perform additional actions here (e.g., save the order)
    generatePDF();
    setIsModalOpen(false);
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
      {/* Button to open the order and PDF form */}
      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now & Generate PDF
      </button>

      {/* Modal for user data */}
      {isModalOpen && (
        <UserInfoModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Hidden section to be included in the PDF */}
      <div
        className="pdf-content"
        ref={pdfRef}
        style={{
          width: "794px",
          padding: "20px",
          background: "#fff",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          color: "#333",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Order Summary
        </h2>
        <p>
          <strong>Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <hr />
        <h3 style={{ marginBottom: "10px" }}>Ordered Items</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Image
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Name
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "10px" }}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    crossOrigin="anonymous"
                    style={{
                      width: "80px", // Larger image size
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "5px", // Rounded corners for images
                    }}
                  />
                </td>
                <td style={{ padding: "10px" }}>{item.name}</td>
                <td style={{ padding: "10px" }}>{item.quantity}</td>
                <td style={{ padding: "10px" }}>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          Total: ${total}
        </h3>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
