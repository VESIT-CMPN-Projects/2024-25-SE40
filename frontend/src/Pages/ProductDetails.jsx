import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RateProduct from "../Pages/ProductRating/RateProduct";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const ratingRef = useRef(null); // For scroll-to-rating

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const handleOrder = () => {
    const order = {
      productId: product._id,
      productName: product.name,
      price: product.price,
      date: new Date().toISOString(),
    };

    axios
      .post("http://localhost:5000/api/orders", order)
      .then(() => {
        const whatsappMessage = `Hi! I'd like to order: ${product.name} Price: ₹${product.price} Please provide further details.`;
        const encodedMsg = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://web.whatsapp.com/send?phone=918850094949&text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      })
      .catch((err) => {
        alert("Order failed");
        console.error(err);
      });
  };

  const handleRateClick = () => {
    ratingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return Math.round(sum / ratings.length);
  };

  if (!product) return <div>Loading...</div>;

  const averageRating = getAverageRating(product.ratings);

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-price">₹{product.price}</p>

          <div className="button-group">
            <button className="btn order-btn" onClick={handleOrder}>
              Order Now
            </button>
          </div>

          <div className="average-rating mt-4">
            <h5>Average Rating:</h5>
            <div>
              {[...Array(averageRating)].map((_, i) => (
                <span key={i} style={{ color: "#ffc107", fontSize: "20px" }}>
                  ★
                </span>
              ))}
              {[...Array(5 - averageRating)].map((_, i) => (
                <span key={i} style={{ color: "#ccc", fontSize: "20px" }}>
                  ★
                </span>
              ))}
              <span style={{ marginLeft: "8px" }}>
                ({product.ratings.length} rating
                {product.ratings.length !== 1 ? "s" : ""})
              </span>
            </div>
          </div>

          <div className="rating-section mt-4" ref={ratingRef}>
            <h5>Rate this product:</h5>
            <RateProduct productId={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
