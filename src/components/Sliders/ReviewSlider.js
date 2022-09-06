import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./reviewSlider.css";
import reviews from "./reviews";
// import required modules
import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from "swiper";
const ReviewSlider = () => {

    const reviewSllides = reviews.map((r, i) => {

        // let bg = {
        //     backgroundImage: `url(${r.image})`
        // }
        if (r.image) {
            return (
                <SwiperSlide className="review-slide" >
                    <p>{r.review}</p>
                    <p>{r.name}, {r.date}</p>
                    <div className="shade"></div>
                    <img src={r.image} />
                </SwiperSlide >
            )
        }
    })


    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                mousewheel={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
                className="reviewSlider max-width"
            >
                {/* <SwiperSlide className="review-slide">
                    <p>ALEXA</p>
                    <p>"</p>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
                {reviewSllides}
            </Swiper>
        </>
    );

}

export default ReviewSlider