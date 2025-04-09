import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("/api/testimonials").then((res) => setTestimonials(res.data));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="testimonial-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="p-3 shadow rounded">
            <h5>{t.name}</h5>
            <p className="text-muted">{t.designation}</p>
            <p>"{t.comment}"</p>
            <div>
              <strong>Quality:</strong> {t.experience.quality} ⭐<br />
              <strong>Service:</strong> {t.experience.service} ⭐<br />
              <strong>Communication:</strong> {t.experience.communication} ⭐
              <br />
              <strong>Punctuality:</strong> {t.experience.punctuality} ⭐
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
