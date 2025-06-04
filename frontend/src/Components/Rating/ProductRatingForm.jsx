import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Alert } from "react-bootstrap";

const ProductRatingForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const submitRating = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/products/${productId}/rate`, {
        rating,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <Form onSubmit={submitRating} className="mb-3">
      <Form.Group controlId="rating">
        <Form.Label>Rate this product (1 to 5):</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>Select rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? "s" : ""}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Submit Rating
      </Button>
      {message && (
        <Alert variant="info" className="mt-2">
          {message}
        </Alert>
      )}
    </Form>
  );
};

export default ProductRatingForm;
