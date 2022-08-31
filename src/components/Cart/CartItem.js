
// import { useSelector } from 'react-redux'
import AiOutlineMinusCircle from 'react-icons/ai'
import AiOutlinePlusCircle from 'react-icons/ai'

const CartItem = ({ product, key, index, deleteCartItem }) => {

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img width="100%" src={product.img} alt="" />
            </div>
            <div>
                <p>{product.title}</p>
                <p>stem length: {product.stemLength}</p>
                <p>quantity: {product.quantity}</p>
                <p>price: {product.price}</p>
            </div>
            <p onClick={() => deleteCartItem(product)}> delete </p>
        </div>
    )
}

export default CartItem