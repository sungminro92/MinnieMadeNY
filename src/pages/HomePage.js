import { useState, useEffect } from 'react'
import { FirebaseError } from "firebase/app";
import { collection, addDoc, doc, onSnapShot } from "firebase/firestore";
import { db } from '../fireConfig'
import { products } from '../products'
import { useDispatch, useSelector } from 'react-redux'
import ImageCarousel from '../components/ImageCarousel';
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import TouchCarousel from 'react-touch-carousel';
import ReviewSlider from '../components/ReviewSlider';


const HomePage = () => {
    const [bannerImg, setBannerImg] = useState("")

    const { cartItems } = useSelector(state => state.cartReducer)
    const addData = () => {
        products.forEach(async (product) => {
            try {
                await addDoc(collection(db, "flowers"), product);
                console.log("products uploaded")
            } catch (error) {
                console.log(error)
            }
        })
    }

    // useEffect(() => {
    //     // items in, the value will be. 
    //     console.log("cart items", cartItems)
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
    // }, [cartItems])

    // CAROUSEL FOR REVIEWS
    const listOfData = [
        // your data array here
        "1",
        "2",
        "3"
    ]

    function CarouselContainer(props) {

    }



    function renderCard(index, modIndex, cursor) {
        const item = listOfData[modIndex]
        // render the item
    }



    return (
        <div>
            {/* <ImageCarousel /> */}
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                cssMode={true}
                navigation={true}
                pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.imgur.com/OgXbN8M.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/kngLdT1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.imgur.com/O8uk3Ds.jpg" /></SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
            {/* <button onClick={addData} className="w-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> add data to firebase</button> */}
            < div className="homepage-section-2" >
                <div>Handmade</div>
                <div>Unique Design</div>
                <div>Never dies</div>
            </div >
            <div className="homepage-section-3"></div>
            <div className="homepage-section-4">
                {/* <TouchCarousel
                    component={CarouselContainer}
                    cardCount={listOfData.length}
                    cardSize={375}
                    renderCard={renderCard}
                    loop
                    autoplay={3000}
                /> */}
            </div>
        </div >
    )
}

export default HomePage