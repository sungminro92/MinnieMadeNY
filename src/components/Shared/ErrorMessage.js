import { useState, useReduceer, useEffect } from 'react'
import './style.css'

const ErrorMessage = ({ err }) => {

    const [error, setError] = useState("");
    // console.log(err);
    useEffect(() => {
        if (err.includes("auth/user-not-found")) {
            setError("No user is found")
            // disappearError();
        } else if (err.includes("auth/wrong-password")) {
            setError("Incorrect Password")
            // disappearError();
        } else {
            setError(err);
            // disappearError();
        }
    }, [err])

    // const disappearError = () => {
    //     setTimeout(() => {
    //         setError("")
    //     }, 2000)
    // }

    return (
        <p className="error">{error}</p>
    )
}

export default ErrorMessage