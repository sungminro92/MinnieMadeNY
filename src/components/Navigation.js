import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/wire-flowers">Flowers</Link>
            </div>
            <div>
                <Link to="/wire-wall-decors">Wall Decors</Link>
            </div>
            <div>
                <Link to="/wire-arts-accessories">Arts & Accessories</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Navigation