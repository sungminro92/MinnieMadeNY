
// import { useSelector } from 'react-redux'
const CartItem = ({ product }) => {

    // const { cartItems } = useSelector(state => state.cartReducer)

    return (
        <div className="cart-item-container">
            <h5>{product.title}</h5>
            <div><img src={product.img} alt="" /></div>

        </div>
    )
}

export default CartItem