import Footer from '../Footer'
import Header from '../MainMenu'
import ProductCard from '../ProductCard'
import './style.css'


const ProductLayout = ({ products }) => {

    const displayProducts = products.map((product, index) => {
        return <ProductCard product={product} key={index} />
    })

    // useEffect(() => {
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }, [cartItems])

    return (
        <div>
            <Header />
            <div className="products-container">
                {displayProducts}
            </div>
        </div>
    )
}

export default ProductLayout