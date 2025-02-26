"use client";
import React from "react";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

const VerticalSlider = () => {
  return (
    <div className="slider">
      <div className="btn-slider">
        <button className="button-prev">
          <ChevronLeft />
        </button>
        <button className="button-next">
          <ChevronRight />
        </button>
      </div>
      <SwiperContainer
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".button-prev",
          prevEl: ".button-next",
        }}
        modules={[Autoplay, Navigation]}
        className="h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item-slider">
              <div className="item">
                <img src="./ico_c_particles.svg" alt="" />
                <div className="item-title">Tailored Links</div>
                <div className="item-description">
                  Create targeted short links to meet your marketing goals.
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default VerticalSlider;
