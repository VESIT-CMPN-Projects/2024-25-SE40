import React, { useState } from "react";
import "./Order.css";

const Order = () => {
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
      alert("Please upload an image and enter estimated cost before proceeding.");
      return;
    }

    const phoneNumber = "918850094949";
    const message = `Hello! I want to customize a collar.\nEstimated Cost: ₹${cost}\n\nI have uploaded the design image. Please find it in the chat.`;
    const encodedMessage = encodeURIComponent(message);

    if (window.innerWidth > 768) {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, "_blank");
      alert("WhatsApp Web will open now. Please remember to manually upload your design image in the chat.");
    } else {
      alert("Please use a desktop to place custom collar orders via WhatsApp Web.");
    }
  };

  return (
    <div className="custom-collar-page">
      <div className="customized-card">
        <h2>Customized Order</h2>
        <p className="description">Upload your design, set an estimated cost, and send it to us via WhatsApp!</p>

        <div className="form-group">
          <label>Upload Collar Design</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {preview && (
          <div className="preview-section">
            <p>Image Preview:</p>
            <img src={preview} alt="Preview" className="image-preview" />
          </div>
        )}

        <div className="form-group">
          <label>Estimated Cost (₹)</label>
          <input
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <button className="send-button" onClick={sendWhatsAppMessage}>
          Send to WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Order;
