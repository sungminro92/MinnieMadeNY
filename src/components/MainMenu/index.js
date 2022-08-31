import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './style.css'

const MainMenu = ({ func, show }) => {
    return (
        <>
            <div id={show ? "main-menu" : ""} onClick={() => func({ type: "MAIN" })} >
            </div >
            <div id="menu-container" className={show ? "show" : ""}>
                <div className="cursor-pointer" onClick={() => func({ type: "MAIN" })}>
                    <GrClose size={28} />
                </div>
                <div>
                    <ul>
                        <li><Link to="/products" onClick={() => func({ type: "MAIN" })}>Shop All</Link></li>
                        <li><Link to="/bestsellers" onClick={() => func({ type: "MAIN" })}>Bestsellers</Link></li>
                        <li><Link to="/gift-cards" onClick={() => func({ type: "MAIN" })}>Gift Cards</Link></li>
                        <li><Link to="/about-page" onClick={() => func({ type: "MAIN" })}>About MinnieMadeNY</Link></li>
                        <li><Link to="/tutorials" onClick={() => func({ type: "MAIN" })}>Tutorials</Link></li >
                    </ul >
                </div >
            </div >
        </>
    )
}

export default MainMenu