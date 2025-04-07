import React from "react";
import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import call from './Assets2/company.jpeg';


const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>Balaji Knittwell is a leading Sourcing Partner to various premium brands all over the world. Founded in early 2000, located in Mumbai, Our Chairman Suresh Nayak shares a passion for knitting and a desire to create high quality knitted goods. We take pride in using only the finest materials and the most skilled craftspeople to create our products. At Balaji Knittwell we believe that knitting is not just a hobby but a true art form that has the power to bring people together and comfort to those who wear our products.</p>
        </div>
      </section>

      {/* About Us Content */}
      <Container className="about-content">
        <Row>
          <Col md={6}>
            <img src={call} alt="Our Team" className="about-image" />
          </Col>
          <Col md={6} className="about-text">
            <h2>Who We Are</h2>
            <p>
              With years of experience in fabric craftsmanship, we specialize in manufacturing top-quality collars, cuffs, and ribs. 
              Our mission is to blend durability, comfort, and elegance into every piece we create.
            </p>
            <p>
              Our skilled artisans and designers work closely to deliver innovative designs that meet the latest fashion trends. 
              Customer satisfaction and quality assurance are at the heart of our brand.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Vision & Mission */}
      <Container className="vision-mission">
        <Row>
          <Col md={6} className="vision">
            <h3>Our Vision</h3>
            <p>To revolutionize the textile industry with sustainable and stylish fabric accessories.</p>
          </Col>
          <Col md={6} className="mission">
            <h3>Our Mission</h3>
            <p>To provide high-quality, customizable, and eco-friendly products that enhance every garment.</p>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <Row className="justify-content-center">
          <Col md={5} className="team-member">
            <div className="team-card">
              <img src={call} alt="Team Member" />
              <h4>SureshChandra Nayak</h4>
              <p>Founder & CEO</p>
            </div>
          </Col>
          <Col md={5} className="team-member">
            <div className="team-card">
              <img src={call} alt="Team Member" />
              <h4>Jyoti Nayak Bishoi</h4>
              <p>Marketing and Sales Manager</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutUs;
