import { db } from '../../fireConfig'
import { collection, onSnapshot } from "firebase/firestore"

const Adminproduct = ({ product }) => {
    // const [products, setProducts] = useState([])
    // const getProducts = () => {
    //     const unsub = onSnapshot(collection(db, section), (productData) => {
    //         // console.log(flowers);
    //         let products = [];
    //         // flowers.data();
    //         if (productData) {
    //             productData.forEach((product) => {
    //                 // console.log("flower data", flower.data())
    //                 products.push(product.data());
    //             })
    //         } else {
    //             return
    //         }
    //         setProducts(products)
    //     })
    //     return unsub;
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])

    return (
        <div className="admin-product-container">
            <div>
                <img src={product.img} alt="" />
            </div>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div className="admin-product-options">options</div>
            <div>price</div>
            <div>
                <p>EDIT</p>
                <p>DELETE</p>
            </div>
        </div>
    )
}

export default Adminproduct