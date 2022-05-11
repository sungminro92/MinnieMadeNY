import Footer from './Footer'
import Header from './Header'
const Layout = (props) => {
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

export default Layout