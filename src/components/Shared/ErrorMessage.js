import { useState, useReduceer, useEffect } from 'react'
import './style.css'

const ErrorMessage = ({ error }) => {

    const [err, setErr] = useState("");

    useEffect(() => {
        if (error.message.contains("auth/user-not-found")) {
            setErr("No user is found")
        } else {
            setErr("there is an error")
        }

    }, [error])


    return (
        <p className="error">{err}</p>
    )
}

export default ErrorMessage