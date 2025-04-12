import React from "react";
import "./order.css";
import { useNavigate } from "react-router-dom";
import customCollar1 from "../../Components/Assets/man.png";

const designs = [
  {
    id: 1,
    title: "Royal Blue Embroidered",
    image: customCollar1,
  },
  {
    id: 2,
    title: "Classic White Stitch",
    image: customCollar1,
  },
  {
    id: 3,
    title: "Trendy Striped Design",
    image: customCollar1,
  },
];

const CustomizedCollar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="customized-collar-page">
      <header className="custom-header">
        <h1>Customized Collars</h1>
        <p>Design your own or choose from our exclusive collection.</p>
      </header>

    

      <section className="design-gallery">
        <h2>Some of Our Custom Designs</h2>
        <div className="design-grid">
          {designs.map((design) => (
            <div key={design.id} className="design-card">
              <img src={design.image} alt={design.title} />
              <h3>{design.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="custom-order-section">
        <div className="custom-order-box">
          <h2>Create Your Own Collar</h2>
          <p>Have a design in mind? Submit your custom request now!</p>
          <button onClick={() => navigate("/order")}>
            Place Custom Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomizedCollar2;
