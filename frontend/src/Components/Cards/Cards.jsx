import React, { useEffect, useState } from "react";
import "./Cards.css";
import axios from "axios";

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cards-container">
      {products.map((product, idx) => (
        <div className="card" key={idx}>
          <img src={product.image} alt={product.name} />
          <div className="card-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
