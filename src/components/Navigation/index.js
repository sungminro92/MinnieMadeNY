import { Link } from 'react-router-dom'
// import { AiOutlineUser } from 'react-icons/'
import { BiCart, BiUserCircle, BiMenu } from 'react-icons/bi'
import { IconContext } from "react-icons";
import './style.css'
const Navigation = ({ handleShowMenu }) => {
    return (
        <div className="">
            <nav className="nav-container max-width flex-container">
                <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
                    <div className="menu-icon" onClick={() => handleShowMenu()}>
                        <BiMenu size={35} />
                    </div>
                    <div>
                        <p className="logotype">MinnieMadeNY</p>
                    </div>

                    <div>
                        <Link to="/register">
                            <BiUserCircle size={35} />
                        </Link>
                        <Link to="/cart"><BiCart size={35} /></Link>
                    </div>
                </IconContext.Provider>
            </nav>
            <div className="sub-nav-conatiner flex-container">
                <Link to="/">Home</Link>
                <Link to="/wire-flowers">Flowers</Link>
                <Link to="/wire-wall-decors">Wall Decors</Link>
                <Link to="/wire-arts-accessories">Arts & Accessories</Link>
                <Link to="/cart">Cart</Link>

            </div>
        </div>
    )
}

export default Navigation