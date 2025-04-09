import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ribsImage from "../../Components/Assets/man.png";

const Ribs = () => {
  const navigate = useNavigate();

  const ribsItems = [
    { id: 1, title: "Standard Ribs" },
    { id: 2, title: "Custom Ribs" },
  ];

  return (
    <div className="ribs-page">
      <h1>Ribs</h1>
      <p>
        Discover our high-quality ribs, designed for durability and comfort in
        various styles.
      </p>

      {/* Hero Section */}
      <section className="ribs-hero">
        <img src={ribsImage} alt="Rib Fabric" className="ribs-hero-image" />
        <div className="ribs-hero-text">
          <h2>Why Choose Our Ribs?</h2>
          <p>
            <span>✔ Superior elasticity & durability</span>
            <span>✔ Available in various colors & textures</span>
            <span>✔ Soft, stretchable, and breathable material</span>
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <Container className="cards-container">
        <Row>
          {ribsItems.map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="card-column"
            >
              <Card
                className="custom-card clickable-card"
                onClick={() =>
                  navigate(
                    item.title === "Custom Ribs"
                      ? "/customize-ribs"
                      : "/products/category/rib"
                  )
                }
              >
                <Card.Img variant="top" src={ribsImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Soft and durable ribbing for any garment.
                  </Card.Text>
                  <div className="details-button">View Details</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Ribs;
