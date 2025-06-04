// import React, { useState } from "react";
// import "./OrderForm.css";

// function OrderForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     image: null,
//     notes: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `New Custom Order Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nNotes: ${formData.notes}`;
//     window.open(
//       `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <form className="custom-form" onSubmit={handleSubmit}>
//       <h4>Customized Order</h4>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone Number"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="file"
//         name="image"
//         accept="image/*"
//         onChange={handleChange}
//       />
//       <textarea
//         name="notes"
//         placeholder="Measurements or Instructions"
//         onChange={handleChange}
//       ></textarea>
//       <button type="submit">Submit to WhatsApp</button>
//     </form>
//   );
// }

// export default OrderForm;
