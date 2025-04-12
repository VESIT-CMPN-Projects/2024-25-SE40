import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductListPage = () => {
  const { category } = useParams(); // only category like 'cuff', 'rib', 'collar'
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/category/${category}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

  return (
    <Container className="cards-container mt-4">
      <h2 className="mb-4">
        {typeof category === "string"
          ? category.charAt(0).toUpperCase() + category.slice(1) + " Collection"
          : "Loading..."}
      </h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Card className="custom-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <p>₹{product.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      };
    </Container>
  );
};

export default ProductListPage;
