import { NavLink } from 'react-router-dom'
// import { AiOutlineUser } from 'react-icons/'
import { useState } from 'react'
import { BiCart, BiUserCircle, BiMenu, BiSearch } from 'react-icons/bi'
import { IconContext } from "react-icons";

import { useSelector } from 'react-redux'

import './style.css'
const Navigation = ({ dispatch }) => {
    const { cartItems } = useSelector(state => state.cartReducer)

    const [active, setActive] = useState("")
    return (
        <div className="navigation-page">
            <div className="max-width admin-button-container">
                <NavLink to="/admin"><span className="admin-button">Go to Admin Panel</span></NavLink>
            </div>
            <nav className="max-width flex-container">
                <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
                    <div className="menu-icon nav-container flex-container" >
                        <a onClick={() => dispatch({ type: "MAIN" })}><BiMenu size={30} /></a>
                        {/* <a ><BiSearch size={30} /></a> */}
                    </div>
                    <div>
                        <p className="logotype">MinnieMadeNY</p>
                    </div>

                    <div className="nav-container flex-container">
                        <a onClick={() => dispatch({ type: "USER" })}><BiUserCircle size={30} /></a>
                        <a onClick={() => dispatch({ type: "CART" })}><BiCart size={30} /> {cartItems.length}</a>
                    </div>
                </IconContext.Provider>
            </nav>

            <div className="sub-nav-conatiner">
                <NavLink exact activeClassName="active-nav" to="/">Home</NavLink>
                <NavLink activeClassName="active-nav" to="/wire-flowers">Flowers / Leaves</NavLink>
                <NavLink activeClassName="active-nav" to="/premade-bouquets">Bouquets</NavLink>
                <NavLink activeClassName="active-nav" to="/wire-wall-decors">Wall Decors</NavLink>
                <NavLink activeClassName="active-nav" to="/wire-arts-accessories">Arts & Accessories</NavLink>
                <NavLink activeClassName="active-nav" to="/custom-order">Custom Order</NavLink>

            </div>
        </div >
    )
}

export default Navigation