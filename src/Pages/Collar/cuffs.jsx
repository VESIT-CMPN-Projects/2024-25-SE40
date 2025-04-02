import React from "react";
import "./Products.css"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cuffsImage from "../../Components/Assets/man.png";  

const Cuffs = () => {
    return (
        <>
        <h1>Cuffs</h1>
        <p>Discover our premium cuffs, crafted for durability, style, and a perfect fit.</p>
        
        <div className="cuffs-page">
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
        </div>

        {/* Cards Section */}
        <Container className="cards-container">
            <Row>
                {["Standard Cuffs", "Custom Cuffs", "Elastic Cuffs", "Premium Cuffs"].map((title, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="card-column">
                        <Card className="custom-card">
                            <Card.Img variant="top" src={cuffsImage} />
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

export default Cuffs;
