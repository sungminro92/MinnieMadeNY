import { useState, useEffect } from 'react'
import { FirebaseError } from "firebase/app";
import { collection, addDoc, doc, onSnapShot } from "firebase/firestore";
import { db } from '../fireConfig'
import { products } from '../products'
import { useDispatch, useSelector } from 'react-redux'
import ImageCarousel from '../components/ImageCarousel';
import './style.css'

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

    return (
        <div>
            <ImageCarousel />
            {/* <button onClick={addData} className="w-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> add data to firebase</button> */}
            <div className="homepage-section-2">
                <div>something1</div>
                <div>something2</div>
                <div>something3</div>
            </div>
            <div className="homepage-section-3"></div>
            <div className="homepage-section-4"></div>
        </div>
    )
}

export default HomePage