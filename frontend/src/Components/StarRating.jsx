import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StarRating.css";

function StarRating({ productId, isTestimonial = false }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/ratings/${productId}?type=${
          isTestimonial ? "testimonial" : "product"
        }`
      )
      .then((res) => setAvgRating(res.data.average))
      .catch((err) => console.error(err));
  }, [productId]);

  const submitRating = () => {
    axios
      .post("http://localhost:5000/api/ratings", {
        productId,
        rating,
        type: isTestimonial ? "testimonial" : "product",
      })
      .then(() => {
        alert("Thanks for your rating!");
        window.location.reload();
      });
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          </label>
        );
      })}
      <button className="btn btn-sm btn-warning mt-2" onClick={submitRating}>
        Submit
      </button>
      <p>Average Rating: {avgRating.toFixed(1)} ★</p>
    </div>
  );
}

export default StarRating;
