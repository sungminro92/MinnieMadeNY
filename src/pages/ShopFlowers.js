import { useState, useEffect } from 'react'
import { query, collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../fireConfig"
import ProductLayout from '../components/ProductsLayout'

const ShopFlowers = () => {
    const [flowers, setFlowers] = useState([]);
    // const displayFlowers;
    useEffect(async () => {
        const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {
            let items = []
            flowers.forEach((flower) => {
                items.push(flower.data());
                console.log(flower.data())
            })

            setFlowers(items)
        })
        // const q = onSnapsho(collection(db, "flowers"));
        // const flowers = await onSnapshot(collection(db, "flowers"));
        // setProducts
    }, [])

    // console.log("state", flowers)
    // let displayFlowers;
    // if (flowers) {
    //     displayFlowers = flowers.map((flower, index) => {
    //         return <ProductLayout key={index} flower={flower} />
    //     })
    // }

    return (
        <div>
            <h1>Shop Wire Flowers</h1>
            <ProductLayout products={flowers} />
        </div>
    )
}

export default ShopFlowers