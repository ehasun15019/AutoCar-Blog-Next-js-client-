"use client";

import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCardDesign from "../Design/TestimonialCardDesign";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-10 bg-secondary my-5">
      <div className="text-center">
        <h3 className="text-3xl opacity-40 font-bold text-white">
          Testimonial
        </h3>
      </div>

      <div className="mt-9">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1} // mobile default
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 0.85,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {review.map((item, index) => (
            <SwiperSlide key={item._id}>
              <TestimonialCardDesign
                user_photoURL={item.user_photoURL}
                userName={item.userName}
                ratings={item.ratings}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
