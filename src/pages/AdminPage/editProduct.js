import { useState, useEffect } from 'react'
import { updateDoc, setDoc, doc, collection } from 'firebase/firestore'

const editProduct = ({ product }) => {
    const [productData, setProductData] = useState({
        title: product.title,
        description: product.description,
        img: product.img,
        section: product.section,
        options: product.options
    })

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    return (
        <div className="product-edit-container">
            <h1>Edit Product: {product.title} </h1>
            <div>
                <InputLabel variant="standard">Produt Title</InputLabel>
                <TextField fullWidth onChange={handleChange} value={title} name="title" variant="standard" /></div>
            <div>
                <InputLabel >Product Description</InputLabel>
                {/* <TextField multiline maxRows={6} fullWidth onChange={handleChange} value={description} name="description" variant="standard" /></div> */}
                <TextField
                    label="Description"
                    multiline
                    fullWidth
                    maxRows={10}
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <InputLabel variant="standard">Shop Section</InputLabel>
                <TextField
                    fullWidth
                    id="select-section"
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
                <button onClick={() => onClick()}>Add an option</button>
            </div>
            <div>{productData.options.map((option, i) => {
                return (
                    <div>
                        <p>Option {i + 1}</p>
                        <TextField fullWidth onChange={handleOptionChange(i)} value={option.stemLength} name="stemLength" label="Stem Length" variant="standard" />
                        <TextField fullWidth onChange={handleOptionChange(i)} value={option.price} name="price" label="Product Price" variant="standard" />
                        <button onClick={deleteOption}>Delete</button>
                    </div>
                )
            })}</div>


            <input className="img-input" type="file" onChange={(event) => setImgUpload(event.target.files[0])} />
            <ErrorMessage err={error} />
            <FullButton onClick={handleSubmit} value={"ADD PRODUCT"} />
        </div>
    )
}

export default editProduct