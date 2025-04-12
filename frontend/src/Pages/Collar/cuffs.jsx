import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import collarImage from "../../Components/Assets/man.png";

const Cuffs = () => {
  const navigate = useNavigate();

  const collarItems = [
    {
      id: 1,
      title: "Standard Collars",
      text: "Classic designs for everyday wear.",
      route: "/products/category/cuffs",
    },
    
  ];

  return (
    <div className="collar-page">
      {/* Hero Section */}
      <section className="collar-hero-modern">
        <div className="hero-overlay">
          <h1>Collars That Define Your Style</h1>
          <p>
            Discover our collection of finely crafted collars — comfort, durability, and style in one.
          </p>
        </div>
        <img src={collarImage} alt="Collar model" className="hero-image" />
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2>Why Choose Our Collars?</h2>
        <div className="features-grid">
          <div className="feature-box">High-quality stitching</div>
          <div className="feature-box">Customizable colors & sizes</div>
          <div className="feature-box">Soft yet strong material</div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="collar-products">
        <h2>Our Collar Types</h2>
        <div className="product-card-container">
          {collarItems.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => navigate(item.route)}
            >
              <img src={collarImage} alt={item.title} />
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="custom-order-section">
        <div className="custom-order-box">
          <h2>Create Your Own Collar</h2>
          <p>Have a design in mind? Submit your custom request now!</p>
          <button onClick={() => navigate("/order")}>
            Place Custom Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cuffs;
