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
        const unsub = onSnapshot(collection(db, "flowers"), (flowerData) => {
            // console.log(flowers);
            let items = [];
            // flowers.data();
            if (flowerData) {
                flowerData.forEach((flower) => {
                    // console.log("flower data", flower.data())
                    items.push(flower.data());
                })
            } else {
                return
            }
            setFlowers(items)
        })
        return unsub;
    }, [])

    useEffect(() => {
        // items in, the value will be. 
        // console.log("cart items", cartItems)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    console.log("flowers are", flowers)
    return (
        <div>
            <h1>Shop Individual Stems</h1>
            <ProductLayout products={flowers} />
        </div>
    )
}

export default ShopFlowers