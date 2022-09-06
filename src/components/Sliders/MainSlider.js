
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import './mainSlider.css'

const MainSlider = () => {
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                className="main-Swiper"
            >
                <SwiperSlide className="main-slide"><img src="https://i.imgur.com/OgXbN8M.jpg" /></SwiperSlide>
                <SwiperSlide className="main-slide"><img src="https://i.imgur.com/kngLdT1.jpg" /></SwiperSlide>
                <SwiperSlide className="main-slide"><img src="https://i.imgur.com/O8uk3Ds.jpg" /></SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    )

}

export default MainSlider