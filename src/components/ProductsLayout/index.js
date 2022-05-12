import Footer from '../Footer'
import Header from '../MainMenu'
import './style.css'

const productsLayout = (props) => {
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

export default productsLayout