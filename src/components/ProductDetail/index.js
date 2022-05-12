
import './style.css'

const ProductDetail = (props) => {
    return (
        <div>
            <Header />
            <div className="contents">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail