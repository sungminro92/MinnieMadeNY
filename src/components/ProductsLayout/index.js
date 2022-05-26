import Footer from '../Footer'
import Header from '../MainMenu'
import ProductCard from '../ProductCard'
import './style.css'


const ProductLayout = ({ products }) => {

    const displayProducts = products.map((product, index) => {
        return <ProductCard key={index} product={product} />
    })

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