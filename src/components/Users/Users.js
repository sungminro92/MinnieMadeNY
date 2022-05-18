import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import Login from './Login'
import Register from './Register'
import CartPage from './CartPage'
import './style.css'

const Users = ({ dispatch, show, type }) => {
    const [login, setLogin] = useState("LOGIN");

    function handleClick(value) {
        console.log(value)
        setLogin(value)
    }

    function showCart() {
        if (type === "CART") {
            return
        }
    }

    return (
        <>
            {type === "CART" ? <CartPage /> : <><div id={show ? "main-user" : ""} onClick={() => dispatch({ type: "USER" })} >
            </div >
                <div id="user-container" className={show ? "show" : ""}>

                    <div className="cursor-pointer" onClick={() => dispatch({ type: "USER" })}>
                        <GrClose size={28} />
                    </div>
                    <div>
                        {login == "LOGIN" ? <Login handleClick={handleClick} /> : <Register handleClick={handleClick} />}
                    </div>
                </div >)</>}

        </>
    )
}

export default Users