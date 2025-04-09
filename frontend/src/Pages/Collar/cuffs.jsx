import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cuffsImage from "../../Components/Assets/man.png";

const Cuffs = () => {
  const navigate = useNavigate();

  const cuffsItems = [
    { id: 1, title: "Standard Cuffs" },
    { id: 2, title: "Custom Cuffs" },
  ];

  return (
    <div className="cuffs-page">
      <h1>Cuffs</h1>
      <p>
        Discover our premium cuffs, crafted for durability, style, and a perfect
        fit.
      </p>

      {/* Hero Section */}
      <section className="cuffs-hero">
        <img src={cuffsImage} alt="Cuffs" className="cuffs-hero-image" />
        <div className="cuffs-hero-text">
          <h2>Why Choose Our Cuffs?</h2>
          <p>
            <span>✔ High-quality ribbed and knitted fabric</span>
            <span>✔ Customizable designs and colors</span>
            <span>✔ Perfect blend of comfort and durability</span>
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <Container className="cards-container">
        <Row>
          {cuffsItems.map((item) => (
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
                    item.title === "Custom Cuffs"
                      ? "/customize-cuffs"
                      : "/products/category/cuff"
                  )
                }
              >
                <Card.Img variant="top" src={cuffsImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Premium cuffs designed with comfort and elegance.
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

export default Cuffs;
