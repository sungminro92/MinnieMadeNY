import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GrClose } from 'react-icons/gr'
import CartItem from './CartItem'
import './style.css'
import { useSelector } from 'react-redux'

const CartPage = ({ func, show }) => {
    const { cartItems } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    // const [items, setItems] = useState([{
    //     title: "something",
    //     description: "this is description",
    //     price: 15,
    // },
    // {
    //     title: "this is something",
    //     description: "something description",
    //     price: 10,
    // }])
    // console.log("cart items", cartItems)

    const deleteCartItem = (product) => {
        dispatch({ type: "DELETE_FROM_CART", value: product })
        console.log(product)
    }

    return (
        <>
            <div id={show ? "main-user" : ""} onClick={() => func({ type: "CART" })} ></div>
            <div className={show ? "user-container show" : "user-container"}>
                <div className="header">
                    <div className="cursor-pointer close-button" onClick={() => func({ type: "CART" })}>
                        <GrClose size={28} />
                    </div>
                    <div><h3>Your bag</h3></div>
                    <div>{cartItems.length} {cartItems.length > 1 ? "items" : "item"}</div>
                </div>
                <div className="cart-items-container">
                    {cartItems && cartItems.map((item, index) => { return <CartItem key={index} index={index} product={item} deleteCartItem={deleteCartItem} /> })}
                </div>
            </div >

        </>
    )
}

export default CartPage

