import React from "react";
import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import founderimg from "./Assets2/SureshNayak.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us-page">

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay">
          <h1>Who We Are</h1>
          <p>Manufacturers Suppliers Innovators</p>
        </div>
      </section>

      {/* Behind the Success Section */}
      <Container className="success-section">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="highlight-title">Behind the success</h2>
            <p>
              Established in 2000, Balaji Knittwell began with a vision and passion for excellence in knitted goods. 
              Based in Mumbai, under the leadership of Chairman Suresh Nayak, we’ve become a trusted sourcing partner 
              for premium brands around the world. Our dedication to quality, innovation, and people defines who we are today.
            </p>
          </Col>
          <Col md={6} className="founder-profile text-center">
            <img src={founderimg} alt="Founder" className="founder-image" />
            <h4>SureshChandra Nayak</h4>
            <p>Founder & CEO</p>
          </Col>
        </Row>
      </Container>

      {/* Our Vision & Mission */}
      <Container className="vision-mission-section">
        <Row>
          <Col md={6}>
            <h3>Our Vision</h3>
            <p>
              To revolutionize the textile industry with sustainable and stylish fabric accessories.
            </p>
          </Col>
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              To provide high-quality, customizable, and eco-friendly products that enhance every garment.
            </p>
          </Col>
        </Row>
      </Container>


    </div>
  );
};

export default AboutUs;
