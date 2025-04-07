import React from "react";
import { useParams } from "react-router-dom"; 
import "./collardetails.css";
import collarImage from "../../Components/Assets/man.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CollarDetails = () => {
    const { id } = useParams(); // Dynamic ID from URL
    console.log("Collar ID:", id);  // Debugging

    return (
        <div className="collar-details-page">
            <div className="collar-header">
                <img src={collarImage} alt="Collar" className="collar-main-image" />
                <div className="collar-info">
                    <h1>Premium Collar #{id}</h1>
                    <h3>$19.99</h3>
                    <p>Crafted with high-quality material, this collar offers both comfort and style.</p>
                    <div className="buttons">
                        <Button variant="primary">Buy Now</Button>
                        <Button variant="outline-secondary">Add to Cart</Button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="collar-features">
                <h2>Why Choose This Collar?</h2>
                <div className="feature-box">
                    <span>✅ High-quality stitching</span>
                    <span>✅ Soft yet durable fabric</span>
                    <span>✅ Adjustable sizes</span>
                    <span>✅ Stylish & long-lasting</span>
                </div>
            </div>

            {/* Product Card */}
            <div className="collar-card-container">
                <Card className="custom-card">
                    <Card.Img variant="top" src={collarImage} />
                    <Card.Body>
                        <Card.Title>Premium Collar #{id}</Card.Title>
                        <Card.Text>Best-selling collar with a modern look.</Card.Text>
                        <Button variant="success">Order Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CollarDetails;
