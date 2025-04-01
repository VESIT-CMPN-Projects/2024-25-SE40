import React from "react";
import "./Products.css"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import collarImage from "../../Components/Assets/man.png";  

const Collar = () => {
    return (
        <>
        <h1>Collars</h1>
        <p>Explore our high-quality, durable, and stylish collars designed for all needs.</p>
        <div className="collar-page">
            <section className="collar-hero">
                <img src={collarImage} alt="Collar" className="collar-hero-image" />
                <div className="collar-hero-text">
                <h2>Why Choose Our Collars?</h2>
                <p>Our collars are made from premium fabrics, ensuring comfort and durability.</p>
                <ul>
                    <li>High-quality stitching</li>
                    <li>Customizable colors & sizes</li>
                    <li>Soft yet strong material</li>
                </ul>
                </div>
            </section>
        </div>

        {/* Cards Section */}
        <Container className="cards-container">
            <Row>
                {["Collars", "Customized Collars", "Cuffs", "Ribs", "Collars", "Customized Collars", "Cuffs", "Ribs"].map((title, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="card-column">
                        <Card className="custom-card">
                            <Card.Img variant="top" src={collarImage} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
};

export default Collar;
