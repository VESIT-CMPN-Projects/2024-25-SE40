import React, { useState } from "react";
import "./Products.css";

const CustomizedRibs = () => {
  const [cost, setCost] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const sendWhatsAppMessage = () => {
    if (!cost || !image) {
      alert(
        "Please upload an image and enter estimated cost before proceeding."
      );
      return;
    }

    const phoneNumber = "918850094949";
    const message = `Hello! I want to customize a rib.\nEstimated Cost: ₹${cost}\n\nI've uploaded the design image. Please check.`;
    const encodedMessage = encodeURIComponent(message);
    if (window.innerWidth > 768) {
      // Likely desktop
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
        "_blank"
      );
      alert(
        "WhatsApp Web will open now. Please remember to manually upload your design image in the chat."
      );

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
    } else {
      alert(
        "Please use a desktop to place custom collar orders via WhatsApp Web."
      );
    }
  };

  return (
    <div className="collar-page">
      <h1>Customized Rib Order</h1>
      <p>
        Upload your rib design, enter estimated cost, and we’ll get in touch!
      </p>

      <div className="collar-hero">
        <div className="collar-hero-text">
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Upload Rib Design:
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {preview && (
            <div>
              <p style={{ marginTop: "15px", fontWeight: "bold" }}>
                Image Preview:
              </p>
              <img src={preview} alt="Preview" className="image-preview" />
            </div>
          )}

          <label
            style={{ display: "block", marginTop: "20px", fontWeight: "bold" }}
          >
            Estimated Cost (₹):
          </label>
          <input
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            style={{
              padding: "8px",
              width: "100%",
              marginTop: "5px",
              marginBottom: "20px",
            }}
          />

          <button className="details-button" onClick={sendWhatsAppMessage}>
            Send to WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizedRibs;
