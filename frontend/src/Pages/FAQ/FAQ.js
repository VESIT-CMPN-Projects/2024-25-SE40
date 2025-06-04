import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7 days of delivery. Products must be unused and in original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we do offer discounts on bulk orders. Please contact us directly for custom pricing.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you’ll receive an email with a tracking link.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
