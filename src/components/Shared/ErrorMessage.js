import { useState, useReduceer, useEffect } from 'react'
import './style.css'

const ErrorMessage = (props) => {

    const [error, setError] = useState("");

    useEffect(() => {
        if (props.code.contains("auth/user-not-found")) {
            setError("No user is found")
        } else {
            setError("there is an error")
        }

    }, [props.code])


    return (
        <p className="error">{error}</p>
    )
}

export default ErrorMessage