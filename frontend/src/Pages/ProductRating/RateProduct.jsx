import React, { useState } from "react";
import axios from "axios";

const RateProduct = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const submitRating = async () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/products/${productId}/rate`, {
        rating,
      });
      alert("Thank you! Your rating was submitted successfully.");
      setRating(0); // reset stars
    } catch (err) {
      alert("Failed to submit rating.");
      console.error("Rating failed", err);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= (hover || rating) ? "on" : "off"}`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: starValue <= (hover || rating) ? "#ffc107" : "#ccc",
            }}
          >
            ★
          </span>
        );
      })}
      <button className="submit-rating-btn" onClick={submitRating}>
        Submit
      </button>
    </div>
  );
};

export default RateProduct;
