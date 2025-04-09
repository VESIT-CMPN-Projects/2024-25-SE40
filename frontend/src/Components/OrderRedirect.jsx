import React from "react";

const OrderRedirect = ({ productName }) => {
  const phoneNumber = "919876543210";
  const message = `Hi, I am interested in ordering ${productName}.`;

  const handleOrder = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="btn btn-success mt-3" onClick={handleOrder}>
      Place Order via WhatsApp
    </button>
  );
};

export default OrderRedirect;
