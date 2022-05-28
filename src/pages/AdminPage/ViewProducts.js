import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { db } from '../../fireConfig'
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect } from 'react'
import { TextField } from '@mui/material'
import { MenuItem } from '@mui/material'

import EditProduct from './EditProduct'

const ViewProducts = () => {
    const [products, setProducts] = useState([])
    const [section, setSection] = useState("flowers")
    const [editPage, setEditPage] = useState(false);
    const [productToEdit, setProductToEdit] = useState({})
    const [imgUpload, setImgUpload] = useState(null)
    // const { cartItems } = useSelector(state => state.cartReducer)
    const sections = [
        {
            value: 'flowers',
            label: 'Individual Stems',
        },
        {
            value: 'bouquets',
            label: 'Premade Bouquets',
        },
        {
            value: 'arts',
            label: 'Wire Arts',
        },
        {
            value: 'wall-decors',
            label: 'Wall Decors',
        },
    ];

    const handleChange = (e) => {
        setSection(e.target.value);
    }

    const handleClickEdit = (product) => {
        setEditPage(!editPage);
        setProductToEdit(product);
    }

    const handleClickDelete = () => {

    }

    const handleClickEditClose = () => {
        setEditPage(!editPage)
    }

    const getProducts = () => {
        const unsub = onSnapshot(collection(db, section), (productData) => {
            // console.log(flowers);
            let products = [];
            // flowers.data();
            if (productData) {
                productData.forEach((product) => {
                    // console.log("flower data", flower.data())
                    products.push(product.data());
                })
            } else {
                return
            }
            setProducts(products)
        })
        return unsub;
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getProducts()
    }, [section])

    const displayProducts = products.map((product, index) => {
        return <div> {index + 1}. {product.title} - {product.description} - {product.options.map(p => `${p.stemLength}/$${p.price}  `)} <span onClick={() => handleClickEdit(product)} className="action-button admin-edit-product">[EDIT]</span> <span className="action-button admin-delete-product">[DELETE]</span></div>
    })

    return (

        <div className="max-width admin-products-page">

            <div>
                <TextField
                    fullWidth
                    size="small"
                    className="select-section"
                    select
                    name="section"
                    value={section}
                    onChange={handleChange}
                >
                    {sections.map((section) => (
                        <MenuItem key={section.value} value={section.value}>
                            {section.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                {displayProducts}
            </div>

            {editPage ? <EditProduct product={productToEdit} handleClickEditClose={handleClickEditClose} /> : null}

        </div>
    )
}

export default ViewProducts;