import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Products.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import collarImage from "../../Components/Assets/man.png";

const Collar = () => {
  const navigate = useNavigate(); // ✅ Hook initialization

  const collarItems = [
    { id: 1, title: "Standard Collars" },
    { id: 2, title: "Customized Collars" },
  ];

  return (
    <div className="collar-page">
      <h1>Collars</h1>
      <p>
        Explore our high-quality, durable, and stylish collars designed for all
        needs.
      </p>

      {/* Hero Section */}
      <section className="collar-hero">
        <img src={collarImage} alt="Collar" className="collar-hero-image" />
        <div className="collar-hero-text">
          <h2>Why Choose Our Collars?</h2>
          <p>
            Our collars are made from premium fabrics, ensuring comfort and
            durability.
          </p>
          <ul>
            <li>High-quality stitching</li>
            <li>Customizable colors & sizes</li>
            <li>Soft yet strong material</li>
          </ul>
        </div>
      </section>

      {/* Cards Section */}
      <Container className="cards-container">
        <Row>
          {collarItems.map((item) => (
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
                    item.title === "Customized Collars"
                      ? "/customized-collar"
                      : "/products/category/collar"
                  )
                }
              >
                <Card.Img variant="top" src={collarImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>High-quality and stylish design.</Card.Text>
                  <div className="details-button">View Details</div>{" "}
                  {/* looks like a button */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Collar;
