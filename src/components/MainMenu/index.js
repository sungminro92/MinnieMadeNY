import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './style.css'

const MainMenu = ({ handleShowMenu, show }) => {
    return (
        <div id={show ? "main-menu" : ""} onClick={() => handleShowMenu()}>
            <div id="menu-container" className={show ? "show" : ""}>
                <div className="cursor-pointer" onClick={() => handleShowMenu()}>
                    <GrClose size={30} />
                </div>
                <div>
                    <ul>
                        <li><Link to="/products">Shop All</Link></li>
                        <li><Link to="/bestsellers">Bestsellers</Link></li>
                        <li><Link to="/gift-cards">Gift Cards</Link></li>
                        <li><Link to="/about-page">About MinnieMadeNY</Link></li>
                        <li><Link to="/tutlrials">Tutorials</Link></li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default MainMenu