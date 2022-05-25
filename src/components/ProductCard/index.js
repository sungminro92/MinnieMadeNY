import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import './style.css'

const ProductCard = ({ product }) => {
    // const [priceOption, setPriceOption] = useState(0);
    const [selectedOption, setSelectedOption] = useState(3);
    const [selected, setSelected] = useState({
        title: product.title,
        description: product.description,
        stemLength: "",
        price: "",
        error: "",
    })

    const { title, description, stemLength, price, error } = selected;
    const dispatch = useDispatch()

    // To store data
    // localStorage.setItem('Name', 'Rahul');
    // To retrieve data
    // localStorage.getItem('Name');
    // To clear a specific item
    // localStorage.removeItem('Name');
    // To clear the whole data stored in localStorage
    // localStorage.clear();


    const addToCart = () => {
        // console.log("item is being added", product)
        // if (!selected.stemLength) {
        //     console.log("length needs to be selected")
        //     setSelected({ ...selected, error: "Please select stem length" })
        //     disappearError()
        // } else {
        //     dispatch({ type: "ADD_TO_CART", payload: { ...selected, price: product.price[priceOption] } })
        //     setSelected({ ...selected, error: "Item is added in your cart!" })
        //     disappearError();
        // }
    }

    const disappearError = () => {
        setTimeout(() => {
            setSelected({ ...selected, error: "" })
        }, 2000)
    }

    const optionSelected = (index) => {
        // setSelectedOption(index)
        // setPriceOption(index)
        setSelected({
            ...selected,
            stemLength: product.stemLength[index],
        })
    }

    // const displayOptions = product.stemLength.map((stemLength, index) => {
    //     return <div key={index} id={index} className={selectedOption === index ? "product-option selected-product-option" : "product-option"} onClick={() => { optionSelected(index) }}>{stemLength}"</div>
    // })

    console.log("selected id is", selectedOption)
    return (
        <div className="product-card-container">
            <div className="product-image">
                <img width="100%" src={product.img} alt={product.title} />
            </div>
            <div className="product-title">{product.title}</div>
            {/* <div className="product-options">{displayOptions}</div> */}
            <Button fullWidth onClick={addToCart} variant="outlined" style={{ color: 'black', borderColor: 'black' }}>
                <div className="product-add-btn" >
                    <div>ADD TO CART</div>
                    {/* <div>${product.price[priceOption]}</div> */}
                </div>
            </Button>
            <p className="error">{error}</p>
            {/* <button onClick={() => addToCart(product)}>ADD TO CART</button> */}
        </div>
    )
}

export default ProductCard