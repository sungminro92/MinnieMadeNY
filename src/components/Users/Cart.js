
import { useSelector } from 'react-redux'
const Cart = () => {

    const { cartItems } = useSelector(state => state.cartReducer)
    return (
        <div>Cart Content {cartItems.length} </div>
    )
}

export default Cart