import Footer from '../Footer'
import Header from '../MainMenu'
import './style.css'

const ProductLayout = ({ flower }) => {
    return (
        <div>
            <Header />
            <div className="contents">
                {flower.title}
                {flower.description}
                {flower.price}
            </div>
        </div>
    )
}

export default ProductLayout