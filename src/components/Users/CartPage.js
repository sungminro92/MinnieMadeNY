import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import Cart from './Cart'
import './style.css'

const CartPage = ({ dispatch, show }) => {
    const [items, setItems] = useState([{
        title: "something",
        description: "this is description",
        price: 15,
    },
    {
        title: "this is something",
        description: "something description",
        price: 10,
    }])
    return (
        <>
            <div id={show ? "main-user" : ""} onClick={() => dispatch({ type: "CART" })} ></div>
            <div id="user-container" className={show ? "show" : ""}>
                <div className="header">
                    <div className="cursor-pointer close-button" onClick={() => dispatch({ type: "CART" })}>
                        <GrClose size={28} />
                    </div>
                    <div><h3>Your bag</h3></div>
                    <div>items</div>
                </div>
                <div>
                    <Cart />
                </div>
            </div >

        </>
    )
}

export default CartPage

