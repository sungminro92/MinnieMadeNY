import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import './style.css'

const ProductCard = ({ product }) => {
    const [priceOption, setPriceOption] = useState(0);
    const [selectedOption, setSelectedOption] = useState(3);
    const [selected, setSelected] = useState({
        stemLength: "",
        price: "",
    })
    const [error, setError] = useState("")

    const { title, description, stemLength, price } = selected;
    const dispatch = useDispatch()

    console.log("product card value:", selected)
    // To store data
    // localStorage.setItem('Name', 'Rahul');
    // To retrieve data
    // localStorage.getItem('Name');
    // To clear a specific item
    // localStorage.removeItem('Name');
    // To clear the whole data stored in localStorage
    // localStorage.clear();


    const addToCart = () => {
        console.log("item is being added", product)
        if (!selected.stemLength) {
            console.log("length needs to be selected")
            setError("Please select stem length")
            disappearError()
        } else {
            dispatch({ type: "ADD_TO_CART", value: { ...selected, title: product.title, description: product.description, img: product.img, quantity: 1, price: product.options[priceOption].price } })
            setError("Item is added in your cart!")
            disappearError();
        }
    }

    const disappearError = () => {
        setTimeout(() => {
            setError("")
        }, 2000)
    }

    const optionSelected = (index) => {
        setSelectedOption(index)
        setPriceOption(index)
        setSelected({
            ...selected,
            stemLength: product.options[index].stemLength,
        })
    }

    console.log("selected id is", selectedOption)
    return (
        <div className="product-card-container">
            <div className="product-image">
                <img width="100%" src={product.img} alt={product.title} />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-options">
                {product.options.map((option, index) => {
                    return (
                        <>
                            <div key={index} id={index} className={selectedOption === index ? "product-option selected-product-option" : "product-option"} onClick={() => { optionSelected(index) }}>{option.stemLength}"</div>
                        </>
                    )
                })}
            </div>
            <Button fullWidth onClick={addToCart} variant="outlined" style={{ color: 'black', borderColor: 'black' }}>
                <div className="product-add-btn" >
                    <div>ADD TO CART</div>
                    <div>${product.options[priceOption].price}</div>
                </div>
            </Button>
            <p className="error">{error}</p>
            {/* <button onClick={() => addToCart(product)}>ADD TO CART</button> */}
        </div>
    )
}

export default ProductCard