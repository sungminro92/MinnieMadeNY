import { useState, useEffect } from 'react'
import { updateDoc, setDoc, doc, collection } from 'firebase/firestore'
import FullButton from '../../components/Shared/FullButton'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { GrClose } from 'react-icons/gr'
import { db, storage } from '../../fireConfig'

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

const EditProduct = ({ product, handleClickEditClose }) => {
    const [productData, setProductData] = useState({
        title: "",
        description: "",
        img: "",
        section: "",
        options: [],
        imgPath: "",
    })
    const { title, description, img, section, options, imgPath } = productData
    const [imgUpload, setImgUpload] = useState(null)

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }
    const handleOptionChange = index => e => {
        // console.log("index:", index)
        // console.log("property name:" + e.target.value)
        let newArr = [...productData.options]
        newArr[index] = {
            ...newArr[index],
            [e.target.name]: e.target.value
        }
        setProductData({ ...productData, options: newArr })
    }

    useEffect(() => {
        setProductData({
            title: product.title,
            description: product.description,
            img: product.img,
            section: product.section,
            options: product.options,
            imgPath: product.imgPath
        })
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({ width: width, height: height });
    };

    const addOptionField = () => {
        // setNumOfOptions(numOfOptions + 1)
        let newArr = productData.options;
        newArr.push({
            stemLength: null,
            price: null,
        })
        setProductData({ ...productData, options: newArr })
    }

    const deleteOption = (i) => {
        let newArr = productData.options;
        newArr.splice(i, 1);
        setProductData({ ...productData, options: newArr })
    }

    const handleSubmit = async (event) => {
        await updateDoc(doc(db, section, product.id), {
            title,
            description,
            section,
            options,
            img,
        })
        console.log("Product updated!")
    }

    return (
        <div style={{ height: windowSize.height, width: windowSize.width, position: 'absolute', top: 0 }}
        // className="product-edit-page"
        >
            <div className="product-edit-container">
                <div style={{ backgroundColor: "yellow", width: '600px', height: '800px' }}>
                    <div> <h1>Edit Product: {product.title} </h1></div>

                    <span className="action-button edit-page-close-button" onClick={() => handleClickEditClose()}><GrClose size={28} /></span>


                    <div>
                        <InputLabel variant="standard">Produt Title</InputLabel>
                        <TextField fullWidth onChange={handleChange} value={title} name="title" variant="standard" />
                    </div>
                    <div>
                        <InputLabel >Product Description</InputLabel>
                        <TextField multiline maxRows={6} fullWidth onChange={handleChange} value={description} name="description" variant="standard" />
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
                    <button onClick={addOptionField}>Add an option</button>
                    {productData.options.map((option, i) => {
                        return (
                            <div>
                                <p>Option {i + 1}</p>
                                <TextField fullWidth onChange={handleOptionChange(i)} value={option.stemLength} name="stemLength" label="Stem Length" variant="standard" />
                                <TextField fullWidth onChange={handleOptionChange(i)} value={option.price} name="price" label="Product Price" variant="standard" />
                                <button onClick={deleteOption}>Delete</button>
                            </div>
                        )
                    })}
                    <input className="img-input" type="file" onChange={(event) => setImgUpload(event.target.files[0])} />
                    <FullButton onClick={handleSubmit} value={"ADD PRODUCT"} />
                </div>
            </div>


            {/* <div>
                */}
            {/* </div> */}
            {/* <div> */}
            {/* <button onClick={}>Add an option</button> */}
            {/* </div> */}
            {/* <div>{productData.options.map((option, i) => {
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
            <FullButton onClick={handleSubmit} value={"ADD PRODUCT"} /> */}
        </div>

    )
}

export default EditProduct