import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonial.css";
import testimonial1 from "../Assets/testimonial1.png";
import testimonial2 from "../Assets/testimonial2.jpg";
import testimonial3 from "../Assets/testimonial3.png";




const testimonials = [
  {
    name: "Rajat Mehta",
    role: "Garment Manufacturer",
    image: testimonial1,  // ✅ Corrected
    quote: "Seamless experience and top-quality collars! Balaji Knittwell's craftsmanship is outstanding. The collars are durable, well-stitched, and meet all our custom requirements. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    role: "Fashion Brand Owner",
    image: testimonial2,
    quote: "Reliable supplier with excellent customer service! We’ve been sourcing collars from Balaji Knittwell for over a year now. The consistency in quality and timely delivery makes them our preferred supplier.",
  },
  {
    name: "Arjun Bansal",
    role: "Textile Supplier",
    image: testimonial3,
    quote: "Great collaboration with top-notch materials!Their partnership with Reliance ensures high-quality yarn, resulting in superior fabric strength. Our clients love the finish of the collars!",
  },
  {
    name: "Maya Singh",
    role: "Boutique Owner",
    image: testimonial1,
    quote: "Professional team with innovative solutions!They understood our needs perfectly and delivered customized designs that fit our brand vision. The website makes it so easy to browse and place orders!",
  },
  {
    name: "Ajay Verma",
    role: "Wholesale dealer",
    image: testimonial2,
    quote: "Efficient process and competitive pricing!Balaji Knittwell provides high-quality collars at great prices. Their negotiation flexibility and customer-first approach are commendable.",
  },
];

const CardSlider = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 cards on medium screens
          480: { slidesPerView: 1 }, // Show 1 card on small screens
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
              <q>{testimonial.quote}</q>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardSlider;
