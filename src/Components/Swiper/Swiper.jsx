import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Swiper.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Images
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import yarnimage1 from "../Assets/yarnimage1.png";
import yarnimage2 from "../Assets/yarnimage2.png"
import yarnimage3 from "../Assets/yarnimage3.png"


const ThreeDSwiper = () => {
  const swiperRef = useRef(null); // Ref for Swiper

  return (
    <Swiper
      ref={swiperRef}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
    >
      {[image1, image2, yarnimage1, yarnimage2, yarnimage3].map((image, index) => (
        <SwiperSlide key={index} onClick={(e) => {
          const clickedIndex = [...e.target.closest('.swiper-wrapper').children].indexOf(e.target.closest('.swiper-slide'));
          swiperRef.current.slideToLoop(clickedIndex);
        }}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ThreeDSwiper;
