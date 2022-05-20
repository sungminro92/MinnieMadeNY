import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Button from '@mui/material/Button'
import './style.css'

const ProductCard = ({ product }) => {
    const [priceOption, setPriceOption] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [selected, setSelected] = useState({
        title: product.title,
        description: product.description,
        stemLength: "",
        price: ""
    })

    const dispatch = useDispatch()

    const addToCart = () => {
        // console.log("item is being added", product)
        if (!selected.stemLength) {
            console.log("length needs to be selected")
        } else {
            dispatch({ type: "ADD_TO_CART", payload: { ...selected, price: product.price[priceOption] } })
        }

    }

    const optionSelected = (index) => {
        setSelectedOption(index)
        setPriceOption(index)
        setSelected({
            ...selected,
            stemLength: product.stemLength[index],
        })
    }

    const displayOptions = product.stemLength.map((stemLength, index) => {
        return <div id={index} className={selectedOption === index ? "product-option selected-product-option" : "product-option"} onClick={() => { optionSelected(index) }}>{stemLength}"</div>
    })

    console.log("selected id is", selectedOption)
    return (
        <div className="product-card-container">
            <div className="product-image">
                <img width="100%" src={product.img} alt={product.title} />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-options">{displayOptions}</div>
            <Button fullWidth onClick={addToCart} variant="outlined">
                <div className="product-add-btn" >
                    <div>ADD TO CART</div>
                    <div>${product.price[priceOption]}</div>
                </div>
            </Button>
            {/* <button onClick={() => addToCart(product)}>ADD TO CART</button> */}
        </div>
    )
}

export default ProductCard