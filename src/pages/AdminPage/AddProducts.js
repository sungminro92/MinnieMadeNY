import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
import FullButton from '../../components/Shared/FullButton'
import { db, storage } from '../../fireConfig'

import { addDoc, updateDoc, doc, collection } from 'firebase/firestore'
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
        section: sections[0].value,
        options: [{
            stemLength: undefined,
            price: undefined,
        }],
    })
    const [error, setError] = useState("");

    const { title, description, img, section, options, imgPath } = productData

    const [imgUpload, setImgUpload] = useState(null)

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
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
            setTimeout(() => {
                setError("")
            }, 2000)
            return;
        }

        const imgRef = ref(storage, `${section}/${imgUpload.name} `)
        const snap = await uploadBytes(imgRef, imgUpload);
        // url to save to the DOC field
        const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
        // snap.ref.fullPath --> to save to DOC field

        const newProductRef = collection(db, section);
        const docRef = await addDoc(newProductRef, {
            title,
            section,
            description,
            img: url,
            options,
            imgPath: snap.ref.fullPath
        });
        await updateDoc(doc(db, section, docRef.id), {
            id: docRef.id,
        })

        setError("Product uploaded successfully!", docRef.id)

        setProductData({
            title: "",
            description: "",
            img: null,
            section: "flowers",
            options: [{
                stemLength: "",
                price: "",
            }],
            imgPath: "",
        })
    }

    const displayOptionInputs =
        console.log("product data", productData)

    return (
        <div className="addProduct-container">
            <h1>Add Products</h1>
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
                <button onClick={() => addOptionField()}>Add an option</button>
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
        </div >
    )
}

export default AddProducts