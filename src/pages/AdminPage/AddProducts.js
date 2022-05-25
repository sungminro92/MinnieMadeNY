import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FullButton from '../../components/Shared/FullButton'
import { db, storage } from '../../fireConfig'

import { addDoc, setDoc, doc, collection } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

import ErrorMessage from '../../components/Shared/ErrorMessage'
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



const AddProducts = () => {
    const [productData, setProductData] = useState({
        title: "",
        description: "",
        img: null,
        section: "flowers",
        options: [{
            stemLength: null,
            price: null,
        }],
    })
    const [error, setError] = useState("");

    const { title, description, img, section, options } = productData

    const [imgUpload, setImgUpload] = useState(null)

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const onClick = () => {
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

    const handleSubmit = async (event) => {
        if (imgUpload == null || !title || !description || !options) {
            setError("Please fill out all fields")
            return;
        }

        const imgRef = ref(storage, `${section}/${imgUpload.name} `)
        const snap = await uploadBytes(imgRef, imgUpload);
        // url to save to the DOC field
        const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
        // snap.ref.fullPath --> to save to DOC field

        const newProduct = doc(collection(db, section));
        const docRef = await setDoc(newProduct, {
            title,
            section,
            description,
            options,
            img: url,
            imgPath: snap.ref.fullPath,
        })

        // console.log("Document written with ID: ", docRef.id);
        console.log("product Document written with ID:", docRef.id)


        setProductData({
            title: "",
            description: "",
            img: null,
            section: "flowers",
            options: [{
                stemLength: "",
                price: "",
            }],
        })
        setError("")
    }

    const displayOptionInputs = productData.options.map((option, i) => {

        return (
            <div>
                <p>Option {i + 1}</p>
                <TextField fullWidth onChange={handleOptionChange(i)} value={option.stemLength} name="stemLength" label="Stem Length" variant="standard" />
                <TextField fullWidth onChange={handleOptionChange(i)} value={option.price} name="price" label="Product Price" variant="standard" />
                <button onClick={deleteOption}>Delete</button>
            </div>
        )
    })
    console.log("product data", productData)

    return (
        <div className="addProduct-container" >
            <h1>Add Products</h1>
            <div>
                <InputLabel variant="left">Produt Title</InputLabel>
                <TextField fullWidth onChange={handleChange} value={title} name="title" variant="standard" /></div>
            <div>
                <InputLabel id="demo-multiple-checkbox-label">Product Description</InputLabel>
                <TextField fullWidth onChange={handleChange} value={description} name="description" variant="standard" /></div>
            <div>
                <InputLabel id="demo-multiple-checkbox-label">Shop Section</InputLabel>
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
            <div>{displayOptionInputs}</div>


            <input className="img-input" type="file" onChange={(event) => setImgUpload(event.target.files[0])} />

            <ErrorMessage err={error} />
            <FullButton onClick={handleSubmit} value={"ADD PRODUCT"} />
        </div >
    )
}

export default AddProducts