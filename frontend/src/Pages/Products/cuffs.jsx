import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cuffs= () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch collar products directly in this page
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/category/cuff")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="collar-page">
      {/* Hero Section */}
      <section className="collar-hero-modern">
        <div className="hero-overlay">
          <h1>Cuffs That Define Your Style</h1>
          <p>
            Discover our collection of finely crafted cuffs — comfort, durability, and style in one.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2>Why Choose Our Cuffs?</h2>
        <div className="features-grid">
          <div className="feature-box">High-quality stitching</div>
          <div className="feature-box">Customizable colors & sizes</div>
          <div className="feature-box">Soft yet strong material</div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="collar-products">
        <h2>Our Cuff Collection</h2>
        <Container className="collar-cards-container">
          <Row>
            {products.map((product) => (
              <Col key={product._id}>
                <Card className="custom-collar-card ">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <p>₹{product.price}</p>
                    <button
                      className="view-button"
                      onClick={() => navigate(`/product/${product._id}`)}
                    >
                      View Details
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Custom Order Section */}
      <section className="custom-order-section">
        <div className="custom-order-box">
          <h2>Create Your Own Collar</h2>
          <p>Have a design in mind? Submit your custom request now!</p>
          <button onClick={() => navigate("/order")}>Place Custom Order</button>
        </div>
      </section>
    </div>
  );
};

export default Cuffs;
