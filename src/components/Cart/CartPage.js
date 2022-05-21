import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import CartItem from './CartItem'
import './style.css'
import { useSelector } from 'react-redux'

const CartPage = ({ dispatch, show }) => {
    const { cartItems } = useSelector(state => state.cartReducer)

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

    return (
        <>
            <div id={show ? "main-user" : ""} onClick={() => dispatch({ type: "CART" })} ></div>
            <div id="user-container" className={show ? "show" : ""}>
                <div className="header">
                    <div className="cursor-pointer close-button" onClick={() => dispatch({ type: "CART" })}>
                        <GrClose size={28} />
                    </div>
                    <div><h3>Your bag</h3></div>
                    <div>{cartItems.length} {cartItems.length > 1 ? "items" : "item"}</div>
                </div>
                <div>
                    {cartItems && cartItems.map((item) => { return <CartItem product={item} /> })}
                </div>
            </div >

        </>
    )
}

export default CartPage
