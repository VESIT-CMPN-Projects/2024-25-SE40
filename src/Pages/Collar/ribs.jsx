import React from "react";
import "./Products.css"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ribsImage from "../../Components/Assets/man.png";  

const Ribs = () => {
    return (
        <>
        <h1>Ribs</h1>
        <p>Discover our high-quality ribs, designed for durability and comfort in various styles.</p>
        
        <div className="ribs-page">
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
        </div>

        {/* Cards Section */}
        <Container className="cards-container">
            <Row>
                {["Standard Ribs", "Custom Ribs", "Elastic Ribs", "Heavy-Duty Ribs"].map((title, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="card-column">
                        <Card className="custom-card">
                            <Card.Img variant="top" src={ribsImage} />
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

export default Ribs;
