import { useState, useEffect } from 'react'
import { query, collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../fireConfig"
import ProductLayout from '../components/ProductsLayout'
import { useSelector } from 'react-redux'

const ShopFlowers = () => {
    const [flowers, setFlowers] = useState([]);
    // const displayFlowers;
    const { cartItems } = useSelector(state => state.cartReducer)
    useEffect(async () => {
        const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {
            let items = []
            flowers.forEach((flower) => {
                items.push(flower.data());
                console.log(flower.data())
            })

            setFlowers(items)
        })
        return unsub;
    }, [])

    useEffect(() => {
        // items in, the value will be. 
        // console.log("cart items", cartItems)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <div>
            <h1></h1>
            <ProductLayout products={flowers} />
        </div>
    )
}

export default ShopFlowers