import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import FullButton from '../../components/Shared/FullButton'
const sections = [
    {
        value: 'FLOWERS',
        label: 'Individual Stems',
    },
    {
        value: 'BOUQUET',
        label: 'Premade Bouquets',
    },
    {
        value: 'ARTS',
        label: 'Wire Arts',
    },
    {
        value: 'WALLDECORS',
        label: 'Wall Decors',
    },
];

const AddProducts = () => {
    const [section, setSection] = useState("FLOWERS")

    const handleChangeSection = (e) => {
        setSection(e.target.value);
    };

    const onClick = () => {
        console.log("Add product")
    }


    return (
        <div className="addProduct-container" >
            <TextField fullWidth label="Product Title" variant="standard" />
            <TextField fullWidth label="Product Description" variant="standard" />
            <TextField
                fullWidth
                id="select-section"
                select
                label="Select"
                value={section}
                onChange={handleChangeSection}
            >
                {sections.map((section) => (
                    <MenuItem key={section.value} value={section.value}>
                        {section.label}
                    </MenuItem>
                ))}
            </TextField>
            <FullButton onClick={onClick} value={"ADD PRODUCT"} />
        </div>
    )
}

export default AddProducts