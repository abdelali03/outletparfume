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
  const pdfRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

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
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Erste Seite
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Weitere Seiten, falls nötig
      while (heightLeft > 0) {
        position = position - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("order-summary.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, address, phone } = formData;
    if (!fullName || !email || !address || !phone) {
      alert("Bitte alle Felder ausfüllen.");
      return;
    }
    generatePDF();
    setIsModalOpen(false);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produkte</span>
        </div>
        <div className="header-block">
          <span>Beschreibung</span>
        </div>
        <div className="header-block">
          <span>Menge</span>
        </div>
        {/* 
<div className="header-block">
  <span>Preis</span>
</div>
*/}
        <div className="header-block">
          <span>Entfernen</span>
        </div>
      </div>

      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="total">{/* <span>Gesamtsumme: ${total}</span> */}</div>

      <button className="checkout-button" onClick={handleBuyNow}>
        jetzt einkaufen & PDF erstellen
      </button>

      {isModalOpen && (
        <UserInfoModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      <div className="pdf-content" ref={pdfRef}>
        <h2 className="pdf-title">Bestellübersicht</h2>
        <p>
          <strong>Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Addresse:</strong> {formData.address}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <hr />
        <h3>Bestellte Artikel</h3>
        <table className="pdf-table">
          <thead>
            <tr>
              <th>Bild</th>
              <th>Name</th>
              <th>Menge</th>
              {/* <th>Preis</th> */}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    crossOrigin="anonymous"
                    className="pdf-img"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                {/* <td>${item.price}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <h3 className="pdf-total">Gesamtsumme: ${total}</h3> */}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
