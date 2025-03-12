import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const images = [
  require("./assets/slider1.jpg"),
  require("./assets/slider2.jpg"),
  require("./assets/slider3.jpg"),
];

const Slider = () => {
  return (
    <div id="slider" className="w-full max-w-5xl mx-auto my-10 px-4 pt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        className="rounded-xl shadow-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">
                  Slide {index + 1}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
