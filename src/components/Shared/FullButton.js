import Button from '@mui/material/Button'

const FullButton = (props) => {
    return <Button onClick={props.onClick} sx={{ m: 0.5 }} variant="contained" fullWidth> {props.value} </Button>
}

export default FullButton