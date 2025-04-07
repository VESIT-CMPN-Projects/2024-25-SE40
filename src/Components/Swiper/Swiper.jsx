import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Swiper.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Videos
import video1 from "../Assets/video1.mp4";
import video2 from "../Assets/video1.mp4";
import video3 from "../Assets/video1.mp4";

const ThreeDSwiper = () => {
  const swiperRef = useRef(null);

  const videos = [video1, video2, video3];

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
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {videos.map((videoSrc, index) => (
        <SwiperSlide key={index} onClick={() => swiperRef.current.slideTo(index)}>
          <video className="swiper-slide-video" controls autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ThreeDSwiper;
