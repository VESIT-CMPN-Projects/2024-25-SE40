import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonial.css";

const CardSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <Swiper
        modules={[Navigation]}
        key={testimonials.length}
        navigation={true}
        slidesPerView={3}
        spaceBetween={20}
        loop={testimonials.length>3}
        breakpoints={{
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
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
